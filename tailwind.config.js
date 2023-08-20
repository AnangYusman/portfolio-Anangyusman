/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#0c4a6e',
        dark: '#020617',
        secondary: '#64748b'
      },
      screen: {
        '2xl': '1320',
      }
    },
  },
  plugins: [],
}

