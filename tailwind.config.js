/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'Dark-grayish-blue': 'hsl(228, 12%, 48%)',
      'Very-dark-blue': ' hsl(212, 21%, 14%)',
      'Dark-cyan': 'hsl(158, 36%, 37%)',
      'Cream': 'hsl(30, 38%, 92%)',
      'gray-p' :'#ACACB4'
    },
    extend: {},
    fontFamily:{
      sans : ['Montserrat','sans-serif'],
      serif:['Fraunces','serif']
    },

  },
  plugins: [],
}
