import Image from 'next/image';
import { Metadata } from 'next';
import { Locale } from '../../../i18n-config';

export const metadata: Metadata = {
  title: 'O nama | Andrić Law',
  description: 'Biografija osnivača i vrijednosti kancelarije Andrić Law.',
};

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-[1fr_320px]">
      <div>
        <h1 className="section-heading">{params.locale === 'bs' ? 'O osnivaču' : 'About the founder'}</h1>
        <p className="text-lg text-slate-600">
          Advokat Amar Andrić specijalizovan je za poslovno, privredno i digitalno pravo. Tokom protekle decenije savjetovao je
          tehnološke kompanije, banke i startupe u regionalnim transakcijama.
        </p>
        <p className="mt-6 text-slate-600">
          {params.locale === 'bs'
            ? 'U radu kombinujemo precizna pravna rješenja sa razumijevanjem poslovnih ciljeva. Svaki angažman započinje mapom rizika i predlogom prioriteta.'
            : 'We blend precise legal analysis with business pragmatism. Every engagement starts with a risk map and priority plan.'}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-secondary">Članstva</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Advokatska komora Federacije BiH</li>
              <li>Udruženje za arbitražu u JIE</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-secondary">Vrijednosti</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Transparentna komunikacija</li>
              <li>Digitalna dostupnost</li>
              <li>Diskrecija i lojalnost</li>
            </ul>
          </div>
        </div>
      </div>
      <aside>
        <div className="overflow-hidden rounded-3xl bg-white p-6 shadow">
          <Image
            src="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=600&q=80"
            alt="Osnivač Andrić Law"
            width={600}
            height={800}
            className="rounded-2xl object-cover"
          />
          <div className="mt-4">
            <p className="text-lg font-serif text-primary">Amar Andrić</p>
            <p className="text-sm text-slate-500">Osnivač / Attorney at Law</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
