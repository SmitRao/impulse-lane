'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProductBySlug, getAllProducts, formatPrice, getValueCallout, getIdentityBadges } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/ProductCard';

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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const identityBadges = getIdentityBadges(product);
  const valueCallout = getValueCallout(product);

  const galleryImages = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.image];
  
  const gallerySlots: (string | null)[] = [...galleryImages];
  while (gallerySlots.length < 4) {
    gallerySlots.push(null);
  }

  const faqItems = [
    {
      question: "What do they feel like?",
      answer: "Our squishies have a soft, slow-rebound feel — like cloud dough or stress balls. The TPR material is smooth and satisfying to squeeze, with visible glitter or beads swirling inside."
    },
    {
      question: "Could I get duplicates in a pack?",
      answer: "Yes, duplicates are possible. Each pack contains a random assortment of colors and styles. That's part of the blind-box collecting fun — trade with friends or build a colorful collection!"
    },
    {
      question: "How do I care for them?",
      answer: "Wipe clean with a damp cloth if needed. Do not submerge in water. Avoid sharp objects and extreme heat. Store away from direct sunlight to preserve the material."
    },
    {
      question: "Are they safe?",
      answer: `These are Age ${product.ageGrade} adult collectible fidgets, not children's toys. Choking hazard — small parts. Contains glitter in sealed TPR shell. Do not puncture or ingest. See our full safety page for details.`
    },
    {
      question: "What's your return policy?",
      answer: "Unopened packs can be returned within 30 days for a refund of the product price (return shipping is on you unless we made a mistake). Damaged or defective items? Email us with photos within 14 days and we'll replace or refund."
    }
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-wash rounded-3xl overflow-hidden">
              {gallerySlots[selectedImageIndex] ? (
                <Image
                  src={gallerySlots[selectedImageIndex]!}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-contain p-8"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-[var(--il-muted)]">
                    <span className="text-4xl block mb-2">📷</span>
                    <span className="text-sm">More photos coming soon</span>
                  </div>
                </div>
              )}
              {/* Identity Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {identityBadges.slice(0, 3).map((badge) => (
                  <span key={badge.label} className={`px-2.5 py-1 text-xs font-semibold rounded-full ${badge.className}`}>
                    {badge.label}
                  </span>
                ))}
              </div>
              {/* Pack size */}
              <div className="absolute bottom-4 right-4">
                <span className="chip-gummy text-lg">
                  ×{product.packSize}
                </span>
              </div>
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              {gallerySlots.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => img && setSelectedImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === idx 
                      ? 'border-[var(--il-pink)]' 
                      : 'border-transparent hover:border-zinc-300'
                  } ${!img ? 'bg-zinc-100 cursor-default' : 'bg-wash'}`}
                  disabled={!img}
                >
                  {img ? (
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xl">
                      +
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--il-ink)] mb-3">
              {product.name}
            </h1>
            
            <p className="text-lg text-[var(--il-muted)] mb-4">
              {product.shortBlurb}
            </p>

            {/* Price + Value Callout */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-[var(--il-ink)]">
                  {formatPrice(product.price)}
                </span>
              </div>
              {valueCallout && (
                <p className="text-sm text-[var(--il-mint)] font-medium bg-[var(--il-mint)] bg-opacity-15 px-3 py-1.5 rounded-lg inline-block">
                  💡 {valueCallout}
                </p>
              )}
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--il-muted)] mb-6 py-4 border-y border-zinc-200">
              <span className="flex items-center gap-1.5">
                <span>🚚</span>
                <span>Free ship $35+</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span>📦</span>
                <span>Ships 2–4 biz days</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span>↩️</span>
                <span>30-day unopened returns</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[var(--il-grape)] font-semibold">{product.ageGrade}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span>✨</span>
                <span>Sealed glitter</span>
              </span>
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

            {/* Desktop Add to Cart */}
            <div className="hidden sm:block mb-6">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-full font-medium text-lg transition-colors ${
                  added
                    ? 'bg-[var(--il-mint)] text-[var(--il-ink)]'
                    : 'btn-pink'
                }`}
              >
                {added ? '✓ Added!' : 'Add to Cart'}
              </button>
              <Link
                href="/cart"
                className="mt-3 block text-center text-sm text-[var(--il-muted)] hover:text-[var(--il-pink)] underline"
              >
                View Cart
              </Link>
            </div>

            {/* What's in the Pack */}
            {product.packContents && (
              <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
                <h3 className="font-semibold text-[var(--il-ink)] mb-3 flex items-center gap-2">
                  <span>📦</span>
                  What&apos;s in the Pack
                </h3>
                <ul className="space-y-2 text-sm text-[var(--il-muted)]">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--il-pink)]">•</span>
                    <span><strong>Count:</strong> {product.packContents.count} squishies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--il-pink)]">•</span>
                    <span><strong>Size:</strong> {product.packContents.sizeCm}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--il-pink)]">•</span>
                    <span><strong>Fill:</strong> {product.packContents.fill}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--il-pink)]">•</span>
                    <span><strong>Material:</strong> {product.packContents.material}</span>
                  </li>
                  {product.packContents.notEdible && (
                    <li className="flex items-center gap-2 text-[var(--il-grape)]">
                      <span>⚠️</span>
                      <span><strong>Not edible</strong> — decorative fidget only</span>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* FAQ Accordion */}
            <div className="border-t border-zinc-200 pt-6">
              <h3 className="font-semibold text-[var(--il-ink)] mb-4">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {faqItems.map((item, idx) => (
                  <div key={idx} className="border border-zinc-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-50 transition-colors"
                    >
                      <span className="font-medium text-[var(--il-ink)]">{item.question}</span>
                      <span className={`text-[var(--il-muted)] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-sm text-[var(--il-muted)]">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Link */}
            <div className="mt-6 pt-6 border-t border-zinc-200">
              <Link 
                href="/safety" 
                className="text-sm text-[var(--il-pink)] hover:underline flex items-center gap-2"
              >
                <span>🛡️</span>
                <span>Full safety information →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Sticky ATC */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 p-4 sm:hidden z-20 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-[var(--il-ink)]">{formatPrice(product.price)}</span>
                <span className="px-2 py-0.5 bg-[var(--il-grape)] text-white text-xs font-bold rounded-full">
                  {product.ageGrade}
                </span>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 rounded-full font-medium text-base transition-colors ${
                added
                  ? 'bg-[var(--il-mint)] text-[var(--il-ink)]'
                  : 'btn-pink'
              }`}
            >
              {added ? '✓ Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
        {/* Spacer for fixed bottom bar on mobile */}
        <div className="h-28 sm:hidden" />

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
