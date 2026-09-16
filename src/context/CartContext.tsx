'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
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

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    const validatedItems = readCartFromStorage();
    writeCartToStorage(validatedItems);
    return validatedItems;
  });

  const addItem = useCallback((product: Product, variant?: string) => {
    setItems(current => {
      const existingIndex = current.findIndex(
        item => item.product.id === product.id && item.variant === variant
      );
      
      let updated: CartItem[];
      if (existingIndex >= 0) {
        updated = [...current];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
      } else {
        updated = [...current, { product, quantity: 1, variant }];
      }
      
      writeCartToStorage(updated);
      return updated;
    });
  }, []);

  const removeItem = useCallback((productId: string, variant?: string) => {
    setItems(current => {
      const updated = current.filter(
        item => !(item.product.id === productId && item.variant === variant)
      );
      writeCartToStorage(updated);
      return updated;
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number, variant?: string) => {
    if (quantity <= 0) {
      removeItem(productId, variant);
      return;
    }
    
    setItems(current => {
      const updated = current.map(item =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      );
      writeCartToStorage(updated);
      return updated;
    });
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    writeCartToStorage([]);
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
