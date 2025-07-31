/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // for dark/light toggle support
  theme: {
    extend: {
      colors: {
        black: '#0e0e0e',
        brand: {
          DEFAULT: '#6366F1', // Indigo-500 (you can change this)
          light: '#A5B4FC',
          dark: '#4F46E5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 10px rgba(59, 130, 246, 0.6)',
      },
      backdropBlur: {
        xl: '20px',
      },
      boxShadow: {
        card: '0 10px 25px rgba(0,0,0,0.1)',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out both',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
