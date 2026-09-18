'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const primaryNav = [
  { href: '/', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--il-line)] bg-[var(--il-cream)]/85 backdrop-blur-xl">
      <div className="il-container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-2xl" aria-hidden>
              🥟
            </span>
            <span className="text-lg font-bold tracking-tight text-[var(--il-ink)]">
              Impulse Lane
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 sm:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-[var(--il-muted)] transition-colors hover:bg-[var(--il-paper)] hover:text-[var(--il-ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--il-ink)] sm:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Cart button */}
            <Link href="/cart" className="il-btn il-btn-primary il-btn-sm relative">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="il-num absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--il-grape)] text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-[var(--il-line)] py-4 sm:hidden">
            <nav className="flex flex-col gap-1">
              <p className="il-eyebrow px-4 py-1">Shop</p>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                All Products
              </Link>
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                Cart
              </Link>

              <div className="my-2 border-t border-[var(--il-line)]" />

              <p className="il-eyebrow px-4 py-1">Info</p>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                About
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                Contact
              </Link>
              <Link
                href="/safety"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                Safety Info
              </Link>

              <div className="my-2 border-t border-[var(--il-line)]" />

              <p className="il-eyebrow px-4 py-1">Policies</p>
              <Link
                href="/shipping"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                Shipping
              </Link>
              <Link
                href="/returns"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                Returns
              </Link>
              <Link
                href="/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-[var(--il-ink)] transition-colors hover:bg-[var(--il-paper)]"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
