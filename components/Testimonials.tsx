import type { AwaitedReturn } from '../types/utils';
import { testimonials } from '../lib/testimonials';

type TestimonialsProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
};

export default function Testimonials({ dictionary }: TestimonialsProps) {
  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">{dictionary.testimonials.heading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {dictionary.testimonials.items.map((item) => (
            <figure key={item.author} className="rounded-2xl bg-white p-8 shadow">
              <blockquote className="text-lg text-slate-700">"{item.quote}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-primary">{item.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}