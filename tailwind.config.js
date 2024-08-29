/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: "Kalnia",
      },
      boxShadow: {
        center: "0 0 20px 2px rgba(255, 255, 255, 1)",
        "center-md": "0 0 60px 15px rgba(255, 255, 255, 1)",
        "center-lg": "0 0 100px 15px rgba(255, 255, 255, 1)",
      },
      screens: {
        480: "480px",
        768: "768px",
        990: "990px",
        860: "860px",
        1024: "1025px",
        1440: "1440px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
