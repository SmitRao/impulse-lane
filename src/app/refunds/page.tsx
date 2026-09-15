import Link from 'next/link';

export default function RefundsPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Returns & Refunds Policy</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              30-Day Return Window
            </h2>
            <p className="text-[var(--il-muted)] mb-4">
              We want you to love your squishy dumplings! If you&apos;re not completely 
              satisfied, you may return <strong>unused, unopened items</strong> within 
              30 days of delivery for a full refund.
            </p>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-mint)]">✓</span>
                <span>Unopened multipacks in original packaging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-mint)]">✓</span>
                <span>Items must be in resellable condition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-mint)]">✓</span>
                <span>Return shipping costs are customer&apos;s responsibility</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Defective Items — Exchange Policy
            </h2>
            <p className="text-[var(--il-muted)] mb-4">
              If you receive a defective item (manufacturing defect, damaged in shipping), 
              we&apos;ll exchange it for a replacement at no extra cost.
            </p>
            <div className="bg-[var(--il-mint)] bg-opacity-20 border border-[var(--il-mint)] rounded-lg p-4">
              <p className="text-[var(--il-ink)] text-sm">
                <strong>How to request an exchange:</strong><br/>
                Contact us with your order number and a photo of the defective item. 
                We&apos;ll send a prepaid return label and ship your replacement ASAP.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Non-Returnable Items
            </h2>
            <div className="bg-[var(--il-pink)] bg-opacity-10 border border-[var(--il-pink)] rounded-lg p-4 mb-4">
              <p className="text-[var(--il-ink)] text-sm font-medium">
                ⚠️ <strong>Glitter Leak Policy</strong><br/>
                Due to the nature of glitter-filled squishies, we cannot accept returns 
                for opened items with glitter leakage <strong>without photo documentation</strong>.
              </p>
            </div>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">✗</span>
                <span>Opened blind-box packs (mystery element)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">✗</span>
                <span>Items with intentional damage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">✗</span>
                <span>Glitter leak returns without photo proof</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Refund Processing
            </h2>
            <ul className="space-y-2 text-[var(--il-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Refunds processed within 5–7 business days of receiving return</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Refund issued to original payment method</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--il-pink)]">•</span>
                <span>Original shipping costs are non-refundable</span>
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
