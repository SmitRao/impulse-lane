import Link from 'next/link';

export default function ShippingPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DRAFT Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-amber-800 text-sm font-medium">
            📝 <strong>DRAFT POLICY</strong> — This shipping policy is pending final review. 
            Details may change before launch.
          </p>
        </div>

        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Shipping Policy</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Shipping Rates — US Only
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left py-2 text-[var(--il-muted)]">Order Total</th>
                  <th className="text-right py-2 text-[var(--il-muted)]">Shipping Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-3">Under $35.00</td>
                  <td className="text-right font-medium">$4.99 Flat Rate</td>
                </tr>
                <tr>
                  <td className="py-3">$35.00 and above</td>
                  <td className="text-right font-medium text-[var(--il-mint)]">FREE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Delivery Timeframe
            </h2>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span><strong>Standard Shipping:</strong> 5–10 business days once shipped</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Orders are processed within 1–2 business days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Tracking information sent via email once shipped</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Shipping Restrictions
            </h2>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Currently shipping to <strong>United States only</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>PO Boxes accepted for standard shipping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>APO/FPO addresses: additional time may be required</span>
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
