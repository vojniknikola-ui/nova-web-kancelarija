import type { Metadata } from 'next';
import { getDictionary } from '../../../lib/dictionary';
import { Locale } from '../../../i18n-config';

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);
  return {
    title: dictionary.privacy.title,
    description: dictionary.privacy.introduction,
  };
}

export default async function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(params.locale);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{dictionary.privacy.title}</h1>
      <p className="text-sm text-gray-600 mb-8">
        {dictionary.privacy.lastUpdated.replace('{date}', new Date().toLocaleDateString(params.locale === 'bs' ? 'bs-BA' : 'en-US'))}
      </p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>{dictionary.privacy.introduction}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
          <p>{dictionary.privacy.dataCollection}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
          <p>{dictionary.privacy.dataUsage}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
          <p>{dictionary.privacy.dataSharing}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>{dictionary.privacy.dataRights}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>{dictionary.privacy.cookies}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>{dictionary.privacy.contact}</p>
        </section>
      </div>
    </div>
  );
}