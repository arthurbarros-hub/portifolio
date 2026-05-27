'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { SectionContainer } from '@/components/ui/SectionContainer';
import { Button } from '@/components/ui/Button';
import { motion as motionTokens } from '@/styles/tokens';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: motionTokens.ease.soft },
  },
};

export default function NotFound() {
  return (
    <SectionContainer as="section" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(14_165_233/0.2),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,rgb(139_92_246/0.2),transparent_70%)] blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-8 items-center text-center max-w-2xl mx-auto px-4"
      >
        {/* 404 */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Página não encontrada
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted leading-relaxed max-w-lg"
        >
          O recurso que você procura não existe ou foi movido. Mas não se preocupe, você pode voltar ao portfólio e continuar explorando.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex gap-3 pt-4 flex-wrap justify-center">
          <Link href="/#home">
            <Button
              size="md"
              className="bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 text-accent"
            >
              Voltar ao Início
            </Button>
          </Link>
          <Link href="/#contact">
            <Button
              size="md"
              variant="outline"
            >
              Entrar em Contato
            </Button>
          </Link>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          variants={itemVariants}
          className="pt-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 text-xs text-muted/60 uppercase tracking-wider"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-accent/50" />
            Arthur Mansur Portfólio
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
