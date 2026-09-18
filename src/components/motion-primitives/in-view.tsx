'use client';

/**
 * InView — reveals children the first time they scroll into the viewport.
 * Adapted from the MIT-licensed Motion Primitives collection and owned in-repo.
 */

import { motion, useInView, type Transition, type Variants } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import { usePrefersReducedMotion } from './use-prefers-reduced-motion';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

type MarginValue = `${number}${'px' | '%'}`;
type MarginType =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const still: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

interface InViewProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  transition?: Transition;
  /** IntersectionObserver root margin, e.g. "-15% 0px". */
  margin?: MarginType;
  once?: boolean;
  /** Stagger applied to direct motion children that declare variants. */
  stagger?: number;
  delay?: number;
  as?: 'div' | 'section' | 'ul' | 'li' | 'span';
}

export function InView({
  children,
  className,
  variants,
  transition,
  margin = '-12% 0px',
  once = true,
  stagger,
  delay = 0,
  as = 'div',
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isInView = useInView(ref, { once, margin });

  const MotionTag = motion[as] as typeof motion.div;
  // A staggering wrapper only orchestrates its children, so it stays visually inert.
  const fallbackVariants = stagger ? { hidden: {}, visible: {} } : defaultVariants;
  const activeVariants = prefersReducedMotion ? still : (variants ?? fallbackVariants);
  const activeTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: 0.7,
        ease: EASE_OUT,
        delay,
        ...(stagger ? { staggerChildren: stagger, delayChildren: delay } : {}),
        ...transition,
      };

  return (
    <MotionTag
      ref={ref}
      data-il-motion
      className={className}
      variants={activeVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={activeTransition}
    >
      {children}
    </MotionTag>
  );
}

/** Child of an <InView stagger={...}> group. */
export function InViewItem({
  children,
  className,
  variants,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: 'div' | 'li' | 'span';
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      data-il-motion
      className={className}
      variants={prefersReducedMotion ? still : (variants ?? defaultVariants)}
    >
      {children}
    </MotionTag>
  );
}
