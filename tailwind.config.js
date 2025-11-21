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
          // Ridhira Gold Theme - Warm & Luxurious (Softer Palette)
          canopy: '#2d2416',      // Warm dark brown (not harsh black)
          moss: '#3d3428',        // Rich brown
          fern: '#C9A961',        // Rich gold (primary)
          sage: '#F4E4C1',        // Light cream gold
          dew: '#FFF8E7',         // Soft ivory
          sun: '#D4AF37',         // Bright gold accent
          twilight: '#1a1410',    // Deep warm brown
          mist: '#FFFEF9',        // Off-white background
          cream: '#FAF6ED',       // Warm cream
          gold: {
            50: '#FFFEF9',
            100: '#FFF8E7',
            200: '#F4E4C1',
            300: '#E8D199',
            400: '#D4AF37',
            500: '#C9A961',
            600: '#B8963D',
            700: '#9A7B2F',
            800: '#7A6124',
            900: '#5C4919',
          },
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'forest-gradient':
          'linear-gradient(135deg, rgba(45,36,22,1) 0%, rgba(61,52,40,1) 35%, rgba(201,169,97,1) 70%, rgba(244,228,193,0.6) 100%)',
        'twilight-gradient':
          'linear-gradient(160deg, rgba(26,20,16,1) 0%, rgba(61,52,40,1) 50%, rgba(201,169,97,1) 100%)',
        'paper-texture':
          'radial-gradient(circle at top, rgba(255,255,255,0.15), transparent 45%), radial-gradient(circle at bottom, rgba(255,255,255,0.1), transparent 40%)',
        'gold-shimmer':
          'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)',
        'warm-gradient':
          'linear-gradient(135deg, #FFFEF9 0%, #FAF6ED 50%, #F4E4C1 100%)',
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
        'forest-glow': '0 20px 45px rgba(45, 36, 22, 0.25)',
        'gold-glow': '0 10px 40px rgba(201, 169, 97, 0.3)',
        'leaf': 'inset 0 0 0 1px rgba(255,255,255,0.08)',
      },
      dropShadow: {
        'gold': '0 0 20px rgba(212, 175, 55, 0.6)',
      },
    },
  },
  plugins: [],
}
