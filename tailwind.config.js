module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundSize: {
      'depth': "var(--depth-size)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#AD4FFF',
          100: '#B768FC',
          200: '#B768FC',
          300: '#B25BFE',
          400: '#9346DA',
          500: '#7A3CB5',
          600: '#7A3CB5',
          700: '#603391',
          800: '#462A6C',
          900: '#2D2047',
        },
        black: "#131722",
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
