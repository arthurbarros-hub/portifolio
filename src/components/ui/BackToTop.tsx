'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: 20 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-lg border border-accent/30 bg-accent/10 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
          aria-label="Voltar ao topo"
        >
          <FiArrowUp className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
          <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent/20 via-transparent to-accent/10 blur-md" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

