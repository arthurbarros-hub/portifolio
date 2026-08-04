import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export type TimelineItem = {
  title: string;
  timeframe?: string;
  description?: string;
  meta?: string;
};

type TimelineProps = HTMLAttributes<HTMLDivElement> & {
  items: TimelineItem[];
};

export const Timeline = ({ items, className, ...props }: TimelineProps) => (
  <div className={cn('space-y-6', className)} {...props}>
    {items.map((item, index) => (
      <div key={`${item.title}-${index}`} className="relative pl-12">
        <div className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-[0.65rem] font-mono tracking-[0.2em] text-muted shadow-soft">
          {String(index + 1).padStart(2, '0')}
        </div>
        {index < items.length - 1 ? (
          <div className="absolute left-4 top-14 h-full w-px bg-border/40" />
        ) : null}
        <div className="rounded-2xl border border-white/10 bg-surface/60 p-5 shadow-soft transition-all duration-base ease-soft hover:border-white/20 hover:shadow-glow-sm sm:p-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            {item.meta ? (
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-muted">
                {item.meta}
              </span>
            ) : null}
            {item.timeframe ? <span className="font-mono">{item.timeframe}</span> : null}
          </div>
          <h3 className="mt-3 text-lg font-semibold text-fg">{item.title}</h3>
          {item.description ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          ) : null}
        </div>
      </div>
    ))}
  </div>
);

