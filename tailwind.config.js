/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d6e0f0',
          200: '#aebfd9',
          300: '#7e96bd',
          400: '#5272a0',
          500: '#365a87',
          600: '#27466c',
          700: '#1d3654',
          800: '#152841',
          900: '#0f1f33',
          950: '#0a1424',
        },
        royal: {
          50: '#eef3fc',
          100: '#d9e4f8',
          200: '#b3c8f1',
          300: '#7ea4e6',
          400: '#4a7dd8',
          500: '#2a5fc2',
          600: '#1f4ba0',
          700: '#1b3d80',
          800: '#193368',
          900: '#172a55',
        },
        gold: {
          50: '#fbf8ee',
          100: '#f6eecf',
          200: '#ecd79b',
          300: '#e0bd63',
          400: '#d4a73c',
          500: '#c08f2a',
          600: '#a37422',
          700: '#7f571f',
          800: '#5e421e',
          900: '#3f2c16',
        },
        midnight: {
          900: '#0a1424',
          950: '#060d18',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
        'widest-3': '0.3em',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0f1f33 0%, #152841 50%, #0a1424 100%)',
        'navy-radial': 'radial-gradient(ellipse at top, #152841 0%, #0a1424 70%)',
        'gold-gradient': 'linear-gradient(135deg, #e0bd63 0%, #c08f2a 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #c08f2a 0%, #e0bd63 25%, #f6eecf 50%, #e0bd63 75%, #c08f2a 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-down': 'fadeDown 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-left': 'slideLeft 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-right': 'slideRight 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in': 'scaleIn 1.1s cubic-bezier(0.16,1,0.3,1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
};
