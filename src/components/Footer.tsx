'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'submitted'>('idle');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setEmailStatus('submitted');
    }
  };

  return (
    <footer className="bg-white border-t border-zinc-200 mt-auto">
      {/* Email Capture Section */}
      <div className="bg-[var(--il-gummy)] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-bold text-lg text-[var(--il-ink)] mb-2">
              Get Squishy Updates
            </h3>
            <p className="text-sm text-[var(--il-muted)] mb-4">
              New drops, restock alerts, and collector tips — no spam, just squish.
            </p>
            
            {emailStatus === 'idle' ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-full border border-zinc-300 focus:outline-none focus:border-[var(--il-pink)] text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 btn-pink text-sm whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-xl p-4 border border-[var(--il-mint)]">
                <p className="text-[var(--il-mint)] font-medium mb-1">Thanks for signing up!</p>
                <p className="text-xs text-[var(--il-muted)]">
                  Email list not connected yet — we saved your interest locally. 
                  Full signup coming at launch!
                </p>
              </div>
            )}
            
            <p className="text-xs text-[var(--il-muted)] mt-3">
              Email list coming soon at full launch
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥟</span>
              <span className="font-bold text-lg text-[var(--il-ink)]">Impulse Lane</span>
            </div>
            <p className="text-sm text-[var(--il-muted)]">
              Glitter-filled dumpling squishies for stress relief and collecting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--il-ink)] mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--il-ink)] mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  Product Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--il-ink)] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200">
          <p className="text-xs text-[var(--il-muted)] text-center mb-4">
            © {new Date().getFullYear()} Impulse Lane. All rights reserved.
          </p>
          <div className="text-xs text-[var(--il-muted)] text-center max-w-2xl mx-auto space-y-2">
            <p>
              <strong>Age 14+ adult collectible fidgets</strong> — not children&apos;s toys.
            </p>
            <p>
              ⚠️ Novelty collectible squishies. Not for children under 3. 
              Choking hazard — small parts / glitter fill.
            </p>
            <p>
              <Link href="/safety" className="text-[var(--il-pink)] hover:underline">
                View full safety information →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
