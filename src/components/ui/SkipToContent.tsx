import { cn } from '@/utils/cn';

type SkipToContentProps = {
  className?: string;
};

export const SkipToContent = ({ className }: SkipToContentProps) => (
  <a
    href="#content"
    className={cn(
      'sr-only z-50 rounded-md bg-surface px-4 py-3 text-sm font-medium text-fg shadow-glow-sm focus:not-sr-only focus:fixed focus:left-6 focus:top-6',
      className,
    )}
  >
    Skip to content
  </a>
);
