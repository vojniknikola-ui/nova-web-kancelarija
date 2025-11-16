import Link from 'next/link';
import { Locale } from '../../i18n-config';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-secondary">404</p>
      <h1 className="mt-4 text-4xl font-serif text-primary">Stranica nije pronađena</h1>
      <p className="mt-3 max-w-xl text-slate-600">
        Provjerite URL adresu ili se vratite na početnu stranicu kako biste nastavili sa pregledom sadržaja.
      </p>
      <div className="mt-6 flex gap-4">
        <Link href="/bs" className="rounded-full bg-primary px-6 py-3 font-semibold text-white">
          Početna (BS)
        </Link>
        <Link href="/en" className="rounded-full border border-primary px-6 py-3 font-semibold text-primary">
          Home (EN)
        </Link>
      </div>
    </div>
  );
}
