/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scans your src directory for classes
  safelist: [ // Move safelist outside of `theme`
    "bg-primary",
    "text-secondary",
    "hover:bg-gradient-to-br",
    "from-primary",
    "to-secondary",
    "bg-bgPrimary",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        secondary: "#FF5733",
        texlight: "#a7a7a7",
        bgPrimary: "#020010", // Black background color
      },
    },
  },
  plugins: [],
};
