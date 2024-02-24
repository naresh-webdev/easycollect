/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_neon: "#00FFF0",
        main_neon_dark: "#00f5d4",
        main_neon_dark_shade: "#2ED9C2",
        main_pink: "#EA047E",
        main_white: "#f9fafb",
        main_white_dim: "#e5e7eb",
        bg_gradient_1: "#141E30",
        bg_gradient_2: "#243B55",
        main_gray: "#111827",
      },
    },
  },
  plugins: [],
};
