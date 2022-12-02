/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "576px",

        md: "768px",

        lg: "992px",

        xl: "1200px",

        "2xl": "1400px",
      },
      backgroundImage: {
        company: "url('./images/company-2.jpg')",
        sec1: "url('./images/pattern-1.jpg')",
        sec2: "url('./images/pattern-2.jpg')",
        sec3: "url('./images/pattern-3.jpg')",
        sec4: "url('./images/pattern-4.jpg')",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        scrolling: {
          "0%": { transform: "translateX(-70rem)" },
          "100%": { transform: "translateX(95rem)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
