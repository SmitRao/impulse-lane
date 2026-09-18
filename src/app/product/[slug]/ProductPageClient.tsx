'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProductBySlug, getAllProducts, formatPrice, getValueCallout, getIdentityBadges } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/ProductCard';
import { InView, InViewItem, TextEffect } from '@/components/motion-primitives';
import { Section, SectionHeader } from '@/components/ui/Section';

interface ProductPageClientProps {
  slug: string;
}

export default function ProductPageClient({ slug }: ProductPageClientProps) {
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
        <Link href="/" className="il-btn il-btn-primary">
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

  const trustItems = [
    { icon: '🚚', label: 'Free ship $35+', href: '/shipping' },
    { icon: '📦', label: 'Ships 2–4 biz days' },
    { icon: '↩️', label: '30-day returns', href: '/returns' },
    { icon: '✨', label: 'Sealed glitter' },
  ];

  return (
    <>
      {/* Buy box */}
      <Section tone="wash" size="tight">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--il-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--il-pink)]">Shop</Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[var(--il-ink)]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              {/* Main Image */}
              <div className="il-frame relative aspect-square bg-wash">
                {gallerySlots[selectedImageIndex] ? (
                  <Image
                    src={gallerySlots[selectedImageIndex]!}
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-contain p-8"
                    loading="eager"
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center text-[var(--il-muted)]">
                      <span className="mb-2 block text-4xl" aria-hidden>📷</span>
                      <span className="text-sm">More photos coming soon</span>
                    </div>
                  </div>
                )}
                {/* Identity Badges */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {identityBadges.slice(0, 3).map((badge) => (
                    <span key={badge.label} className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badge.className}`}>
                      {badge.label}
                    </span>
                  ))}
                </div>
                {/* Pack size */}
                <div className="absolute bottom-4 right-4">
                  <span className="chip-gummy text-lg">×{product.packSize}</span>
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallerySlots.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => img && setSelectedImageIndex(idx)}
                    aria-label={img ? `View ${product.name} image ${idx + 1}` : 'More photos coming soon'}
                    className={`relative aspect-square overflow-hidden rounded-[var(--il-r-md)] border transition-colors ${
                      selectedImageIndex === idx && img
                        ? 'border-[var(--il-pink)]'
                        : 'border-[var(--il-line)] hover:border-[var(--il-line-strong)]'
                    } ${!img ? 'cursor-default bg-[var(--il-shell)]' : 'bg-wash'}`}
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
                      <div className="flex h-full w-full items-center justify-center text-xl text-[var(--il-muted)]">
                        +
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* UGC/ASMR Video Placeholder - Below gallery */}
              <div className="mt-4 flex aspect-video flex-col items-center justify-center rounded-[var(--il-r-lg)] border border-dashed border-[var(--il-line-strong)] bg-[var(--il-shell)]">
                <span className="mb-2 text-3xl" aria-hidden>🎥</span>
                <p className="text-sm font-medium text-[var(--il-ink)]">ASMR squeeze video</p>
                <p className="mt-1 text-xs text-[var(--il-muted)]">Coming soon</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col lg:col-span-5">
            <p className="il-eyebrow mb-3">
              {product.packSize}-piece multipack · Age {product.ageGrade}
            </p>

            <TextEffect
              as="h1"
              per="word"
              preset="blur-slide"
              className="il-h2 text-[var(--il-ink)]"
              stagger={0.045}
            >
              {product.name}
            </TextEffect>

            <p className="il-lead mt-4">{product.shortBlurb}</p>

            {/* Price + Value Callout */}
            <div className="mt-8">
              <span className="il-num text-4xl font-bold text-[var(--il-ink)]">
                {formatPrice(product.price)}
              </span>
              {valueCallout && (
                <p className="mt-3 rounded-[var(--il-r-sm)] border border-[var(--il-line)] bg-[var(--il-paper)] px-3 py-2 text-sm text-[var(--il-mint-ink)]">
                  💡 {valueCallout}
                </p>
              )}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-8">
                <span className="mb-3 block text-sm font-semibold text-[var(--il-ink)]">
                  Select Variant
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.label)}
                      aria-pressed={selectedVariant === variant.label}
                      className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                        selectedVariant === variant.label
                          ? 'bg-[var(--il-ink)] text-white'
                          : 'border border-[var(--il-line-strong)] bg-[var(--il-paper)] text-[var(--il-ink)] hover:border-[var(--il-ink)]'
                      }`}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block text-sm font-semibold text-[var(--il-ink)]">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--il-line-strong)] bg-[var(--il-paper)] text-[var(--il-ink)] transition-colors hover:border-[var(--il-ink)]"
                >
                  −
                </button>
                <span className="il-num w-10 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--il-line-strong)] bg-[var(--il-paper)] text-[var(--il-ink)] transition-colors hover:border-[var(--il-ink)]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Desktop Add to Cart */}
            <div className="mt-8 hidden sm:block">
              <button
                onClick={handleAddToCart}
                className={`il-btn il-btn-lg w-full ${
                  added ? 'bg-[var(--il-mint)] text-[var(--il-ink)]' : 'il-btn-primary'
                }`}
              >
                {added ? '✓ Added!' : 'Add to Cart'}
              </button>
              <Link
                href="/cart"
                className="mt-3 block text-center text-sm text-[var(--il-muted)] underline hover:text-[var(--il-pink)]"
              >
                View Cart
              </Link>
            </div>

            {/* Trust Strip with Shipping/Returns Links */}
            <div className="il-hairline mt-8 flex flex-wrap gap-x-5 gap-y-2.5 pt-6 text-sm text-[var(--il-muted)]">
              {trustItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-1.5 transition-colors hover:text-[var(--il-pink)]"
                  >
                    <span aria-hidden>{item.icon}</span>
                    <span className="underline decoration-[var(--il-line-strong)] underline-offset-4">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <span key={item.label} className="flex items-center gap-1.5">
                    <span aria-hidden>{item.icon}</span>
                    {item.label}
                  </span>
                )
              )}
              <span className="flex items-center gap-1.5 font-semibold text-[var(--il-grape)]">
                {product.ageGrade}
              </span>
            </div>

            {/* Quick Policy Links */}
            <div className="mt-4 flex gap-4 text-xs text-[var(--il-muted)]">
              <Link href="/shipping" className="underline hover:text-[var(--il-pink)]">
                Shipping details →
              </Link>
              <Link href="/returns" className="underline hover:text-[var(--il-pink)]">
                Returns policy →
              </Link>
            </div>

            {/* What's in the Pack */}
            {product.packContents && (
              <div className="il-card mt-8 p-6">
                <h2 className="il-h3 flex items-center gap-2 text-[var(--il-ink)]">
                  <span aria-hidden>📦</span>
                  What&apos;s in the Pack
                </h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    { term: 'Count', value: `${product.packContents.count} squishies` },
                    { term: 'Size', value: product.packContents.sizeCm },
                    { term: 'Fill', value: product.packContents.fill },
                    { term: 'Material', value: product.packContents.material },
                  ].map((row) => (
                    <div
                      key={row.term}
                      className="flex items-baseline justify-between gap-4 border-t border-[var(--il-line)] pt-3 first:border-t-0 first:pt-0"
                    >
                      <dt className="text-[var(--il-muted)]">{row.term}</dt>
                      <dd className="text-right font-medium text-[var(--il-ink)]">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                {product.packContents.notEdible && (
                  <p className="mt-4 flex items-start gap-2 rounded-[var(--il-r-sm)] bg-[var(--il-shell)] p-3 text-sm text-[var(--il-grape)]">
                    <span aria-hidden>⚠️</span>
                    <span>
                      <strong>Not edible</strong> — decorative fidget only
                    </span>
                  </p>
                )}
              </div>
            )}

            {/* Features */}
            {product.features.length > 0 && (
              <ul className="mt-8 space-y-2.5 text-sm text-[var(--il-muted)]">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--il-pink)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Safety Link */}
            <div className="il-hairline mt-8 pt-6">
              <Link
                href="/safety"
                className="flex items-center gap-2 text-sm font-semibold text-[var(--il-pink)] hover:underline"
              >
                <span aria-hidden>🛡️</span>
                <span>Full safety information →</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper" divider>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Answers"
              title="Frequently Asked Questions"
              description="Squish feel, duplicates, care, safety, and returns."
            />
          </div>
          <div className="lg:col-span-8">
            <div className="il-card divide-y divide-[var(--il-line)] overflow-hidden">
              {faqItems.map((item, idx) => (
                <div key={idx}>
                  <h3>
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      aria-expanded={openFaq === idx}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-[var(--il-shell)]"
                    >
                      <span className="font-semibold text-[var(--il-ink)]">{item.question}</span>
                      <span
                        aria-hidden
                        className={`text-[var(--il-muted)] transition-transform ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                  </h3>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--il-muted)]">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Reviews Section - Scaffold */}
      <Section tone="shell" size="tight" divider>
        <div className="il-card mx-auto max-w-2xl p-8 text-center">
          <p className="il-eyebrow">Customer Reviews</p>
          <p className="mt-4 text-[var(--il-muted)]">No reviews yet</p>
          <p className="mt-1 font-semibold text-[var(--il-pink)]">
            Be the first to review this product!
          </p>
          <p className="mt-2 text-xs text-[var(--il-muted)]">Reviews coming soon after launch</p>
        </div>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section tone="cream" divider>
          <InView>
            <SectionHeader
              eyebrow="Keep collecting"
              title="You Might Also Like"
              action={
                <Link href="/" className="il-btn il-btn-secondary il-btn-sm">
                  All multipacks
                </Link>
              }
            />
          </InView>
          <InView className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {relatedProducts.map((relatedProduct) => (
              <InViewItem key={relatedProduct.id} className="h-full">
                <ProductCard product={relatedProduct} />
              </InViewItem>
            ))}
          </InView>
        </Section>
      )}

      {/* Mobile Sticky ATC */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-[var(--il-line)] bg-[var(--il-paper)]/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(26,26,26,0.1)] backdrop-blur-md sm:hidden">
        <div className="il-num mb-2 flex items-center gap-3">
          <span className="text-xl font-bold text-[var(--il-ink)]">
            {formatPrice(product.price)}
          </span>
          <span className="rounded-full bg-[var(--il-grape)] px-2 py-0.5 text-xs font-bold text-white">
            {product.ageGrade}
          </span>
          {quantity > 1 && (
            <span className="text-sm text-[var(--il-muted)]">Qty {quantity}</span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className={`il-btn w-full ${
            added ? 'bg-[var(--il-mint)] text-[var(--il-ink)]' : 'il-btn-primary'
          }`}
        >
          {added ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
      {/* Spacer for fixed bottom bar on mobile */}
      <div className="h-32 sm:hidden" aria-hidden />
    </>
  );
}
