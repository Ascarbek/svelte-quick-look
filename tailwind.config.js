const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      neutral: { ...colors.stone },
      main: { ...colors.cyan },
      accent: { ...colors.rose },
    },
    extend: {},
  },
  plugins: [],
};
