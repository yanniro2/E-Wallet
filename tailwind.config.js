/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#22222299",
      },
      fontFamily: {
        ptMono: ["PT Mono", "monospace"],
        san: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
