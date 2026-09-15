# Impulse Lane — Blind-Box Dumpling Squishy Store

A modern, mobile-first DTC storefront shell for impulse/collectible physical goods. Built with Next.js App Router and Stripe Checkout.

> 🧪 **TEST MODE ONLY** — This store uses Stripe test mode. No real payments are processed. Dummy catalog for demonstration purposes.

## Features

- **Product Catalog**: 5 blind-box dumpling squishy multipacks loaded from `src/data/products.json`
- **Product Pages**: Individual product detail pages with variant selection
- **Shopping Cart**: Client-side cart with localStorage persistence
- **Stripe Checkout**: Hosted Checkout Sessions with Link enabled (dynamic payment methods)
- **Shipping Calculation**: $4.99 flat rate under $35, free shipping $35+
- **Policy Pages**: Draft shipping and refunds pages (labeled DRAFT for editor review)

## Products (Dummy Catalog)

| Product | Price | Description |
|---------|-------|-------------|
| Steamer Six Pack | $19.99 | 6 mystery glitter dumplings (Classic/Pastel Mix) |
| Rare Hunt Dozen | $24.99 | 12-pack with 1 guaranteed rare |
| Duo Gift Tin | $22.99 | 2 jumbo bao + 4 minis |
| Party Favor Flat | $18.99 | 8-pack classroom/party sleeve |
| Collector Trio | $16.99 | 3 oversized glitter dumplings (upsell) |

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm
- Stripe account (test mode)

### 1. Clone and Install

```bash
git clone <repo-url>
cd impulse-lane
npm install
```

### 2. Configure Environment Variables

Copy the example env file and add your Stripe test keys:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Get from https://dashboard.stripe.com/test/apikeys
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE

# Local development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Testing Checkout

### Test Card Numbers

Use these Stripe test cards at checkout:

| Card Number | Description |
|-------------|-------------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 3220` | 3D Secure authentication |
| `4000 0000 0000 9995` | Declined |

- **Expiry**: Any future date (e.g., `12/34`)
- **CVC**: Any 3 digits (e.g., `123`)
- **ZIP**: Any 5 digits (e.g., `12345`)

### Testing with Stripe CLI (Webhooks)

For testing webhooks locally:

```bash
# Install Stripe CLI
# macOS: brew install stripe/stripe-cli/stripe
# Or download from https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks

# In another terminal, trigger test events
stripe trigger checkout.session.completed
```

## Deploy to Render

### Option 1: Blueprint Deploy

1. Fork this repo
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New" → "Blueprint"
4. Connect your GitHub repo
5. Render will auto-detect `render.yaml`

### Option 2: Manual Deploy

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repo
4. Configure:
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add environment variables:
   - `STRIPE_SECRET_KEY` (secret)
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_BASE_URL` (your Render URL, e.g., `https://impulse-lane.onrender.com`)

### After Deploy

1. Copy your Render URL
2. Update `NEXT_PUBLIC_BASE_URL` in Render environment variables
3. Redeploy

## Project Structure

```
impulse-lane/
├── src/
│   ├── app/
│   │   ├── api/checkout/       # Stripe Checkout Session API
│   │   ├── cart/               # Cart page
│   │   ├── checkout/           # Success/cancel pages
│   │   ├── product/[slug]/     # Product detail pages
│   │   ├── shipping/           # Shipping policy (DRAFT)
│   │   ├── refunds/            # Returns policy (DRAFT)
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home/product listing
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   └── TestModeBanner.tsx
│   ├── context/
│   │   └── CartContext.tsx     # Cart state management
│   ├── data/
│   │   └── products.json       # Product catalog
│   └── lib/
│       ├── products.ts         # Product utilities
│       └── stripe.ts           # Stripe client
├── public/
│   └── products/               # Product placeholder SVGs
├── .env.example
├── render.yaml                 # Render deployment config
└── README.md
```

## Customization

### Update Products

Edit `src/data/products.json` to change the product catalog.

### Update Branding

- Modify `src/app/layout.tsx` for metadata
- Update `src/components/Header.tsx` for logo/nav
- Update `src/components/Footer.tsx` for footer content

### Update Policies

- Edit `src/app/shipping/page.tsx` for shipping policy
- Edit `src/app/refunds/page.tsx` for returns policy
- Remove DRAFT banners when ready for production

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Payments**: Stripe Checkout Sessions
- **State**: React Context (cart)
- **Deployment**: Render Web Service

## Important Notes

⚠️ **TEST MODE ONLY**
- Uses `sk_test_` / `pk_test_` keys only
- No real payments processed
- No live domain purchased
- Soft launch / paid ads: HOLD

📝 **DRAFT Content**
- Shipping and refund pages are labeled DRAFT
- Review and update before going live

🔒 **Security**
- Stripe secret key is server-side only
- No personal PII collected beyond Stripe checkout
- Stripe handles all payment data

## License

Private — not for redistribution.
