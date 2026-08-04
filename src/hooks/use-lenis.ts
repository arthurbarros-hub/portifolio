'use client';

import { useEffect, useRef } from 'react';

import { createLenis } from '@/lib/lenis';

export const useLenis = (enabled = true) => {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const lenis = createLenis();

    const raf = (time: number) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, [enabled]);
};

