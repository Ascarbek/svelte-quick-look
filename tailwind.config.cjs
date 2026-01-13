const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      neutral: { ...colors.stone },
      main: { ...colors.cyan },
      accent: { ...colors.rose },
      white: colors.white,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
};
