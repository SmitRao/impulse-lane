import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="bg-[var(--il-cream)]">
      {/* Hero Section */}
      <section className="bg-wash py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Image */}
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none lg:order-2">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/products/il-bao-steamer-set.jpg"
                  alt="Bao steamer set with glitter squishies"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Hero Text */}
            <div className="text-center lg:text-left lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--il-ink)] mb-4">
                Glitter Dumpling Squishies
              </h1>
              <p className="text-lg text-[var(--il-muted)] max-w-xl mx-auto lg:mx-0 mb-6">
                Squeeze the stress away with glitter-filled bao squishies. 
                Collect, fidget, and share the squishy satisfaction.
              </p>
              
              {/* Chips */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--il-grape)] text-white">
                  Age 14+
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--il-mint)] text-[var(--il-ink)]">
                  Free Shipping $35+
                </span>
              </div>
              
              {/* CTA */}
              <Link
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 btn-pink text-lg"
              >
                Shop Multipacks
              </Link>
            </div>
          </div>
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
