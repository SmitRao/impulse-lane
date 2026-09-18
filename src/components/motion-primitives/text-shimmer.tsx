'use client';

/**
 * TextShimmer — a light sweep travelling across text.
 * Adapted from the MIT-licensed Motion Primitives collection and owned in-repo.
 */

import { motion } from 'motion/react';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import { usePrefersReducedMotion } from './use-prefers-reduced-motion';

interface TextShimmerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  duration?: number;
  /** Width of the highlight band, in em. */
  spread?: number;
  baseColor?: string;
  highlightColor?: string;
}

export function TextShimmer({
  children,
  as = 'span',
  className,
  duration = 3,
  spread = 1.4,
  baseColor = 'var(--il-muted)',
  highlightColor = 'var(--il-ink)',
}: TextShimmerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.span;

  const style: CSSProperties = {
    backgroundImage: `linear-gradient(90deg, transparent calc(50% - ${spread}em), ${highlightColor}, transparent calc(50% + ${spread}em)), linear-gradient(${baseColor}, ${baseColor})`,
  };

  if (prefersReducedMotion) {
    return (
      <MotionTag className={className} style={{ color: baseColor }}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={`il-shimmer-text ${className ?? ''}`}
      style={style}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{ duration, ease: 'linear', repeat: Infinity, repeatDelay: 0.6 }}
    >
      {children}
    </MotionTag>
  );
}
