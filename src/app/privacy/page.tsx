import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Privacy Policy</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-[var(--il-muted)] mb-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-[var(--il-ink)]">
              Impulse Lane (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the impulse-lane.onrender.com 
              website. This page informs you of our policies regarding the collection, use, and 
              disclosure of personal information when you use our Service.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Information We Collect
            </h2>
            <p className="text-[var(--il-muted)] mb-4">
              When you place an order, we collect information you provide directly:
            </p>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span><strong>Contact Information:</strong> Name, email address, phone number</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span><strong>Shipping Address:</strong> Street address, city, state, ZIP code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span><strong>Payment Information:</strong> Processed securely by Stripe; we do not store card details</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              How We Use Your Information
            </h2>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>To process and fulfill your orders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>To send order confirmations and shipping updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>To respond to customer service requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>To improve our website and services</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Payment Security
            </h2>
            <p className="text-[var(--il-muted)]">
              All payment processing is handled by Stripe, a PCI-DSS compliant payment processor. 
              Your payment information is encrypted and transmitted directly to Stripe. We never 
              see or store your full credit card number.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Cookies
            </h2>
            <p className="text-[var(--il-muted)]">
              We use essential cookies to remember your cart contents during your session. 
              We do not use tracking or advertising cookies.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Data Retention
            </h2>
            <p className="text-[var(--il-muted)]">
              We retain order information for as long as necessary to fulfill orders, 
              provide customer service, and comply with legal obligations.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Your Rights
            </h2>
            <p className="text-[var(--il-muted)]">
              You may request access to, correction of, or deletion of your personal information 
              by contacting us. We will respond to your request within a reasonable timeframe.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--il-muted)]">
              If you have questions about this Privacy Policy, please{' '}
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
