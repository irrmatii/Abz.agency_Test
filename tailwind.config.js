/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '5%',
        md: '0',
      },
      screens: {
        md: '704px',
        lg: '904px',
        xl: '1170px',
      },
    },
    extend: {},
  },
  plugins: [],

}
