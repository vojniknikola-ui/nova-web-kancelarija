import { Metadata } from 'next';
import { Locale } from '../../../i18n-config';
import { laws } from '../../../lib/laws';
import dynamic from 'next/dynamic';

const LawSearch = dynamic(() => import('../../../components/LawSearch'), { ssr: false });

export const metadata: Metadata = {
  title: 'LawViewer | Andrić Law',
  description: 'Interaktivni pregled domaćih zakona i akata uz opciju preuzimanja PDF dokumenata.',
};

export default function LawViewerPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-heading">LawViewer</h1>
      <p className="text-slate-600">
        {params.locale === 'bs'
          ? 'Pregledajte aktuelne propise, brzo filtrirajte sadržaj i preuzmite PDF verziju sa vizuelnim identitetom kancelarije.'
          : 'Browse curated acts, filter content, and download branded PDFs for your reference.'}
      </p>
      <div className="mt-10">
        <LawSearch locale={params.locale} laws={laws} />
      </div>
    </div>
  );
}
