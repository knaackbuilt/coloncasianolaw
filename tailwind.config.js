module.exports = {
  content: [
     '_site/*.html',
    '_site/**/*.html'  
  ],
  theme: {
    fontFamily: {
      sans: ['', 'Arial', 'sans-serif']
     },
    extend: {
      colors: {
        'ccl-first': '#ac3f14',
        'ccl-second': '#cf7954',
        'ccl-third': '#f3d3c1'
      }
    }
  },
  plugins: [],
}
