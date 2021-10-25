const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#48ba13',
        secondary: '#ffc914',
        graydarker: '#333333',
        graydarkest: '#2e282a',
        green: {
          light: '#a5dd8b',
          dark: '#3f8021',
          midtone: '#84b754',
          shadow: '#46543c',
          darker: '#275e03',
        }
      },
      fontFamily: {
        heading: ['Roboto Slab'],
        body: ['Roboto']
      },
      backgroundSize: {
       '1/2': '50%',
      },
      backgroundImage: theme => ({
      'bg-faq': "url('/images/bg-faq.svg')",
      'bg-demo': "url('/images/bg-demo.svg')",
      }),
      height: {
        '720': '720px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
