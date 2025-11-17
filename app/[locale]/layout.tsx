import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileCallButton from '../../components/MobileCallButton';
import CookieConsentBanner from '../../components/CookieConsent';
import { getDictionary } from '../../lib/dictionary';
import { locales, type Locale } from '../../i18n-config';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  if (!locales.includes(params.locale)) {
    notFound();
  }
  const dictionary = await getDictionary(params.locale);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Andrić Law',
    image: 'https://andriclaw.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ulica Maršala Tita 12',
      addressLocality: 'Sarajevo',
      postalCode: '71000',
      addressCountry: 'BA',
    },
    telephone: '+38761111222',
    url: 'https://andriclaw.com',
    priceRange: '$$'
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header dictionary={dictionary} locale={params.locale} />
      <main className="flex-1 bg-slate-50">{children}</main>
      <Footer dictionary={dictionary} locale={params.locale} />
      <MobileCallButton />
      <CookieConsentBanner dictionary={dictionary} locale={params.locale} />
    </div>
  );
}
