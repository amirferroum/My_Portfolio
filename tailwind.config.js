/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        
        'sp': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      backgroundImage: {
        'gradient-radial': "'radial-gradient(var(--tw-gradient-stops))'",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      rotate: {
        '360': '360deg',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'landing': "url('/assets/bg.jpg')",
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        wiggle: 'wiggle 25s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
          
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'rotate(0deg)' },
        }
      },
    },
  },
  plugins: [],
}
