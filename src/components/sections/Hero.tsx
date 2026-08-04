'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { TechLogoStrip } from '@/components/ui/TechLogoStrip';
import { buttonStyles } from '@/components/ui/Button';
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
      className="relative overflow-visible pt-24 sm:pt-28 lg:pt-28 pb-12 sm:pb-14 lg:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(var(--glow-color)/0.45),transparent_70%)] blur-3xl"
      />
      <div className="relative z-10 grid items-center gap-10 xl:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div className="flex max-w-[540px] flex-col gap-4 lg:gap-4.5" {...animationProps}>
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted sm:text-sm">
            <span>SUPORTE TÉCNICO</span>
            <span aria-hidden="true">·</span>
            <span>DESENVOLVIMENTO WEB</span>
            <span aria-hidden="true">·</span>
            <span>BACK-END JAVA</span>
          </motion.div>
          <motion.h1
            className="max-w-[14ch] text-4xl font-semibold leading-[1.05] text-fg text-balance sm:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Construindo minha carreira em Back-End Java.
          </motion.h1>
          <motion.p
            className="max-w-xl text-base leading-7 text-muted lg:text-lg"
            variants={itemVariants}
          >
            Sou técnico em Informática para Internet pelo IFSP, estudante de Análise e Desenvolvimento de Sistemas e atuo com suporte técnico corporativo. Minha experiência com resolução de problemas, desenvolvimento web e automação com Python sustenta meu avanço nos estudos de Java, Spring Boot e MySQL.
          </motion.p>
          <motion.div className="flex flex-wrap gap-2 pt-1" variants={itemVariants}>
            <a
              href="#projetos"
              aria-label="Ir para a seção de projetos"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('projetos')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className={buttonStyles({ variant: 'primary', size: 'sm' })}
            >
              VER PROJETOS
            </a>
            <a
              href="#contato"
              aria-label="Ir para a seção de contato"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('contato')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className={buttonStyles({ variant: 'outline', size: 'sm' })}
            >
              ENTRAR EM CONTATO
            </a>
          </motion.div>

          {/* Curriculum Buttons */}
          <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
            <a
              href="/documents/ArthurCv%20(1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visualizar currículo em PDF (abre em nova aba)"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 px-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-all duration-300 hover:border-accent/50 hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/20"
            >
              Visualizar Currículo
            </a>
            <a
              href="/documents/ArthurCv%20(1).pdf"
              download="ArthurCv.pdf"
              aria-label="Baixar currículo em PDF"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
            >
              Baixar PDF
            </a>
          </motion.div>

          {/* Tech Logo Strip */}
          <motion.div className="pt-4" variants={itemVariants}>
            <TechLogoStrip />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 flex justify-center lg:justify-end lg:pt-4"
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
          <GlowWrapper className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[360px]">
            <GlassCard className="relative overflow-hidden border border-white/10 bg-surface/70 p-1.5 sm:p-2">
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

