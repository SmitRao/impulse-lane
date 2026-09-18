import Link from 'next/link';
import { InView, InViewItem, TextEffect } from '@/components/motion-primitives';
import { Section, SectionHeader } from '@/components/ui/Section';

const offerings = [
  {
    icon: '✨',
    title: 'Glitter-filled squishies',
    body: 'Sparkly bao with visible glitter swirl',
  },
  {
    icon: '🌙',
    title: 'Glow-in-the-dark options',
    body: 'Day squeeze, night glow',
  },
  {
    icon: '📦',
    title: 'Multipack only',
    body: 'More squish per order',
  },
  {
    icon: '🎁',
    title: 'Gift-ready packaging',
    body: 'Unboxing moment included',
  },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="wash">
        <div className="il-container-narrow mx-auto">
          <p className="il-eyebrow mb-4">About</p>
          <TextEffect
            as="h1"
            per="word"
            preset="blur-slide"
            className="il-display text-[var(--il-ink)]"
            stagger={0.05}
          >
            About Impulse Lane
          </TextEffect>
          <p className="il-lead mt-6">
            Impulse Lane brings you glitter-filled dumpling squishies designed for adult collectors
            and fidget enthusiasts. Our bao-shaped squishies are perfect for stress relief, desk
            décor, and satisfying that squeeze craving.
          </p>
          <p className="il-body mt-4">
            Each multipack is a mystery — you never know exactly which colors or styles you&apos;ll
            get. That&apos;s the blind-box magic.
          </p>

          <div className="il-hairline mt-10 flex flex-wrap items-center gap-3 pt-8">
            <span className="il-chip">
              <span aria-hidden>🥟</span> Glitter Dumpling Squishies
            </span>
            <span className="il-chip">Adult collectible fidgets for stress relief</span>
          </div>
        </div>
      </Section>

      <Section tone="paper" divider>
        <InView>
          <SectionHeader eyebrow="The range" title="What We Offer" />
        </InView>
        <InView className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
          {offerings.map((item) => (
            <InViewItem key={item.title} className="h-full">
              <div className="il-card flex h-full items-start gap-4 p-6">
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <div>
                  <h3 className="il-h3 text-[var(--il-ink)]">{item.title}</h3>
                  <p className="il-body mt-1 text-sm">{item.body}</p>
                </div>
              </div>
            </InViewItem>
          ))}
        </InView>
      </Section>

      <Section tone="shell" divider>
        <div className="il-container-narrow mx-auto">
          <InView>
            <SectionHeader eyebrow="Good to know" title="Age 14+ Adult Collectibles" />
            <p className="il-body mt-6">
              All Impulse Lane products are designed as adult collectible fidgets for ages 14 and
              up. These are novelty items for stress relief and collecting — not children&apos;s
              toys.
            </p>
            <p className="il-body mt-4">
              See our{' '}
              <Link href="/safety" className="font-semibold text-[var(--il-pink)] hover:underline">
                Safety Information
              </Link>{' '}
              for important details about materials and safe use.
            </p>
          </InView>
        </div>
      </Section>

      <Section tone="cream" size="tight" divider>
        <div className="il-container-narrow mx-auto">
          <div className="rounded-[var(--il-r-lg)] bg-[var(--il-gummy)] p-6">
            <p className="text-center text-[var(--il-ink)]">
              🧪 <strong>Test Mode Notice:</strong> This store is currently in test mode. We&apos;re
              getting ready for launch!
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link href="/" className="il-btn il-btn-primary">
              ← Shop Now
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
