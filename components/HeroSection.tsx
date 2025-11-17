import { ReactNode } from 'react';
import CTAButton from './CTAButton';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
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

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  background,
  className = ''
}: HeroSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background */}
      {background && (
        <div className="absolute inset-0 z-0">
          {background}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-600 mb-4">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <CTAButton
                  href={primaryCTA.href}
                  variant="primary"
                  size="lg"
                >
                  {primaryCTA.text}
                </CTAButton>
              )}
              {secondaryCTA && (
                <CTAButton
                  href={secondaryCTA.href}
                  variant="outline"
                  size="lg"
                >
                  {secondaryCTA.text}
                </CTAButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}