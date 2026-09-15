import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts, getUpsellProducts } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const upsellProducts = getUpsellProducts();

  return (
    <div className="bg-[var(--il-cream)]">
      {/* Hero Section */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero illustration slot */}
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-6xl">🥟✨</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--il-ink)] mb-4">
            Glitter Dumpling Squishies
          </h1>
          <p className="text-lg text-[var(--il-muted)] max-w-2xl mx-auto mb-8">
            Squeeze the stress away with glitter-filled bao squishies. 
            Collect, fidget, and share the squishy satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 btn-pink text-lg"
            >
              Shop Multipacks
            </Link>
            <Link
              href="/product/jumbo-glitter-bao-duo"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--il-grape)] text-[var(--il-grape)] font-medium rounded-full hover:bg-[var(--il-grape)] hover:text-white transition-colors"
            >
              Go Jumbo →
            </Link>
          </div>
          
          {/* AOV nudge */}
          <p className="mt-8 text-sm text-[var(--il-muted)]">
            💡 Spend $35+ for free shipping!
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--il-ink)] mb-2">Shop Multipacks</h2>
          <p className="text-[var(--il-muted)] mb-8">Glitter-filled bao squishies in every pack — squeeze, collect, repeat.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Upsell Section */}
      {upsellProducts.length > 0 && (
        <section className="py-16 bg-wash">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-[var(--il-ink)]">Premium Pick</h2>
              <span className="badge badge-premium">Premium</span>
            </div>
            <p className="text-[var(--il-muted)] mb-8">Go big with jumbo glitter baos — the ultimate desk flex.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upsellProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-16 border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-4xl mb-3 block">📦</span>
              <h3 className="font-semibold text-[var(--il-ink)] mb-2">Multipack Only</h3>
              <p className="text-sm text-[var(--il-muted)]">
                Every order is a multipack — more squish for your buck.
              </p>
            </div>
            <div>
              <span className="text-4xl mb-3 block">✨</span>
              <h3 className="font-semibold text-[var(--il-ink)] mb-2">Glitter Inside</h3>
              <p className="text-sm text-[var(--il-muted)]">
                Each squishy is filled with sparkly glitter magic.
              </p>
            </div>
            <div>
              <span className="text-4xl mb-3 block">🎁</span>
              <h3 className="font-semibold text-[var(--il-ink)] mb-2">Gift Ready</h3>
              <p className="text-sm text-[var(--il-muted)]">
                Perfect for birthdays, desk buddies, or treating yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
