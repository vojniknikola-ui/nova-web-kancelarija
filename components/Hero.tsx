import Link from 'next/link';
import { Locale } from '../i18n-config';
import type { AwaitedReturn } from '../types/utils';

type HeroProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
  locale: Locale;
};

export default function Hero({ dictionary, locale }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-slate-900 text-white">
      <div className="container mx-auto grid gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-secondary">Andrić Law</p>
          <h1 className="mt-4 text-4xl font-serif md:text-5xl">{dictionary.hero.title}</h1>
          <p className="mt-6 text-lg text-slate-100">{dictionary.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/contact`}
              className="rounded-full bg-secondary px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-amber-400"
            >
              {dictionary.hero.cta}
            </Link>
            <a
              href="tel:+38761111222"
              className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              +387 61 111 222
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">{dictionary.hero.geoOptimized}</p>
          <p className="mt-3 text-2xl font-serif">{dictionary.hero.geoDescription}</p>
          <p className="mt-4 text-sm text-slate-100">
            {dictionary.hero.geoDetails}
          </p>
        </div>
      </div>
    </section>
  );
}
