import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';
import { layout } from '@/utils/ui';

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div' | 'main' | 'article';
  innerClassName?: string;
};

export const SectionContainer = ({
  as = 'section',
  className,
  innerClassName,
  children,
  ...props
}: SectionContainerProps) => {
  const Component = as;

  return (
    <Component className={cn(layout.section, className)} {...props}>
      <div className={cn(layout.sectionInner, innerClassName)}>{children}</div>
    </Component>
  );
};

