module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '3xl': '5rem',
      },
      screen: {
        'round': '20rem',
        '3xl': '5rem'
      },
      colors: {
      'regal-blue': '#243c5a',
      'primary': '#5680E9',
      'secondary': {
        1: '#84CEEB',
        2: '#8860D0',
        3: '#C1C8E4'
      },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
