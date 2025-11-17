import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  locale: string;
}

export default function Breadcrumb({ items, className = '', locale }: BreadcrumbProps) {
  return (
    <nav
      className={`flex items-center space-x-2 text-sm text-slate-600 ${className}`}
      aria-label="Breadcrumb"
    >
      <Link
        href={`/${locale}`}
        className="flex items-center hover:text-primary-600 transition-colors"
        aria-label="Home"
      >
        <HomeIcon className="w-4 h-4" />
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRightIcon className="w-4 h-4 text-slate-400" aria-hidden="true" />
          {item.href ? (
            <Link
              href={item.href as any}
              className="hover:text-primary-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}