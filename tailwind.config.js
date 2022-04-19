module.exports = {
  content: [
     '_site/*.html',
    '_site/**/*.html'  
  ],
  theme: {
    fontFamily: {
      sans: ['unna', 'helvetica', 'serif']
     },
    extend: {
      colors: {
        'ccl-dark': '#364d0a',
        'ccl-mid': '#96b026',
        'ccl-light': '#d2e464'
      }
    }
  },
  plugins: [],
}