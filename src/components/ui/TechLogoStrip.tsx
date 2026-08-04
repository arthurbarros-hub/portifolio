'use client';

import { motion } from 'framer-motion';
import {
  SiOpenjdk,
  SiSpringboot,
  SiGithub,
  SiMysql,
  SiGit,
} from 'react-icons/si';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
const technologies = [
  { name: 'Java', icon: SiOpenjdk, color: '#4DA3D9', featured: true },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6CC24A', featured: true },
  { name: 'MySQL', icon: SiMysql, color: '#00AFC7', featured: true },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

interface TechLogoStripProps {
  className?: string;
}

export const TechLogoStrip = ({ className = '' }: TechLogoStripProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ul className={`grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5 ${className}`}>
      {technologies.map((tech) => {
        const Icon = tech.icon as any;

        return (
          <motion.li
            key={tech.name}
            className={`mx-auto flex h-[84px] w-full max-w-[100px] items-center justify-center rounded-lg border bg-white/5 p-2.5 text-center transition-all duration-300 hover:bg-white/10 ${
              tech.featured
                ? 'border-accent/25 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_0_18px_rgba(59,130,246,0.06)]'
                : 'border-white/10'
            }`}
            whileHover={!prefersReducedMotion ? { scale: 1.03, y: -2 } : {}}
            aria-label={tech.name}
            style={{ filter: tech.color === '#FFFFFF' ? 'brightness(1.08) saturate(1.05)' : undefined }}
          >
            <Icon
              size={tech.featured ? 34 : 30}
              style={{ color: tech.color === '#FFFFFF' ? '#FFFFFF' : tech.color }}
            />
          </motion.li>
        );
      })}
    </ul>
  );
};

