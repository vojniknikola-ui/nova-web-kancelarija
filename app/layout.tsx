import './globals.css';
import type { ReactNode } from 'react';
import { Source_Sans_3, Merriweather } from 'next/font/google';
import { Metadata } from 'next';

const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans' });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Andrić Law',
  description: 'Boutique law firm delivering modern legal solutions.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bs">
      <body className={`${sourceSans.variable} ${merriweather.variable} font-sans bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
