module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'#174EA4',
      },
      fontFamily: {
        sans: ['Roboto Condensed','sans-serif'],
        captialFont:['Teko', 'sans-serif']
        // Add more custom font families if needed
      },
      
    },
  },
  plugins: [],
}
