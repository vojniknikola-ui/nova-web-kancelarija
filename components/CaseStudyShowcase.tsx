import { ReactNode } from 'react';

interface CaseStudyMetric {
  label: string;
  value: string;
  helper?: string;
}

interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
}

interface CaseStudyShowcaseProps {
  title: string;
  subtitle?: string;
  description?: string;
  caseStudies: CaseStudy[];
  highlight?: ReactNode;
}

export default function CaseStudyShowcase({
  title,
  subtitle,
  description,
  caseStudies,
  highlight,
}: CaseStudyShowcaseProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-primary-900 to-slate-900 py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%)]" />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/10" />
        <div className="absolute -right-24 top-8 h-80 w-80 rounded-full bg-primary-500/25 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
              {subtitle}
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-slate-200">{description}</p>
            )}
          </div>
          {highlight && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-slate-200 shadow-2xl lg:text-right">
              {highlight}
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.4em] text-primary-200">
                <span>{study.industry}</span>
                <span className="text-[10px] text-slate-400">Case study</span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-white">{study.title}</h3>
              <p className="mt-3 text-slate-200">{study.challenge}</p>

              <div className="mt-6 grid gap-4 rounded-2xl bg-slate-900/60 p-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400">Strategija</p>
                  <p className="mt-1 text-base leading-relaxed text-white">{study.approach}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400">Rezultat</p>
                  <p className="mt-1 text-base leading-relaxed text-white">{study.outcome}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl bg-white/5 p-4 text-center">
                    <p className="text-3xl font-bold text-secondary-100">{metric.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.5em] text-slate-400">{metric.label}</p>
                    {metric.helper && <p className="mt-1 text-sm text-slate-300">{metric.helper}</p>}
                  </div>
                ))}
              </div>

              {study.quote && (
                <figure className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <blockquote className="text-lg italic text-slate-100">“{study.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-primary-100">
                    {study.quoteAuthor}
                    {study.quoteRole && (
                      <span className="block text-xs font-normal uppercase tracking-wide text-slate-400">
                        {study.quoteRole}
                      </span>
                    )}
                  </figcaption>
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
