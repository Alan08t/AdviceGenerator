/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'lg' : '28px'
    },
    fontFamily: {
      'Manrope': ['Manrope']
    },
    extend: {
      boxShadow: {
        '3xl': '0px 0px 50px 0px rgba(82,255,168,0.75)'
      }

    },
    colors: {
      'primary': 'hsl(193, 38%, 86%)',
      'secondary' : 'hsl(150, 100%, 66%)',
      'grayish-blue': 'hsl(217, 19%, 38%)',
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'dark-blue': 'hsl(218, 23%, 16%)',
    }
  },

  plugins: [],
}
