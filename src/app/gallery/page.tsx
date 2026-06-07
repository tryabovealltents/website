"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Weddings", "Backyard Parties", "Festivals", "Corporate", "Commercial", "Residential"];

const photos = [
  // Latest uploads first (newest at top)
  { src: "/all_above/5.jpeg", category: "Driveway", title: "High Peak Tent — Residential", location: "Calgary, AB" },
  { src: "/all_above/4.jpeg", category: "Residential", title: "Residential High Peak Tent", location: "Calgary, AB" },
  { src: "/all_above/3.jpeg", category: "Commercial Parking", title: "Heated Tent — Winter Setup", location: "Calgary, AB" },
  { src: "/all_above/2.jpeg", category: "Festivals", title: "Market / Festival Setup", location: "Calgary, AB" },
  { src: "/all_above/1.jpeg", category: "Residential", title: "Commercial Parking Setup", location: "Calgary, AB" },

  { src: "/images/tent1.jpg", category: "Weddings", title: "Elegant Frame Tent Setup", location: "Calgary, AB" },
  { src: "/images/tent2.jpg", category: "Weddings", title: "High Peak Wedding Tent", location: "Airdrie, AB" },
  { src: "/images/tent3.jpg", category: "Festivals", title: "Festival Grounds Setup", location: "Calgary, AB" },
  { src: "/images/tent4.jpg", category: "Commercial", title: "Clear Roof Corporate Event", location: "Chestermere, AB" },
  { src: "/images/tent5.jpg", category: "Commercial", title: "Backyard Celebration", location: "Cochrane, AB" },
  { src: "/images/tent6.jpg", category: "Festivals", title: "Large Pole Tent Festival", location: "Okotoks, AB" },
  { src: "/images/WhatsApp Image 2026-03-18 at 5.55.29 AM (1).jpeg", category: "Festivals", title: "Wedding Reception Setup", location: "Calgary, AB" },
  { src: "/images/WhatsApp Image 2026-03-18 at 5.55.29 AM (2).jpeg", category: "Backyard Parties", title: "Outdoor Party Tent", location: "Calgary, AB" },
  { src: "/images/WhatsApp Image 2026-03-18 at 5.55.29 AM (3).jpeg", category: "Backyard Parties", title: "Corporate Gathering", location: "Airdrie, AB" },
  { src: "/images/WhatsApp Image 2026-03-18 at 5.55.29 AM (4).jpeg", category: "Weddings", title: "Intimate Wedding Tent", location: "Calgary, AB" },
  { src: "/images/2.jpeg", category: "Backyard Parties", title: "Above All Tent Setup – Winter Event", location: "Calgary, AB" },
  { src: "/images/3.jpeg", category: "Backyard Parties", title: "Heated Tent for Winter Gathering", location: "Calgary, AB" },
  { src: "/images/5.jpeg", category: "Backyard Parties", title: "High Peak Frame Tent – Clear Day", location: "Calgary, AB" },
  { src: "/images/6.jpeg", category: "Driveway", title: "Open-Door Tent Setup", location: "Calgary, AB" },
  { src: "/images/7.jpeg", category: "Backyard Parties", title: "Interior Catering & Heating Setup", location: "Calgary, AB" },
  { src: "/images/8.jpeg", category: "Driveway", title: "Driveway", location: "Calgary, AB" },
  { src: "/images/9.jpeg", category: "Backyard Parties", title: "Above All Party Tent – Sunny Setup", location: "Calgary, AB" },
  { src: "/images/10.jpeg", category: "Backyard Parties", title: "High Peak Tent – Full Enclosure", location: "Calgary, AB" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? photos : photos.filter(p => p.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex(i => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextPhoto = () => setLightboxIndex(i => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/tent1.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 to-slate-900/90" />
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">Our Work</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
            Event <span className="shimmer-text-once">Gallery.</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Real events. Real setups. See what we have built for clients across Calgary and Alberta.
          </p>
        </div>
      </section>

      {/* Featured latest images - always shown at top */}
      <section className="py-8">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-extrabold mb-4">Latest Uploads</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {photos.slice(0, 5).map((p, i) => (
              <div key={p.src} className="overflow-hidden rounded-lg bg-slate-100">
                <img src={p.src} alt={p.title} className="w-full h-40 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((photo, idx) => (
              <div
                key={`${photo.src}-${idx}`}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer img-zoom"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-sm">{photo.title}</p>
                  <p className="text-slate-300 text-xs mt-1">{photo.location}</p>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-h-[80vh] max-w-full object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-bold">{filtered[lightboxIndex].title}</p>
              <p className="text-slate-400 text-sm">{filtered[lightboxIndex].location}</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-sm">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Want a setup like this for your event?
            </h2>
            <p className="text-slate-400 font-light text-lg mb-8 max-w-xl mx-auto">
              Get in touch and we will create something just as beautiful for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
