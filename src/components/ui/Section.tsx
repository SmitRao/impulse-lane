import type { ReactNode } from 'react';

type SectionTone = 'cream' | 'paper' | 'shell' | 'sand' | 'wash' | 'ink';

const toneClass: Record<SectionTone, string> = {
  cream: 'bg-[var(--il-cream)]',
  paper: 'bg-[var(--il-paper)]',
  shell: 'bg-[var(--il-shell)]',
  sand: 'bg-[var(--il-sand)]',
  wash: 'bg-wash-soft',
  ink: 'bg-[var(--il-ink)] text-white',
};

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  size?: 'default' | 'tight';
  /** Hairline rule along the top edge — cheap structure between same-tone sections. */
  divider?: boolean;
  className?: string;
  containerClassName?: string;
  /** Render children without the max-width container. */
  bleed?: boolean;
}

export function Section({
  children,
  id,
  tone = 'cream',
  size = 'default',
  divider = false,
  className = '',
  containerClassName = '',
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} ${size === 'tight' ? 'il-section-tight' : 'il-section'} ${
        divider ? 'border-t border-[var(--il-line)]' : ''
      } ${className}`}
    >
      {bleed ? children : <div className={`il-container ${containerClassName}`}>{children}</div>}
    </section>
  );
}

interface SectionHeaderProps {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  align?: 'start' | 'center';
  /** Right-aligned link or button on wide screens. */
  action?: ReactNode;
  headingLevel?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function SectionHeader({
  title,
  eyebrow,
  description,
  align = 'start',
  action,
  headingLevel: Heading = 'h2',
  className = '',
}: SectionHeaderProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end ${
        isCentered ? 'md:flex-col md:items-center' : 'md:justify-between'
      } ${className}`}
    >
      <div className={`max-w-2xl ${isCentered ? 'text-center' : ''}`}>
        {eyebrow ? <p className="il-eyebrow mb-3">{eyebrow}</p> : null}
        <Heading className="il-h2 text-[var(--il-ink)]">{title}</Heading>
        {description ? <p className="il-lead mt-4">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
