/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6fbff',
          100: '#b8f3ff',
          200: '#78e8ff',
          300: '#3ad8f4',
          400: '#05c2e3',
          500: '#00a4c5',
          600: '#057e96',
          700: '#0d627a',
          800: '#1a4d62',
          900: '#1f3f51',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(2, 178, 246, 0.35)',
      },
    },
  },
  plugins: [],
}

