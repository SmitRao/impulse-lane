import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "/products/il-bao-steamer-set.jpg",
        width: 1200,
        height: 1200,
        alt: "Impulse Lane - Glitter Dumpling Squishies",
      },
    ],
  },
};

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

      {/* UGC/ASMR Embed Section - Placeholder for future content */}
      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--il-ink)] mb-2">Squishy Sounds Coming Soon</h2>
            <p className="text-[var(--il-muted)]">ASMR squeeze videos and customer unboxings — launching soon.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ASMR Video Placeholder */}
            <div className="aspect-video bg-zinc-100 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-zinc-300">
              <span className="text-4xl mb-3">🎥</span>
              <p className="text-sm text-[var(--il-muted)] font-medium">ASMR squeeze video</p>
              <p className="text-xs text-[var(--il-muted)] mt-1">Coming soon</p>
            </div>
            
            {/* UGC Video Placeholder */}
            <div className="aspect-video bg-zinc-100 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-zinc-300">
              <span className="text-4xl mb-3">📱</span>
              <p className="text-sm text-[var(--il-muted)] font-medium">Customer unboxing</p>
              <p className="text-xs text-[var(--il-muted)] mt-1">UGC coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collect Board Section */}
      <section className="py-16 bg-[var(--il-gummy)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--il-ink)] mb-2">Collect the Whole Board</h2>
            <p className="text-[var(--il-muted)]">
              Each pack is a surprise mix of colors and styles. Trade with friends or keep hunting for your favorites.
            </p>
            <p className="text-sm text-[var(--il-grape)] mt-2 font-medium">
              Duplicates possible — that&apos;s part of the blind-box fun!
            </p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {/* Color/variant collection display */}
            {['Pastel Pink', 'Cloud White', 'Mint Green', 'Lavender', 'Peach', 'Sky Blue', 'Lemon', 'Rose Gold', 'Coral', 'Sage', 'Lilac', 'Butter'].map((color, idx) => (
              <div key={color} className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md flex items-center justify-center text-2xl"
                  style={{ 
                    backgroundColor: [
                      '#FFD1DC', '#F5F5F5', '#98D8C8', '#E6E6FA', '#FFDAB9', '#87CEEB',
                      '#FFFACD', '#F5C6C6', '#FF7F7F', '#9DC183', '#C8A2C8', '#FFFDD0'
                    ][idx] 
                  }}
                >
                  🥟
                </div>
                <span className="text-xs text-[var(--il-muted)] mt-2 text-center">{color}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-[var(--il-muted)] mt-6">
            Colors shown are examples — actual colors vary by pack and availability.
          </p>
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
