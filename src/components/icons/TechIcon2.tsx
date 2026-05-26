'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import type { AnimationType } from '@/data/tech-stack-icons';

interface TechIconProps {
  icon: IconType | (() => React.ReactNode);
  animationType: AnimationType;
  isHovered?: boolean;
  color?: string;
  size?: number;
}

const animationVariants: Record<AnimationType, any> = {
  // Dolphin-like wave movement (MySQL)
  'dolphin-wave': {
    initial: { x: 0 },
    hover: {
      x: [0, 6, -6, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Liquid fill effect (TypeScript)
  'liquid-fill': {
    initial: { backgroundPosition: '0% 0%' },
    hover: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Circular orbit (React)
  orbit: {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: { duration: 4, repeat: Infinity, ease: 'linear' },
    },
  },
  // Particles orbiting (React variant)
  particles: {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.05, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Shimmer effect (Next.js)
  shimmer: {
    initial: { backgroundPosition: '0% 0%' },
    hover: {
      backgroundPosition: ['200% 0%', '-200% 0%'],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Steam rising (Java)
  steam: {
    initial: { y: 0, opacity: 1 },
    hover: {
      y: [-2, -8, 0],
      opacity: [1, 0.7, 1],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Pulse glow (JavaScript, HTML5)
  'pulse-glow': {
    initial: { scale: 1, boxShadow: '0 0 0px rgba(255, 200, 0, 0)' },
    hover: {
      scale: [1, 1.05, 1],
      boxShadow: [
        '0 0 0px rgba(255, 200, 0, 0)',
        '0 0 20px rgba(255, 200, 0, 0.6)',
        '0 0 0px rgba(255, 200, 0, 0)',
      ],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Wave flow (Tailwind CSS, CSS3)
  'wave-flow': {
    initial: { y: 0 },
    hover: {
      y: [0, -3, 3, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Morphing shape (Framer Motion)
  morphing: {
    initial: { scale: 1, borderRadius: '8px' },
    hover: {
      scale: [1, 1.05, 0.95, 1],
      borderRadius: ['8px', '12px', '6px', '8px'],
      transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Branch lines animation (Git)
  'branch-lines': {
    initial: { opacity: 0.6 },
    hover: {
      opacity: [0.6, 1, 0.6],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Pulse light effect (GitHub)
  'pulse-light': {
    initial: { scale: 1, filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))' },
    hover: {
      scale: [1, 1.08, 1],
      filter: [
        'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
        'drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))',
        'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
      ],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Shimmer triangle (Vercel)
  'shimmer-triangle': {
    initial: { backgroundPosition: '0% 0%' },
    hover: {
      backgroundPosition: ['200% 0%', '-200% 0%'],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Network dots (Node.js)
  'network-dots': {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.1, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Speed line (Express)
  'speed-line': {
    initial: { x: -10, opacity: 0.5 },
    hover: {
      x: [- 10, 10, -10],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Cross flow (Python)
  'cross-flow': {
    initial: { rotate: 0 },
    hover: {
      rotate: [0, 180, 360],
      transition: { duration: 3, repeat: Infinity, ease: 'linear' },
    },
  },
  // Wave heavy (PostgreSQL)
  'wave-heavy': {
    initial: { y: 0, boxShadow: '0 0 0px rgba(50, 100, 200, 0)' },
    hover: {
      y: [0, -2, 2, 0],
      boxShadow: [
        '0 0 0px rgba(50, 100, 200, 0)',
        '0 0 15px rgba(50, 100, 200, 0.5)',
        '0 0 0px rgba(50, 100, 200, 0)',
      ],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Flame flicker (Firebase)
  'flame-flicker': {
    initial: { scale: 1, opacity: 1 },
    hover: {
      scale: [1, 1.05, 0.98, 1],
      opacity: [1, 0.9, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Orbital data (OpenAI)
  'orbital-data': {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: { duration: 3, repeat: Infinity, ease: 'linear' },
    },
  },
  // Dual glow (Gemini)
  'dual-glow': {
    initial: { scale: 1, filter: 'drop-shadow(0 0 0px rgba(139, 92, 246, 0))' },
    hover: {
      scale: [1, 1.1, 1],
      filter: [
        'drop-shadow(0 0 0px rgba(139, 92, 246, 0))',
        'drop-shadow(0 0 16px rgba(139, 92, 246, 0.7))',
        'drop-shadow(0 0 0px rgba(139, 92, 246, 0))',
      ],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Warm gradient (Claude)
  'warm-gradient': {
    initial: { backgroundPosition: '0% 0%' },
    hover: {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Code typing effect (GitHub Copilot)
  'code-typing': {
    initial: { opacity: 1 },
    hover: {
      opacity: [1, 0.7, 1],
      transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Gradient flow (Midjourney)
  'gradient-flow': {
    initial: { backgroundPosition: '0% 0%' },
    hover: {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Grid building (v0)
  'grid-building': {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.08, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Connected nodes (REST API)
  'connected-nodes': {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.1, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  // Flight path (Postman)
  'flight-path': {
    initial: { rotate: 0 },
    hover: {
      rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
      transition: { duration: 4, repeat: Infinity, ease: 'linear' },
    },
  },
  // Shape nodes (Figma)
  'shape-nodes': {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.05, 0.98, 1.02, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
  },
};

export const TechIcon = ({
  icon: Icon,
  animationType,
  isHovered = false,
  color,
  size = 32,
}: TechIconProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animationConfig = animationVariants[animationType];

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : animationConfig}
      initial="initial"
      whileHover={!prefersReducedMotion ? 'hover' : {}}
      className="inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {typeof Icon === 'function' && !Icon.prototype ? (
        <div className="flex items-center justify-center w-full h-full" style={{ color: color || 'currentColor' }}>
          <Icon />
        </div>
      ) : (
        <Icon
          size={size}
          style={{
            color: color || 'currentColor',
          }}
        />
      )}
    </motion.div>
  );
};
