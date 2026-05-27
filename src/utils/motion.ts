import type { Transition, Variants } from 'framer-motion';

import { motion as motionTokens } from '@/styles/tokens';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.soft,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.ease.soft,
    },
  },
};

export const withReducedMotion = (reduced: boolean, transition: Transition): Transition =>
  reduced ? { duration: 0 } : transition;

