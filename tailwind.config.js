/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          600: '#16A34A', // Primary green
          700: '#15803D',
          800: '#166534',
        },
        gray: {
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
