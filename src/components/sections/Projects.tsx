'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
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

const techBadgeMeta: Record<string, { icon?: IconType; color?: string }> = {
  'Next.js': { icon: SiNextdotjs, color: '#EDEDED' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  React: { icon: SiReact, color: '#61DAFB' },
  Java: { icon: SiOpenjdk, color: '#4DA3D9' },
  MySQL: { icon: SiMysql, color: '#00758F' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  HTML5: { icon: SiHtml5, color: '#E34F26' },
  CSS3: { icon: SiCss, color: '#1572B6' },
};

export const ProjectsSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [secondaryImageErrors, setSecondaryImageErrors] = useState<Record<string, boolean>>({});

  const secondaryProjects = useMemo(
    () => [
      {
        slug: '747-garage',
        title: '747 Garage',
        category: 'Web premium • Identidade • Motion',
        impact: 'Experiência premium',
        description:
          'Plataforma web automotiva com foco em interface premium, organização de componentes, performance e experiência visual.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
        details: {
          problema: 'Criar presença digital de alto impacto para um negócio automotivo com identidade forte.',
          solucao: 'Landing page com motion design, narrativa visual e foco em performance.',
          stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
          aprendizados: ['Direção de arte digital', 'Componentização premium'],
        },
        image: {
          src: '/images/projects/747-garage/cover.webp',
          alt: 'Interface premium do projeto 747 Garage',
        },
        repoUrl: 'https://github.com/mansurth/747-garage',
      },
      {
        slug: 'line-rios-croche',
        title: 'Line Rios Crochê',
        category: 'E-commerce • Conversão • Mobile',
        impact: 'Conversão mobile',
        description:
          'E-commerce mobile-first focado em conversão via WhatsApp, com catálogo simples e fluxo direto de pedido.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
        details: {
          problema: 'Simplificar conversão e atendimento sem perder o toque artesanal da marca.',
          solucao: 'Catálogo digital com CTA direto para WhatsApp e UX voltada ao mobile.',
          stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
          aprendizados: ['Fluxo de conversão', 'UX mobile-first'],
        },
        image: {
          src: '/images/projects/rios-croche/cover.webp',
          alt: 'Interface do projeto Line Rios Crochê',
        },
        repoUrl: 'https://github.com/mansurth/rios.croche',
      },
      {
        slug: 'dagym',
        title: 'Dagym',
        category: 'Produto digital • Social • Integração',
        impact: 'Front-end colaborativo',
        description:
          'Projeto institucional colaborativo de rede social fitness, com minha contribuição no front-end e integração de interface com APIs.',
        tech: ['React', 'TypeScript'],
        details: {
          problema: 'Construir camada visual consistente para uma plataforma fitness colaborativa.',
          solucao: 'Componentização front-end com foco em usabilidade e integração com APIs.',
          stack: ['React', 'TypeScript'],
          aprendizados: ['Colaboração entre times', 'Integração front/back'],
        },
        image: {
          src: '/images/projects/dagym/cover.webp',
          alt: 'Interface do projeto Dagym',
        },
        liveUrl: 'https://dagym.vercel.app/',
      },
      {
        slug: 'cadastro-usuarios-java',
        title: 'Cadastro de Usuários em Java',
        category: 'Back-end • POO • Aplicações',
        impact: 'Base técnica',
        description:
          'Aplicação Java voltada para lógica de cadastro, organização de dados e fundamentos de POO.',
        tech: ['Java', 'POO'],
        details: {
          problema: 'Evoluir domínio de back-end e POO em um cenário real de cadastro.',
          solucao: 'Aplicação estruturada com cadastro de usuários e organização clara de dados.',
          stack: ['Java', 'POO'],
          aprendizados: ['Modelagem de dados', 'Boas práticas de código'],
        },
        image: {
          src: '/images/projects/java/cover.webp',
          alt: 'Interface do projeto Cadastro de Usuários em Java',
        },
        repoUrl: 'https://github.com/mansurth/CADASTROusuario',
      },
      {
        slug: 'login-cadastro',
        title: 'Sistema de Login e Cadastro',
        category: 'Front-End • UI Design • Glassmorphism',
        impact: 'Interface moderna',
        description:
          'Interface em HTML, CSS e JavaScript com estética glassmorphism, responsividade e foco em experiência do usuário.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        details: {
          problema:
            'Projeto focado em construção de interfaces modernas, organização visual, responsividade e microinterações em uma tela de autenticação com estética glassmorphism.',
          solucao:
            'Uso de HTML, CSS e JavaScript para criar um layout responsivo com visual glassmorphism, foco em usabilidade e refinamento visual.',
          stack: ['HTML5', 'CSS3', 'JavaScript'],
          aprendizados: ['Interface moderna', 'Microinterações', 'Responsividade'],
        },
        image: {
          src: '/images/projects/login-cadastro/cover.webp',
          alt: 'Interface do Sistema de Login e Cadastro com glassmorphism',
        },
        repoUrl: 'https://github.com/mansurth/Login-Cadastro',
      },
      {
        slug: 'jogo-da-velha',
        title: 'Jogo da Velha Invencível',
        category: 'Algoritmos • Lógica • IA',
        impact: 'Lógica aplicada',
        description:
          'Jogo com lógica determinística usando Minimax/Alpha-Beta, onde a IA não permite vitória do usuário.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Minimax'],
        details: {
          problema: 'Criar um jogo de lógica com IA capaz de impedir qualquer vitória do jogador.',
          solucao:
            'Implementação de tomada de decisão determinística com busca Minimax e poda Alpha-Beta.',
          stack: ['HTML5', 'CSS3', 'JavaScript', 'Minimax'],
          aprendizados: ['Raciocínio algorítmico', 'Estratégia de jogo', 'IA no navegador'],
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
        category: 'IA • Criatividade • Web App',
        impact: 'Produto interativo',
        description:
          'Aplicação front-end que gera letras a partir de parâmetros definidos pelo usuário, com foco em interação e experiência criativa.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        details: {
          problema: 'Estruturar uma experiência criativa com geração de conteúdo dentro do navegador.',
          solucao:
            'Formulários guiados com estados, histórico local e geração estruturada de letras.',
          stack: ['HTML5', 'CSS3', 'JavaScript'],
          aprendizados: ['Gestão de estados', 'UX para criação', 'Conteúdo estruturado'],
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
    <SectionContainer id="projetos" as="section" className="relative overflow-hidden scroll-mt-24 py-12 sm:py-14 lg:py-16">
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
      <div className="relative z-10 flex flex-col gap-6 lg:gap-7">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80 sm:text-sm">PROJETOS</p>
          <h2 className="text-3xl font-semibold text-fg sm:text-4xl">Projetos em prática</h2>
          <p className="max-w-2xl text-base text-muted">
            Aplicações que desenvolvi para transformar estudos em experiência prática.
          </p>
        </header>

        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 lg:grid-cols-2"
        >
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
                  <GlassCard className="group relative flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-5">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-transparent" />
                    </div>
                    <div className="relative z-10 h-32 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-surface/80 via-surface/40 to-transparent">
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
                              <div className="text-4xl">•</div>
                              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted">
                                Preview indisponível
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

                    <div className="relative z-10 space-y-2.5">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-accent/80">
                          {project.category}
                        </span>
                        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted/80">
                          {project.impact}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors sm:text-xl">
                        {project.title}
                      </h4>
                      <p
                        className="text-sm text-muted leading-6"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-1.5" aria-label={`Tecnologias usadas em ${project.title}`}>
                      {project.tech.map((tag) => {
                        const meta = techBadgeMeta[tag];
                        const Icon = meta?.icon;

                        return (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface/60 px-2 py-1 text-[0.68rem] text-muted"
                          >
                            {Icon ? <Icon size={14} color={meta?.color} aria-hidden="true" /> : null}
                            <span>{tag}</span>
                          </span>
                        );
                      })}
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
                          className="inline-flex items-center justify-center rounded-md border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.08em] text-fg transition-all duration-base ease-soft hover:-translate-y-0.5 hover:border-accent/70 hover:text-white"
                        >
                          {project.liveUrl ? 'Visitar Site' : 'Ver Código'}

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
        </motion.div>
      </div>
    </SectionContainer>
  );
};

