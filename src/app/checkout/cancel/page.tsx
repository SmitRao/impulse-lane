import Link from 'next/link';

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-zinc-50 py-16 px-4">
      <div className="max-w-md text-center">
        <span className="text-6xl mb-6 block">😢</span>
        <h1 className="text-3xl font-bold text-zinc-900 mb-4">
          Checkout Cancelled
        </h1>
        <p className="text-zinc-600 mb-8">
          No worries! Your cart is still waiting for you. Those squishy dumplings 
          aren&apos;t going anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cart"
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white font-medium rounded-full hover:bg-rose-600 transition-colors"
          >
            Back to Cart
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-zinc-900 text-zinc-900 font-medium rounded-full hover:bg-zinc-900 hover:text-white transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Having trouble? This is a test mode demo — no real payments are processed.
        </p>
      </div>
    </div>
  );
}
