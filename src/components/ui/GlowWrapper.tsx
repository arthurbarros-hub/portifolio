import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

type GlowWrapperProps = HTMLAttributes<HTMLDivElement> & {
  intensity?: 'soft' | 'strong';
};

const glowStyles = {
  soft: 'opacity-60 blur-3xl',
  strong: 'opacity-80 blur-[70px]',
};

export const GlowWrapper = ({
  intensity = 'soft',
  className,
  children,
  ...props
}: GlowWrapperProps) => (
  <div className={cn('relative rounded-2xl', className)} {...props}>
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute -inset-8 rounded-[inherit] bg-[radial-gradient(circle_at_top,rgb(var(--glow-color)/0.55),transparent_70%)]',
        glowStyles[intensity],
      )}
    />
    <div className="relative">{children}</div>
  </div>
);
