import type React from 'react';

import { cn } from '@/utils/cn';

type VisuallyHiddenProps = React.HTMLAttributes<HTMLSpanElement>;

export const VisuallyHidden = ({ className, ...props }: VisuallyHiddenProps) => (
  <span className={cn('sr-only', className)} {...props} />
);

