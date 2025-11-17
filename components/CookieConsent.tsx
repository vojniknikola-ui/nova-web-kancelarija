'use client';

import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';
import { Locale } from '../i18n-config';
import type { AwaitedReturn } from '../types/utils';

type CookieConsentProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
  locale: Locale;
};

export default function CookieConsentBanner({ dictionary, locale }: CookieConsentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText={locale === 'bs' ? 'Prihvati' : 'Accept'}
      declineButtonText={locale === 'bs' ? 'Odbij' : 'Decline'}
      cookieName="andric-law-cookie-consent"
      style={{ background: '#2B373B', color: '#fff' }}
      buttonStyle={{ background: '#0b3d60', color: '#fff', fontSize: '13px' }}
      declineButtonStyle={{ background: '#6c757d', color: '#fff', fontSize: '13px' }}
      expires={365}
      enableDeclineButton
    >
      {locale === 'bs'
        ? 'Koristimo kolačiće za poboljšanje vašeg iskustva. '
        : 'We use cookies to improve your experience. '}
      <Link href={`/${locale}/privacy`} className="text-blue-300 underline">
        {locale === 'bs' ? 'Saznajte više' : 'Learn more'}
      </Link>
    </CookieConsent>
  );
}