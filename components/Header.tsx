'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { locales, type Locale } from '../i18n-config';
import type { AwaitedReturn } from '../types/utils';

type HeaderProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
  locale: Locale;
};

export default function Header({ dictionary, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: dictionary.navigation.home, href: `/${locale}` },
    { label: dictionary.navigation.about, href: `/${locale}/about` },
    { label: dictionary.navigation.lawviewer, href: `/${locale}/lawviewer` },
    { label: dictionary.navigation.news, href: `/${locale}/news` },
    { label: dictionary.navigation.booking, href: `/${locale}/booking` },
    { label: dictionary.navigation.contact, href: `/${locale}/contact` },
    { label: dictionary.navigation.privacy, href: `/${locale}/privacy` },
  ];

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = nextLocale;
    router.push(`/${segments.join('/')}`);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href={`/${locale}` as any} className="text-2xl font-serif text-primary">
          Andrić Law
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className={`text-sm font-semibold uppercase tracking-wide transition hover:text-secondary ${pathname === item.href ? 'text-secondary' : 'text-slate-700'}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+38761111222"
            className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-500"
          >
            +387 61 111 222
          </a>
          <div className="flex items-center gap-2 text-xs">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`rounded border px-2 py-1 ${loc === locale ? 'border-primary text-primary' : 'border-slate-200 text-slate-500'}`}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-primary" />
          <span className="mt-1 block h-0.5 w-6 bg-primary" />
          <span className="mt-1 block h-0.5 w-6 bg-primary" />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="space-y-2 border-t border-slate-100 bg-white px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href as any} className="block py-1 text-slate-700" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-2">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    handleLocaleChange(loc);
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 rounded border px-2 py-1 text-sm ${loc === locale ? 'border-primary text-primary' : 'border-slate-200 text-slate-500'}`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </li>
            <li>
              <a href="tel:+38761111222" className="block rounded bg-secondary px-4 py-2 text-center text-white">
                {dictionary.hero.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
