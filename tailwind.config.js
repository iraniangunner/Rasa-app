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
        "layout-pattern": "url('./images/pattern.png')",
        "company": "url('./images/company-2.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
