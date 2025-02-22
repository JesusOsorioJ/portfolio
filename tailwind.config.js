/** @type {import('tailwindcss').Config} */
const colors= require('tailwindcss/colors')


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        backgroundLabel : 'var(--background-colorLabel)',
        textColorLabel : 'var(--text-colorLabel)',
        textColor: 'var(--text-color)',
        textColorTitle: 'var(--text-colorTitle)',
      },
      boxShadow: {
        'target': '0px 1px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
