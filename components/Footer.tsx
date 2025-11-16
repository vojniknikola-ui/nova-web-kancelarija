import Link from 'next/link';
import { Locale } from '../i18n-config';
import type { AwaitedReturn } from '../types/utils';

type FooterProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
  locale: Locale;
};

const quickLinks = (locale: Locale) => [
  { label: 'Home', href: `/${locale}` },
  { label: 'About', href: `/${locale}/about` },
  { label: 'LawViewer', href: `/${locale}/lawviewer` },
  { label: 'News', href: `/${locale}/news` },
  { label: 'Contact', href: `/${locale}/contact` },
];

export default function Footer({ dictionary, locale }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-2xl font-serif text-white">Andrić Law</p>
          <p className="mt-3 text-sm text-slate-400">
            {dictionary.about.mission}
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Quick links</p>
          <ul className="space-y-2 text-sm">
            {quickLinks(locale).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Kontakt</p>
          <p>Ulica Maršala Tita 12, 71000 Sarajevo</p>
          <p>Telefon: <a href="tel:+38761111222" className="text-secondary">+387 61 111 222</a></p>
          <p>Email: <a href="mailto:kontakt@andriclaw.com" className="text-secondary">kontakt@andriclaw.com</a></p>
          <div className="mt-4 flex gap-4 text-lg">
            <a href="https://www.linkedin.com" className="hover:text-secondary" aria-label="LinkedIn">
              in
            </a>
            <a href="https://www.facebook.com" className="hover:text-secondary" aria-label="Facebook">
              f
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Andrić Law. Sva prava zadržana.
      </div>
    </footer>
  );
}
