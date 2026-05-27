'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const pulseVariants = {
    initial: { opacity: 0.4 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgb(14_165_233/0.15),transparent_70%)] blur-3xl" />
      </div>

      {/* Loading content */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col gap-8 items-center"
      >
        {/* Logo or branding */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-12 h-12 rounded-lg border-2 border-accent/30 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-8 h-8 rounded border border-accent/50" />
          </motion.div>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          variants={itemVariants}
          className="flex gap-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={pulseVariants}
              className="w-2 h-2 rounded-full bg-accent/60"
              transition={{
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-muted/60 uppercase tracking-wider"
        >
          Carregando portfólio...
        </motion.p>
      </motion.div>
    </div>
  );
}
