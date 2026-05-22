'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
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

export const ProjectsSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [featuredImageError, setFeaturedImageError] = useState(false);
  const [featuredDetailsOpen, setFeaturedDetailsOpen] = useState(false);
  const [featuredTechOpen, setFeaturedTechOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [secondaryImageErrors, setSecondaryImageErrors] = useState<Record<string, boolean>>({});

  const featuredProject = useMemo(
    () => ({
      title: 'Totem IA — Assistente Interativo',
      category: 'IA aplicada • Hardware • Automação',
      pitch:
        'Protótipo físico inteligente que conecta sensores, interface digital e inteligência artificial para criar uma experiência interativa em tempo real.',
      highlights: [
        'Integração hardware/software',
        'Python + OpenAI API',
        'Arduino e Raspberry Pi',
        'Projeto apresentado em ambiente real',
      ],
      tech: ['Python', 'OpenAI API', 'Arduino', 'Raspberry Pi', 'Sensores', 'Git'],
      details: {
        problema:
          'Como integrar sensores físicos com IA em tempo real mantendo estabilidade e resposta imediata.',
        solucao:
          'Arquitetura híbrida com Python, orquestração de eventos e interface digital conectada ao hardware.',
        stack: ['Python', 'OpenAI API', 'Arduino', 'Raspberry Pi', 'Sensores', 'Git'],
        aprendizados: [
          'Automação física aplicada',
          'Integração de APIs em tempo real',
          'Design de experiências interativas',
        ],
      },
      image: {
        src: '/images/projects/totem-ia/totem-working.webp',
        alt: 'Arthur Mansur ao lado do Totem IA em funcionamento',
      },
    }),
    [],
  );

  const secondaryProjects = useMemo(
    () => [
      {
        slug: '747-garage',
        title: '747 Garage',
        category: 'Web premium • Identidade • Motion',
        impact: 'Experiência premium',
        description:
          'Experiência web premium para uma plataforma automotiva, com foco em identidade visual, performance e interface moderna.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'React', 'Motion'],
        details: {
          problema: 'Criar presença digital de alto impacto para um negócio automotivo com identidade forte.',
          solucao: 'Landing page com motion design, narrativa visual e foco em performance.',
          stack: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Framer Motion'],
          aprendizados: ['Direção de arte digital', 'Componentização premium'],
        },
      },
      {
        slug: 'line-rios-croche',
        title: 'Line Rios Crochê',
        category: 'E-commerce • Conversão • Mobile',
        impact: 'Conversão mobile',
        description:
          'E-commerce mobile-first focado em conversão via WhatsApp, com catálogo digital e fluxo de compra simplificado.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'WhatsApp', 'UX'],
        details: {
          problema: 'Simplificar conversão e atendimento sem perder o toque artesanal da marca.',
          solucao: 'Catálogo digital com CTA direto para WhatsApp e UX voltada ao mobile.',
          stack: ['Next.js', 'TypeScript', 'Tailwind', 'WhatsApp API'],
          aprendizados: ['Fluxo de conversão', 'UX mobile-first'],
        },
      },
      {
        slug: 'dagym',
        title: 'Dagym',
        category: 'Produto digital • Social • Integração',
        impact: 'Front-end colaborativo',
        description:
          'Projeto institucional colaborativo de rede social fitness, com contribuição no front-end e integração com back-end Java.',
        tech: ['React', 'TypeScript', 'Java', 'UI', 'Integracao'],
        details: {
          problema: 'Construir camada visual consistente para uma plataforma fitness colaborativa.',
          solucao: 'Componentização front-end com foco em usabilidade e integração com APIs Java.',
          stack: ['React', 'TypeScript', 'Java', 'UI Design'],
          aprendizados: ['Colaboração entre times', 'Integração front/back'],
        },
      },
      {
        slug: 'java-projects',
        title: 'Projetos Java',
        category: 'Back-end • POO • Aplicações',
        impact: 'Base técnica',
        description:
          'Conjunto de aplicações em Java voltadas à lógica, cadastro de usuários, telas interativas e evolução no ecossistema back-end.',
        tech: ['Java', 'POO', 'Lógica', 'Android', 'Back-End'],
        details: {
          problema: 'Evoluir domínio de back-end e POO em cenários práticos.',
          solucao: 'Aplicações modulares com telas interativas e cadastros estruturados.',
          stack: ['Java', 'POO', 'Android', 'Back-End'],
          aprendizados: ['Modelagem de dados', 'Boas práticas de código'],
        },
      },
      {
        slug: 'jogo-da-velha',
        title: 'Jogo da Velha Invencível',
        category: 'Algoritmos • Lógica • IA',
        impact: 'Lógica aplicada',
        description:
          'Jogo da velha desenvolvido com HTML, CSS e JavaScript, onde a IA usa estratégia determinística para impedir a vitória do usuário.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Minimax', 'Alpha-Beta'],
        details: {
          problema: 'Criar um jogo de lógica com IA capaz de impedir qualquer vitória do jogador.',
          solucao:
            'Implementação de tomada de decisão determinística com busca Minimax e poda Alpha-Beta.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Minimax', 'Alpha-Beta'],
          aprendizados: ['Raciocínio algorítmico', 'Estratégia de jogo', 'IA no navegador'],
        },
        image: {
          src: '/images/projects/jogo-da-velha/cover.webp',
          alt: 'Interface do jogo da velha com IA',
        },
      },
      {
        slug: 'gerador-musica',
        title: 'Gerador de Letras com IA',
        category: 'IA simulada • Criatividade • Web App',
        impact: 'Produto interativo',
        description:
          'Aplicação web para gerar letras de música a partir de tema, gênero, humor, palavras-chave e direção criativa do usuário.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'UI/UX'],
        details: {
          problema: 'Estruturar uma experiência criativa com geração de conteúdo dentro do navegador.',
          solucao:
            'Formulários guiados com estados, histórico local e geração estruturada de letras.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'UI/UX'],
          aprendizados: ['Gestão de estados', 'UX para criação', 'Conteúdo estruturado'],
        },
        image: {
          src: '/images/projects/gerador-musica/cover.webp',
          alt: 'Interface do gerador de letras com IA',
        },
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
          title="Projetos que transformaram conhecimento em execução"
          subtitle="Da automação física com inteligência artificial ao desenvolvimento de experiências web modernas, cada projeto representa uma etapa prática da minha evolução técnica."
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
          {/* Featured Project */}
          <motion.div variants={revealVariants}>
            <div className="group relative">
              <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(circle_at_top,rgb(14_165_233/0.45),transparent_70%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-indigo-400/40 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
              <GlassCard className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-stretch">
                    {/* Content */}
                    <div className="order-2 flex flex-col gap-6 lg:order-1">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-xs uppercase tracking-[0.35em] font-semibold text-accent">
                            Destaque
                          </span>
                          <span className="text-xs uppercase tracking-[0.3em] text-muted">
                            {featuredProject.category}
                          </span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-fg leading-tight">
                          {featuredProject.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted leading-relaxed">
                          {featuredProject.pitch}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {featuredProject.highlights.map((item) => (
                          <span
                            key={item}
                            className="text-[0.65rem] uppercase tracking-[0.26em] text-muted px-3 py-1.5 rounded-full border border-white/10 bg-surface/60"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {(featuredTechOpen
                          ? featuredProject.tech
                          : featuredProject.tech.slice(0, 4)
                        ).map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.65rem] uppercase tracking-[0.24em] text-accent/80 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {!featuredTechOpen && featuredProject.tech.length > 4 ? (
                          <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted/70 px-2 py-1.5">
                            +{featuredProject.tech.length - 4}
                          </span>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={() => setFeaturedDetailsOpen((prev) => !prev)}
                        >
                          Ver detalhes
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setFeaturedTechOpen((prev) => !prev)}
                        >
                          Tecnologias
                        </Button>
                      </div>

                      {featuredDetailsOpen ? (
                        <div className="space-y-4 rounded-2xl border border-white/10 bg-surface/60 p-4">
                          <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                              Problema
                            </p>
                            <p className="text-sm text-muted leading-relaxed">
                              {featuredProject.details.problema}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                              Solução
                            </p>
                            <p className="text-sm text-muted leading-relaxed">
                              {featuredProject.details.solucao}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {featuredProject.details.stack.map((tag) => (
                              <span
                                key={tag}
                                className="text-[0.65rem] uppercase tracking-[0.24em] text-muted px-2 py-1.5 rounded-full border border-white/10 bg-surface/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted">
                              Aprendizados
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {featuredProject.details.aprendizados.map((item) => (
                                <span
                                  key={item}
                                  className="text-[0.65rem] uppercase tracking-[0.24em] text-muted/80 px-2 py-1.5 rounded-full border border-white/10"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* Visual */}
                    <div className="order-1 lg:order-2">
                      <div className="relative overflow-hidden rounded-2xl p-px">
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-transparent opacity-70" />
                        <div className="relative h-72 sm:h-80 lg:h-full min-h-[20rem] rounded-[calc(1rem_-_1px)] overflow-hidden">
                          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgb(14_165_233/0.18),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          <div className="pointer-events-none absolute inset-0 z-10 bg-white/5 backdrop-blur-[1px]" />
                          <div className="pointer-events-none absolute left-6 top-6 z-20 h-px w-24 bg-gradient-to-r from-cyan-400/70 to-transparent animate-pulse" />
                          <div className="pointer-events-none absolute right-6 bottom-8 z-20 h-px w-28 bg-gradient-to-l from-blue-400/70 to-transparent animate-pulse" />
                          <div className="pointer-events-none absolute left-5 top-5 z-20 h-4 w-4 border-l border-t border-cyan-300/70" />
                          <div className="pointer-events-none absolute right-5 top-5 z-20 h-4 w-4 border-r border-t border-cyan-300/70" />
                          <div className="pointer-events-none absolute left-5 bottom-5 z-20 h-4 w-4 border-l border-b border-cyan-300/70" />
                          <div className="pointer-events-none absolute right-5 bottom-5 z-20 h-4 w-4 border-r border-b border-cyan-300/70" />
                          {!featuredImageError ? (
                            <Image
                              src={featuredProject.image.src}
                              alt={featuredProject.image.alt}
                              fill
                              sizes="(min-width: 1024px) 55vw, 100vw"
                              className="object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                              onError={() => setFeaturedImageError(true)}
                              priority
                            />
                          ) : (
                            <div className="relative z-20 flex h-full items-center justify-center bg-gradient-to-br from-accent/20 to-transparent">
                              <div className="text-center space-y-2">
                                <div className="text-5xl">🤖</div>
                                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                                  Projeto Interativo
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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
                          className="object-cover"
                          onError={() =>
                            setSecondaryImageErrors((prev) => ({ ...prev, [project.slug]: true }))
                          }
                        />
                      ) : null}
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
                              Solução
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
