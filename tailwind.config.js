// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Sirf yahan change karo, poori website update ho jayegi
        primary: {
          DEFAULT: '#497d00',     // Main brand color
          light: '#5c8f12',       // Hover states, light backgrounds
          dark: '#3a6300',        // Darker shade for gradients
          50: '#f2f8e8',          // Very light - backgrounds
          100: '#e3f0d0',         // Light backgrounds
          200: '#c7e2a0',         // Borders, light accents
          300: '#a8d36b',         // Medium light
          400: '#8cc440',         // Medium
          500: '#497d00',         // DEFAULT (same as main)
          600: '#3e6a00',         // Slightly dark
          700: '#325500',         // Dark
          800: '#264000',         // Very dark
          900: '#1a2c00',         // Darkest
        },
        // Secondary / Accent
        secondary: {
          DEFAULT: '#ffffff',
          dark: '#f5f5f5',
        },
        // Text colors
        text: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
          muted: '#6b7280',
        }
      },
      // Custom animations
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
        slideRight: 'slideRight 0.3s ease-out',
        slideUp: 'slideUp 0.3s ease-out',
        fadeIn: 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};