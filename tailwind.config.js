/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#19ce67", // rgb(25,206,103)
        secondary: "#121521", // rgb(18,21,33)
      },
      backgroundImage: {
        "map-pattern": "url('/src/assets/map-bg.png')",
      },
      backgroundColor: {
        "alt-section": "#f4f9fd", // rgb(244,249,253)
      },
      boxShadow: {
        pick: "0 10px 55px 5px rgba(137, 173, 255, 0.2)",
      },
      borderRadius: {
        pick: "70% 30% 30% 70% / 60% 40% 60% 40%",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
