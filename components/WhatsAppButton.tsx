import CTAButton from './CTAButton';

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      role="img"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M16 .5C7.46.5.5 7.46.5 16c0 2.77.73 5.4 2.12 7.75L.53 31.47a.75.75 0 0 0 .95.96l7.63-2.05A15.36 15.36 0 0 0 16 31.5c8.54 0 15.5-6.96 15.5-15.5S24.54.5 16 .5zm0 2c7.47 0 13.5 6.03 13.5 13.5S23.47 29.5 16 29.5a13.3 13.3 0 0 1-6.46-1.68.75.75 0 0 0-.52-.07l-5.73 1.54 1.54-5.74a.75.75 0 0 0-.07-.52A13.3 13.3 0 0 1 2.5 16C2.5 8.53 8.53 2.5 16 2.5zm-5.6 6c-.37 0-.98.14-1.48.7-.5.57-1.9 1.86-1.9 4.54 0 2.68 1.95 5.27 2.23 5.63.27.36 3.63 5.82 8.98 7.93 4.43 1.76 5.35 1.42 6.32 1.34.97-.09 3.13-1.28 3.57-2.52.45-1.24.45-2.3.32-2.52-.14-.22-.5-.36-1.05-.64-.55-.27-3.26-1.61-3.77-1.8-.5-.18-.86-.27-1.23.28-.36.55-1.42 1.8-1.74 2.16-.32.36-.64.41-1.18.14-.55-.27-2.3-.85-4.38-2.69-1.62-1.45-2.72-3.24-3.04-3.79-.32-.55-.03-.84.24-1.11.25-.24.55-.64.82-.96.27-.32.36-.55.55-.91.18-.36.09-.69-.05-.96-.14-.27-1.1-2.63-1.51-3.55-.41-.91-.84-.95-1.2-.96z"
      />
    </svg>
  );
}

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
  floating?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function WhatsAppButton({
  phoneNumber,
  message = 'Zanima me brza konsultacija.',
  label = 'WhatsApp poruka',
  floating = false,
  className = '',
  size,
}: WhatsAppButtonProps) {
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  const href = `https://wa.me/${digitsOnly}${query}`;
  const buttonSize = size ?? (floating ? 'lg' : 'md');
  const floatingClasses = floating
    ? 'fixed bottom-5 right-4 z-40 drop-shadow-2xl sm:bottom-6 sm:right-6'
    : '';

  return (
    <CTAButton
      href={href}
      variant="whatsapp"
      size={buttonSize}
      className={`${floatingClasses} ${floating ? 'rounded-full px-6 py-4' : ''} ${className}`.trim()}
      aria-label={label}
    >
      <span className="inline-flex items-center gap-2">
        <WhatsAppIcon className="h-5 w-5" />
        <span className="font-semibold">{label}</span>
      </span>
    </CTAButton>
  );
}
