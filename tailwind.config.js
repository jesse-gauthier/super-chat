/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jadeGreen: '#4caf90',
        burntOrange: '#d84315',
        deepBlue: '#1976d2',
        lemon: '#ffeb3b',
        deepPurple: '#6a1b9a',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Playfair Display', 'serif'],
        accent: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [daisyui],
}
