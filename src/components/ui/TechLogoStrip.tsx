'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiNodedotjs,
  SiMysql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

const technologies = [
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#FFFFFF',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
  },
  {
    name: 'Java',
    icon: FaJava,
    color: '#007396',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    color: '#FFFFFF',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#68A063',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: '#00758F',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface TechLogoStripProps {
  className?: string;
}

export const TechLogoStrip = ({ className = '' }: TechLogoStripProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={`flex flex-wrap gap-3 sm:gap-4 justify-center items-center ${className}`}
      variants={containerVariants}
      initial={prefersReducedMotion ? 'show' : 'hidden'}
      animate="show"
    >
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="group relative"
          >
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs text-white bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
              {tech.name}
            </div>

            {/* Icon */}
            <motion.div
              className="flex items-center justify-center p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default"
              whileHover={
                !prefersReducedMotion
                  ? {
                      scale: 1.1,
                      y: -4,
                      boxShadow: `0 8px 32px rgba(${
                        tech.color === '#61DAFB'
                          ? '97, 218, 251'
                          : tech.color === '#3178C6'
                            ? '49, 120, 198'
                            : tech.color === '#007396'
                              ? '0, 115, 150'
                              : '255, 255, 255'
                      }, 0.3)`,
                    }
                  : {}
              }
              aria-label={tech.name}
            >
              <Icon size={28} style={{ color: tech.color }} />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
