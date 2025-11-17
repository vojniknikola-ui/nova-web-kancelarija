import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
  const { name, email, phone, message, recaptchaToken } = body;

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
  const sanitizedMessage = message?.toString().trim().replace(/[<>\"'&]/g, '');

  if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
    return NextResponse.json({ message: 'Nedostaju obavezna polja.' }, { status: 400 });
  }

  if (!process.env.SMTP_HOST) {
    console.warn('SMTP credentials are missing. Logging message instead.');
    console.info(body);
    return NextResponse.json({ message: 'Poruka je zaprimljena.' });
  }

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
    subject: `Nova poruka sa web stranice od ${sanitizedName}`,
    replyTo: sanitizedEmail,
    text: `Ime: ${sanitizedName}\nEmail: ${sanitizedEmail}\nTelefon: ${sanitizedPhone}\nPoruka: ${sanitizedMessage}`,
  });

  return NextResponse.json({ message: 'Poruka je poslana.' });
}