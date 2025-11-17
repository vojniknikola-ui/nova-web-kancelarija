import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  className = ''
}: ServiceCardProps) {
  const content = (
    <div className={`group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-primary-200 transition-all duration-200 ${className}`}>
      {icon && (
        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
          <div className="text-primary-600">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block focus-visible"
        aria-label={`Learn more about ${title}`}
      >
        {content}
      </a>
    );
  }

  return content;
}