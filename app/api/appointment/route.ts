import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import getPool from '../../../lib/db';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests per window
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, date, time, service, message, recaptchaToken } = body;

  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  // CAPTCHA verification
  if (!recaptchaToken) {
    return NextResponse.json({ message: 'CAPTCHA verification is required.' }, { status: 400 });
  }
  const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const recaptchaResult = await recaptchaResponse.json();
  if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
    return NextResponse.json({ message: 'CAPTCHA verification failed.' }, { status: 400 });
  }

  // Sanitize inputs
  const sanitizedName = name?.toString().trim().replace(/[<>\"'&]/g, '');
  const sanitizedEmail = email?.toString().trim().toLowerCase();
  const sanitizedPhone = phone?.toString().trim().replace(/[^+\d\s-()]/g, '');
  const sanitizedDate = date?.toString().trim();
  const sanitizedTime = time?.toString().trim();
  const sanitizedService = service?.toString().trim().replace(/[<>\"'&]/g, '');
  const sanitizedMessage = message?.toString().trim().replace(/[<>\"'&]/g, '');

  if (!sanitizedName || !sanitizedEmail || !sanitizedDate || !sanitizedTime || !sanitizedService) {
    return NextResponse.json({ message: 'Nedostaju obavezna polja.' }, { status: 400 });
  }

  // Validate date is not in the past
  const appointmentDate = new Date(`${sanitizedDate}T${sanitizedTime}`);
  if (appointmentDate < new Date()) {
    return NextResponse.json({ message: 'Datum termina ne može biti u prošlosti.' }, { status: 400 });
  }

  try {
    // Save to database
    const pool = getPool();
    const client = await pool.connect();
    try {
      await client.query(
        'INSERT INTO appointments (name, email, phone, date, time, service, message) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [sanitizedName, sanitizedEmail, sanitizedPhone, sanitizedDate, sanitizedTime, sanitizedService, sanitizedMessage]
      );
    } finally {
      client.release();
    }
  } catch (dbError) {
    console.error('Database error:', dbError);
    // Continue with email even if DB fails
  }

  // Send email
  if (process.env.SMTP_HOST) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Andrić Law Website <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? process.env.SMTP_USER,
      subject: `Novi termin zakazan od ${sanitizedName}`,
      replyTo: sanitizedEmail,
      text: `Ime: ${sanitizedName}\nEmail: ${sanitizedEmail}\nTelefon: ${sanitizedPhone}\nDatum: ${sanitizedDate}\nVrijeme: ${sanitizedTime}\nUsluga: ${sanitizedService}\nPoruka: ${sanitizedMessage}`,
    });
  } else {
    console.warn('SMTP credentials are missing. Logging appointment instead.');
    console.info(body);
  }

  return NextResponse.json({ message: 'Termin je uspješno zakazan.' });
}