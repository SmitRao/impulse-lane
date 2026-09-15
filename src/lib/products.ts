import productsData from '@/data/products.json';

export interface Product {
  id: string;
  slug: string;
  name: string;
  blurb: string;
  price_cents: number;
  image: string;
  variants: string[] | null;
  featured: boolean;
  upsellOnly?: boolean;
  edgeMargin?: boolean;
}

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter(p => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find(p => p.slug === slug);
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
