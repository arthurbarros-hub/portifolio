'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const AchievementsSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const impactMetrics = useMemo(
    () => [
      {
        label: 'Projetos Desenvolvidos',
        value: '7+',
      },
      {
        label: 'Tecnologias Aplicadas',
        value: '10+',
      },
      {
        label: 'Experiência Prática',
        value: 'Projetos reais',
      },
      {
        label: 'Foco Atual',
        value: 'Back-End Java',
      },
    ],
    [],
  );

  return (
    <SectionContainer as="section" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:120px_120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(14_165_233/0.2),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-12 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,rgb(99_102_241/0.2),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 flex flex-col gap-10 lg:gap-12">
        <AnimatedHeading
          eyebrow="RECONHECIMENTO"
          title="Reconhecimento & Conquistas"
          subtitle="Projetos que ultrapassaram o código e geraram impacto real em ambientes acadêmicos e tecnológicos."
          size="lg"
          accent
        />

        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-8"
        >
          {/* Institutional Recognition */}
          <motion.div variants={revealVariants}>
            <div className="group relative">
              <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(circle_at_top,rgb(99_102_241/0.35),transparent_70%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <GlassCard className="relative overflow-hidden p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs uppercase tracking-[0.35em] font-semibold text-accent/80 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10">
                      VALIDAÇÃO REAL
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-fg leading-tight">
                    Reconhecimento Institucional
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Participação ativa em iniciativas práticas de tecnologia aplicada, com projetos apresentados e validados em ambiente educacional e experimental.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted px-3 py-1.5 rounded-full border border-white/10 bg-surface/60">
                      FabLab
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted px-3 py-1.5 rounded-full border border-white/10 bg-surface/60">
                      Ambiente Educacional
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted px-3 py-1.5 rounded-full border border-white/10 bg-surface/60">
                      Inovação
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Impact Metrics */}
          <div className="grid gap-6 lg:grid-cols-2">
            {impactMetrics.map((metric) => (
              <motion.div key={metric.label} variants={revealVariants}>
                <div className="group relative">
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
                  <GlassCard className="relative overflow-hidden p-6 sm:p-8">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted/80">
                        {metric.label}
                      </p>
                      <div className="text-3xl sm:text-4xl font-bold text-accent">
                        {metric.value}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
