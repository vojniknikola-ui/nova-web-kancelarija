import Link from 'next/link';
import { Locale } from '../i18n-config';
import type { AwaitedReturn } from '../types/utils';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

type FooterProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
  locale: Locale;
};

const quickLinks = (locale: Locale, dictionary: any) => [
  { label: dictionary.navigation.home, href: `/${locale}` },
  { label: dictionary.navigation.about, href: `/${locale}/about` },
  { label: dictionary.navigation.lawviewer, href: `/${locale}/lawviewer` },
  { label: dictionary.navigation.news, href: `/${locale}/news` },
  { label: dictionary.navigation.contact, href: `/${locale}/contact` },
];

const services = [
  'Corporate Law',
  'Intellectual Property',
  'Employment Law',
  'Real Estate Law',
  'Tax Law',
  'Litigation'
];

export default function Footer({ dictionary, locale }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="text-2xl font-serif text-white mb-4 block">
              Andrić Law
            </Link>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              {dictionary.about.mission}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                <span>Ulica Maršala Tita 12, 71000 Sarajevo</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                <a href="tel:+38761111222" className="text-secondary-400 hover:text-secondary-300 transition-colors">
                  +387 61 111 222
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                <a href="mailto:kontakt@andriclaw.com" className="text-secondary-400 hover:text-secondary-300 transition-colors">
                  kontakt@andriclaw.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{dictionary.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks(locale, dictionary).map((link) => (
                <li key={link.href}>
                  <Link href={link.href as any} className="hover:text-secondary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <span className="hover:text-secondary-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com"
              className="text-slate-400 hover:text-secondary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              className="text-slate-400 hover:text-secondary-400 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          <p className="text-sm text-slate-500">
            {dictionary.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}