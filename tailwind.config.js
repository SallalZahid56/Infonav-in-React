// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: "#f35525", // ✅ your orange
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],       // for body/paragraphs
        heading: ["Montserrat", "sans-serif"], // for headings/nav/buttons
      },
    },
  },
  plugins: [],
}
