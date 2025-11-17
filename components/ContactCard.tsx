import { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  content: string;
  href?: string;
  className?: string;
}

export default function ContactCard({
  icon,
  title,
  content,
  href,
  className = ''
}: ContactCardProps) {
  const contentElement = (
    <div className={`bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
          <div className="text-primary-600">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block focus-visible"
        aria-label={`Contact us via ${title}`}
      >
        {contentElement}
      </a>
    );
  }

  return contentElement;
}