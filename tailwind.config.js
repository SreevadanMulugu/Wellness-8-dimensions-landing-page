/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    500: '#C9A961',
    600: '#B8963D',
    700: '#9A7B2F',
    800: '#7A6124',
    900: '#5C4919',
    'leaf-sway': 'leaf 10s ease-in-out infinite',
      },
  keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  gradient: {
    '0%, 100%': {
      'background-size': '200% 200%',
        'background-position': 'left center'
    },
    '50%': {
      'background-size': '200% 200%',
        'background-position': 'right center'
    },
  },
  shimmer: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
  leaf: {
    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    '50%': { transform: 'translateY(-15px) rotate(3deg)' },
  },
},
backdropBlur: {
  xs: '2px',
      },
boxShadow: {
  'forest-glow': '0 20px 45px rgba(10, 50, 43, 0.35)',
    'leaf': 'inset 0 0 0 1px rgba(255,255,255,0.08)',
      },
dropShadow: {
  'firefly': '0 0 20px rgba(255, 255, 200, 0.8)',
      },
    },
  },
plugins: [],
}

