import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Terms of Service</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-[var(--il-muted)] mb-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-[var(--il-ink)]">
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using the 
              Impulse Lane website. By accessing or using our Service, you agree to be bound 
              by these Terms.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Products
            </h2>
            <p className="text-[var(--il-muted)] mb-4">
              Impulse Lane sells novelty collectible squishies intended for adult collectors and 
              stress relief. Our products are:
            </p>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Novelty collectible items, not children&apos;s toys</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Contain small parts and glitter fill — choking hazard for children under 3</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Subject to availability and may vary in color/design due to blind-box nature</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Orders and Payment
            </h2>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>All prices are listed in USD</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Payment is processed securely via Stripe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>We reserve the right to refuse or cancel orders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Prices and availability subject to change without notice</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Shipping
            </h2>
            <p className="text-[var(--il-muted)]">
              We currently ship to the United States only. Shipping times and costs are 
              displayed at checkout. Please review our{' '}
              <Link href="/shipping" className="text-[var(--il-pink)] hover:underline">
                Shipping Policy
              </Link>{' '}
              for full details.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Returns and Refunds
            </h2>
            <p className="text-[var(--il-muted)]">
              We accept returns of unopened items within 30 days. Opened blind-box packs cannot 
              be returned due to the mystery nature of the product. See our{' '}
              <Link href="/refunds" className="text-[var(--il-pink)] hover:underline">
                Returns & Refunds Policy
              </Link>{' '}
              for complete details.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Intellectual Property
            </h2>
            <p className="text-[var(--il-muted)]">
              All content on this website, including text, graphics, logos, and images, is the 
              property of Impulse Lane or its content suppliers and is protected by copyright laws.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Limitation of Liability
            </h2>
            <p className="text-[var(--il-muted)]">
              Impulse Lane shall not be liable for any indirect, incidental, special, or 
              consequential damages resulting from your use of or inability to use our products 
              or services.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Changes to Terms
            </h2>
            <p className="text-[var(--il-muted)]">
              We reserve the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting. Continued use of the Service constitutes acceptance of 
              modified Terms.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Contact
            </h2>
            <p className="text-[var(--il-muted)]">
              Questions about these Terms? Please{' '}
              <Link href="/contact" className="text-[var(--il-pink)] hover:underline">
                contact us
              </Link>.
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
