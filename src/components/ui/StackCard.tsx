import type { HTMLAttributes } from 'react';

import type { StackItem } from '@/types';
import { cn } from '@/utils/cn';
import { GlassCard } from '@/components/ui/GlassCard';

type StackCardProps = HTMLAttributes<HTMLDivElement> & {
  item: StackItem;
};

export const StackCard = ({ item, className, ...props }: StackCardProps) => (
  <GlassCard className={cn('p-5 sm:p-6', className)} {...props}>
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold text-fg">{item.label}</span>
        <span className="text-xs uppercase tracking-[0.2em] text-muted">{item.category}</span>
      </div>
      {item.icon ? (
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
          {item.icon}
        </span>
      ) : null}
    </div>
  </GlassCard>
);
