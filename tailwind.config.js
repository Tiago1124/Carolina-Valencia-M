/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Manual de Marca — Carolina Valencia M.
        navy:    '#404e66',
        teal:    '#87c1b6',
        peach:   '#f2aa79',
        rose:    '#c45572',
        light:   '#e6e6e6',
        cream:   '#f8f6f3',
        'cream-dark': '#ede9e4',
        white:   '#ffffff',
        dark:    '#1a1a1a',
        muted:   '#6b6b6b',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        accent:  ['var(--font-accent)', 'cursive'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease both',
        'fade-in':    'fadeIn 0.5s ease both',
        'slide-left': 'slideLeft 0.7s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(28px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
