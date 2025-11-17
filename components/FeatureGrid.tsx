import { ReactNode } from 'react';

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function FeatureGrid({
  title,
  subtitle,
  children,
  columns = 3,
  className = ''
}: FeatureGridProps) {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-sm uppercase tracking-[0.3em] text-secondary-600 mb-4">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {children}
        </div>
      </div>
    </section>
  );
}