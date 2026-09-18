'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

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

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickAdd = () => {
    const defaultVariant = product.variants?.[0];
    addItem(product, defaultVariant?.label);
  };

  const displayBadges = product.badges.slice(0, 2);
  const pricePerPiece = product.packSize > 1 ? product.price / product.packSize : null;

  return (
    <div className="il-card card-hover group flex h-full flex-col overflow-hidden">
      {/* Image section - clickable link */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-wash">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
          />

          {/* Badges */}
          {displayBadges.length > 0 && (
            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
              {displayBadges.map((badge) => (
                <span key={badge} className={`badge ${getBadgeClass(badge)}`}>
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Age grade + Pack size */}
          <div className="absolute bottom-3 right-3 flex gap-1.5">
            <span className="rounded-full bg-[var(--il-grape)] px-2 py-0.5 text-xs font-bold text-white">
              {product.ageGrade}
            </span>
            <span className="chip-gummy">×{product.packSize}</span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {/* Title - clickable link */}
        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="il-h3 text-[var(--il-ink)] transition-colors group-hover:text-[var(--il-pink)]">
            {product.name}
          </h3>
        </Link>
        <p className="il-body mt-2 line-clamp-2 text-sm">{product.shortBlurb}</p>

        <div className="il-hairline mt-5 flex items-end justify-between gap-3 pt-5">
          <div>
            <span className="il-num text-xl font-bold text-[var(--il-ink)]">
              {formatPrice(product.price)}
            </span>
            {pricePerPiece && (
              <p className="il-num mt-0.5 text-xs text-[var(--il-muted)]">
                ≈ {formatPrice(pricePerPiece)} each
              </p>
            )}
          </div>
          {/* Button is NOT nested inside a link now */}
          <button onClick={handleQuickAdd} className="il-btn il-btn-primary il-btn-sm">
            Add to Cart
          </button>
        </div>

        {product.variants && product.variants.length > 1 && (
          <p className="mt-3 text-xs text-[var(--il-muted)]">
            {product.variants.length} variants available
          </p>
        )}
      </div>
    </div>
  );
}
