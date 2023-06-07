/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        didactGothic: ['Didact Gothic', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    letterSpacing: {
      big: '1em',
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

