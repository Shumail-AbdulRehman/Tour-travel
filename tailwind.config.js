/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4fa",
          100: "#dce5f5",
          200: "#b8ccea",
          400: "#4a7cc2",
          600: "#1e3a6e",
          700: "#162d57",
          800: "#0f1f3d",
          900: "#091428",
        },
        gold: {
          300: "#f5d98a",
          400: "#e8c44a",
          500: "#d4a828",
          600: "#b8901e",
        },
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
    },
  },
  plugins: [],
};
