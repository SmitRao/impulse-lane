'use client';

import Link from 'next/link';
import { useState } from 'react';

const footerColumns = [
  {
    heading: 'Shop',
    links: [
      { href: '/', label: 'All Products' },
      { href: '/cart', label: 'Cart' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/shipping', label: 'Shipping' },
      { href: '/returns', label: 'Returns' },
      { href: '/safety', label: 'Product Safety' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
];

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
    <footer className="mt-auto border-t border-[var(--il-line)] bg-[var(--il-paper)]">
      {/* Email Capture Section */}
      <div className="border-b border-[var(--il-line)] bg-[var(--il-gummy)]">
        <div className="il-container py-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div className="max-w-md">
              <h3 className="il-h3 text-[var(--il-ink)]">Get Squishy Updates</h3>
              <p className="mt-2 text-sm text-[var(--il-ink)]/70">
                New drops, restock alerts, and collector tips — no spam, just squish.
              </p>
            </div>

            <div className="w-full md:max-w-sm">
              {emailStatus === 'idle' ? (
                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="footer-email">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="min-h-12 flex-1 rounded-full border border-[var(--il-line-strong)] bg-white px-4 text-sm focus:border-[var(--il-pink)] focus:outline-none"
                    required
                  />
                  <button type="submit" className="il-btn il-btn-primary il-btn-sm whitespace-nowrap">
                    Notify Me
                  </button>
                </form>
              ) : (
                <div className="il-card-flat p-4 text-left">
                  <p className="mb-1 font-semibold text-[var(--il-mint-ink)]">
                    Thanks for signing up!
                  </p>
                  <p className="text-xs text-[var(--il-muted)]">
                    Email list not connected yet — we saved your interest locally. Full signup coming
                    at launch!
                  </p>
                </div>
              )}

              <p className="mt-3 text-xs text-[var(--il-ink)]/60">
                Email list coming soon at full launch
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="il-container py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl" aria-hidden>
                🥟
              </span>
              <span className="text-lg font-bold text-[var(--il-ink)]">Impulse Lane</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--il-muted)]">
              Glitter-filled dumpling squishies for stress relief and collecting.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="il-eyebrow mb-4">{column.heading}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--il-muted)] transition-colors hover:text-[var(--il-pink)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="il-hairline mt-12 pt-8">
          <p className="mb-4 text-center text-xs text-[var(--il-muted)]">
            © {new Date().getFullYear()} Impulse Lane. All rights reserved.
          </p>
          <div className="mx-auto max-w-2xl space-y-2 text-center text-xs text-[var(--il-muted)]">
            <p>
              <strong className="text-[var(--il-ink)]">Age 14+ adult collectible fidgets</strong> —
              not children&apos;s toys.
            </p>
            <p>
              ⚠️ Novelty collectible squishies. Not for children under 3. Choking hazard — small
              parts / glitter fill.
            </p>
            <p>
              <Link href="/safety" className="font-medium text-[var(--il-pink)] hover:underline">
                View full safety information →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
