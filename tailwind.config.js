/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": 'hsl(233, 26%, 24%)',
        "lime-green": 'hsl(136, 65%, 51%)',
        "bright-cyan": 'hsl(192, 70%, 51%)',
        "grayish-blue": 'hsl(233, 8%, 62%)',
        "light-grayish-blue": 'hsl(220, 16%, 96%)',
        "very-light-gray": 'hsl(0, 0%, 98%)',
        "white": 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        "publicSans": ["'Public Sans'", 'sans-serif', "'Roboto'", 'sans-serif']
      },
      backgroundImage: {
        "open-menu": "url('../images/icon-hamburger.svg')",
        "close-menu": "url('../images/icon-close.svg')"
      }
    },
  },
  plugins: [],
}

