import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';
import { surface } from '@/utils/ui';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: 'none' | 'soft' | 'strong';
};

const glowClass = {
  none: '',
  soft: 'shadow-glow-sm',
  strong: 'shadow-glow-md',
};

export const GlassCard = ({
  glow = 'soft',
  className,
  ...props
}: GlassCardProps) => (
  <div className={cn(surface.card, surface.cardHover, glowClass[glow], className)} {...props} />
);
