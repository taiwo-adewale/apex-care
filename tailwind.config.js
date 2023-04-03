/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "",
        secondary: "",
      },
    },
  },
};
