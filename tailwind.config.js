/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c58e3f',
        chocolate: '#351507',
        brown: '#b47c3b',
        cream: '#f8dfb2',
        amber: '#aa5f0c',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        raleway: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle at 1px 1px, rgba(197,142,63,0.15) 1px, transparent 0)',
        'dot-dark': 'radial-gradient(circle at 1px 1px, rgba(53,21,7,0.12) 1px, transparent 0)',
      },
      backgroundSize: {
        'dot': '32px 32px',
      },
    },
  },
  plugins: [],
};
