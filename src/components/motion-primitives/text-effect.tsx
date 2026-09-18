'use client';

/**
 * TextEffect — per-word / per-character reveal.
 * Adapted from the MIT-licensed Motion Primitives collection and owned in-repo.
 */

import { motion, type Transition, type Variants } from 'motion/react';
import type { ElementType } from 'react';
import { usePrefersReducedMotion } from './use-prefers-reduced-motion';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type TextEffectPreset = 'fade' | 'blur' | 'slide' | 'blur-slide';

const presets: Record<TextEffectPreset, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  slide: {
    hidden: { opacity: 0, y: '0.35em' },
    visible: { opacity: 1, y: 0 },
  },
  'blur-slide': {
    hidden: { opacity: 0, y: '0.4em', filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
};

const still: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

interface TextEffectProps {
  children: string;
  as?: ElementType;
  per?: 'word' | 'char';
  preset?: TextEffectPreset;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  /** Reveal when scrolled into view instead of on mount. */
  inView?: boolean;
}

export function TextEffect({
  children,
  as = 'p',
  per = 'word',
  preset = 'blur-slide',
  className,
  segmentClassName,
  delay = 0,
  stagger = 0.05,
  duration = 0.6,
  inView = false,
}: TextEffectProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const itemVariants = prefersReducedMotion ? still : presets[preset];
  const transition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration, ease: EASE_OUT };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const words = children.split(' ');

  return (
    <MotionTag
      data-il-motion
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? undefined : 'visible'}
      whileInView={inView ? 'visible' : undefined}
      viewport={inView ? { once: true, margin: '-10% 0px' } : undefined}
      aria-label={per === 'char' ? children : undefined}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className="inline-block whitespace-pre"
          aria-hidden={per === 'char' ? true : undefined}
        >
          {per === 'char' ? (
            Array.from(word).map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                className={`inline-block ${segmentClassName ?? ''}`}
                variants={itemVariants}
                transition={transition}
              >
                {char}
              </motion.span>
            ))
          ) : (
            <motion.span
              className={`inline-block ${segmentClassName ?? ''}`}
              variants={itemVariants}
              transition={transition}
            >
              {word}
            </motion.span>
          )}
          {wordIndex < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </MotionTag>
  );
}
