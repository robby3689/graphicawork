/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Dark Blue Theme
        dark: {
          'bg-primary': '#0a0e1a',
          'bg-secondary': '#1a2332',
          'bg-tertiary': '#2a3441',
          'bg-card': '#1e2a3a',
          'border': '#3a4a5c',
          'border-light': '#4a5a6c',
          'text-primary': '#ffffff',
          'text-secondary': '#b8c5d1',
          'text-tertiary': '#8a9ba8',
          'accent': '#4f9cf9',
          'accent-hover': '#6bb6ff',
          'accent-light': '#7bc4ff',
          'success': '#00d4aa',
          'warning': '#ffb800',
          'danger': '#ff4757',
        },
        // Keep original primary colors for compatibility
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      fontFamily: {
        'github': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Noto Sans"', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
      }
    },
  },
  plugins: [],
}