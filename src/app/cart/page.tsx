'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/products';
import { useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shippingThreshold = 35;
  const shippingCost = subtotal >= shippingThreshold ? 0 : 4.99;
  const total = subtotal + shippingCost;
  const progressToFreeShipping = Math.min((subtotal / shippingThreshold) * 100, 100);
  const amountToFreeShipping = Math.max(shippingThreshold - subtotal, 0);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(item => ({
            productId: item.product.id,
            name: item.product.name,
            variant: item.variant,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.image,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Checkout failed');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--il-cream)] py-16">
        <span className="text-6xl mb-4">🛒</span>
        <h1 className="text-2xl font-bold text-[var(--il-ink)] mb-2">Your Cart is Empty</h1>
        <p className="text-[var(--il-muted)] mb-6">Time to fill it with some squishy dumplings!</p>
        <Link
          href="/"
          className="px-6 py-3 btn-pink"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--il-cream)] py-8 sm:py-12 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-4">Your Cart</h1>

        {/* Free Shipping Progress */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          {subtotal >= shippingThreshold ? (
            <div className="flex items-center gap-2 text-[var(--il-mint)]">
              <span className="text-lg">🎉</span>
              <span className="font-medium">You&apos;ve unlocked FREE shipping!</span>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-[var(--il-muted)]">
                  Add <strong className="text-[var(--il-pink)]">{formatPrice(amountToFreeShipping)}</strong> more for free shipping!
                </span>
                <span className="text-[var(--il-muted)]">{formatPrice(shippingThreshold)} goal</span>
              </div>
              <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[var(--il-pink)] rounded-full transition-all duration-300"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant || 'default'}`}
                className="flex gap-4 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="relative w-24 h-24 bg-wash rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="font-semibold text-[var(--il-ink)] hover:text-[var(--il-pink)] transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      {item.variant && (
                        <p className="text-sm text-[var(--il-muted)]">{item.variant}</p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.variant)}
                      className="text-[var(--il-muted)] hover:text-[var(--il-ink)] p-1"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variant)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-300 text-[var(--il-ink)] hover:border-[var(--il-pink)] transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variant)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-300 text-[var(--il-ink)] hover:border-[var(--il-pink)] transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-medium text-[var(--il-ink)]">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-[var(--il-muted)] hover:text-[var(--il-ink)] underline"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="font-semibold text-[var(--il-ink)] mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--il-muted)]">Subtotal</span>
                  <span className="text-[var(--il-ink)]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--il-muted)]">Shipping</span>
                  <span className={shippingCost === 0 ? 'text-[var(--il-mint)] font-medium' : 'text-[var(--il-ink)]'}>
                    {shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}
                  </span>
                </div>

                <div className="pt-3 border-t border-zinc-200">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg">
                  {error}
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full mt-6 py-3 btn-pink disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Loading...' : 'Checkout'}
              </button>

              {/* Trust Row */}
              <div className="mt-6 pt-4 border-t border-zinc-200 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[var(--il-muted)]">
                  <span>🔒</span>
                  <span>Secure checkout powered by Stripe</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--il-muted)]">
                  <span>🚚</span>
                  <span>Ships in 1-2 business days</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--il-muted)]">
                  <span>↩️</span>
                  <span>30-day returns on unopened items</span>
                </div>
              </div>

              <Link
                href="/"
                className="block mt-4 text-center text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)] underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
