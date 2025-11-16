import Hero from '../../components/Hero';
import PracticeAreas from '../../components/PracticeAreas';
import Testimonials from '../../components/Testimonials';
import ArticlesPreview from '../../components/ArticlesPreview';
import { getDictionary } from '../../lib/dictionary';
import { Locale } from '../../i18n-config';

export const revalidate = 60;

export default async function HomePage({ params }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(params.locale);
  return (
    <div>
      <Hero dictionary={dictionary} locale={params.locale} />
      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="section-heading">{dictionary.about.heading}</h2>
          <p className="text-lg text-slate-600">{dictionary.about.mission}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li>• Strategija digitalne vidljivosti i lokalni SEO</li>
            <li>• Strukturirane pravne analize prilagođene industriji</li>
            <li>• Jasne ponude i transparentni troškovi</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-secondary">Proces rada</p>
          <ol className="mt-4 space-y-4 text-sm text-slate-600">
            <li>
              <span className="font-semibold text-primary">1. Uvodni razgovor.</span> Procjena ciljeva i hitnosti.
            </li>
            <li>
              <span className="font-semibold text-primary">2. Mapa rješenja.</span> Dostavljamo pisani plan koraka.
            </li>
            <li>
              <span className="font-semibold text-primary">3. Implementacija.</span> Transparentna komunikacija i izvještaji.
            </li>
          </ol>
        </div>
      </section>
      <PracticeAreas locale={params.locale} />
      <ArticlesPreview locale={params.locale} />
      <Testimonials />
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto flex flex-col gap-6 px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">CTA</p>
          <h2 className="text-3xl font-serif">Spremni ste za razgovor o narednom koraku?</h2>
          <p className="text-slate-100">
            Zakazujemo konsultacije u roku od 24 sata i obezbjeđujemo plan koji objedinjuje pravnu sigurnost i poslovnu agilnost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:+38761111222`} className="rounded-full bg-secondary px-6 py-3 font-semibold text-slate-900">
              Pozovite nas
            </a>
            <a href={`mailto:kontakt@andriclaw.com`} className="rounded-full border border-white px-6 py-3 font-semibold text-white">
              Pišite nam
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
