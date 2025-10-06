module.exports = {
  content: ["./src/**/*.sxs", "index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#5ccfff',
        secondary: '#ffa359'
      }
    }
  },
  plugins: [require('tailwindcss']),
}