/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        algorand: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c1dfff',
          300: '#a1ceff',
          400: '#71aeff',
          500: '#4a9eff',
          600: '#2b7edb',
          700: '#1e5ba8',
          800: '#153d75',
          900: '#0f2847',
        },
        nft: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
