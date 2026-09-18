'use client';

import { useSyncExternalStore } from 'react';

/**
 * Reads a media query without tripping hydration: the server snapshot is always
 * `false`, and React re-renders with the real value right after hydration.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener('change', onStoreChange);
      return () => mediaQuery.removeEventListener('change', onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
