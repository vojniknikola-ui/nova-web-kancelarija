import { Locale } from '../i18n-config';
import type { AwaitedReturn } from '../types/utils';

type PracticeAreasProps = {
  locale: Locale;
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
};

export default function PracticeAreas({ locale, dictionary }: PracticeAreasProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="section-heading">{dictionary.practiceAreas.heading}</div>
      <div className="grid gap-6 md:grid-cols-3">
        {dictionary.practiceAreas.areas.map((area) => (
          <article key={area.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-serif text-primary">{area.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}