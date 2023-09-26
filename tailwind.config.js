/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero':"url('../assets/hero.jpg')"
      },
      colors:{
        primary:'#103157',
        secondary:'#00CCFF',
        third:'#0f172a'
      }
    },
  },
  plugins: [],
}
