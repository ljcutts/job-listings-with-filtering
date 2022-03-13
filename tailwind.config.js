const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        job: '#effafa',
        bgImage: 'hsl(180, 29%, 50%)'
      },
      margin: {
        '70': '70px',
      },
      backgroundImage: {
        'close': "url('/public/images/icon-remove.svg')"
      },
      backgroundSize: {
        '50': '50%',
      },
      width: {
        '312': '312px',
      },
      height: {
        '156': '156px',
      },
      translate: {
        '4': '-1.4rem',
        '55': '-1.3rem',
        'close' : '-0.25rem',
        'closey' : '0.5px'
      },
      fontSize: {
        navbar: ['9px', {
          lineHeight: '1rem',
        }],
        x: ['5px', {
          lineHeight: '1rem',
        }],
      }
    },
  },
  plugins: [],
}
