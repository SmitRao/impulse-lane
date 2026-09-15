'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProductBySlug, getAllProducts, formatPrice } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/ProductCard';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product?.variants?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <span className="text-6xl mb-4">🥟</span>
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">Product Not Found</h1>
        <p className="text-zinc-600 mb-6">This dumpling must have rolled away!</p>
        <Link
          href="/"
          className="px-6 py-3 bg-zinc-900 text-white font-medium rounded-full hover:bg-rose-600 transition-colors"
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

  return (
    <div className="bg-zinc-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-zinc-500">
            <li>
              <Link href="/" className="hover:text-zinc-900">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-zinc-900">{product.name}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative aspect-square bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-12"
              priority
            />
            {product.upsellOnly && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-rose-500 text-white text-sm font-medium rounded-full">
                Best Value
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              {product.name}
            </h1>
            
            <p className="text-lg text-zinc-600 mb-6">
              {product.blurb}
            </p>

            <div className="text-3xl font-bold text-zinc-900 mb-6">
              {formatPrice(product.price_cents)}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-900 mb-2">
                  Select Mix
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedVariant === variant
                          ? 'bg-zinc-900 text-white'
                          : 'bg-white border border-zinc-300 text-zinc-700 hover:border-zinc-900'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-900 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:border-zinc-900 transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:border-zinc-900 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-full font-medium text-lg transition-colors ${
                added
                  ? 'bg-green-500 text-white'
                  : 'bg-zinc-900 text-white hover:bg-rose-600'
              }`}
            >
              {added ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Cart link */}
            <Link
              href="/cart"
              className="mt-4 text-center text-sm text-zinc-500 hover:text-zinc-900 underline"
            >
              View Cart
            </Link>

            {/* Product Info */}
            <div className="mt-8 pt-8 border-t border-zinc-200 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">📦</span>
                <div>
                  <p className="font-medium text-zinc-900">Mystery Blind Box</p>
                  <p className="text-sm text-zinc-500">Each dumpling is a random surprise!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">✨</span>
                <div>
                  <p className="font-medium text-zinc-900">Glitter Filled</p>
                  <p className="text-sm text-zinc-500">Sparkly goodness inside every squishy.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🚚</span>
                <div>
                  <p className="font-medium text-zinc-900">Flat Rate Shipping</p>
                  <p className="text-sm text-zinc-500">$4.99 under $35, free $35+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
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
