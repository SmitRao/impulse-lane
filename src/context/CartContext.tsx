'use client';

import { createContext, useCallback, useContext, useSyncExternalStore, ReactNode } from 'react';
import type { Product } from '@/lib/products';
import { getAllProducts } from '@/lib/products';

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variant?: string) => void;
  removeItem: (productId: string, variant?: string) => void;
  updateQuantity: (productId: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  /** False until the stored cart has been read on the client. */
  isHydrated: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'impulse-lane-cart';
const CART_VERSION_KEY = 'impulse-lane-cart-version';
const CURRENT_CART_VERSION = '2';

function validateCartItems(storedItems: CartItem[]): CartItem[] {
  const currentProducts = getAllProducts();
  const validProductIds = new Set(currentProducts.map(p => p.id));
  
  return storedItems.filter(item => {
    if (!item.product?.id || !validProductIds.has(item.product.id)) {
      return false;
    }
    const currentProduct = currentProducts.find(p => p.id === item.product.id);
    if (!currentProduct) return false;
    if (typeof currentProduct.price !== 'number' || isNaN(currentProduct.price)) {
      return false;
    }
    item.product = currentProduct;
    return true;
  });
}

function readCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const version = localStorage.getItem(CART_VERSION_KEY);
    if (version !== CURRENT_CART_VERSION) {
      localStorage.removeItem(CART_STORAGE_KEY);
      localStorage.setItem(CART_VERSION_KEY, CURRENT_CART_VERSION);
      return [];
    }
    
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    return validateCartItems(parsed);
  } catch {
    localStorage.removeItem(CART_STORAGE_KEY);
    return [];
  }
}

function writeCartToStorage(items: CartItem[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    localStorage.setItem(CART_VERSION_KEY, CURRENT_CART_VERSION);
  }
}

/**
 * The cart lives in a module-level store read through `useSyncExternalStore`.
 * Server and hydration renders both see the empty snapshot, then the stored cart
 * is loaded once the subscription attaches — reading localStorage during the
 * first render instead would produce a hydration mismatch.
 */
const EMPTY_CART: CartItem[] = [];

const store = {
  items: EMPTY_CART,
  hydrated: false,
  listeners: new Set<() => void>(),
};

function emit(): void {
  store.listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void): () => void {
  store.listeners.add(listener);

  if (!store.hydrated) {
    store.hydrated = true;
    store.items = readCartFromStorage();
    writeCartToStorage(store.items);
    emit();
  }

  return () => {
    store.listeners.delete(listener);
  };
}

function getSnapshot(): CartItem[] {
  return store.items;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY_CART;
}

function setItems(next: CartItem[]): void {
  store.items = next;
  writeCartToStorage(next);
  emit();
}

function subscribeHydrated(listener: () => void): () => void {
  return subscribe(listener);
}

function getHydratedSnapshot(): boolean {
  return store.hydrated;
}

function getHydratedServerSnapshot(): boolean {
  return false;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isHydrated = useSyncExternalStore(
    subscribeHydrated,
    getHydratedSnapshot,
    getHydratedServerSnapshot
  );

  const addItem = useCallback((product: Product, variant?: string) => {
    const current = store.items;
    const existingIndex = current.findIndex(
      item => item.product.id === product.id && item.variant === variant
    );

    if (existingIndex >= 0) {
      const updated = [...current];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + 1,
      };
      setItems(updated);
    } else {
      setItems([...current, { product, quantity: 1, variant }]);
    }
  }, []);

  const removeItem = useCallback((productId: string, variant?: string) => {
    setItems(
      store.items.filter(item => !(item.product.id === productId && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number, variant?: string) => {
    if (quantity <= 0) {
      setItems(
        store.items.filter(item => !(item.product.id === productId && item.variant === variant))
      );
      return;
    }

    setItems(
      store.items.map(item =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
  
  const subtotal = items.reduce((sum, item) => {
    const price = item.product?.price;
    const qty = item.quantity;
    if (typeof price !== 'number' || isNaN(price) || typeof qty !== 'number' || isNaN(qty)) {
      return sum;
    }
    return sum + price * qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        isHydrated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
