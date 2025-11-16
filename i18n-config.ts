export const locales = ['bs', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'bs';
