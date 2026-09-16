'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--il-cream)] py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[var(--il-ink)] mb-8">Contact Us</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-[var(--il-ink)] text-lg mb-6">
              Got questions about your order, our products, or just want to say hi? 
              Fill out the form below and we&apos;ll get back to you.
            </p>

            {submitted ? (
              <div className="bg-[var(--il-mint)] bg-opacity-20 border border-[var(--il-mint)] rounded-xl p-6 text-center">
                <span className="text-4xl mb-4 block">✉️</span>
                <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-2">Message Received!</h2>
                <p className="text-[var(--il-muted)]">
                  Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <p className="text-sm text-[var(--il-muted)] mt-4">
                  (This is a test mode demo — no actual message was sent.)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--il-ink)] mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-[var(--il-pink)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--il-ink)] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-[var(--il-pink)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="orderNumber" className="block text-sm font-medium text-[var(--il-ink)] mb-1">
                      Order Number (if applicable)
                    </label>
                    <input
                      type="text"
                      id="orderNumber"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      placeholder="e.g. IL-12345"
                      className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-[var(--il-pink)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--il-ink)] mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-[var(--il-pink)]"
                    >
                      <option value="">Select a topic...</option>
                      <option value="order">Order Question</option>
                      <option value="shipping">Shipping Inquiry</option>
                      <option value="return">Return / Refund</option>
                      <option value="product">Product Question</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--il-ink)] mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-[var(--il-pink)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 btn-pink"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--il-ink)] mb-4">
              Before You Reach Out
            </h2>
            <p className="text-[var(--il-muted)] mb-4">
              You might find your answer in these resources:
            </p>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/faq" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>❓</span> FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>🚚</span> Shipping
                </Link>
              </li>
              <li>
                <Link 
                  href="/returns" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>↩️</span> Returns
                </Link>
              </li>
              <li>
                <Link 
                  href="/safety" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>⚠️</span> Product Safety
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-[var(--il-pink)] hover:underline flex items-center gap-2"
                >
                  <span>🔒</span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--il-gummy)] rounded-xl p-6">
            <p className="text-[var(--il-ink)] text-center font-medium">
              🧪 <strong>Test Mode Notice:</strong> This store is currently in test mode. 
              Contact form submissions are not being processed.
            </p>
          </div>
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
  );
}
