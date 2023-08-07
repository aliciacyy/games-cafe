/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#A8CDD2',
      secondary: '#EAE0DB',
      accent: '#92C3CB',
      bg: '#f3f0ef',
      gray: colors.gray,
      white: colors.white,
      blue: colors.blue
    },
    extend: {},
  },
  plugins: [],
}

