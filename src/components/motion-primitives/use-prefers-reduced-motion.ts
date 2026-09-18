'use client';

import { useMediaQuery } from './use-media-query';

/**
 * Reports `false` on the server and during hydration so markup matches, then
 * settles on the OS setting. Paint-time safety for reduced-motion visitors comes
 * from the `[data-il-motion]` rule in globals.css, which wins over the inline
 * styles Motion writes.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
