import type { HTMLAttributes, ReactNode } from 'react';

import type { Project } from '@/types';
import { cn } from '@/utils/cn';
import { GlassCard } from '@/components/ui/GlassCard';
import { PremiumBadge } from '@/components/ui/PremiumBadge';

type ProjectCardProps = HTMLAttributes<HTMLDivElement> & {
  project: Project;
  actionSlot?: ReactNode;
};

export const ProjectCard = ({ project, actionSlot, className, ...props }: ProjectCardProps) => (
  <GlassCard className={cn('p-6 sm:p-8', className)} {...props}>
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <PremiumBadge>{project.year ? `${project.year}` : 'Featured'}</PremiumBadge>
        {project.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-fg">{project.title}</h3>
        <p className="text-sm text-muted sm:text-base">{project.summary}</p>
      </div>
      {actionSlot ? <div className="pt-2">{actionSlot}</div> : null}
    </div>
  </GlassCard>
);
