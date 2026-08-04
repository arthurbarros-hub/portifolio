import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent-2) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      spacing: {
        xs: 'var(--space-1)',
        sm: 'var(--space-2)',
        md: 'var(--space-3)',
        lg: 'var(--space-4)',
        xl: 'var(--space-5)',
        '2xl': 'var(--space-6)',
        '3xl': 'var(--space-7)',
        '4xl': 'var(--space-8)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      transitionDuration: {
        fast: 'var(--motion-fast)',
        base: 'var(--motion-base)',
        slow: 'var(--motion-slow)',
      },
      transitionTimingFunction: {
        soft: 'var(--motion-ease-soft)',
        snappy: 'var(--motion-ease-snappy)',
      },
      boxShadow: {
        'glow-sm': 'var(--glow-soft)',
        'glow-md': 'var(--glow-strong)',
        card: 'var(--shadow-card)',
        soft: 'var(--shadow-soft)',
      },
    },
  },
  plugins: [],
};

export default config;
