import { ProductCard } from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  const products = getAllProducts();
  const featuredProducts = products.filter(p => p.featured);
  const upsellProducts = products.filter(p => p.upsellOnly);

  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-amber-50 to-violet-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-6xl mb-4 block">🥟✨</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Mystery Dumpling Squishies
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
            Unbox the surprise! Collect glitter-filled blind-box dumpling squishies 
            in fun multipacks. Perfect for collectors, parties, and gifts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white font-medium rounded-full hover:bg-rose-600 transition-colors"
            >
              Shop Multipacks
            </Link>
            <Link
              href="/product/rare-hunt-dozen"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-zinc-900 text-zinc-900 font-medium rounded-full hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Hunt Rares →
            </Link>
          </div>
          
          {/* AOV nudge */}
          <p className="mt-8 text-sm text-zinc-500">
            💡 Tip: Grab 2 packs or the Rare Hunt Dozen for the best collection boost!
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-2">Shop Multipacks</h2>
          <p className="text-zinc-600 mb-8">All mystery packs — every dumpling is a surprise!</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Upsell Section */}
      {upsellProducts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-amber-50 to-rose-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">Best Value Pick</h2>
            <p className="text-zinc-600 mb-8">Maximum squishy, minimum spend per piece.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upsellProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-16 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-4xl mb-3 block">📦</span>
              <h3 className="font-semibold text-zinc-900 mb-2">Multipack Only</h3>
              <p className="text-sm text-zinc-600">
                No singles here — every order is a mystery pack adventure!
              </p>
            </div>
            <div>
              <span className="text-4xl mb-3 block">✨</span>
              <h3 className="font-semibold text-zinc-900 mb-2">Glitter Inside</h3>
              <p className="text-sm text-zinc-600">
                Each squishy dumpling contains sparkly glitter filling.
              </p>
            </div>
            <div>
              <span className="text-4xl mb-3 block">🎁</span>
              <h3 className="font-semibold text-zinc-900 mb-2">Gift Ready</h3>
              <p className="text-sm text-zinc-600">
                Perfect for birthdays, parties, or treating yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
