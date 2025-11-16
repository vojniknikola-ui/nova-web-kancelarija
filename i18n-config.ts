import rawSettings from './i18n-settings.json';

const settings = rawSettings as const;

export const locales = settings.locales;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = settings.defaultLocale;
