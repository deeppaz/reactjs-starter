/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-red': '#c43042',
      'custom-white': '#ffffff',
      'custom-black': '#000000',
      'custom-transparent': 'transparent',
    }
  },
  plugins: [],
}

