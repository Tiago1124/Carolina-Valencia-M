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
        navy:    '#404e66',
        teal:    '#87c1b6',
        peach:   '#f2aa79',
        rose:    '#c45572',
        stone:   '#f8f5f0',
        'stone-2': '#ede9e2',
        'stone-3': '#ddd8cf',
        ink:     '#1a1f2e',
        muted:   '#6b7280',
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['clamp(2.8rem,5.5vw,4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'h2':      ['clamp(2rem,3.5vw,3rem)',     { lineHeight: '1.1',  letterSpacing: '-0.02em'  }],
        'h3':      ['clamp(1.3rem,2vw,1.6rem)',   { lineHeight: '1.2',  letterSpacing: '-0.01em'  }],
        'lead':    ['clamp(1.05rem,1.5vw,1.2rem)',{ lineHeight: '1.75'                            }],
        'body':    ['1rem',                        { lineHeight: '1.75'                            }],
        'small':   ['0.875rem',                    { lineHeight: '1.6'                             }],
        'label':   ['0.72rem',                     { lineHeight: '1',   letterSpacing: '0.14em'    }],
      },
      maxWidth: {
        'site': '1160px',
        'narrow': '720px',
      },
      spacing: {
        'section': 'clamp(5rem,10vw,8rem)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease both',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
