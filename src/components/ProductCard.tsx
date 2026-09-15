'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants?.[0];
    addItem(product, defaultVariant);
  };

  return (
    <Link 
      href={`/product/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-lg hover:border-zinc-200 transition-all duration-300"
    >
      <div className="relative aspect-square bg-gradient-to-br from-rose-50 to-amber-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
        />
        {product.upsellOnly && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-rose-500 text-white text-xs font-medium rounded-full">
            Best Value
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-zinc-900 mb-1 group-hover:text-rose-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-500 mb-3 line-clamp-2">
          {product.blurb}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-zinc-900">
            {formatPrice(product.price_cents)}
          </span>
          <button
            onClick={handleQuickAdd}
            className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-rose-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
        
        {product.variants && (
          <p className="text-xs text-zinc-400 mt-2">
            {product.variants.length} variants available
          </p>
        )}
      </div>
    </Link>
  );
}
