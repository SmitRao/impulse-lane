import Link from 'next/link';

export default function SafetyPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Product Safety Information</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          {/* Age Grading */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[var(--il-grape)] text-white text-sm font-bold rounded-full">14+</span>
              <h2 className="text-xl font-semibold text-[var(--il-ink)]">
                Age Recommendation
              </h2>
            </div>
            <p className="text-[var(--il-muted)] mb-4">
              All Impulse Lane glitter dumpling squishies are designed as <strong>novelty collectibles 
              for ages 14 and up</strong>. These products are intended for stress relief, desk décor, 
              and adult collectors.
            </p>
            <div className="bg-[var(--il-pink)] bg-opacity-10 border border-[var(--il-pink)] rounded-lg p-4">
              <p className="text-[var(--il-ink)] text-sm font-medium">
                ⚠️ <strong>NOT SUITABLE FOR CHILDREN UNDER 3 YEARS</strong><br/>
                These products are not intended for use as children&apos;s toys.
              </p>
            </div>
          </div>

          {/* Choking Hazard */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              ⚠️ Choking Hazard Warning
            </h2>
            <div className="bg-yellow-50 border border-yellow-400 rounded-lg p-4 mb-4">
              <p className="text-[var(--il-ink)] font-medium">
                <strong>WARNING: CHOKING HAZARD</strong> — Small parts. Not for children under 3 years.
              </p>
            </div>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Products contain small parts that may present a choking hazard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Keep away from infants and toddlers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Adult supervision required if used around young children</span>
              </li>
            </ul>
          </div>

          {/* Materials */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Materials & Construction
            </h2>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span><strong>Outer shell:</strong> TPR (thermoplastic rubber), TPE, or silicone — soft, squeezable, and durable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span><strong>Fill:</strong> Glitter particles, beads, or crystal powder suspended in gel or air</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span><strong>Finish:</strong> Sealed construction designed to contain fill materials</span>
              </li>
            </ul>
          </div>

          {/* Glitter Containment */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              ✨ Glitter Containment
            </h2>
            <p className="text-[var(--il-muted)] mb-4">
              Our squishies are designed with sealed construction to keep glitter contained inside. 
              However, please note:
            </p>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Do not puncture, cut, or intentionally damage the outer shell</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Avoid excessive stretching beyond normal squeeze/rebound use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>If glitter leaks due to damage, discontinue use and dispose properly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Glitter is cosmetic-grade but not intended for skin contact or ingestion</span>
              </li>
            </ul>
          </div>

          {/* Safe Use */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Safe Use Guidelines
            </h2>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-mint)]">✓</span>
                <span>Squeeze, press, and stretch gently for stress relief</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-mint)]">✓</span>
                <span>Display on desk, shelf, or in collection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-mint)]">✓</span>
                <span>Clean with damp cloth if needed (do not submerge)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">✗</span>
                <span>Do not place in mouth or near face</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">✗</span>
                <span>Do not expose to extreme heat or direct sunlight for extended periods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">✗</span>
                <span>Do not use if packaging is damaged or product shows signs of leakage</span>
              </li>
            </ul>
          </div>

          {/* Compliance Note */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Product Standards
            </h2>
            <p className="text-[var(--il-muted)]">
              Impulse Lane products are sourced from manufacturers and are intended as novelty 
              collectibles for adult use. We are committed to working with suppliers who follow 
              applicable safety standards for materials and construction. For questions about 
              specific product compliance, please{' '}
              <Link href="/contact" className="text-[var(--il-pink)] hover:underline">
                contact us
              </Link>.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[var(--il-gummy)] rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[var(--il-ink)] mb-2">
              Questions or Concerns?
            </h2>
            <p className="text-[var(--il-ink)]">
              If you have safety questions about any Impulse Lane product, please{' '}
              <Link href="/contact" className="text-[var(--il-pink)] hover:underline font-medium">
                contact us
              </Link>{' '}
              and we&apos;ll be happy to help.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 btn-pink"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
