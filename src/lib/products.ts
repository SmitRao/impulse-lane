import productsData from '@/data/products.json';

export interface ProductVariant {
  id: string;
  label: string;
  sku: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortBlurb: string;
  price: number;
  compareAtPrice?: number;
  packSize: number;
  image: string;
  variants: ProductVariant[];
  features: string[];
  badges: string[];
  artDirection: string;
  featured: boolean;
  upsellOnly?: boolean;
}

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter(p => p.featured && !p.upsellOnly);
}

export function getUpsellProducts(): Product[] {
  return getAllProducts().filter(p => p.upsellOnly);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find(p => p.slug === slug);
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function formatPriceCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
