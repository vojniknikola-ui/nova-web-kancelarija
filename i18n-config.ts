import rawSettings from './i18n-settings.json';

const settings = rawSettings;

export const locales = settings.locales;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = settings.defaultLocale;
