import { ProductCard } from "@/components/ProductCard";
import { InView, InViewItem, Magnetic, Spotlight, TextEffect, TextShimmer } from "@/components/motion-primitives";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getFeaturedProducts, formatPrice } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "/products/il-bao-steamer-set.jpg",
        width: 1200,
        height: 1200,
        alt: "Impulse Lane - Glitter Dumpling Squishies",
      },
    ],
  },
};

const packHighlights = [
  {
    icon: "📦",
    title: "Multipack Only",
    body: "Every order is a multipack — more squish for your buck.",
  },
  {
    icon: "✨",
    title: "Glitter Inside",
    body: "Each squishy is filled with sparkly glitter magic.",
  },
  {
    icon: "🎁",
    title: "Gift Ready",
    body: "Perfect for birthdays, desk buddies, or treating yourself.",
  },
];

const collectBoard = [
  { color: "Pastel Pink", hex: "#FFD1DC" },
  { color: "Cloud White", hex: "#F5F5F5" },
  { color: "Mint Green", hex: "#98D8C8" },
  { color: "Lavender", hex: "#E6E6FA" },
  { color: "Peach", hex: "#FFDAB9" },
  { color: "Sky Blue", hex: "#87CEEB" },
  { color: "Lemon", hex: "#FFFACD" },
  { color: "Rose Gold", hex: "#F5C6C6" },
  { color: "Coral", hex: "#FF7F7F" },
  { color: "Sage", hex: "#9DC183" },
  { color: "Lilac", hex: "#C8A2C8" },
  { color: "Butter", hex: "#FFFDD0" },
];

