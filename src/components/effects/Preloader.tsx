'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { motion as motionTokens } from '@/styles/tokens';

const DISPLAY_DURATION_MS = 1100;
const EXIT_DURATION_S = 0.35;

export const Preloader = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(false), prefersReducedMotion ? 0 : DISPLAY_DURATION_MS);

    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: prefersReducedMotion ? 0 : EXIT_DURATION_S,
              ease: motionTokens.ease.soft,
            },
          }}
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="text-xs uppercase tracking-[0.45em] text-muted">
              Arthur Mansur
            </span>
            <motion.div
              className="h-px w-52 overflow-hidden rounded-full bg-border/40"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: motionTokens.ease.soft }}
            >
              <motion.span
                className="block h-full w-full bg-accent"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: prefersReducedMotion ? 0 : 1.1, ease: motionTokens.ease.soft }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
