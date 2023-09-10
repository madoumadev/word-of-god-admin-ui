/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Niramit', 'Sans-serif']
      },
      colors: {
        primary: '#006799'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
