import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
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
    subject: `Nova poruka sa web stranice od ${name}`,
    replyTo: email,
    text: `Ime: ${name}\nEmail: ${email}\nTelefon: ${phone}\nPoruka: ${message}`,
  });

  return NextResponse.json({ message: 'Poruka je poslana.' });
}
