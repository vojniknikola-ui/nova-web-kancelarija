const { locales } = require('./i18n-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b3d60',
        secondary: '#d4a017',
        accent: '#1e8090',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui'],
        serif: ['"Merriweather"', 'ui-serif'],
      },
    },
  },
  plugins: [],
};
