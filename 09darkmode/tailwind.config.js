/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // ✅ Required for toggle-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
