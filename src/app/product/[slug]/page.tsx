'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProductBySlug, getAllProducts, formatPrice } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/ProductCard';

function getBadgeClass(badge: string): string {
  const badgeLower = badge.toLowerCase();
  if (badgeLower.includes('best seller')) return 'badge-bestseller';
  if (badgeLower.includes('limited')) return 'badge-limited';
  if (badgeLower.includes('glow')) return 'badge-glow';
  if (badgeLower.includes('gift')) return 'badge-gift';
  if (badgeLower.includes('premium')) return 'badge-premium';
  if (badgeLower.includes('entry')) return 'bg-[var(--il-mint)] text-[var(--il-ink)]';
  return 'bg-[var(--il-muted)] text-white';
}

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product?.variants?.[0]?.label
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--il-cream)]">
        <span className="text-6xl mb-4">🥟</span>
        <h1 className="text-2xl font-bold text-[var(--il-ink)] mb-2">Product Not Found</h1>
        <p className="text-[var(--il-muted)] mb-6">This dumpling must have rolled away!</p>
        <Link
          href="/"
          className="px-6 py-3 btn-pink"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = getAllProducts()
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const displayBadges = product.badges.slice(0, 2);

  return (
    <div className="bg-[var(--il-cream)] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--il-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--il-pink)]">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-[var(--il-ink)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative aspect-square bg-wash rounded-3xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-12"
              priority
            />
            {/* Badges */}
            {displayBadges.length > 0 && (
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {displayBadges.map((badge) => (
                  <span key={badge} className={`badge ${getBadgeClass(badge)}`}>
                    {badge}
                  </span>
                ))}
              </div>
            )}
            {/* Age grade + Pack size */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <span className="px-2 py-1 bg-[var(--il-grape)] text-white text-sm font-bold rounded-full">
                {product.ageGrade}
              </span>
              <span className="chip-gummy text-lg">
                ×{product.packSize}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--il-ink)] mb-4">
              {product.name}
            </h1>
            
            <p className="text-lg text-[var(--il-muted)] mb-6">
              {product.shortBlurb}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-[var(--il-ink)]">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xl text-[var(--il-muted)] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-[var(--il-ink)] mb-2">
                  Select Variant
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.label)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedVariant === variant.label
                          ? 'bg-[var(--il-pink)] text-white'
                          : 'bg-white border border-zinc-300 text-[var(--il-ink)] hover:border-[var(--il-pink)]'
                      }`}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--il-ink)] mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 text-[var(--il-ink)] hover:border-[var(--il-pink)] transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 text-[var(--il-ink)] hover:border-[var(--il-pink)] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart - Sticky on mobile */}
            <div className="sticky bottom-0 bg-[var(--il-cream)] py-4 -mx-4 px-4 sm:relative sm:bg-transparent sm:py-0 sm:mx-0 sm:px-0 z-10">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-full font-medium text-lg transition-colors ${
                  added
                    ? 'bg-[var(--il-mint)] text-[var(--il-ink)]'
                    : 'btn-pink'
                }`}
              >
                {added ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Cart link */}
            <Link
              href="/cart"
              className="mt-4 text-center text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)] underline"
            >
              View Cart
            </Link>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mt-8 pt-8 border-t border-zinc-200">
                <h3 className="font-semibold text-[var(--il-ink)] mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-[var(--il-muted)]">
                      <span className="text-[var(--il-pink)]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product Info */}
            <div className="mt-8 pt-8 border-t border-zinc-200 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">📦</span>
                <div>
                  <p className="font-medium text-[var(--il-ink)]">Mystery Blind Box</p>
                  <p className="text-sm text-[var(--il-muted)]">Each dumpling is a random surprise!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">✨</span>
                <div>
                  <p className="font-medium text-[var(--il-ink)]">Glitter Filled</p>
                  <p className="text-sm text-[var(--il-muted)]">Sealed construction keeps sparkles inside.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🚚</span>
                <div>
                  <p className="font-medium text-[var(--il-ink)]">Flat Rate Shipping</p>
                  <p className="text-sm text-[var(--il-muted)]">$4.99 under $35, free $35+</p>
                </div>
              </div>
            </div>

            {/* Safety Info */}
            <div className="mt-8 pt-8 border-t border-zinc-200">
              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[var(--il-grape)] text-white text-xs font-bold rounded-full">
                    {product.ageGrade}
                  </span>
                  <span className="font-semibold text-[var(--il-ink)] text-sm">Safety Information</span>
                </div>
                <p className="text-xs text-[var(--il-muted)] mb-2">
                  ⚠️ <strong>WARNING: CHOKING HAZARD</strong> — Small parts. Not for children under 3 years.
                </p>
                <p className="text-xs text-[var(--il-muted)] mb-2">
                  Novelty collectible for ages {product.ageGrade}. Contains glitter fill in sealed TPR/TPE shell. 
                  Do not puncture or ingest.
                </p>
                <Link href="/safety" className="text-xs text-[var(--il-pink)] hover:underline">
                  Full safety information →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[var(--il-ink)] mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
