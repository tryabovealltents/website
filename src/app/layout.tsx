import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tent Rentals Calgary | Above All Tent & Party Rentals",
  description: "Reliable tents for weddings, festivals, corporate events, and backyard parties in Calgary. Heavy-duty tents, professional setup, fully insured. Get a free quote!",
  keywords: "tent rentals Calgary, wedding tent rental Calgary, party tent rental Alberta, event tent rentals Calgary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Above All Tent and Party Rentals",
    "image": "https://yourdomain.com/hero.jpg",
    "telephone": "+1-778-688-2174",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "Canada",
    },
    "openingHours": "Mo-Su 07:00-21:00",
    "priceRange": "$$",
    "description": "Tent rental company providing event tents, wedding tents, and party rentals in Calgary and Alberta."
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased flex flex-col`}
    >
      <body className="min-h-full flex flex-col font-sans grow">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <Script id="schema-jsonld" type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>
      </body>
    </html>
  );
}
