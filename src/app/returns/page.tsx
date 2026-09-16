import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Returns Policy — Impulse Lane',
  description: 'Returns and refunds policy for Impulse Lane glitter dumpling squishies. 30-day unopened returns, 14-day damage claims.',
};

export default function ReturnsPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Returns Policy</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-[var(--il-muted)] leading-relaxed mb-4">
              If something arrives damaged or empty of glitter (seal broken or leaking), 
              email us with photos within 14 days and we will replace it or refund the 
              product price. Unopened packs can be returned within 30 days for a refund 
              of the product price; return shipping is on you unless we made a mistake. 
              Opened packs are not returnable except for defects.
            </p>
          </div>

          <div className="bg-[var(--il-grape)] bg-opacity-10 border border-[var(--il-grape)] rounded-xl p-6">
            <p className="text-[var(--il-ink)] text-center font-medium">
              Age 14+ adult collectible fidgets. Not children&apos;s toys.
            </p>
          </div>

          <div className="bg-[var(--il-gummy)] rounded-xl p-6">
            <p className="text-[var(--il-ink)] text-center">
              This site is in Stripe test mode right now, so no real orders are fulfilled 
              from here until we go live.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shipping"
            className="inline-flex items-center justify-center px-6 py-3 btn-pink"
          >
            View Shipping Policy
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--il-pink)] text-[var(--il-pink)] rounded-full hover:bg-[var(--il-pink)] hover:text-white transition-colors"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
