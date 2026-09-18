'use client';

/**
 * Magnetic — nudges its child toward the pointer on hover.
 * Adapted from the MIT-licensed Motion Primitives collection and owned in-repo.
 *
 * Desktop-only by design: on touch devices and for reduced-motion visitors the
 * child renders untouched, so tap targets never move under a finger.
 */

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, type ReactNode } from 'react';
import { useMediaQuery } from './use-media-query';
import { usePrefersReducedMotion } from './use-prefers-reduced-motion';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Max travel in px. */
  strength?: number;
  /** Pointer distance from the element's centre that starts the pull. */
  range?: number;
}

export function Magnetic({
  children,
  className,
  strength = 10,
  range = 120,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const supportsHover = useMediaQuery(FINE_POINTER);
  const prefersReducedMotion = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.3 });

  useEffect(() => {
    if (!supportsHover || prefersReducedMotion) return;

    const onMove = (event: PointerEvent) => {
      const element = ref.current;
      if (!element) return;

      const bounds = element.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance > range) {
        x.set(0);
        y.set(0);
        return;
      }

      const pull = 1 - distance / range;
      x.set((deltaX / range) * strength * pull * 2);
      y.set((deltaY / range) * strength * pull * 2);
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [supportsHover, prefersReducedMotion, range, strength, x, y]);

  if (!supportsHover || prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className ?? ''}`}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.span>
  );
}
