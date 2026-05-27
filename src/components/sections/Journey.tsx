'use client';

import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Timeline, type TimelineItem } from '@/components/ui/Timeline';
import { GlowWrapper } from '@/components/ui/GlowWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { motion as motionTokens } from '@/styles/tokens';

const journeyItems: TimelineItem[] = [
  {
    title: 'Base sólida em suporte técnico',
    description:
      'Atuação prática com manutenção, configuração de computadores, redes locais, sistemas operacionais, troubleshooting e atendimento técnico institucional.',
    meta: 'SUPORTE & INFRAESTRUTURA',
  },
  {
    title: 'Automação e sistemas conectados',
    description:
      'Experiência no desenvolvimento de soluções com Python, integração de APIs, sensores físicos, Arduino e Raspberry Pi, conectando software e hardware.',
    meta: 'AUTOMAÇÃO & INTEGRAÇÃO',
  },
  {
    title: 'Construção de aplicações modernas',
    description:
      'Desenvolvimento de interfaces e aplicações com Next.js, React, TypeScript e Tailwind CSS, com foco em performance, componentização e experiência do usuário.',
    meta: 'DESENVOLVIMENTO WEB',
  },
  {
    title: 'Especialização em desenvolvimento back-end',
    description:
      'Transição estratégica para o ecossistema Java, com foco em orientação a objetos, APIs REST, modelagem relacional, lógica de programação e arquitetura back-end.',
    meta: 'BACK-END JAVA',
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: motionTokens.ease.soft },
  },
};

export const JourneySection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionContainer as="section" className="relative py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,rgb(var(--glow-color)/0.25),transparent_70%)] blur-3xl"
      />
      <div className="relative z-10 flex flex-col gap-10 lg:gap-12">
        <AnimatedHeading
          eyebrow="JORNADA TÉCNICA"
          title="Minha jornada em tecnologia"
          subtitle="Da infraestrutura e suporte técnico à evolução para desenvolvimento Back-End no ecossistema Java."
          size="lg"
          accent
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            variants={revealVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <GlowWrapper>
              <GlassCard className="flex h-full flex-col gap-5 p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent/70 shadow-glow-sm" />
                  Contexto
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-fg">Como minha base técnica evoluiu</h3>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    Minha experiência começou no contato direto com computadores, redes e usuários.
                    Essa vivência prática me deu uma visão completa sobre problemas reais de
                    tecnologia, criando a base para evoluir para desenvolvimento, automação e
                    back-end.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Base técnica', 'Conectividade', 'Produto', 'Especialização'].map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/10 bg-surface/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-muted"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </GlowWrapper>
          </motion.div>
          <motion.div
            variants={revealVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <Timeline items={journeyItems} />
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};
