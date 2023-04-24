/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      sans: [
        'Calibri',
        'Inter',
        'San Francisco',
        'SF Pro Text',
        '-apple-system',
        'system-ui',
        'sans-serif',
      ],
      mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        background: '#0A192F',
        backgroundLoader: '#020C1B',
        'bg-header': 'rgba(10, 25, 47, 0.85)',
        'bg-card': '#112240',
        'bg-line': '#233554',
        primary: '#64FFDA',
        primaryHover: 'rgba(100, 255, 218, 0.1)',
        'text-dark': '#8892B0',
        'text-dark-light': '#A8B2D1',
        'text-light': '#CCD6F6',
        shadow: 'rgba(2, 12, 27, 0.7)',
        overlay: 'rgba(0, 0, 0, 0.6)',
      },
      fontSize: {
        'title-14-18': 'clamp(0.875rem, 4vw, 1.125rem)',
        'title-16-20': 'clamp(1rem, 3vw, 1.25rem)',
        'title-24-32': 'clamp(1.5rem, 5vw, 2rem)',
        'title-40-80': 'clamp(2.5rem, 8vw, 5rem)',
      },
      transitionProperty: {
        tudo: 'all',
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      transitionDuration: {
        250: '250ms',
      },
      gridTemplateColumns: {
        'two-cols': '3fr 2fr',
        'list-sobre': 'repeat(2, minmax(140px, 200px))',
        12: 'repeat(12, 1fr)',
      },
      gridColumn: {
        '1-8': '1 / 8',
        '5--1': '5 / -1',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        typing: {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
        'blink-caret': {
          'from, to': {
            'border-color': 'transparent',
          },
          '50%': {
            'border-color': '#64FFDA',
          },
        },
        displayBlock: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        displayHidden: {
          '0%': {
            opacity: '1',
          },
          '99%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        modalFadeIn: {
          from: {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        modalFadeOut: {
          from: {
            opacity: '1',
            transform: 'translateX(0)',
          },
          to: {
            opacity: '0',
            transform: 'translateX(100%)',
          },
        },
        dashLoaderStroke: {
          to: {
            'stroke-dashoffset': '0',
          },
        },
        dashLoaderText: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        dashLoaderScale: {
          from: {
            transform: 'scale(1)',
          },
          to: {
            transform: 'scale(0)',
          },
        },
        dashLoaderBackground: {
          from: {
            opacity: '1',
          },
          to: {
            opacity: '0',
          },
        },
      },
      animation: {
        'fade-in-down':
          'fade-in-down forwards 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        'fade-in-up':
          'fade-in-up forwards 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        typing:
          'typing forwards 3.5s steps(40, end), blink-caret .75s step-end infinite',
        displayBlock: 'displayBlock forwards 0.5s',
        displayHidden: 'displayHidden forwards 0.5s',
        modalFadeIn:
          'modalFadeIn forwards 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        modalFadeOut:
          'modalFadeOut forwards 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        dashLoaderStroke:
          'dashLoaderStroke 1.5s forwards cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s',
        dashLoaderText:
          'dashLoaderText 0.3s forwards cubic-bezier(0.645, 0.045, 0.355, 1) 2.5s',
        dashLoaderScale:
          'dashLoaderScale 0.3s forwards cubic-bezier(0.645, 0.045, 0.355, 1) 3.5s',
        dashLoaderBackground:
          'dashLoaderBackground 0.3s forwards cubic-bezier(0.645, 0.045, 0.355, 1) 3.8s',
      },
    },
  },
  plugins: [],
}
