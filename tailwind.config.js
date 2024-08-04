/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('src/assets/Logo.png')",
        me: "url('src/assets/Me.jpg')",
      },
      backgroundSize: {
        150: "150%",
      },
    },
  },
  plugins: [],
};
