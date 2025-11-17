import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import CTAButton from './CTAButton';

interface SupportingPoint {
  title: string;
  description?: string;
}

interface StatItem {
  value: string;
  label: string;
  helper?: string;
}

interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

interface ContactCard {
  title: string;
  description: string;
  badge?: string;
  details: ContactDetail[];
  footer?: string;
  whatsappCTA?: {
    number: string;
    label: string;
    message?: string;
  };
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  description: string;
  supportingPoints?: SupportingPoint[];
  stats?: StatItem[];
  trustIndicators?: string[];
  contactCard?: ContactCard;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  background?: ReactNode;
  className?: string;
}

const buildWhatsAppHref = (number?: string, message?: string) => {
  if (!number) return '#';
  const digits = number.replace(/\D/g, '');
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${query}`;
};

export default function HeroSection({
  title,
  subtitle,
  eyebrow,
  description,
  supportingPoints = [],
  stats = [],
  trustIndicators = [],
  contactCard,
  primaryCTA,
  secondaryCTA,
  background,
  className = ''
}: HeroSectionProps) {
  const hasSupportingPoints = supportingPoints.length > 0;
  const hasStats = stats.length > 0;
  const hasTrustIndicators = trustIndicators.length > 0;

  return (
    <section className={`relative isolate overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        {background ?? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-secondary-50" />
            <div className="absolute inset-y-0 left-1/2 h-[140%] w-[55%] -translate-x-1/2 bg-gradient-to-l from-secondary-100/70 via-transparent to-primary-100/80" />
            <div className="absolute -top-10 left-8 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-200/40 blur-3xl" />
          </>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-secondary-400" aria-hidden="true" />
                {eyebrow}
              </div>
            )}

            {subtitle && (
              <p className="mt-4 text-xs uppercase tracking-[0.4em] text-secondary-600">
                {subtitle}
              </p>
            )}

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              {description}
            </p>

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {primaryCTA && (
                  <CTAButton href={primaryCTA.href} variant="primary" size="lg">
                    {primaryCTA.text}
                  </CTAButton>
                )}
                {secondaryCTA && (
                  <CTAButton
                    href={secondaryCTA.href}
                    variant="outline"
                    size="lg"
                    className="border-primary-200/70 text-primary-700 hover:border-primary-300"
                  >
                    {secondaryCTA.text}
                  </CTAButton>
                )}
              </div>
            )}

            {hasSupportingPoints && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {supportingPoints.map((point) => (
                  <div
                    key={point.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{point.title}</p>
                      {point.description && (
                        <p className="text-sm leading-relaxed text-slate-600">{point.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {hasStats && (
              <div className="mt-12 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm">
                    <p className="text-4xl font-bold text-primary-700">{stat.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {stat.label}
                    </p>
                    {stat.helper && <p className="mt-1 text-sm text-slate-500">{stat.helper}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {contactCard && (
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/60 bg-white/95 p-8 shadow-2xl backdrop-blur">
                {contactCard.badge && (
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-600">
                    {contactCard.badge}
                  </span>
                )}
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{contactCard.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{contactCard.description}</p>

                <div className="mt-6 space-y-5">
                  {contactCard.details.map((detail) => (
                    <div key={detail.label} className="rounded-2xl border border-slate-100 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-1 inline-flex text-lg font-semibold text-primary-700 hover:text-primary-800"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg font-semibold text-slate-900">{detail.value}</p>
                      )}
                    </div>
                  ))}
                </div>

                {contactCard.footer && (
                  <p className="mt-6 text-sm text-slate-500">{contactCard.footer}</p>
                )}

                {contactCard.whatsappCTA && (
                  <div className="mt-6">
                    <CTAButton
                      href={buildWhatsAppHref(
                        contactCard.whatsappCTA.number,
                        contactCard.whatsappCTA.message
                      )}
                      variant="whatsapp"
                      size="lg"
                      className="w-full"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                          <path
                            fill="currentColor"
                            d="M16 .5C7.46.5.5 7.46.5 16c0 2.77.73 5.4 2.12 7.75L.53 31.47a.75.75 0 0 0 .95.96l7.63-2.05A15.36 15.36 0 0 0 16 31.5c8.54 0 15.5-6.96 15.5-15.5S24.54.5 16 .5zm0 2c7.47 0 13.5 6.03 13.5 13.5S23.47 29.5 16 29.5a13.3 13.3 0 0 1-6.46-1.68.75.75 0 0 0-.52-.07l-5.73 1.54 1.54-5.74a.75.75 0 0 0-.07-.52A13.3 13.3 0 0 1 2.5 16C2.5 8.53 8.53 2.5 16 2.5zm-5.6 6c-.37 0-.98.14-1.48.7-.5.57-1.9 1.86-1.9 4.54 0 2.68 1.95 5.27 2.23 5.63.27.36 3.63 5.82 8.98 7.93 4.43 1.76 5.35 1.42 6.32 1.34.97-.09 3.13-1.28 3.57-2.52.45-1.24.45-2.3.32-2.52-.14-.22-.5-.36-1.05-.64-.55-.27-3.26-1.61-3.77-1.8-.5-.18-.86-.27-1.23.28-.36.55-1.42 1.8-1.74 2.16-.32.36-.64.41-1.18.14-.55-.27-2.3-.85-4.38-2.69-1.62-1.45-2.72-3.24-3.04-3.79-.32-.55-.03-.84.24-1.11.25-.24.55-.64.82-.96.27-.32.36-.55.55-.91.18-.36.09-.69-.05-.96-.14-.27-1.1-2.63-1.51-3.55-.41-.91-.84-.95-1.2-.96z"
                          />
                        </svg>
                        <span>{contactCard.whatsappCTA.label}</span>
                      </span>
                    </CTAButton>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {hasTrustIndicators && (
          <div className="mt-16 grid gap-4 rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <span className="h-2 w-2 rounded-full bg-secondary-400" aria-hidden="true" />
                {indicator}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
