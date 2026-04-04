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
        ink:         '#1c2333',
        navy:        '#404e66',
        'navy-deep': '#2a3449',
        sage:        '#6b9e95',
        'sage-light':'#a8c8c3',
        sand:        '#f2aa79',
        'sand-deep': '#d4835a',
        rose:        '#c45572',
        parchment:   '#faf7f2',
        'parchment-2':'#f2ede5',
        'parchment-3':'#e8e1d6',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['Syne', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
