import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f1117',
          800: '#181c27',
          700: '#232839',
          600: '#2e3348',
          400: '#5c6480',
          300: '#8892a4',
          100: '#c8cdd8',
        },
        olive: {
          600: '#5a6b3a',
          500: '#6e823f',
          400: '#8aa64e',
          200: '#b8cc84',
          100: '#dceaad',
        },
        copper: {
          700: '#7a4a1e',
          600: '#a0602a',
          500: '#c47c3a',
          400: '#d9964f',
          200: '#e8c49a',
          100: '#f4e0c5',
        },
        text: {
          primary: '#e8eaf0',
          secondary: '#98a3b8',
          muted: '#5c6480',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['Jost', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': '0.65rem',
        xs: '0.75rem',
        sm: '0.85rem',
      },
      letterSpacing: {
        widest2: '0.2em',
        wider2: '0.15em',
        wide2: '0.12em',
        wide: '0.08em',
      },
    },
  },
  plugins: [],
}

export default config
