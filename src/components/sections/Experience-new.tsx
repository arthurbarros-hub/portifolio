'use client';

import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { PremiumBadge } from '@/components/ui/PremiumBadge';
import { motion as motionTokens } from '@/styles/tokens';
import { cn } from '@/utils/cn';

const experiences = [
  {
    role: 'Analista de Suporte Técnico Corporativo (Estágio)',
    company: 'Secretaria da Educação do Estado de São Paulo',
    period: 'Abr 2026 — Presente',
    summary:
      'Atuação prática em sustentação tecnológica institucional, garantindo disponibilidade de equipamentos, conectividade e suporte operacional para usuários e ambientes corporativos.',
    impact: 'Impacto institucional',
    bullets: [
      'Manutenção preventiva e corretiva de computadores e tablets institucionais.',
      'Configuração, atualização e troubleshooting de sistemas operacionais.',
      'Administração de redes locais cabeadas e Wi-Fi.',
      'Configuração de roteadores e diagnóstico de conectividade.',
      'Suporte técnico a usuários internos e resolução ágil de chamados.',
      'Apoio operacional em sistemas institucionais e Google Workspace.',
    ],
    tags: ['Suporte Técnico', 'Infraestrutura', 'Redes', 'Google Workspace', 'Windows', 'Linux'],
  },
  {
    role: 'Estagiário / Técnico de Fabricação Digital',
    company: 'FabLab Fabricação Digital',
    period: 'Jul 2025 — Dez 2025',
    summary:
      'Experiência prática no desenvolvimento de protótipos interativos, automação e integração entre software, hardware e inteligência artificial aplicada.',
    impact: 'Inovação aplicada',
    bullets: [
      'Desenvolvimento de assistente interativo com Python e OpenAI API.',
      'Integração entre sensores físicos e interface digital.',
      'Prototipagem com Arduino e Raspberry Pi.',
      'Desenvolvimento experimental de soluções interativas.',
      'Organização e versionamento contínuo com Git.',
    ],
    tags: ['Python', 'OpenAI API', 'Arduino', 'Raspberry Pi', 'Git', 'Automação'],
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

export const ExperienceSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionContainer as="section" className="relative pb-20 sm:pb-24 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,rgb(var(--glow-color)/0.2),transparent_70%)] blur-3xl"
      />
      <div className="relative z-10 flex flex-col gap-10 lg:gap-12">
        <AnimatedHeading
          eyebrow="EXPERIÊNCIA PROFISSIONAL"
          title="Experiência aplicada em ambientes reais"
          subtitle="Experiências profissionais que consolidaram minha base técnica e aceleraram minha evolução para desenvolvimento de software."
          size="lg"
          accent
        />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Vivência profissional
            </span>
            <span className="h-px flex-1 bg-border/50" />
          </div>
          <p className="max-w-2xl text-sm text-muted">
            Cada etapa consolidou minha base técnica e acelerou minha evolução para desenvolvimento de software, atuando em ambientes reais corporativos e de inovação digital.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${index}`}
              variants={revealVariants}
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <GlassCard className="flex h-full flex-col gap-6 p-6 sm:p-7 hover:border-accent/50 transition-colors">
                <div className="flex flex-wrap items-center gap-3">
                  <PremiumBadge>{experience.period}</PremiumBadge>
                  <span className="text-xs uppercase tracking-[0.26em] text-muted">
                    {experience.company}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-fg">{experience.role}</h3>
                  <p className="text-sm leading-relaxed text-muted">{experience.summary}</p>
                  {experience.impact ? (
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-accent font-semibold">
                      {experience.impact}
                    </span>
                  ) : null}
                  <ul className="space-y-3 text-sm text-muted">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        'rounded-full border border-white/10 bg-surface/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-muted hover:border-accent/30 transition-colors',
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
