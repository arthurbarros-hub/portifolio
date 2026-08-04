export const colors = {
  bg: 'rgb(var(--color-bg) / <alpha-value>)',
  surface: 'rgb(var(--color-surface) / <alpha-value>)',
  fg: 'rgb(var(--color-fg) / <alpha-value>)',
  muted: 'rgb(var(--color-muted) / <alpha-value>)',
  accent: 'rgb(var(--color-accent) / <alpha-value>)',
  accent2: 'rgb(var(--color-accent-2) / <alpha-value>)',
  border: 'rgb(var(--color-border) / <alpha-value>)',
};

export const spacing = {
  xs: 'var(--space-1)',
  sm: 'var(--space-2)',
  md: 'var(--space-3)',
  lg: 'var(--space-4)',
  xl: 'var(--space-5)',
  '2xl': 'var(--space-6)',
  '3xl': 'var(--space-7)',
  '4xl': 'var(--space-8)',
};

export const radius = {
  xs: 'var(--radius-xs)',
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
};

export const motion = {
  duration: {
    fast: 0.12,
    base: 0.24,
    slow: 0.48,
  },
  ease: {
    soft: [0.16, 1, 0.3, 1] as const,
    snappy: [0.32, 0.72, 0, 1] as const,
  },
};

export const typography = {
  size: {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    md: 'var(--font-size-md)',
    lg: 'var(--font-size-lg)',
    xl: 'var(--font-size-xl)',
    '2xl': 'var(--font-size-2xl)',
    '3xl': 'var(--font-size-3xl)',
    '4xl': 'var(--font-size-4xl)',
  },
  family: {
    display: 'var(--font-display)',
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
  },
};

export const glow = {
  soft: 'var(--glow-soft)',
  strong: 'var(--glow-strong)',
};

export const shadow = {
  card: 'var(--shadow-card)',
  soft: 'var(--shadow-soft)',
};

