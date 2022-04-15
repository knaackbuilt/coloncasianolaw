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
        'admin-first': '#ac3f14',
        'admin-second': '#cf7954',
        'admin-third': '#f3d3c1'
      }
    }
  },
  plugins: [],
}
