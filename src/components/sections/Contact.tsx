'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiExternalLink } from 'react-icons/fi';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { GlowWrapper } from '@/components/ui/GlowWrapper';
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
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardHoverVariants = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: motionTokens.ease.soft },
  },
};

interface ContactCard {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  description?: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
}

export const ContactSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const contactCards = useMemo<ContactCard[]>(
    () => [
      {
        id: 'email',
        icon: <FiMail className="w-6 h-6" />,
        label: 'E-mail',
        value: 'barrosarthur312@gmail.com',
        href: 'mailto:barrosarthur312@gmail.com',
        ariaLabel: 'Enviar e-mail para Arthur Mansur',
      },
      {
        id: 'linkedin',
        icon: <FiLinkedin className="w-6 h-6" />,
        label: 'LinkedIn',
        value: 'linkedin.com/in/arthur-mansur',
        href: 'https://www.linkedin.com/in/arthur-mansur-05a617305/',
        external: true,
      },
      {
        id: 'github',
        icon: <FiGithub className="w-6 h-6" />,
        label: 'GitHub',
        value: 'github.com/arthurbarros-hub',
        href: 'https://github.com/arthurbarros-hub',
        external: true,
      },
      {
        id: 'location',
        icon: <FiMapPin className="w-6 h-6" />,
        label: 'SÃ£o Paulo, SP',
        value: 'DisponÃ­vel para oportunidades hÃ­bridas, remotas ou presenciais.',
      },
    ],
    [],
  );

  const handleContactClick = (href?: string, external?: boolean) => {
    if (!href) return;
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <SectionContainer id="contato" as="section" className="relative overflow-visible py-16 sm:py-20 lg:py-24">
        {/* Background effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:120px_120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_top,rgb(14_165_233/0.25),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(139_92_246/0.25),transparent_70%)] blur-3xl"
        />

        <div className="relative z-10 flex flex-col gap-12 lg:gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Contato
            </h2>
            <p className="text-lg sm:text-xl text-muted max-w-3xl leading-relaxed">
              Vamos conversar sobre oportunidades, projetos ou tecnologia.
            </p>
          </div>

          {/* Complementary text */}
          <motion.div
            variants={revealVariants}
            initial={prefersReducedMotion ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            className="max-w-3xl"
          >
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Se vocÃª busca alguÃ©m com base prÃ¡tica em infraestrutura, experiÃªncia com desenvolvimento web e evoluÃ§Ã£o contÃ­nua no ecossistema Java, vamos conversar.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial={prefersReducedMotion ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {contactCards.map((card) => (
              <motion.div
                key={card.id}
                variants={revealVariants}
                initial={prefersReducedMotion ? 'show' : 'hidden'}
                whileInView="show"
                viewport={{ once: true }}
                whileHover={prefersReducedMotion ? 'rest' : 'hover'}
                className="group cursor-pointer"
              >
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <GlassCard
                    onClick={() => handleContactClick(card.href, card.external)}
                    className={`h-full flex flex-col gap-3 p-6 sm:p-8 transition-all duration-300 ${
                      card.href ? 'hover:border-accent/40' : ''
                    } ${card.href ? 'cursor-pointer' : 'cursor-default'}`}
                    aria-label={card.ariaLabel}
                    role={card.href ? 'button' : undefined}
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <span className="text-accent">{card.icon}</span>
                    </div>

                    {/* Label */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                        {card.label}
                      </h3>
                      {card.external && (
                        <FiExternalLink className="w-4 h-4 text-accent/60 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      )}
                    </div>

                    {/* Value */}
                    <p className="text-sm sm:text-base text-muted font-medium group-hover:text-white transition-colors duration-300" style={{ wordBreak: 'break-word' }}>
                      {card.value}
                    </p>

                    {/* Description */}
                    {card.description && (
                      <p className="text-xs sm:text-sm text-muted/70 leading-relaxed mt-1">
                        {card.description}
                      </p>
                    )}
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Block */}
          <motion.div
            variants={revealVariants}
            initial={prefersReducedMotion ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            className="relative mt-8 sm:mt-12"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent/5 blur-lg opacity-60"
            />
            <GlassCard className="relative p-8 sm:p-12 flex flex-col gap-6">
              {/* CTA Headline */}
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  DisponÃ­vel para oportunidades em tecnologia
                </h2>
                <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                  Busco oportunidades para aplicar minha base tÃ©cnica, evoluir como desenvolvedor back-end e contribuir com produtos digitais reais.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <GlowWrapper intensity="soft">
                  <Button
                    onClick={() => window.location.href = 'mailto:barrosarthur312@gmail.com'}
                    className="w-full sm:w-auto px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 text-accent hover:text-white"
                  >
                    Enviar e-mail
                  </Button>
                </GlowWrapper>
                <GlowWrapper intensity="soft">
                  <Button
                    onClick={() => window.open('https://www.linkedin.com/in/arthur-mansur-05a617305/', '_blank', 'noopener,noreferrer')}
                    className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white"
                  >
                    Ver LinkedIn
                  </Button>
                </GlowWrapper>
                <GlowWrapper intensity="soft">
                  <Button
                    onClick={() => window.open('https://github.com/arthurbarros-hub', '_blank', 'noopener,noreferrer')}
                    className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white"
                  >
                    Ver GitHub
                  </Button>
                </GlowWrapper>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
};

