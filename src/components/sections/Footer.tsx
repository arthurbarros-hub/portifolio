'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi';

import { motion as motionTokens } from '@/styles/tokens';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 10 },
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

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  external: boolean;
}

export const Footer = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const quickLinks = useMemo<FooterLink[]>(
    () => [
      { label: 'Início', href: '#home' },
      { label: 'Sobre', href: '#about' },
      { label: 'Projetos', href: '#projects' },
      { label: 'Tecnologias', href: '#tech' },
      { label: 'Reconhecimento', href: '#achievements' },
      { label: 'Contato', href: '#contact' },
    ],
    [],
  );

  const socialLinks = useMemo<SocialLink[]>(
    () => [
      {
        icon: <FiGithub className="w-5 h-5" />,
        label: 'GitHub',
        href: 'https://github.com/arthurbarros-hub',
        external: true,
      },
      {
        icon: <FiLinkedin className="w-5 h-5" />,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/arthur-mansur-05a617305/',
        external: true,
      },
      {
        icon: <FiMail className="w-5 h-5" />,
        label: 'E-mail',
        href: 'mailto:barrosarthur312@gmail.com',
        external: false,
      },
    ],
    [],
  );

  const handleNavigation = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-surface/50 backdrop-blur-xl">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:120px_120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(14_165_233/0.1),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial={prefersReducedMotion ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          >
            {/* Brand / Bio */}
            <motion.div variants={revealVariants} className="lg:col-span-1">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white">Arthur Mansur</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Desenvolvedor Back-End em evolução no ecossistema Java.
                </p>
                <p className="text-xs text-muted/60">
                  Construído com foco em performance, acessibilidade e experiência premium.
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={revealVariants} className="lg:col-span-1">
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Links Rápidos
                </h4>
                <nav className="flex flex-col gap-2">
                  {quickLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleNavigation(link.href, link.external)}
                      aria-label={`Ir para ${link.label}`}
                      className="text-sm text-muted hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={revealVariants} className="lg:col-span-1">
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Social
                </h4>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleNavigation(link.href, link.external)}
                      aria-label={`Acessar ${link.label} ${link.external ? '(abre em nova aba)' : ''}`}
                      className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 group"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                      {link.external && (
                        <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Used */}
            <motion.div variants={revealVariants} className="lg:col-span-1">
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Tecnologias
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Next.js, TypeScript e Tailwind CSS.
                </p>
                <p className="text-xs text-muted/60">
                  Código aberto e otimizado para web moderno.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Section */}
          <motion.div
            variants={revealVariants}
            initial={prefersReducedMotion ? 'show' : 'hidden'}
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between"
          >
            <p className="text-xs sm:text-sm text-muted/70 text-center sm:text-left">
              © 2026 Arthur Mansur. Desenvolvido com Next.js, TypeScript e Tailwind CSS.
            </p>
            <p className="text-xs text-muted/60 text-center">
              Foco em performance, acessibilidade e código premium.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
