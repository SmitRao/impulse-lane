import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

interface CartItem {
  productId: string;
  name: string;
  variant?: string;
  price_cents: number;
  quantity: number;
  image: string;
}

interface CheckoutRequest {
  items: CartItem[];
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const subtotal = body.items.reduce(
      (sum, item) => sum + item.price_cents * item.quantity,
      0
    );
    const shippingThreshold = 3500;
    const shippingCost = subtotal >= shippingThreshold ? 0 : 499;

    const lineItems = body.items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.variant ? `${item.name} — ${item.variant}` : item.name,
          description: 'Blind-box dumpling squishy multipack',
          metadata: {
            productId: item.productId,
            variant: item.variant || '',
          },
        },
        unit_amount: item.price_cents,
      },
      quantity: item.quantity,
    }));

    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Flat Rate Shipping',
            description: 'Standard shipping (5-10 business days)',
            metadata: {
              productId: 'shipping',
              variant: '',
            },
          },
          unit_amount: shippingCost,
        },
        quantity: 1,
      });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        source: 'impulse-lane',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    
    const message = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { error: `Failed to create checkout session: ${message}` },
      { status: 500 }
    );
  }
}
