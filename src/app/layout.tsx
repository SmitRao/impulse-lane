import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { TestModeBanner } from "@/components/TestModeBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://impulse-lane.onrender.com";

export const metadata: Metadata = {
  title: {
    default: "Impulse Lane — Glitter Dumpling Squishies",
    template: "%s | Impulse Lane",
  },
  description: "Collect glitter-filled dumpling squishies! Fun novelty collectibles in multipacks. Squeeze the stress away. Age 14+ adult collectible fidgets.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Impulse Lane",
    title: "Impulse Lane — Glitter Dumpling Squishies",
    description: "Collect glitter-filled dumpling squishies! Fun novelty collectibles in multipacks. Squeeze the stress away.",
  },
  twitter: {
    card: "summary",
    title: "Impulse Lane — Glitter Dumpling Squishies",
    description: "Collect glitter-filled dumpling squishies! Fun novelty collectibles in multipacks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        {/* Entrance animations start hidden; without JS they must still be readable. */}
        <noscript>
          <style>{`[data-il-motion]{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-[var(--il-cream)]">
        <CartProvider>
          <TestModeBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
