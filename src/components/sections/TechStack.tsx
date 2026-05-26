'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { TechIcon } from '@/components/icons/TechIcon2';
import { technologies } from '@/data/tech-stack-icons';
import { motion as motionTokens } from '@/styles/tokens';

const categories = [
  {
    id: 'frontend',
    label: 'FRONT-END',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-400/20',
  },
  {
    id: 'backend',
    label: 'BACK-END',
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-400/20',
  },
  {
    id: 'database',
    label: 'DATABASE',
    color: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'border-indigo-400/20',
  },
  {
    id: 'tools',
    label: 'TOOLS & PLATFORMS',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-400/20',
  },
  {
    id: 'ai',
    label: 'AI & PRODUTIVIDADE',
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-400/20',
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: motionTokens.ease.soft },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const marqueeVariants = {
  animate: {
    x: [-1000, -2000],
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const TechStackSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Triple the items for seamless marquee loop
  const marqueeItems = technologies.flatMap((tech) =>
    Array.from({ length: 3 }, (_, i) => ({ ...tech, key: `${tech.name}-${i}` })),
  );

  const animationSettings = prefersReducedMotion
    ? { initial: 'show', animate: 'show' }
    : { initial: 'hidden', animate: 'show' };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <SectionContainer>
        {/* Background glows */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20" />
        </div>

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={revealVariants}
          {...animationSettings}
        >
          <AnimatedHeading
            eyebrow="ECOSSISTEMA TÉCNICO"
            title="Tecnologias que utilizo para construir experiências digitais"
            subtitle="Ferramentas, frameworks e tecnologias aplicadas em projetos reais, interfaces modernas, integrações e evolução back-end."
            size="lg"
            accent
          />
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={revealVariants}
          {...animationSettings}
        >
          <div className="relative overflow-hidden rounded-2xl border border-blue-400/10 bg-gradient-to-r from-blue-950/30 to-purple-950/30 backdrop-blur-sm p-8">
            {/* Gradient overlays for fade effect */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/60 to-transparent" />
            </div>

            {/* Marquee content */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6 w-max"
                animate={prefersReducedMotion ? { x: 0 } : 'animate'}
                variants={marqueeVariants}
                whileHover={!prefersReducedMotion ? { animationPlayState: 'paused' } : {}}
              >
                {marqueeItems.map((tech) => (
                  <motion.div
                    key={tech.key}
                    className="flex-shrink-0 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group cursor-default"
                    whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : {}}
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                      <div className="w-4 h-4 text-blue-300 group-hover:text-cyan-300 transition-colors duration-300">
                        <tech.icon />
                      </div>
                      <span className="whitespace-nowrap">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          {...animationSettings}
        >
          {categories.map((category) => {
            const categoryTechs = technologies.filter((tech) => tech.category === category.id);

            return (
              <motion.div key={category.id} variants={revealVariants} className="group">
                {/* Category Header */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                    {category.label}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-transparent" />
                </div>

                {/* Technology Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {categoryTechs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="group/card"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      whileHover={
                        !prefersReducedMotion
                          ? { scale: 1.05, transition: { duration: 0.2 } }
                          : {}
                      }
                    >
                      <GlassCard
                        className={`relative overflow-hidden p-4 h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${category.color} ${category.borderColor} hover:border-blue-300/40 transition-all duration-300`}
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/0 to-cyan-400/0 opacity-0 group-hover/card:opacity-20 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                          <TechIcon
                            icon={tech.icon}
                            animationType={tech.animationType}
                            isHovered={hoveredTech === tech.name}
                            color={tech.brandColor}
                            size={32}
                          />
                          <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 group-hover/card:text-blue-200 transition-colors duration-300 leading-tight">
                            {tech.name}
                          </div>
                        </div>

                        {/* Corner accents */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-blue-400/30 rounded-sm group-hover/card:border-blue-300/60 transition-colors duration-300" />
                          <div className="absolute top-1 right-1 w-1.5 h-1.5 border-r border-t border-blue-400/30 rounded-sm group-hover/card:border-blue-300/60 transition-colors duration-300" />
                          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-l border-b border-blue-400/30 rounded-sm group-hover/card:border-blue-300/60 transition-colors duration-300" />
                          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-r border-b border-blue-400/30 rounded-sm group-hover/card:border-blue-300/60 transition-colors duration-300" />
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionContainer>
    </section>
  );
};
