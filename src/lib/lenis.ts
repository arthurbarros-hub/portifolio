import Lenis, { type LenisOptions } from 'lenis';

export const createLenis = (options: LenisOptions = {}) =>
  new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    ...options,
  });

