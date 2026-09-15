import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Contact Us</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-[var(--il-ink)] text-lg mb-6">
              Got questions about your order, our products, or just want to say hi? 
              We&apos;d love to hear from you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold text-[var(--il-ink)] mb-1">Email</h3>
                  <p className="text-[var(--il-muted)]">
                    <a 
                      href="mailto:hello@impulselane.com" 
                      className="text-[var(--il-pink)] hover:underline"
                    >
                      hello@impulselane.com
                    </a>
                  </p>
                  <p className="text-sm text-[var(--il-muted)] mt-1">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📦</span>
                <div>
                  <h3 className="font-semibold text-[var(--il-ink)] mb-1">Order Issues</h3>
                  <p className="text-[var(--il-muted)]">
                    For order-related questions, please include your order number in your message. 
                    Check your email for your order confirmation with tracking details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🔄</span>
                <div>
                  <h3 className="font-semibold text-[var(--il-ink)] mb-1">Returns & Refunds</h3>
                  <p className="text-[var(--il-muted)]">
                    Need to return something? Check our{' '}
                    <Link href="/refunds" className="text-[var(--il-pink)] hover:underline">
                      Returns & Refunds Policy
                    </Link>{' '}
                    first, then email us with your order details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <h3 className="font-semibold text-[var(--il-ink)] mb-1">General Inquiries</h3>
                  <p className="text-[var(--il-muted)]">
                    Wholesale inquiries, collaborations, or just fan mail — we read everything!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Before You Reach Out
            </h2>
            <p className="text-[var(--il-muted)] mb-4">
              You might find your answer in these resources:
            </p>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/shipping" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>🚚</span> Shipping Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/refunds" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>↩️</span> Returns & Refunds
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>🔒</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>📋</span> Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--il-gummy)] rounded-xl p-6">
            <p className="text-[var(--il-ink)] text-center font-medium">
              🧪 <strong>Test Mode Notice:</strong> This store is currently in test mode. 
              No real orders are being processed.
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
