'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { motion as motionTokens } from '@/styles/tokens';

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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: motionTokens.ease.soft },
  },
};

export const TechnicalExperienceSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [imageError, setImageError] = useState(false);

  const experienceData = useMemo(
    () => ({
      headline: 'Visita Técnica — Globo Studios',
      subheadline: 'Imersão em infraestrutura enterprise e ambiente broadcast',
      mainDescription:
        'Experiência de imersão técnica em ambiente de produção audiovisual de grande escala, com observação da infraestrutura tecnológica, conectividade entre sistemas, operação de estúdios e arquitetura utilizada em ecossistemas de alta disponibilidade.',
      complementaryText:
        'Vivência prática para ampliar visão sobre redes robustas, infraestrutura crítica, fluxos operacionais e integração entre múltiplas tecnologias em ambiente corporativo de missão crítica.',
      badges: [
        'INFRAESTRUTURA',
        'REDES',
        'BROADCAST',
        'ALTA DISPONIBILIDADE',
        'ECOSSISTEMAS CORPORATIVOS',
        'VISITA TÉCNICA',
      ],
      image: {
        src: '/images/experiences/globo/globo-tech.webp',
        alt: 'Infraestrutura técnica e ambiente de produção dos Globo Studios',
      },
    }),
    [],
  );

  const animationSettings = prefersReducedMotion
    ? { initial: 'show', animate: 'show' }
    : { initial: 'hidden', animate: 'show' };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <SectionContainer>
        {/* Background glow effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-20" />
        </div>

        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={revealVariants}
          {...animationSettings}
        >
          <AnimatedHeading
            eyebrow="FORMAÇÃO TÉCNICA"
            title={experienceData.headline}
            subtitle={experienceData.subheadline}
            size="lg"
          />
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center mb-12">
          {/* Content column */}
          <motion.div
            className="flex flex-col gap-6"
            variants={revealVariants}
            {...animationSettings}
          >
            {/* Main description */}
            <GlassCard className="p-6 md:p-8 bg-blue-950/20 border border-blue-400/10">
              <p className="text-base md:text-lg leading-relaxed text-slate-200 font-light">
                {experienceData.mainDescription}
              </p>
            </GlassCard>

            {/* Complementary text */}
            <div className="px-6 md:px-8 py-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-blue-400/10">
              <p className="text-sm md:text-base leading-relaxed text-slate-300 font-light">
                {experienceData.complementaryText}
              </p>
            </div>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-2 md:gap-3"
              variants={containerVariants}
              {...animationSettings}
            >
              {experienceData.badges.map((badge, index) => (
                <motion.div
                  key={badge}
                  variants={badgeVariants}
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-200/80">
                    {badge}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden"
            variants={revealVariants}
            {...animationSettings}
            whileHover={
              !prefersReducedMotion
                ? { scale: 1.02, transition: { duration: 0.3 } }
                : {}
            }
          >
            {/* Premium border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Glass overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-blue-400/20 shadow-2xl shadow-blue-500/20">
              {!imageError ? (
                <Image
                  src={experienceData.image.src}
                  alt={experienceData.image.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                  <div className="text-5xl mb-3">🏢</div>
                  <p className="text-sm text-slate-400 text-center px-4">
                    Globo Studios — Infraestrutura Técnica
                  </p>
                </div>
              )}

              {/* Glow effect */}
              <div className="absolute inset-0 bg-radial-gradient from-blue-400/0 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Corner accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
          </motion.div>
        </div>

        {/* Impact statement */}
        <motion.div
          className="mt-12 pt-12 border-t border-blue-400/10"
          variants={revealVariants}
          {...animationSettings}
        >
          <p className="text-sm uppercase tracking-widest text-blue-300/60 mb-3">
            Contexto
          </p>
          <p className="text-base md:text-lg text-slate-200 leading-relaxed font-light max-w-2xl">
            Participação em imersão técnica que ampliou compreensão sobre infraestrutura corporativa em larga escala, visão sobre conectividade robusta, operação de ambientes críticos e integração de múltiplos sistemas em ecossistema profissional broadcast.
          </p>
        </motion.div>
      </SectionContainer>
    </section>
  );
};
