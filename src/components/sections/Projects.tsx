'use client';

import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowWrapper } from '@/components/ui/GlowWrapper';
import { projects } from '@/data/projects';
import { motion as motionTokens } from '@/styles/tokens';
import { cn } from '@/utils/cn';

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
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionContainer as="section" className="relative py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(var(--glow-color)/0.15),transparent_70%)] blur-3xl"
      />
      <div className="relative z-10 flex flex-col gap-10 lg:gap-12">
        <AnimatedHeading
          eyebrow="PROJETOS"
          title="Projetos em destaque"
          subtitle="Projetos que demonstram minha evolução técnica na prática, conectando desenvolvimento, automação, design de produto e resolução de problemas reais."
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
          {featuredProject && (
            <motion.div variants={revealVariants}>
              <GlowWrapper intensity="strong">
                <GlassCard className="group relative overflow-hidden p-8 sm:p-10 lg:p-12 hover:border-accent/50 transition-colors">
                  <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
                    {/* Content */}
                    <div className="flex flex-col gap-8">
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
                      </div>

                      {/* Problem & Solution */}
                      <div className="space-y-6">
                        {featuredProject.problem && (
                          <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                              Desafio
                            </p>
                            <p className="text-base leading-relaxed text-fg">
                              {featuredProject.problem}
                            </p>
                          </div>
                        )}
                        {featuredProject.solution && (
                          <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                              Solução
                            </p>
                            <p className="text-base leading-relaxed text-muted">
                              {featuredProject.solution}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Challenges & Learnings */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        {featuredProject.challenges && featuredProject.challenges.length > 0 && (
                          <div className="space-y-3">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted">
                              Desafios técnicos
                            </p>
                            <ul className="space-y-2 text-sm text-muted">
                              {featuredProject.challenges.map((challenge) => (
                                <li key={challenge} className="flex gap-2">
                                  <span className="h-1 w-1 rounded-full bg-accent/70 mt-1.5 flex-shrink-0" />
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {featuredProject.learnings && featuredProject.learnings.length > 0 && (
                          <div className="space-y-3">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted">
                              Aprendizados
                            </p>
                            <ul className="space-y-2 text-sm text-muted">
                              {featuredProject.learnings.map((learning) => (
                                <li key={learning} className="flex gap-2">
                                  <span className="h-1 w-1 rounded-full bg-accent/70 mt-1.5 flex-shrink-0" />
                                  {learning}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Tech Stack */}
                      {featuredProject.tags && featuredProject.tags.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-white/10">
                          <p className="text-xs uppercase tracking-[0.3em] text-muted">
                            Stack técnico
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {featuredProject.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs uppercase tracking-[0.24em] text-accent/80 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Visual Placeholder */}
                    <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--glow-color)/0.15),transparent_70%)] animate-pulse" />
                      <div className="relative z-10 text-center space-y-2">
                        <div className="text-5xl">🤖</div>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted">
                          Projeto Interativo
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </GlowWrapper>
            </motion.div>
          )}

          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <motion.div key={project.slug} variants={revealVariants}>
                  <GlassCard className="flex h-full flex-col gap-6 p-6 sm:p-7 hover:border-accent/50 transition-colors group">
                    {/* Category & Title */}
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                        {project.category}
                      </p>
                      <h4 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors">
                        {project.title}
                      </h4>
                    </div>

                    {/* Problem */}
                    {project.problem && (
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.24em] text-muted">
                          Desafio
                        </p>
                        <p className="text-sm leading-relaxed text-muted">
                          {project.problem}
                        </p>
                      </div>
                    )}

                    {/* Solution */}
                    {project.solution && (
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.24em] text-muted">
                          Solução
                        </p>
                        <p className="text-sm leading-relaxed text-muted/80">
                          {project.solution}
                        </p>
                      </div>
                    )}

                    {/* Tech Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.65rem] uppercase tracking-[0.24em] text-muted px-2 py-1 rounded-full border border-white/10 bg-surface/60 hover:border-accent/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted/70 px-2 py-1">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </SectionContainer>
  );
};
