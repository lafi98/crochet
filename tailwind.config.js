export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F1E8',
        ivory: '#FCFAF5',
        olive: '#66705A',
        darkgreen: '#26352B',
        terracotta: '#B86F52',
        dustypink: '#D8A9A3',
        brown: '#665348',
        charcoal: '#252522',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}