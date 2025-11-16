import rawSettings from './i18n-settings.json';

type I18nSettings = {
  locales: readonly string[];
  defaultLocale: string;
};

type NonEmptyLocales = readonly [string, ...string[]];

type ValidatedSettings = {
  locales: NonEmptyLocales;
  defaultLocale: NonEmptyLocales[number];
};

const validateSettings = (settings: I18nSettings): ValidatedSettings => {
  if (!Array.isArray(settings.locales) || settings.locales.length === 0) {
    throw new Error('i18n settings must include at least one locale');
  }

  const normalizedLocales = settings.locales
    .map((locale) => locale.trim())
    .filter((locale): locale is string => locale.length > 0);

  if (normalizedLocales.length === 0) {
    throw new Error('i18n locales cannot be empty strings');
  }

  const normalizedDefaultLocale = settings.defaultLocale.trim();

  if (!normalizedLocales.includes(normalizedDefaultLocale)) {
    throw new Error(`Default locale "${normalizedDefaultLocale}" must be part of locales list`);
  }

  return {
    locales: normalizedLocales as unknown as NonEmptyLocales,
    defaultLocale: normalizedDefaultLocale as NonEmptyLocales[number],
  };
};

const settings = validateSettings(rawSettings satisfies I18nSettings);

const { locales, defaultLocale } = settings;

export { locales, defaultLocale };
export type Locale = (typeof locales)[number];
