/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#F33355",
        purple: "#8B58F9",
        orange: "#FFAE34",
        gray: "#222222",
      },
      fontFamily: {
        ptMono: ["PT Mono", "monospace"],
        san: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
