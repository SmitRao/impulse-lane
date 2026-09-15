'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-zinc-50 py-16 px-4">
      <div className="max-w-md text-center">
        <span className="text-6xl mb-6 block">🎉</span>
        <h1 className="text-3xl font-bold text-zinc-900 mb-4">
          Order Confirmed!
        </h1>
        <p className="text-zinc-600 mb-6">
          Thank you for your order! Your mystery dumpling squishies are on their way 
          (once we launch for real — this is a test mode demo).
        </p>
        
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-amber-800 text-sm">
            🧪 <strong>TEST MODE:</strong> No actual charge was made. 
            This is a demo store using Stripe test mode.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-8 text-left">
          <h2 className="font-semibold text-zinc-900 mb-3">What happens next?</h2>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Order confirmation email (if this were live)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Shipping notification with tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Delivery in 5-10 business days</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white font-medium rounded-full hover:bg-rose-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
