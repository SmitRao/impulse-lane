import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥟</span>
              <span className="font-bold text-lg text-zinc-900">Impulse Lane</span>
            </div>
            <p className="text-sm text-zinc-600">
              Blind-box dumpling squishies for collectors. Fun impulse collectibles.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-zinc-600 hover:text-zinc-900">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-sm text-zinc-600 hover:text-zinc-900">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="text-sm text-zinc-600 hover:text-zinc-900">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200">
          <p className="text-xs text-zinc-500 text-center">
            © {new Date().getFullYear()} Impulse Lane. Test mode demo — not a real store.
            <br />
            Dummy catalog for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
