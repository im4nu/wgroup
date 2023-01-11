/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-default': '#701210',
      'primary-alternative': '#8C403E',
      'primary-border': '#BE9493',
      'secondary-default': '#ffff',
    },
    backgroundImage: {
      'hero': "url('../pages/assets/images/bg.png')",
    },
    extend: {},
  },
  plugins: [],
}
