/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          dark: '#0A0A0A',
        },
        secondary: {
          DEFAULT: '#333333',
          light: '#4D4D4D',
          dark: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#FF4444',
          light: '#FF6666',
          dark: '#CC3333',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#0A0A0A',
        },
        text: {
          DEFAULT: '#1A1A1A',
          light: '#4D4D4D',
          dark: '#FFFFFF',
        },
        card: {
          DEFAULT: '#FFFFFF',
          dark: '#141414',
        },
        border: {
          DEFAULT: '#E5E5E5',
          dark: '#2A2A2A',
        },
        hover: {
          DEFAULT: '#F5F5F5',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        'glow': '0 0 15px rgba(255, 68, 68, 0.3)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)',
      },
    },
  },
  plugins: [],
}
