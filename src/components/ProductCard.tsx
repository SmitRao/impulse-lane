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

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 card-hover">
      {/* Image section - clickable link */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square bg-wash overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          {displayBadges.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              {displayBadges.map((badge) => (
                <span key={badge} className={`badge ${getBadgeClass(badge)}`}>
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Age grade + Pack size */}
          <div className="absolute bottom-3 right-3 flex gap-1.5">
            <span className="px-2 py-0.5 bg-[var(--il-grape)] text-white text-xs font-bold rounded-full">
              {product.ageGrade}
            </span>
            <span className="chip-gummy">
              ×{product.packSize}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        {/* Title - clickable link */}
        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="font-semibold text-[var(--il-ink)] mb-1 group-hover:text-[var(--il-pink)] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[var(--il-muted)] mb-3 line-clamp-2">
          {product.shortBlurb}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[var(--il-ink)]">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-[var(--il-muted)] line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          {/* Button is NOT nested inside a link now */}
          <button
            onClick={handleQuickAdd}
            className="px-4 py-2 btn-pink text-sm"
          >
            Add to Cart
          </button>
        </div>
        
        {product.variants && product.variants.length > 1 && (
          <p className="text-xs text-[var(--il-muted)] mt-2">
            {product.variants.length} variants available
          </p>
        )}
      </div>
    </div>
  );
}
