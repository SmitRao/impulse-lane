import productsData from '@/data/products.json';

export interface ProductVariant {
  id: string;
  label: string;
  sku: string;
}

export interface PackContents {
  count: number;
  sizeCm: string;
  fill: string;
  material: string;
  notEdible: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortBlurb: string;
  price: number;
  packSize: number;
  image: string;
  gallery?: string[];
  variants: ProductVariant[];
  features: string[];
  packContents?: PackContents;
  badges: string[];
  identity?: string[];
  artDirection: string;
  ageGrade: string;
  featured: boolean;
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

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function formatPriceCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export function getValueCallout(product: Product): string | null {
  if (product.packSize <= 1) return null;
  const pricePerPiece = product.price / product.packSize;
  return `${product.packSize}-pack ≈ $${pricePerPiece.toFixed(2)} each vs typical single mystery ~$15–$17`;
}

export function getIdentityBadges(product: Product): { label: string; className: string }[] {
  const badges: { label: string; className: string }[] = [];
  const identity = product.identity || [];
  
  if (identity.includes('glow')) {
    badges.push({ label: 'Glow', className: 'bg-[var(--il-mint)] text-[var(--il-ink)]' });
  }
  if (identity.includes('jumbo')) {
    badges.push({ label: 'Jumbo', className: 'bg-[var(--il-grape)] text-white' });
  }
  if (identity.includes('steamer')) {
    badges.push({ label: 'Steamer', className: 'bg-[var(--il-pink)] text-white' });
  }
  if (identity.includes('gifting')) {
    badges.push({ label: 'Best for Gifting', className: 'bg-[#F472B6] text-white' });
  }
  
  badges.push({ label: `Age ${product.ageGrade}`, className: 'bg-[var(--il-grape)] text-white' });
  
  return badges;
}
