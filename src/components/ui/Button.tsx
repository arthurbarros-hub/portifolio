import type { ButtonHTMLAttributes } from 'react';

import { focusRing } from '@/utils/a11y';
import { cn } from '@/utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-base ease-soft disabled:pointer-events-none disabled:opacity-60';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white shadow-soft hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-glow-sm',
  secondary:
    'bg-surface text-fg border border-border/40 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-soft',
  outline:
    'border border-border/60 text-fg hover:-translate-y-0.5 hover:border-accent/70 hover:text-white',
  ghost: 'text-fg hover:bg-surface/70',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs tracking-[0.12em] uppercase',
  md: 'h-11 px-5 text-sm tracking-[0.08em] uppercase',
  lg: 'h-12 px-6 text-base tracking-[0.06em] uppercase',
};

export const buttonStyles = ({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
}: Pick<ButtonProps, 'variant' | 'size' | 'fullWidth' | 'className'>) =>
  cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    focusRing,
    fullWidth && 'w-full',
    className,
  );

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={buttonStyles({ variant, size, fullWidth, className })}
    {...props}
  />
);

