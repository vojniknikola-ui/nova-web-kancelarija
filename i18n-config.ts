import rawSettings from './i18n-settings.json';

const settings = rawSettings as const;

export const locales = settings.locales;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = settings.defaultLocale;
export const locales = ['bs', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'bs';
