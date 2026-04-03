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
        navy:        '#404e66',
        'navy-dark': '#2d3a50',
        teal:        '#87c1b6',
        'teal-dark': '#5fa89b',
        peach:       '#f2aa79',
        'peach-dark':'#e8935e',
        rose:        '#c45572',
        cream:       '#faf8f5',
        'cream-mid': '#f0ece6',
        'cream-dark':'#e5e0d8',
        text:        '#1e2532',
        'text-mid':  '#4a5568',
        'text-muted':'#718096',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1.4' }],
        'sm':   ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem',     { lineHeight: '1.7' }],
        'lg':   ['1.125rem', { lineHeight: '1.7' }],
        'xl':   ['1.25rem',  { lineHeight: '1.5' }],
        '2xl':  ['1.5rem',   { lineHeight: '1.3' }],
        '3xl':  ['1.875rem', { lineHeight: '1.2' }],
        '4xl':  ['2.25rem',  { lineHeight: '1.1' }],
        '5xl':  ['3rem',     { lineHeight: '1.05' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 8rem)',
      },
    },
  },
  plugins: [],
};
