/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      refubookBlue: '#4699C2',
      refubookActiveNav: '#026FC2',
      refubookRed: '#FC8476',
      refubookLightBlue: '#9DAFBD',
      refubookYellow: '#FEDB9B',
      refubookBlack: '#000000',
      refubookWhite: '#FFFFFF',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
