module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    screens: {
      'sm': '550px',
      'md': '850px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      'orange': '#FF7E1B',
      'grey':'#69707D',
    },
    extend: {},
  },
  plugins: [],
}
