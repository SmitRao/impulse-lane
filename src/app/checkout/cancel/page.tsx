import Link from 'next/link';

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--il-cream)] py-16 px-4">
      <div className="max-w-md text-center">
        <span className="text-6xl mb-6 block">😢</span>
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-4">
          Checkout Cancelled
        </h1>
        <p className="text-[var(--il-muted)] mb-8">
          No worries! Your cart is still waiting for you. Those squishy dumplings 
          aren&apos;t going anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cart"
            className="inline-flex items-center justify-center px-6 py-3 btn-pink"
          >
            Back to Cart
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--il-pink)] text-[var(--il-pink)] font-medium rounded-full hover:bg-[var(--il-pink)] hover:text-white transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

        <p className="mt-8 text-sm text-[var(--il-muted)]">
          Having trouble? This is a test mode demo — no real payments are processed.
        </p>
      </div>
    </div>
  );
}
