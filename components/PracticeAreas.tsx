import { Locale } from '../i18n-config';

const areas = [
  {
    title: 'Poslovno pravo',
    description: 'Osnivanje kompanija, ugovori sa partnerima i usklađivanje sa propisima o zaštiti podataka.',
  },
  {
    title: 'Parnice i sporovi',
    description: 'Priprema strategije, zastupanje u privrednim sporovima i brzo reagovanje na privremene mjere.',
  },
  {
    title: 'Startupi i inovacije',
    description: 'Pravne smjernice za investicione runde, intelektualnu svojinu i internacionalizaciju poslovanja.',
  },
];

type PracticeAreasProps = {
  locale: Locale;
};

export default function PracticeAreas({ locale }: PracticeAreasProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="section-heading">{locale === 'bs' ? 'Ključne oblasti rada' : 'Key practice areas'}</div>
      <div className="grid gap-6 md:grid-cols-3">
        {areas.map((area) => (
          <article key={area.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-serif text-primary">{area.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
