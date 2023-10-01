/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: '100px',
      sm: '640px',
      md: '768px',
      lg: '1024x',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}