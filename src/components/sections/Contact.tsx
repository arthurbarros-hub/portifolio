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

const EMAIL_HREF = 'mailto:barrosarthur312@gmail.com?subject=Contato%20pelo%20Portfolio';

export const ContactSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const contactCards = useMemo<ContactCard[]>(
      () => [
      {
        id: 'email',
        icon: <FiMail className="w-6 h-6" />,
        label: 'E-mail',
        value: 'barrosarthur312@gmail.com',
        href: EMAIL_HREF,
        external: false,
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
        value: 'github.com/mansurth',
        href: 'https://github.com/mansurth',
        external: true,
      },
      {
        id: 'location',
        icon: <FiMapPin className="w-6 h-6" />,
        label: 'São Paulo, SP',
        value: 'Disponível para oportunidades híbridas, remotas ou presenciais.',
      },
    ],
    [],
  );

  const handleContactClick = (href?: string, external?: boolean) => {
    if (!href) return;
    if (href.startsWith('mailto:')) {
      window.location.href = href;
      return;
    }
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <SectionContainer id="contato" as="section" className="relative overflow-visible scroll-mt-24 py-12 sm:py-14 lg:py-16">
        {/* Background effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:120px_120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(139_92_246/0.25),transparent_70%)] blur-3xl"
        />

        <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Contato
            </h2>
            <p className="max-w-3xl text-base leading-7 text-muted sm:text-lg">
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
            <p className="text-base leading-7 text-muted sm:text-lg">
              Se você busca alguém com base prática em infraestrutura, experiência em desenvolvimento web e evolução contínua no ecossistema Java, vamos conversar.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial={prefersReducedMotion ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4"
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
                    className={`h-full flex flex-col gap-2.5 p-5 sm:p-6 transition-all duration-300 ${
                      card.href ? 'hover:border-accent/40' : ''
                    } ${card.href ? 'cursor-pointer' : 'cursor-default'}`}
                    aria-label={card.ariaLabel}
                    role={card.href ? 'button' : undefined}
                  >
                    {/* Icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                      <span className="text-accent">{card.icon}</span>
                    </div>

                    {/* Label */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {card.label}
                      </h3>
                      {card.external && (
                        <FiExternalLink className="w-4 h-4 text-accent/60 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      )}
                    </div>

                    {/* Value */}
                    <p className="text-sm font-medium text-muted transition-colors duration-300 group-hover:text-white" style={{ wordBreak: 'break-word' }}>
                      {card.value}
                    </p>

                    {/* Description */}
                    {card.description && (
                      <p className="mt-1 text-xs leading-6 text-muted/70 sm:text-sm">
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
            className="relative mt-6 sm:mt-8"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent/5 blur-lg opacity-60"
            />
            <GlassCard className="relative flex flex-col gap-5 p-6 sm:p-8">
              {/* CTA Headline */}
              <div className="flex flex-col gap-2.5">
                <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  Disponível para oportunidades em tecnologia
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
                  Busco oportunidades para aplicar minha base técnica, evoluir como desenvolvedor back-end e contribuir com produtos digitais reais.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
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
                    onClick={() => window.open('https://github.com/mansurth', '_blank', 'noopener,noreferrer')}
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

