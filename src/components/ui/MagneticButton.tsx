'use client';

import type { HTMLMotionProps } from 'framer-motion';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import { buttonStyles, type ButtonSize, type ButtonVariant } from '@/components/ui/Button';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

type MagneticButtonProps = Omit<HTMLMotionProps<'button'>, 'ref'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function MagneticButton({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
  onMouseMove,
  onMouseLeave,
  type = 'button',
  disabled,
  ...props
}: MagneticButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.3 });

  function handleMouseMove(event: MouseEvent<HTMLButtonElement>) {
    if (disabled) {
      onMouseMove?.(event);
      return;
    }

    if (prefersReducedMotion) {
      onMouseMove?.(event);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - rect.left - rect.width / 2;
    const relativeY = event.clientY - rect.top - rect.height / 2;

    x.set(relativeX * 0.2);
    y.set(relativeY * 0.2);

    onMouseMove?.(event);
  }

  function handleMouseLeave(event: MouseEvent<HTMLButtonElement>) {
    x.set(0);
    y.set(0);

    onMouseLeave?.(event);
  }

  return (
    <motion.button
      type={type}
      className={buttonStyles({ variant, size, fullWidth, className })}
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      {...props}
    />
  );
}

