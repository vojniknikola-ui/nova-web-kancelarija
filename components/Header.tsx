'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { locales, type Locale } from '../i18n-config';
import type { AwaitedReturn } from '../types/utils';

type HeaderProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
  locale: Locale;
};

export default function Header({ dictionary, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/${locale}` as any} className="text-2xl font-serif text-primary-500">
            Andrić Law
          </Link>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href as any}
                className={`text-sm font-semibold uppercase tracking-wide transition hover:text-secondary-500 ${
                  pathname === item.href ? 'text-secondary-500' : 'text-slate-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+38761111222"
              className="btn-primary text-sm"
            >
              {dictionary.hero.cta}
            </a>
            <div className="flex items-center gap-2 text-xs">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={`rounded border px-3 py-1 font-medium transition ${
                    loc === locale
                      ? 'border-primary-500 text-primary-500 bg-primary-50'
                      : 'border-slate-300 text-slate-600 hover:border-slate-400'
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block h-0.5 w-6 bg-primary-500 mb-1 transition-transform" />
              <span className="block h-0.5 w-6 bg-primary-500 mb-1" />
              <span className="block h-0.5 w-6 bg-primary-500" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <Link
              href={`/${locale}` as any}
              className="text-xl font-serif text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Andrić Law
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href as any}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="mt-8">
              <p className="text-sm font-medium text-slate-600 mb-3">Language</p>
              <div className="flex gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      handleLocaleChange(loc);
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
                      loc === locale
                        ? 'bg-primary-500 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Contact CTA */}
          <div className="p-4 border-t border-slate-200">
            <a
              href="tel:+38761111222"
              className="w-full btn-primary text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.hero.cta}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
