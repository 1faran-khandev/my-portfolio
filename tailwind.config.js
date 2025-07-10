/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: '0 0 10px rgba(59, 130, 246, 0.6)', 
      },
      backdropBlur: {
        xl: '20px', 
      },
      colors: {
        black: '#0e0e0e', 
      },
    },
  },
  plugins: [],
}