import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/cn';
import { GlowWrapper } from '@/components/ui/GlowWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { PremiumBadge } from '@/components/ui/PremiumBadge';

type CTAProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  badge?: string;
  actions?: ReactNode;
};

export const CTA = ({
  title,
  description,
  badge,
  actions,
  className,
  ...props
}: CTAProps) => (
  <GlowWrapper className={className}>
    <GlassCard className="p-8 sm:p-10" {...props}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4">
          {badge ? <PremiumBadge>{badge}</PremiumBadge> : null}
          <h3 className="text-2xl font-semibold text-fg sm:text-3xl">{title}</h3>
          {description ? <p className="text-sm text-muted sm:text-base">{description}</p> : null}
        </div>
        {actions ? <div className={cn('flex flex-wrap gap-3')}>{actions}</div> : null}
      </div>
    </GlassCard>
  </GlowWrapper>
);

