import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

type PremiumBadgeProps = HTMLAttributes<HTMLSpanElement>;

export const PremiumBadge = ({ className, ...props }: PremiumBadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border border-white/10 bg-surface/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted shadow-soft backdrop-blur',
      className,
    )}
    {...props}
  />
);
