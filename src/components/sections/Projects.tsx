'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { buttonStyles } from '@/components/ui/Button';
import { motion as motionTokens } from '@/styles/tokens';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: motionTokens.ease.soft },
  },
};

const handleOpenProject = (liveUrl?: string, repoUrl?: string) => {
  const url = liveUrl || repoUrl;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
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

export const ProjectsSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [featuredDetailsOpen, setFeaturedDetailsOpen] = useState(false);
  const [featuredTechOpen, setFeaturedTechOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [secondaryImageErrors, setSecondaryImageErrors] = useState<Record<string, boolean>>({});

  const featuredProject = useMemo(
    () => ({
      title: 'Totem IA â€” Assistente Interativo',
      category: 'IA aplicada â€¢ Hardware â€¢ AutomaÃ§Ã£o',
      pitch:
        'ProtÃ³tipo fÃ­sico inteligente que conecta sensores, interface digital e inteligÃªncia artificial para criar uma experiÃªncia interativa em tempo real.',
      highlights: [
        'IntegraÃ§Ã£o hardware/software',
        'Python + OpenAI API',
        'Arduino e Raspberry Pi',
        'Projeto apresentado em ambiente real',
      ],
      tech: ['Python', 'OpenAI API', 'Arduino', 'Raspberry Pi', 'Sensores', 'Git'],
      details: {
        problema:
          'Como integrar sensores fÃ­sicos com IA em tempo real mantendo estabilidade e resposta imediata.',
        solucao:
          'Arquitetura hÃ­brida com Python, orquestraÃ§Ã£o de eventos e interface digital conectada ao hardware.',
        stack: ['Python', 'OpenAI API', 'Arduino', 'Raspberry Pi', 'Sensores', 'Git'],
        aprendizados: [
          'AutomaÃ§Ã£o fÃ­sica aplicada',
          'IntegraÃ§Ã£o de APIs em tempo real',
          'Design de experiÃªncias interativas',
        ],
      },
      image: {
        src: '/images/projects/totem-ia/totem-working.webp',
        alt: 'Arthur Mansur ao lado do Totem IA em funcionamento',
      },
      repoUrl: 'https://github.com/arthurbarros-hub/fablab-totem-ia',
    }),
    [],
  );

  const secondaryProjects = useMemo(
    () => [
      {
        slug: '747-garage',
        title: '747 Garage',
        category: 'Web premium â€¢ Identidade â€¢ Motion',
        impact: 'ExperiÃªncia premium',
        description:
          'ExperiÃªncia web premium para uma plataforma automotiva, com foco em identidade visual, performance e interface moderna.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'React', 'Motion'],
        details: {
          problema: 'Criar presenÃ§a digital de alto impacto para um negÃ³cio automotivo com identidade forte.',
          solucao: 'Landing page com motion design, narrativa visual e foco em performance.',
          stack: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Framer Motion'],
          aprendizados: ['DireÃ§Ã£o de arte digital', 'ComponentizaÃ§Ã£o premium'],
        },
        image: {
          src: '/images/projects/747-garage/cover.webp',
          alt: 'Interface premium do projeto 747 Garage',
        },
        repoUrl: 'https://github.com/arthurbarros-hub/747-garage',
      },
      {
        slug: 'line-rios-croche',
        title: 'Line Rios CrochÃª',
        category: 'E-commerce â€¢ ConversÃ£o â€¢ Mobile',
        impact: 'ConversÃ£o mobile',
        description:
          'E-commerce mobile-first focado em conversÃ£o via WhatsApp, com catÃ¡logo digital e fluxo de compra simplificado.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'WhatsApp', 'UX'],
        details: {
          problema: 'Simplificar conversÃ£o e atendimento sem perder o toque artesanal da marca.',
          solucao: 'CatÃ¡logo digital com CTA direto para WhatsApp e UX voltada ao mobile.',
          stack: ['Next.js', 'TypeScript', 'Tailwind', 'WhatsApp API'],
          aprendizados: ['Fluxo de conversÃ£o', 'UX mobile-first'],
        },
        image: {
          src: '/images/projects/rios-croche/cover.webp',
          alt: 'Interface do projeto Line Rios CrochÃª',
        },
        repoUrl: 'https://github.com/arthurbarros-hub/rios.croche',
      },
      {
        slug: 'dagym',
        title: 'Dagym',
        category: 'Produto digital â€¢ Social â€¢ IntegraÃ§Ã£o',
        impact: 'Front-end colaborativo',
        description:
          'Projeto institucional colaborativo de rede social fitness, com contribuiÃ§Ã£o no front-end e integraÃ§Ã£o com back-end Java.',
        tech: ['React', 'TypeScript', 'Java', 'UI', 'Integracao'],
        details: {
          problema: 'Construir camada visual consistente para uma plataforma fitness colaborativa.',
          solucao: 'ComponentizaÃ§Ã£o front-end com foco em usabilidade e integraÃ§Ã£o com APIs Java.',
          stack: ['React', 'TypeScript', 'Java', 'UI Design'],
          aprendizados: ['ColaboraÃ§Ã£o entre times', 'IntegraÃ§Ã£o front/back'],
        },
        image: {
          src: '/images/projects/dagym/cover.webp',
          alt: 'Interface do projeto Dagym',
        },
        liveUrl: 'https://dagym.vercel.app/',
      },
      {
        slug: 'cadastro-usuarios-java',
        title: 'Cadastro de UsuÃ¡rios em Java',
        category: 'Back-end â€¢ POO â€¢ AplicaÃ§Ãµes',
        impact: 'Base tÃ©cnica',
        description:
          'AplicaÃ§Ã£o em Java voltada ao cadastro de usuÃ¡rios, com foco em lÃ³gica, organizaÃ§Ã£o de dados e evoluÃ§Ã£o prÃ¡tica no back-end.',
        tech: ['Java', 'POO', 'LÃ³gica', 'Android', 'Back-End'],
        details: {
          problema: 'Evoluir domÃ­nio de back-end e POO em um cenÃ¡rio real de cadastro.',
          solucao: 'AplicaÃ§Ã£o estruturada com cadastro de usuÃ¡rios e organizaÃ§Ã£o clara de dados.',
          stack: ['Java', 'POO', 'Android', 'Back-End'],
          aprendizados: ['Modelagem de dados', 'Boas prÃ¡ticas de cÃ³digo'],
        },
        image: {
          src: '/images/projects/java/cover.webp',
          alt: 'Interface do projeto Cadastro de UsuÃ¡rios em Java',
        },
        repoUrl: 'https://github.com/arthurbarros-hub/CADASTROusuario',
      },
      {
        slug: 'login-cadastro',
        title: 'Sistema de Login e Cadastro',
        category: 'Front-End â€¢ UI Design â€¢ Glassmorphism',
        impact: 'Interface moderna',
        description:
          'Interface moderna de login e cadastro desenvolvida com HTML, CSS e JavaScript, explorando visual glassmorphism, responsividade e experiÃªncia de usuÃ¡rio.',
        tech: ['HTML', 'CSS', 'JavaScript', 'UI Design', 'Glassmorphism', 'Responsivo'],
        details: {
          problema:
            'Projeto focado em construÃ§Ã£o de interfaces modernas, organizaÃ§Ã£o visual, responsividade e microinteraÃ§Ãµes em uma tela de autenticaÃ§Ã£o com estÃ©tica glassmorphism.',
          solucao:
            'Uso de HTML, CSS e JavaScript para criar um layout responsivo com visual glassmorphism, foco em usabilidade e refinamento visual.',
          stack: ['HTML', 'CSS', 'JavaScript', 'UI Design', 'Glassmorphism', 'Responsivo'],
          aprendizados: ['Interface moderna', 'MicrointeraÃ§Ãµes', 'Responsividade'],
        },
        image: {
          src: '/images/projects/login-cadastro/cover.webp',
          alt: 'Interface do Sistema de Login e Cadastro com glassmorphism',
        },
        repoUrl: 'https://github.com/arthurbarros-hub/Login-Cadastro',
      },
      {
        slug: 'jogo-da-velha',
        title: 'Jogo da Velha InvencÃ­vel',
        category: 'Algoritmos â€¢ LÃ³gica â€¢ IA',
        impact: 'LÃ³gica aplicada',
        description:
          'Jogo da velha desenvolvido com HTML, CSS e JavaScript, onde a IA usa estratÃ©gia determinÃ­stica para impedir a vitÃ³ria do usuÃ¡rio.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Minimax', 'Alpha-Beta'],
        details: {
          problema: 'Criar um jogo de lÃ³gica com IA capaz de impedir qualquer vitÃ³ria do jogador.',
          solucao:
            'ImplementaÃ§Ã£o de tomada de decisÃ£o determinÃ­stica com busca Minimax e poda Alpha-Beta.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Minimax', 'Alpha-Beta'],
          aprendizados: ['RaciocÃ­nio algorÃ­tmico', 'EstratÃ©gia de jogo', 'IA no navegador'],
        },
        image: {
          src: '/images/projects/jogo-da-velha/cover.webp',
          alt: 'Interface do jogo da velha com IA',
        },
        liveUrl: 'https://jogo-da-velha-invencivel.vercel.app/',
      },
      {
        slug: 'gerador-musica',
        title: 'Gerador de Letras com IA',
        category: 'IA simulada â€¢ Criatividade â€¢ Web App',
        impact: 'Produto interativo',
        description:
          'AplicaÃ§Ã£o web para gerar letras de mÃºsica a partir de tema, gÃªnero, humor, palavras-chave e direÃ§Ã£o criativa do usuÃ¡rio.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'UI/UX'],
        details: {
          problema: 'Estruturar uma experiÃªncia criativa com geraÃ§Ã£o de conteÃºdo dentro do navegador.',
          solucao:
            'FormulÃ¡rios guiados com estados, histÃ³rico local e geraÃ§Ã£o estruturada de letras.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'UI/UX'],
          aprendizados: ['GestÃ£o de estados', 'UX para criaÃ§Ã£o', 'ConteÃºdo estruturado'],
        },
        image: {
          src: '/images/projects/gerador-musica/cover.webp',
          alt: 'Interface do gerador de letras com IA',
        },
        liveUrl: 'https://gerador-de-letras-de-musica.vercel.app/',
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
          eyebrow="PROJETOS"
          title="Projetos que transformaram conhecimento em execuÃ§Ã£o"
          subtitle="Da automaÃ§Ã£o fÃ­sica com inteligÃªncia artificial ao desenvolvimento de experiÃªncias web modernas, cada projeto representa uma etapa prÃ¡tica da minha evoluÃ§Ã£o tÃ©cnica."
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
{/* Featured Project - Totem IA */}

          <motion.div variants={revealVariants}>
            <div className="group relative">
              <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(circle_at_top,rgb(14_165_233/0.45),transparent_70%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-indigo-400/40 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
              <GlassCard className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
<div className="flex flex-col gap-8">
                  {/* Header Section */}
                  <motion.div
                    className="space-y-4"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: motionTokens.ease.soft }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-block text-xs uppercase tracking-[0.35em] font-semibold text-accent px-3 py-1 rounded-full border border-accent/50 bg-accent/10">
                        Destaque
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-muted/80">
                        {featuredProject.category}
                      </span>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold text-fg leading-tight max-w-3xl">
                      {featuredProject.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                      {featuredProject.pitch}
                    </p>
                  </motion.div>

                  {/* Premium Features Grid */}
                  <motion.div
                    className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, staggerChildren: 0.08, delayChildren: 0.1, ease: motionTokens.ease.soft }}
                    viewport={{ once: true }}
                  >
                    {featuredProject.highlights.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: motionTokens.ease.soft }}
                        whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                        className="group/card relative"
                      >
                        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
                        <div className="relative rounded-xl border border-white/10 bg-surface/40 backdrop-blur-sm p-4 transition-all duration-300 group-hover/card:border-accent/40 group-hover/card:bg-surface/60">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0">
                              <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 border border-cyan-300/50">
                                <div className="w-2 h-2 rounded-full bg-cyan-300" />
                              </div>
                            </div>
                            <p className="text-sm font-medium text-fg leading-relaxed">
                              {item}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    className="space-y-3"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delayChildren: 0.2, ease: motionTokens.ease.soft }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-muted/70">
                      Stack TÃ©cnico
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(featuredTechOpen
                        ? featuredProject.tech
                        : featuredProject.tech.slice(0, 5)
                      ).map((tag) => (
                        <motion.span
                          key={tag}
                          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                          className="text-[0.7rem] uppercase tracking-[0.24em] text-accent/80 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 transition-colors duration-300 hover:bg-accent/20 hover:border-accent/50"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {!featuredTechOpen && featuredProject.tech.length > 5 ? (
                        <button
                          onClick={() => setFeaturedTechOpen(true)}
                          className="text-[0.7rem] uppercase tracking-[0.24em] text-muted/60 px-3 py-1.5 hover:text-accent/70 transition-colors duration-300"
                        >
                          +{featuredProject.tech.length - 5} mais
                        </button>
                      ) : null}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex flex-wrap gap-3 pt-2"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delayChildren: 0.3, ease: motionTokens.ease.soft }}
                    viewport={{ once: true }}
                  >
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handleOpenProject(featuredProject.repoUrl)}
                      className="group/btn"
                    >
                      <span className="flex items-center gap-2">
                        Explorar Projeto
                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setFeaturedDetailsOpen((prev) => !prev)}
                    >
                      {featuredDetailsOpen ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                    </Button>
                  </motion.div>

                  {/* Expandable Details */}
                  {featuredDetailsOpen ? (
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: motionTokens.ease.soft }}
                      className="space-y-4 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface/60 to-surface/40 p-6"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-[0.3em] text-accent/70 font-semibold">
                            Problema
                          </p>
                          <p className="text-sm text-muted leading-relaxed">
                            {featuredProject.details.problema}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-[0.3em] text-accent/70 font-semibold">
                            SoluÃ§Ã£o
                          </p>
                          <p className="text-sm text-muted leading-relaxed">
                            {featuredProject.details.solucao}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.3em] text-accent/70 font-semibold">
                          Stack Completo
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {featuredProject.details.stack.map((tag) => (
                            <span
                              key={tag}
                              className="text-[0.65rem] uppercase tracking-[0.24em] text-muted px-3 py-1.5 rounded-full border border-white/10 bg-surface/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted font-semibold">
                          Aprendizados Principais
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {featuredProject.details.aprendizados.map((item) => (
                            <span
                              key={item}
                              className="text-[0.65rem] uppercase tracking-[0.24em] text-muted/80 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </div>

              </GlassCard>
            </div>
          </motion.div>

          {/* Other Projects Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {secondaryProjects.map((project) => {
              const isExpanded = expandedProject === project.slug;

              return (
                <motion.div
                  key={project.slug}
                  variants={revealVariants}
                  whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                  transition={{ duration: 0.3, ease: motionTokens.ease.soft }}
                  className="h-full"
                >
                  <GlassCard className="group relative flex h-full flex-col gap-5 overflow-hidden p-5 sm:p-6">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-transparent" />
                    </div>
                    <div className="relative z-10 h-40 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-surface/80 via-surface/40 to-transparent">
                      <button
                        onClick={() => handleOpenProject(project.liveUrl, project.repoUrl)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleOpenProject(project.liveUrl, project.repoUrl);
                        }}
                        aria-label={`Abrir projeto ${project.title}`}
                        className="relative w-full h-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 focus:ring-offset-surface hover:cursor-pointer transition-all duration-300 group hover:brightness-110"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(99_102_241/0.18),transparent_65%)]" />
                        <div className="absolute right-6 top-6 h-px w-20 bg-gradient-to-l from-cyan-400/70 to-transparent animate-pulse" />
                        <div className="absolute left-6 bottom-6 h-px w-20 bg-gradient-to-r from-blue-400/70 to-transparent animate-pulse" />
                        <div className="absolute left-4 top-4 h-3 w-3 border-l border-t border-white/40" />
                        <div className="absolute right-4 bottom-4 h-3 w-3 border-r border-b border-white/40" />
                        {project.image?.src && !secondaryImageErrors[project.slug] ? (
                          <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            fill
                            sizes="(min-width: 1024px) 28vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() =>
                              setSecondaryImageErrors((prev) => ({ ...prev, [project.slug]: true }))
                            }
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/15 via-surface/40 to-transparent">
                            <div className="text-center space-y-2">
                              <div className="text-4xl">â—¼</div>
                              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted">
                                Preview indisponÃ­vel
                              </p>
                            </div>
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="text-center space-y-1">
                            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-white drop-shadow-lg">
                              Abrir Projeto
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-accent/80">
                          {project.category}
                        </span>
                        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted/80">
                          {project.impact}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-fg group-hover:text-accent transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.65rem] uppercase tracking-[0.24em] text-muted px-2 py-1 rounded-full border border-white/10 bg-surface/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="relative z-10 flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          setExpandedProject((prev) => (prev === project.slug ? null : project.slug))
                        }
                      >
                        Ver detalhes
                      </Button>
                      {project.liveUrl || project.repoUrl ? (
                        <button
                          onClick={() => handleOpenProject(project.liveUrl, project.repoUrl)}
                          className={buttonStyles({ variant: 'outline', size: 'sm' })}
                        >
{project.liveUrl ? 'Visitar Site' : 'Ver CÃ³digo'}

                        </button>
                      ) : null}
                    </div>

                    {isExpanded ? (
                      <div className="relative z-10 space-y-3 rounded-2xl border border-white/10 bg-surface/70 p-4">
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                            Problema
                          </p>
                          <p className="text-sm text-muted leading-relaxed">
                            {project.details.problema}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                              SoluÃ§Ã£o
                          </p>
                          <p className="text-sm text-muted leading-relaxed">
                            {project.details.solucao}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.details.stack.map((tag) => (
                            <span
                              key={tag}
                              className="text-[0.65rem] uppercase tracking-[0.24em] text-muted px-2 py-1 rounded-full border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.details.aprendizados.map((item) => (
                            <span
                              key={item}
                              className="text-[0.65rem] uppercase tracking-[0.24em] text-muted/80 px-2 py-1 rounded-full border border-white/10"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

