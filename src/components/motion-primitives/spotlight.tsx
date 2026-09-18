'use client';

/**
 * Spotlight — a soft radial glow that follows the pointer inside its parent.
 * Adapted from the MIT-licensed Motion Primitives collection and owned in-repo.
 *
 * Pointer-driven only: skipped on coarse pointers (touch) and when the visitor
 * prefers reduced motion, so it never interferes with mobile tapping.
 */

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from './use-media-query';
import { usePrefersReducedMotion } from './use-prefers-reduced-motion';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';

interface SpotlightProps {
  className?: string;
  size?: number;
}

export function Spotlight({ className, size = 320 }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const supportsHover = useMediaQuery(FINE_POINTER);
  const prefersReducedMotion = usePrefersReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 220, damping: 28, mass: 0.4 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const left = useTransform(springX, (value) => `${value - size / 2}px`);
  const top = useTransform(springY, (value) => `${value - size / 2}px`);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent || !supportsHover || prefersReducedMotion) return;

    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }

    const onMove = (event: PointerEvent) => {
      const bounds = parent.getBoundingClientRect();
      mouseX.set(event.clientX - bounds.left);
      mouseY.set(event.clientY - bounds.top);
    };

    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    parent.addEventListener('pointermove', onMove);
    parent.addEventListener('pointerenter', onEnter);
    parent.addEventListener('pointerleave', onLeave);

    return () => {
      parent.removeEventListener('pointermove', onMove);
      parent.removeEventListener('pointerenter', onEnter);
      parent.removeEventListener('pointerleave', onLeave);
    };
  }, [supportsHover, prefersReducedMotion, mouseX, mouseY]);

  if (!supportsHover || prefersReducedMotion) return null;

  return (
    <motion.div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className ?? ''}`}
      style={{ width: size, height: size, left, top }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
