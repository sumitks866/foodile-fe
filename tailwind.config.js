/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      primarybg: "#FFFDF6",
      brown: "#775E53",
      yellow: "#F3BC59",
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(primarybg|brown|yellow)/,
    },
  ],
};
