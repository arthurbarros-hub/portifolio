'use client';

import { motion } from 'framer-motion';
import type { Technology } from '@/data/tech-stack';
import { motion as motionTokens } from '@/styles/tokens';

interface TechIconProps {
  tech: Technology;
  isHovered?: boolean;
  prefersReducedMotion?: boolean;
}

const animationVariants = {
  orbit: {
    animate: (isHovered: boolean) => ({
      rotate: isHovered ? 360 : 0,
      transition: {
        duration: isHovered ? 2 : 0,
        repeat: isHovered ? Infinity : 0,
        ease: 'linear',
      },
    }),
    initial: { rotate: 0 },
  },
  glow: {
    animate: {
      boxShadow: [
        '0 0 0px rgba(6, 182, 212, 0)',
        '0 0 20px rgba(6, 182, 212, 0.6)',
        '0 0 0px rgba(6, 182, 212, 0)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    initial: { boxShadow: '0 0 0px rgba(6, 182, 212, 0)' },
  },
  pulse: {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    initial: { scale: 1 },
  },
  wave: {
    animate: {
      x: [0, 4, -4, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    initial: { x: 0 },
  },
  fluid: {
    animate: {
      y: [0, -3, 3, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    initial: { y: 0 },
  },
  float: {
    animate: {
      y: [0, -2, 0],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    initial: { y: 0, opacity: 1 },
  },
};

export const TechIcon = ({ tech, isHovered = false, prefersReducedMotion = false }: TechIconProps) => {
  const Icon = tech.svgComponent;
  const animVariant = animationVariants[tech.animationType];

  if (prefersReducedMotion) {
    return (
      <div className="w-8 h-8 text-slate-300">
        <Icon />
      </div>
    );
  }

  return (
    <motion.div
      className="w-8 h-8 text-slate-300"
      initial={animVariant.initial}
      animate={animVariant.animate instanceof Function ? animVariant.animate(isHovered) : animVariant.animate}
    >
      <Icon />
    </motion.div>
  );
};

