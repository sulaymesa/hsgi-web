/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#183038',
          blue: '#b8dfee',
          blueDeep: '#2d738b',
          green: '#bfe7d2',
          greenDeep: '#22815f',
          mint: '#eefaf6',
          line: '#dcebea',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(24, 48, 56, 0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
