'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { TechLogoStrip } from '@/components/ui/TechLogoStrip';
import { PremiumBadge } from '@/components/ui/PremiumBadge';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Button } from '@/components/ui/Button';
import { GlowWrapper } from '@/components/ui/GlowWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { motion as motionTokens } from '@/styles/tokens';

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

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: motionTokens.ease.soft },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(12px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: motionTokens.ease.soft },
  },
};

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 320], [0, 36]);
  const glowY = useTransform(scrollY, [0, 320], [0, -28]);

  const animationProps = prefersReducedMotion
    ? { initial: false }
    : { initial: false, animate: 'show', variants: containerVariants };

  return (
    <SectionContainer
      as="section"
      className="relative min-h-screen overflow-visible pt-32 sm:pt-40 lg:pt-48 pb-14 sm:pb-16 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(var(--glow-color)/0.45),transparent_70%)] blur-3xl"
      />
      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div className="flex max-w-[640px] flex-col gap-5 lg:gap-6" {...animationProps}>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <PremiumBadge>ARTHUR MANSUR</PremiumBadge>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              BACK-END JAVA • WEB • APIs • INFRAESTRUTURA
            </span>
          </motion.div>
          <motion.h1
            className="max-w-[20ch] text-[clamp(1.9rem,8vw,2.8rem)] font-semibold leading-[1.12] text-fg sm:text-[clamp(2.2rem,4.5vw,3.4rem)] sm:leading-[1.12] lg:text-[clamp(2.4rem,3.4vw,4rem)] lg:leading-[1.12]"
            variants={itemVariants}
          >
            Desenvolvedor Back-End em evolução no ecossistema Java.
          </motion.h1>
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-muted"
            variants={itemVariants}
          >
            Desenvolvedor Back-End | Desenvolvimento Web
          </motion.p>
          <motion.p
            className="max-w-[580px] text-base leading-relaxed text-muted sm:text-lg"
            variants={itemVariants}
          >
            Experiência prática com infraestrutura, suporte técnico, automação com Python, integração
            de APIs e desenvolvimento web moderno com Next.js e TypeScript.
          </motion.p>
          <motion.div className="flex flex-wrap gap-3 pt-1" variants={itemVariants}>
            <MagneticButton size="md">Ver projetos</MagneticButton>
            <Button size="md" variant="outline">
              Entrar em contato
            </Button>
          </motion.div>

          {/* Curriculum Buttons */}
          <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
            <a
              href="/documents/curriculo-arthur-mansur.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visualizar currículo em PDF (abre em nova aba)"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 text-sm font-semibold uppercase tracking-[0.2em] hover:shadow-lg hover:shadow-accent/20"
            >
              Visualizar Currículo
            </a>
            <a
              href="/documents/curriculo-arthur-mansur.pdf"
              download="curriculo-arthur-mansur.pdf"
              aria-label="Baixar currículo em PDF"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm font-semibold uppercase tracking-[0.2em] hover:shadow-lg hover:shadow-white/10"
            >
              Baixar PDF
            </a>
          </motion.div>

          {/* Tech Logo Strip */}
          <motion.div className="pt-8" variants={itemVariants}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
              Ferramentas que utilizo
            </p>
            <TechLogoStrip />
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted"
            variants={itemVariants}
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-glow-sm" />
            Disponível para oportunidades em tecnologia
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 flex justify-center lg:justify-end lg:pt-6"
          variants={imageVariants}
          initial={false}
          animate={prefersReducedMotion ? undefined : 'show'}
          style={{ y: prefersReducedMotion ? 0 : imageY }}
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 top-8 z-0 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_top,rgb(var(--glow-color)/0.22),transparent_70%)] blur-2xl"
            style={{ y: prefersReducedMotion ? 0 : glowY }}
          />
          <GlowWrapper className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]">
            <GlassCard className="relative overflow-hidden border border-white/10 bg-surface/70 p-2 sm:p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/profile/arthur-hero.webp"
                  alt="Arthur Mansur portrait"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(9,11,16,0.2),rgba(9,11,16,0.7))]" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-glow-sm" />
            </GlassCard>
          </GlowWrapper>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