const goodToKnow = [
  {
    label: "Shipping",
    body: "Flat $4.99 within the US, free on orders $35 and up. Orders usually leave within 2–4 business days once we have stock on hand.",
    href: "/shipping",
    cta: "Shipping policy",
  },
  {
    label: "Returns",
    body: "Unopened packs can be returned within 30 days for a refund of the product price. Damaged or leaking? Email photos within 14 days.",
    href: "/returns",
    cta: "Returns policy",
  },
  {
    label: "Safety",
    body: "Age 14+ adult collectible fidgets — not children's toys. Small parts and glitter fill; keep away from children under 3.",
    href: "/safety",
    cta: "Safety information",
  },
];

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const prices = featuredProducts.map((product) => product.price);
  const priceFloor = formatPrice(Math.min(...prices));
  const priceCeiling = formatPrice(Math.max(...prices));
  const packRange = featuredProducts.map((product) => product.packSize).sort((a, b) => a - b);

  return (
    <>
      {/* Hero */}
      <Section tone="wash" className="relative overflow-hidden">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 lg:order-1">
            <TextShimmer
              as="p"
              className="il-eyebrow mb-5"
              baseColor="var(--il-muted)"
              highlightColor="var(--il-ink)"
            >
              Blind-box glitter bao · Age 14+
            </TextShimmer>

            <TextEffect
              as="h1"
              per="word"
              preset="blur-slide"
              className="il-display text-[var(--il-ink)]"
              stagger={0.06}
              duration={0.7}
            >
              Glitter Dumpling Squishies
            </TextEffect>

            <p className="il-lead mt-6 max-w-xl">
              Squeeze the stress away with glitter-filled bao squishies. Collect, fidget, and share
              the squishy satisfaction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic strength={8}>
                <Link href="#products" className="il-btn il-btn-primary w-full sm:w-auto">
                  Shop Multipacks
                </Link>
              </Magnetic>
              <Link href="#inside" className="il-btn il-btn-secondary w-full sm:w-auto">
                What&apos;s in a pack
              </Link>
            </div>

            <dl className="il-hairline mt-10 grid grid-cols-2 gap-x-6 gap-y-5 pt-8 sm:grid-cols-4">
              <div>
                <dt className="il-eyebrow">Packs</dt>
                <dd className="il-num mt-1 text-lg font-semibold text-[var(--il-ink)]">
                  {featuredProducts.length}
                </dd>
              </div>
              <div>
                <dt className="il-eyebrow">Pieces</dt>
                <dd className="il-num mt-1 text-lg font-semibold text-[var(--il-ink)]">
                  {packRange[0]}–{packRange[packRange.length - 1]}
                </dd>
              </div>
              <div>
                <dt className="il-eyebrow">From</dt>
                <dd className="il-num mt-1 text-lg font-semibold text-[var(--il-ink)]">
                  {priceFloor}
                </dd>
              </div>
              <div>
                <dt className="il-eyebrow">Free ship</dt>
                <dd className="il-num mt-1 text-lg font-semibold text-[var(--il-ink)]">$35+</dd>
              </div>
            </dl>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-6 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <Spotlight className="bg-[var(--il-pink)]/25" size={340} />
              <div className="il-frame relative aspect-square">
                <Image
                  src="/products/il-bao-steamer-set.jpg"
                  alt="Bao steamer set with glitter squishies"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="il-card absolute -bottom-5 left-4 right-4 flex items-center justify-between gap-4 p-4 sm:left-8 sm:right-8">
                <div>
                  <p className="il-eyebrow">Multipacks</p>
                  <p className="il-num text-sm font-semibold text-[var(--il-ink)]">
                    {priceFloor} – {priceCeiling}
                  </p>
                </div>
                <span className="chip-gummy whitespace-nowrap">Age 14+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="il-hairline mt-20 flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 text-sm text-[var(--il-muted)]">
          <Link href="/shipping" className="flex items-center gap-2 hover:text-[var(--il-pink)]">
            <span aria-hidden>🚚</span>
            <span className="underline decoration-[var(--il-line-strong)] underline-offset-4">
              Free shipping $35+
            </span>
          </Link>
          <span className="flex items-center gap-2">
            <span aria-hidden>📦</span>Ships 2–4 biz days
          </span>
          <Link href="/returns" className="flex items-center gap-2 hover:text-[var(--il-pink)]">
            <span aria-hidden>↩️</span>
            <span className="underline decoration-[var(--il-line-strong)] underline-offset-4">
              30-day returns on unopened packs
            </span>
          </Link>
          <span className="flex items-center gap-2">
            <span aria-hidden>🔒</span>Secure checkout powered by Stripe
          </span>
        </div>
      </Section>

      {/* Products */}
      <Section id="products" tone="paper" divider>
        <SectionHeader
          eyebrow="The lineup"
          title="Shop Multipacks"
          description="Glitter-filled bao squishies in every pack — squeeze, collect, repeat."
          action={
            <Link
              href="/faq"
              className="il-btn il-btn-secondary il-btn-sm"
            >
              Read the FAQ
            </Link>
          }
        />

        <InView className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {featuredProducts.map((product) => (
            <InViewItem key={product.id} className="h-full">
              <ProductCard product={product} />
            </InViewItem>
          ))}
        </InView>
      </Section>

      {/* What's in a pack */}
      <Section id="inside" tone="shell" divider>
        <InView>
          <SectionHeader
            eyebrow="Inside the box"
            title="What's in every pack"
            description="Sealed TPR shells, visible glitter or bead fill, and a mix you don't pick — that's the blind-box part."
          />
        </InView>

        <InView className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
          {packHighlights.map((item, index) => (
            <InViewItem key={item.title} className="h-full">
              <div className="il-card h-full p-7">
                <div className="flex items-center justify-between">
                  <span className="text-3xl" aria-hidden>
                    {item.icon}
                  </span>
                  <span className="il-num il-eyebrow">0{index + 1}</span>
                </div>
                <h3 className="il-h3 mt-6 text-[var(--il-ink)]">{item.title}</h3>
                <p className="il-body mt-2 text-sm">{item.body}</p>
              </div>
            </InViewItem>
          ))}
        </InView>

        <InView className="mt-6" delay={0.1}>
          <div className="il-panel flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--il-muted)]">
              <strong className="text-[var(--il-ink)]">Not edible</strong> — decorative fidget only.
              Sealed TPR (thermoplastic rubber) shells with glitter, bead, or crystal fill.
            </p>
            <Link href="/safety" className="il-btn il-btn-secondary il-btn-sm shrink-0">
              Safety info
            </Link>
          </div>
        </InView>
      </Section>

      {/* Collect board */}
      <Section tone="sand" divider>
        <InView>
          <SectionHeader
            align="center"
            eyebrow="Collector's board"
            title="Collect the Whole Board"
            description="Each pack is a surprise mix of colors and styles. Trade with friends or keep hunting for your favorites."
          />
          <p className="mt-4 text-center text-sm font-medium text-[var(--il-grape)]">
            Duplicates possible — that&apos;s part of the blind-box fun!
          </p>
        </InView>

        <InView
          className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
          stagger={0.04}
        >
          {collectBoard.map(({ color, hex }) => (
            <InViewItem key={color}>
              <div className="flex flex-col items-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-[var(--il-shadow-sm)] ring-1 ring-[var(--il-line)] sm:h-20 sm:w-20"
                  style={{ backgroundColor: hex }}
                >
                  <span aria-hidden>🥟</span>
                </div>
                <span className="mt-2 text-center text-xs text-[var(--il-muted)]">{color}</span>
              </div>
            </InViewItem>
          ))}
        </InView>

        <p className="mt-8 text-center text-sm text-[var(--il-muted)]">
          Colors shown are examples — actual colors vary by pack and availability.
        </p>
      </Section>

      {/* UGC / ASMR */}
      <Section tone="paper" divider>
        <InView>
          <SectionHeader
            align="center"
            eyebrow="Coming soon"
            title="Squishy Sounds Coming Soon"
            description="ASMR squeeze videos and customer unboxings — launching soon."
          />
        </InView>

        <InView className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.1}>
          {[
            { icon: "🎥", title: "ASMR squeeze video", note: "Coming soon" },
            { icon: "📱", title: "Customer unboxing", note: "UGC coming soon" },
          ].map((slot) => (
            <InViewItem key={slot.title}>
              <div className="flex aspect-video flex-col items-center justify-center rounded-[var(--il-r-lg)] border border-dashed border-[var(--il-line-strong)] bg-[var(--il-shell)]">
                <span className="mb-3 text-4xl" aria-hidden>
                  {slot.icon}
                </span>
                <p className="text-sm font-medium text-[var(--il-ink)]">{slot.title}</p>
                <p className="mt-1 text-xs text-[var(--il-muted)]">{slot.note}</p>
              </div>
            </InViewItem>
          ))}
        </InView>
      </Section>

      {/* Good to know */}
      <Section tone="cream" divider>
        <InView>
          <SectionHeader
            eyebrow="Good to know"
            title="Before you buy"
            description="The details that matter, in the same words as our policy pages."
          />
        </InView>

        <InView className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.08}>
          {goodToKnow.map((item) => (
            <InViewItem key={item.label} className="h-full">
              <div className="il-card flex h-full flex-col p-7">
                <p className="il-eyebrow">{item.label}</p>
                <p className="il-body mt-4 flex-1 text-sm">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--il-pink)] hover:text-[var(--il-pink-ink)]"
                >
                  {item.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </InViewItem>
          ))}
        </InView>
      </Section>

      {/* Closing CTA */}
      <Section tone="ink" size="tight" className="relative overflow-hidden">
        <Spotlight className="bg-[var(--il-grape)]/35" size={420} />
        <InView className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="il-eyebrow text-white/60">Pick your pack</p>
            <h2 className="il-h2 mt-3 text-white">
              Four multipacks. One surprise mix in every box.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Flat $4.99 shipping, free at $35+. Age 14+ adult collectible fidgets.
            </p>
          </div>
          <Magnetic strength={10}>
            <Link href="#products" className="il-btn il-btn-primary">
              Shop Multipacks
            </Link>
          </Magnetic>
        </InView>
      </Section>
    </>
  );
}
