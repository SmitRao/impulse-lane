'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export function Header() {
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🥟</span>
            <span className="font-bold text-xl tracking-tight text-[var(--il-ink)]">
              Impulse Lane
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-[var(--il-muted)] hover:text-[var(--il-pink)] transition-colors"
            >
              Shop
            </Link>
            <Link 
              href="/shipping" 
              className="text-sm font-medium text-[var(--il-muted)] hover:text-[var(--il-pink)] transition-colors"
            >
              Shipping
            </Link>
            <Link 
              href="/refunds" 
              className="text-sm font-medium text-[var(--il-muted)] hover:text-[var(--il-pink)] transition-colors"
            >
              Returns
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-[var(--il-muted)] hover:text-[var(--il-pink)] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 text-[var(--il-ink)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Cart button */}
            <Link 
              href="/cart" 
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--il-pink)] text-white text-sm font-medium hover:bg-[#E63F7A] transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--il-grape)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-zinc-100 py-4">
            <nav className="flex flex-col gap-2">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-[var(--il-ink)] hover:bg-[var(--il-cream)] rounded-lg transition-colors"
              >
                Shop
              </Link>
              <Link 
                href="/shipping" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-[var(--il-ink)] hover:bg-[var(--il-cream)] rounded-lg transition-colors"
              >
                Shipping
              </Link>
              <Link 
                href="/refunds" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-[var(--il-ink)] hover:bg-[var(--il-cream)] rounded-lg transition-colors"
              >
                Returns
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-[var(--il-ink)] hover:bg-[var(--il-cream)] rounded-lg transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/safety" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-[var(--il-ink)] hover:bg-[var(--il-cream)] rounded-lg transition-colors"
              >
                Safety Info
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
