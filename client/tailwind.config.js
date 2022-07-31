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
      'new':'#232946',
      'new-secondary':'#d4d8f0',
      'secondary': {
        1: '#84CEEB',
        2: '#8860D0',
        3: '#C1C8E4',
        4: '#fffffe',
      },
      'tertiary': '#E8E8E8',
      'button-col': '#eebbc3',
      'buyer-background': '#fffffe',
      'table-header': '#ffc6c7',
      'table-data': '#faeee7' 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
