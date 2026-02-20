/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1B2D',
          light: '#1A2B42',
          dark: '#0A1220',
        },
        teal: {
          DEFAULT: '#00C9A7',
          light: '#00E6BF',
          dark: '#00A88C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
