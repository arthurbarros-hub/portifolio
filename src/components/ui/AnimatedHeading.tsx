"use client";

import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { fadeIn, fadeInUp } from '@/utils/motion';
import { cn } from '@/utils/cn';

type AnimatedHeadingProps = HTMLMotionProps<'div'> & {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'default' | 'lg' | 'xl';
  accent?: boolean;
};

export const AnimatedHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  as = 'h2',
  size = 'default',
  accent = false,
  className,
  ...props
}: AnimatedHeadingProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const MotionTag =
    as === 'h1'
      ? motion.h1
      : as === 'h2'
        ? motion.h2
        : as === 'h3'
          ? motion.h3
          : motion.h4;
  const shouldAnimate = !prefersReducedMotion;
  const animationProps = shouldAnimate
    ? { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.6 } }
    : {};

  const sizeClasses = {
    default: 'text-2xl sm:text-3xl lg:text-4xl',
    lg: 'text-3xl sm:text-4xl lg:text-5xl',
    xl: 'text-3xl sm:text-4xl lg:text-5xl',
  };

  return (
    <motion.div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <motion.span
          className="text-xs uppercase tracking-[0.35em] text-muted"
          variants={fadeIn}
          {...animationProps}
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <div className={accent ? 'relative inline-block' : ''}>
        <MotionTag
          className={cn(
            'font-bold text-fg',
            sizeClasses[size],
            accent && 'relative pb-2',
          )}
          variants={fadeInUp}
          {...animationProps}
        >
          {title}
        </MotionTag>
        {accent && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
          />
        )}
      </div>
      {subtitle ? (
        <motion.p
          className="max-w-xl text-sm leading-7 text-muted sm:text-base"
          variants={fadeIn}
          {...animationProps}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

