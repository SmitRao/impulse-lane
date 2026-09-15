import Link from 'next/link';

export default function RefundsPage() {
  return (
    <div className="bg-zinc-50 py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DRAFT Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-amber-800 text-sm font-medium">
            📝 <strong>DRAFT POLICY</strong> — This returns/refunds policy is a placeholder 
            for PR/Editor review. Details subject to change before launch.
          </p>
        </div>

        <h1 className="text-3xl font-bold text-zinc-900 mb-8">Returns & Refunds Policy</h1>

        <div className="prose prose-zinc max-w-none">
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">
              30-Day Return Window
            </h2>
            <p className="text-zinc-600 mb-4">
              We want you to love your squishy dumplings! If you&apos;re not completely 
              satisfied, you may return <strong>unused, unopened items</strong> within 
              30 days of delivery for a full refund.
            </p>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Unopened multipacks in original packaging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Items must be in resellable condition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Return shipping costs are customer&apos;s responsibility</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">
              Defective Items — Exchange Policy
            </h2>
            <p className="text-zinc-600 mb-4">
              If you receive a defective item (manufacturing defect, damaged in shipping), 
              we&apos;ll exchange it for a replacement at no extra cost.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                <strong>How to request an exchange:</strong><br/>
                Contact us with your order number and a photo of the defective item. 
                We&apos;ll send a prepaid return label and ship your replacement ASAP.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">
              Non-Returnable Items
            </h2>
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-4">
              <p className="text-rose-800 text-sm font-medium">
                ⚠️ <strong>Glitter Leak Policy</strong><br/>
                Due to the nature of glitter-filled squishies, we cannot accept returns 
                for opened items with glitter leakage <strong>without photo documentation</strong>.
              </p>
            </div>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Opened blind-box packs (mystery element)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Items with intentional damage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span>Glitter leak returns without photo proof</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">
              Refund Processing
            </h2>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-zinc-400">•</span>
                <span>Refunds processed within 5–7 business days of receiving return</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400">•</span>
                <span>Refund issued to original payment method</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400">•</span>
                <span>Original shipping costs are non-refundable</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">
              Current Status
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>🧪 TEST MODE DEMO ONLY</strong><br/>
                This site is currently in test mode. No real orders are processed. 
                This policy will apply once the store is live.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white font-medium rounded-full hover:bg-rose-600 transition-colors"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
