/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wellness: {
          canopy: '#0f2d2c',
          moss: '#1f5b4c',
          fern: '#3c8a6b',
          sage: '#bfe6c9',
          dew: '#cfe7e3',
          sun: '#ffd6a5',
          twilight: '#0b1726',
          mist: '#f4fbf8',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'forest-gradient':
          'linear-gradient(135deg, rgba(6,24,24,1) 0%, rgba(21,66,63,1) 35%, rgba(56,128,102,1) 70%, rgba(255,214,165,0.6) 100%)',
        'twilight-gradient':
          'linear-gradient(160deg, rgba(5,11,20,1) 0%, rgba(18,46,51,1) 50%, rgba(32,74,66,1) 100%)',
        'paper-texture':
          'radial-gradient(circle at top, rgba(255,255,255,0.15), transparent 45%), radial-gradient(circle at bottom, rgba(255,255,255,0.1), transparent 40%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
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

