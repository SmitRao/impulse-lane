import Link from 'next/link';

export default function RefundsPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Returns & Refunds</h1>

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
