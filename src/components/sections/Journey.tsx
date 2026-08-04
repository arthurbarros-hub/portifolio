'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';

const timelineEvents = [
  {
    year: '2023',
    title: 'Técnico em Informática para Internet — IFSP',
    description:
      'Formação técnica voltada para desenvolvimento, infraestrutura, banco de dados, redes e fundamentos da computação.',
  },
  {
    year: '2024',
    title: 'Primeiros projetos web e experiências práticas',
    description:
      'Desenvolvimento de aplicações próprias utilizando HTML, CSS, JavaScript e evolução contínua em tecnologias modernas.',
  },
  {
    year: '2025',
    title: 'FabLab — Desenvolvimento Experimental',
    description:
      'Participação em projetos de inovação aplicada envolvendo automação, sensores físicos, inteligência artificial e integração entre hardware e software.',
  },
  {
    year: '2026',
    title: 'Analista de Suporte Técnico Corporativo',
    description:
      'Atuação em ambiente institucional com manutenção de computadores, infraestrutura tecnológica, suporte a usuários e gestão de recursos de TI.',
  },
  {
    year: 'Atual',
    title: 'Especialização em Desenvolvimento Back-End Java',
    description:
      'Aprofundamento em Programação Orientada a Objetos, Java, arquitetura de software e desenvolvimento de aplicações modernas.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const JourneySection = () => {
  return (
    <SectionContainer
      id="journey"
      as="section"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-18"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgb(14_165_233/0.1),transparent_70%)] blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-12"
      >
        <AnimatedHeading title="Minha Jornada" align="center" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Uma trajetória construída em projetos reais, infraestrutura e desenvolvimento contínuo, com comunicação e resolução de problemas no centro da rotina.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl"
      >
        {/* Timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/30 to-transparent"
        />

        {/* Timeline items */}
        <div className="space-y-8 sm:space-y-10">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-20 sm:pl-24"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-1 flex h-14 w-14 cursor-default items-center justify-center rounded-full border-2 border-accent/30 bg-surface/80 backdrop-blur-sm sm:h-16 sm:w-16"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <div className="w-3 h-3 rounded-full bg-accent" />
              </motion.div>

              {/* Content */}
              <div className="group rounded-lg border border-border/40 bg-surface/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-surface/60 sm:p-6">
                <span className="mb-2 inline-block text-sm font-bold text-accent">
                  {event.year}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-accent sm:text-xl">
                  {event.title}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
};

