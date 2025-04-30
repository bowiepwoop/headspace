/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['IdkGay-eKxl', 'sans-serif'],
      },
      cursor: {
        'default': 'url(/cursor/cursor-black.cur), default',
        'pointer': 'url(/cursor/pointer-black.cur), pointer',
      },
    },
  },
  plugins: [],
}
