import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">About Impulse Lane</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🥟✨</span>
              <div>
                <h2 className="text-xl font-semibold text-[var(--il-ink)]">
                  Glitter Dumpling Squishies
                </h2>
                <p className="text-[var(--il-muted)]">
                  Adult collectible fidgets for stress relief
                </p>
              </div>
            </div>
            
            <p className="text-[var(--il-muted)] mb-4">
              Impulse Lane brings you glitter-filled dumpling squishies designed for adult 
              collectors and fidget enthusiasts. Our bao-shaped squishies are perfect for 
              stress relief, desk décor, and satisfying that squeeze craving.
            </p>
            
            <p className="text-[var(--il-muted)]">
              Each multipack is a mystery — you never know exactly which colors or styles 
              you&apos;ll get. That&apos;s the blind-box magic.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              What We Offer
            </h2>
            <ul className="space-y-3 text-[var(--il-muted)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--il-pink)]">✨</span>
                <span><strong>Glitter-filled squishies</strong> — Sparkly bao with visible glitter swirl</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--il-mint)]">🌙</span>
                <span><strong>Glow-in-the-dark options</strong> — Day squeeze, night glow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--il-grape)]">📦</span>
                <span><strong>Multipack only</strong> — More squish per order</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--il-gummy)]">🎁</span>
                <span><strong>Gift-ready packaging</strong> — Unboxing moment included</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Age 14+ Adult Collectibles
            </h2>
            <p className="text-[var(--il-muted)] mb-4">
              All Impulse Lane products are designed as adult collectible fidgets for ages 14 and up. 
              These are novelty items for stress relief and collecting — not children&apos;s toys.
            </p>
            <p className="text-[var(--il-muted)]">
              See our{' '}
              <Link href="/safety" className="text-[var(--il-pink)] hover:underline">
                Safety Information
              </Link>{' '}
              for important details about materials and safe use.
            </p>
          </div>

          <div className="bg-[var(--il-gummy)] rounded-xl p-6">
            <p className="text-[var(--il-ink)] text-center font-medium">
              🧪 <strong>Test Mode Notice:</strong> This store is currently in test mode. 
              We&apos;re getting ready for launch!
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 btn-pink"
          >
            ← Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
