'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Law } from '../lib/laws';
import { Locale } from '../i18n-config';

type LawSearchProps = {
  laws: Law[];
  locale: Locale;
};

export default function LawSearch({ laws, locale }: LawSearchProps) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () =>
      laws.filter((law) =>
        `${law.title} ${law.summary}`.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [laws, query]
  );

  return (
    <div className="space-y-6">
      <input
        type="search"
        placeholder={locale === 'bs' ? 'Pretražite propise...' : 'Search acts...'}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full rounded-full border border-slate-200 px-5 py-3 text-sm focus:border-primary focus:outline-none"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((law) => (
          <article key={law.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-secondary">{law.category}</p>
            <h3 className="mt-2 text-xl font-serif text-primary">{law.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{law.summary}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
              <span>{law.year}</span>
              <Link href={`/${locale}/lawviewer/${law.slug}`} className="text-secondary">
                {locale === 'bs' ? 'Pregledaj' : 'View'}
              </Link>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-slate-500">
            {locale === 'bs'
              ? 'Nema rezultata za zadatu pretragu.'
              : 'No laws match your query.'}
          </p>
        )}
      </div>
    </div>
  );
}
