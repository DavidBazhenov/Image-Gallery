/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#D2DED3',
        primary: '#B09E75',
        secondary: '#B3A599'
      },
    },
  },
  plugins: [],
}