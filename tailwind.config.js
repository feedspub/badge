module.exports = {
  theme: {
    extend: {
      colors: {
        // 'green-500': '#61b14b',
        'smoke-darkest': 'rgba(0, 0, 0, 0.9)',
        'smoke-darker': 'rgba(0, 0, 0, 0.75)',
        'smoke-dark': 'rgba(0, 0, 0, 0.6)',
        'smoke': 'rgba(0, 0, 0, 0.5)',
        'smoke-light': 'rgba(0, 0, 0, 0.4)',
        'smoke-lighter': 'rgba(0, 0, 0, 0.25)',
        'smoke-lightest': 'rgba(0, 0, 0, 0.1)',
      }
    },
    minHeight: {
      '1/2-screen': '50vh',
      '2/3-screen': '66vh',
      '3/4-screen': '75vh',
      'screen': '100vh'
    }
  },
  variants: {
    textColor: ['hover', 'focus', 'visited'],
  },
  plugins: []
}
