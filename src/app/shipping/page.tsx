import Link from 'next/link';

export default function ShippingPage() {
  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Shipping Policy</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-[var(--il-muted)] leading-relaxed">
              We ship multipacks in a padded mailer within the United States. Orders usually 
              leave within 2-4 business days once we have stock on hand. Flat rate is $4.99; 
              free shipping on orders $35 and up. Deliveries typically take 5-10 business days 
              after we ship. You will get a tracking link when the label is created.
            </p>
          </div>

          <div className="bg-[var(--il-gummy)] rounded-xl p-6">
            <p className="text-[var(--il-ink)] text-center">
              This site is in Stripe test mode right now, so no real orders are fulfilled 
              from here until we go live.
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
