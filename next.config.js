const { locales, defaultLocale } = require('./i18n-config');

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
