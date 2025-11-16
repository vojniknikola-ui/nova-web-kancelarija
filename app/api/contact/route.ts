import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

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