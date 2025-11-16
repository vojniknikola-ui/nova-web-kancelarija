const { locales, defaultLocale } = require('./i18n-settings.json');
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales,
    defaultLocale,
  },
  experimental: {
    typedRoutes: true,
  },
};
module.exports = nextConfig;
