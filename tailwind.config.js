// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          500: '#2E8B57',
          600: '#1E6B47',
          700: '#165c3b',
          800: '#104d2f',
          900: '#0a3e23',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          500: '#8B4513',
          600: '#654321',
          700: '#5a3a1d',
          800: '#4f3219',
          900: '#442a15',
        }
      }
    },
  },
  plugins: [],
}