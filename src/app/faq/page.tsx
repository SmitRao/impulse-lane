import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Impulse Lane',
  description: 'Frequently asked questions about Impulse Lane glitter dumpling squishies. Shipping, returns, age ratings, and more.',
};

const faqs = [
  {
    question: 'What are Impulse Lane squishies?',
    answer: 'Impulse Lane squishies are glitter-filled dumpling (bao) shaped collectible fidgets designed for adults ages 14 and up. They are novelty stress-relief items, not children\'s toys.',
  },
  {
    question: 'Who are these products for?',
    answer: 'All Impulse Lane products are designed as adult collectible fidgets for ages 14 and up. These are novelty items for stress relief and collecting, not children\'s toys. Products contain small parts and are not suitable for children under 3.',
  },
  {
    question: 'What is a multipack?',
    answer: 'Every order is a multipack containing multiple squishies. Pack sizes vary by product (2, 4, or 6 per pack). We do not sell individual squishies.',
  },
  {
    question: 'How much is shipping?',
    answer: 'Flat rate shipping is $4.99 within the United States. Orders of $35 or more qualify for free shipping. We ship in padded mailers, and orders typically leave within 2-4 business days when in stock.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Deliveries typically take 5-10 business days after we ship. You will receive a tracking link when your shipping label is created.',
  },
  {
    question: 'What is your return policy?',
    answer: 'Unopened packs can be returned within 30 days for a refund of the product price; return shipping is on you unless we made a mistake. If something arrives damaged or leaking glitter, email us with photos within 14 days for a replacement or refund. Opened packs are not returnable except for defects.',
  },
  {
    question: 'Why does the checkout say "test mode"?',
    answer: 'This site is currently in Stripe test mode. No real orders are being fulfilled or charged at this time. We are preparing for launch.',
  },
  {
    question: 'Are these safe?',
    answer: 'Impulse Lane squishies are designed as adult collectibles for ages 14+. They contain small parts and glitter fill, presenting a choking hazard for young children. Keep away from children under 3. See our Safety page for full details.',
  },
  {
    question: 'What are the squishies made of?',
    answer: 'The outer shell is typically TPR (thermoplastic rubber), TPE, or silicone — soft and durable. Inside is glitter, beads, or crystal powder suspended in gel. Construction is sealed to contain the fill materials.',
  },
  {
    question: 'Can I contact you?',
    answer: 'Yes! Use our Contact page to reach us with questions about orders, products, or anything else. While in test mode, contact form submissions are not being processed.',
  },
];

function FAQJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd />
      <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Frequently Asked Questions</h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[var(--il-ink)] mb-3">
                  {faq.question}
                </h2>
                <p className="text-[var(--il-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[var(--il-gummy)] rounded-xl p-6">
            <p className="text-[var(--il-ink)] text-center font-medium">
              Still have questions?{' '}
              <Link href="/contact" className="text-[var(--il-pink)] hover:underline">
                Contact us
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 btn-pink"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
