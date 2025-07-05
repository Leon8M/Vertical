/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary: "#1D3557",
        accent: "#F67E17",
        accentHover: "#FF9933",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
