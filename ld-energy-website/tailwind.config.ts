import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand navy, derived from the logo wordmark (#182848)
        primary: {
          50: '#F2F5FA',
          100: '#E1E9F4',
          200: '#C4D2E8',
          300: '#9BB2D4',
          400: '#6C8CBC',
          500: '#48699F',
          600: '#33507F',
          700: '#263E64',
          800: '#1D3050',
          900: '#182848',
          950: '#0D1729',
        },
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        // Brand green, derived from the logo roof mark (EPC A-rating green)
        accent: {
          50: '#F3FAEC',
          100: '#E3F3D3',
          200: '#C8E8AB',
          300: '#A5D97C',
          400: '#83C853',
          500: '#63B233',
          600: '#4C9424',
          700: '#3A731D',
          800: '#315C1C',
          900: '#2A4E1B',
          950: '#14290A',
        },
        // Warm tertiary (former brand orange) — use sparingly: cautionary
        // notes, fines/warnings, and future heating/electrical services
        warm: {
          50: '#FEF5EE',
          100: '#FDE7D4',
          200: '#FACDAA',
          400: '#F5923F',
          500: '#EF7A28',
          600: '#DC6314',
          700: '#B64F10',
          800: '#93400F',
        },
        success: '#3A731D',
        warning: '#F59E0B',
        danger: '#EF4444',
        // Warm editorial canvas — ivory page, sand for muted bands
        canvas: '#FBFAF7',
        sand: '#F3F0E8',
        // Dark brand band (footer, HowItWorks) — deep navy, was forest green
        forest: {
          900: '#091324',
          800: '#0D1B33',
          700: '#142644',
          accent: '#83C853',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
      },
      maxWidth: {
        container: '80rem',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}

export default config
