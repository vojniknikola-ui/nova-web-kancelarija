import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Locale } from '../../../../i18n-config';
import { laws, getLawBySlug } from '../../../../lib/laws';
import PdfDownloadButton from '../../../../components/PdfDownloadButton';

export async function generateStaticParams() {
  return laws.map((law) => law.slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const law = getLawBySlug(params.slug);
  if (!law) return { title: 'Law | Andrić Law' };
  return {
    title: `${law.title} | LawViewer`,
    description: law.summary,
  };
}

export default function LawDetailsPage({ params }: { params: { locale: Locale; slug: string } }) {
  const law = getLawBySlug(params.slug);
  if (!law) notFound();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">{law.category}</p>
          <h1 className="mt-2 text-3xl font-serif text-primary">{law.title}</h1>
          <p className="text-sm text-slate-500">{law.year}</p>
        </div>
        <PdfDownloadButton lawSlug={law.slug} lawTitle={law.title} />
      </div>
      <div className="mt-10 space-y-10 rounded-3xl bg-white p-8 shadow">
        {law.sections.map((section) => (
          <article key={section.heading}>
            <h2 className="text-2xl font-serif text-primary">{section.heading}</h2>
            <p className="mt-3 text-slate-700">{section.content}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        {params.locale === 'bs'
          ? 'Napomena: Tekstovi zakona preuzeti su iz službenih izvora. Za službenu verziju obavezno konsultujte Službeni glasnik.'
          : 'Disclaimer: The summaries provided do not replace the official gazette versions. Always consult the official publication for definitive wording.'}
      </div>
    </div>
  );
}
