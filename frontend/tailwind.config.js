/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf7f2',
        charcoal: '#1a1815',
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e0c98f',
          dark: '#a8884e',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
};
