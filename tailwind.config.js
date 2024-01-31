/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '320px',
      md: '640px',
      lg: '1024px',
      xl: '1600px',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        // Add more custom font families as needed
      },
    },
    colors: {
      'dark': '#2C2C2C',
      'blue-0': '#144ED4',
      'blue-1': '#2060F6',
      'blue-2': '#008AFF',
      'blue-3': '#56CCF2',
      'blue-4': '#F2F9FF',

      'pink-0': '#F25656',
      'pink-1': '#FF9C8E',
      'pink-2': '#FF7E6C',
      'pink-3': '#FF9C8E',

      'yellow': '#FCC91D',
      'green': '#15D850',

      'dark-for-text': '#253757',
      'light-for-text': '#6C788B',

      'white': '#FFFFFF',
    },
    borderRadius: {
      '30px': '30px',
    },
    letterSpacing: {
      'wide': '3px',
    }
  },
  plugins: [],
}

