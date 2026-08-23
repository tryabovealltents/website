"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Weddings", "Frame Tent", "Clear Roof Tents", "Marquee Tent with Clear Walls", "Pop Up Canopy Tents", "Bar Tables", "Stage", "Dance Floor", "Tables & Chairs", "Backyard Summer Party", "Backyard Parties", "Festivals", "Corporate", "Commercial", "Residential"];

const photos = [
  // Latest uploads first (newest at top) — Aug 2026 dance floors
  { src: "/dancing_floor/dancevideo.mp4", category: "Dance Floor", title: "Dance Floor Walkthrough", location: "Calgary, AB" },
  { src: "/dancing_floor/dance2.jpeg", category: "Dance Floor", title: "Wood Dance Floor in Draped Tent", location: "Calgary, AB" },
  { src: "/dancing_floor/dance3.jpeg", category: "Dance Floor", title: "Dance Floor with String Lights & Disco Ball", location: "Calgary, AB" },

  // Aug 2026 heavy-duty commercial pop-up canopy (10x10)
  { src: "/commercial_canopy/WhatsApp Image 2026-08-15 at 7.45.15 PM.jpeg", category: "Pop Up Canopy Tents", title: "Heavy-Duty Commercial Pop-Up Canopy (10×10)", location: "Calgary, AB" },
  { src: "/commercial_canopy/WhatsApp Image 2026-08-15 at 7.45.12 PM.jpeg", category: "Pop Up Canopy Tents", title: "Row of 10×10 Commercial Canopies", location: "Calgary, AB" },
  { src: "/commercial_canopy/WhatsApp Image 2026-08-14 at 11.19.04 AM.jpeg", category: "Pop Up Canopy Tents", title: "10×10 Pop-Up Canopy with Sidewalls", location: "Calgary, AB" },
  { src: "/commercial_canopy/WhatsApp Image 2026-08-14 at 11.19.30 AM.jpeg", category: "Pop Up Canopy Tents", title: "Commercial Pop-Up Canopy (10×10)", location: "Calgary, AB" },
  { src: "/commercial_canopy/WhatsApp Image 2026-08-14 at 11.19.30 AM (1).jpeg", category: "Pop Up Canopy Tents", title: "Heavy-Duty Pop-Up Canopy Setup", location: "Calgary, AB" },
  { src: "/commercial_canopy/WhatsApp Image 2026-08-14 at 11.19.30 AM (2).jpeg", category: "Pop Up Canopy Tents", title: "10×10 Canopy — Event Vendor Tent", location: "Calgary, AB" },
  { src: "/commercial_canopy/WhatsApp Image 2026-08-14 at 11.19.31 AM.jpeg", category: "Pop Up Canopy Tents", title: "Commercial Canopy — Pop-Up Tent", location: "Calgary, AB" },
  { src: "/commercial_canopy/WhatsApp Image 2026-08-14 at 11.19.31 AM (1).jpeg", category: "Pop Up Canopy Tents", title: "Heavy-Duty 10×10 Canopy Tent", location: "Calgary, AB" },
  { src: "/commercial_canopy/WhatsApp Image 2026-08-14 at 11.19.31 AM (2).jpeg", category: "Pop Up Canopy Tents", title: "Pop-Up Commercial Canopy", location: "Calgary, AB" },

  // Aug 2026 hilltop estate frame tent event
  { src: "/frame_tents/WhatsApp Image 2026-08-14 at 4.48.43 AM (1).jpeg", category: "Frame Tent", title: "Structure Frame Tent — Hilltop Estate", location: "Calgary, AB" },
  { src: "/frame_tents/WhatsApp Image 2026-08-14 at 4.48.43 AM.jpeg", category: "Frame Tent", title: "Frame Tent at Estate Wedding", location: "Calgary, AB" },
  { src: "/frame_tents/WhatsApp Image 2026-08-14 at 4.48.44 AM.jpeg", category: "Frame Tent", title: "Draped Frame Tent Interior", location: "Calgary, AB" },
  { src: "/frame_tents/WhatsApp Image 2026-08-14 at 4.48.44 AM (1).jpeg", category: "Frame Tent", title: "Frame Tent — Draping & Red Carpet", location: "Calgary, AB" },
  { src: "/frame_tents/WhatsApp Image 2026-08-14 at 7.58.48 AM.jpeg", category: "Frame Tent", title: "Frame Tent with Wood Dance Floor", location: "Calgary, AB" },

  // June 2026 weddings & events
  { src: "/tent/t5.jpeg", category: "Frame Tent", title: "Frame Tent — Red Carpet Event", location: "Calgary, AB" },
  { src: "/tent/t2.jpeg", category: "Frame Tent", title: "Frame Tent — Open A-Frame", location: "Calgary, AB" },
  { src: "/tent/t3.jpeg", category: "Frame Tent", title: "Frame Tent — Windowed Walls", location: "Calgary, AB" },
  { src: "/tent/t4.jpeg", category: "Frame Tent", title: "Frame Tent with Event Flooring", location: "Calgary, AB" },
  { src: "/tent/t1.jpeg", category: "Frame Tent", title: "Frame Tent Interior", location: "Calgary, AB" },
  { src: "/tent/popuptent.jpeg", category: "Pop Up Canopy Tents", title: "Pop Up Canopy Tents", location: "Calgary, AB" },
  { src: "/marqee tents/mt1.jpeg", category: "Marquee Tent with Clear Walls", title: "Marquee Tent with Clear Walls", location: "Calgary, AB" },
  { src: "/backyard_party/bp1.jpeg", category: "Backyard Summer Party", title: "Backyard Summer Party", location: "Calgary, AB" },
  { src: "/bbq/bbq.jpeg", category: "Clear Roof Tents", title: "Clear Roof Tent — Canada Day BBQ", location: "Carseland, AB" },
  { src: "/bbq/bbq2.jpeg", category: "Clear Roof Tents", title: "Clear Roof Tent — Community BBQ", location: "Carseland, AB" },
  { src: "/wedding/w6.png", category: "Weddings", title: "Farm Wedding Reception Setup", location: "Calgary, AB" },
  { src: "/stage/s.png", category: "Stage", title: "Outdoor Event Stage & Seating", location: "Calgary, AB" },
  { src: "/wedding/w5.png", category: "Weddings", title: "Clear-Wall Reception Tent", location: "Calgary, AB" },
  { src: "/wedding/w4.png", category: "Weddings", title: "High Peak Tent with Clear Top", location: "Calgary, AB" },
  { src: "/wedding/w2.png", category: "Weddings", title: "Farm Wedding Tents & Dance Floor", location: "Calgary, AB" },
  { src: "/stage/s1.png", category: "Stage", title: "Stage with Stairs & Reserved Seating", location: "Calgary, AB" },
  { src: "/wedding/w3.png", category: "Corporate", title: "Frame Tent — Commercial Setup", location: "Calgary, AB" },
  { src: "/wedding/w1.png", category: "Weddings", title: "Forest Wedding Tent Setup", location: "Calgary, AB" },
  { src: "/all_above/image.png", category: "Festivals", title: "The Above All Crew On-Site", location: "Calgary, AB" },
  { src: "/dancing_floor/image.png", category: "Dance Floor", title: "Wood Dance Floor", location: "Calgary, AB" },
  { src: "/chairs/bart1.jpeg", category: "Bar Tables", title: "White Cocktail Bar Table", location: "Calgary, AB" },
  { src: "/chairs/bart2.jpeg", category: "Bar Tables", title: "Bar Table with Spandex Cover", location: "Calgary, AB" },
  { src: "/chairs/WhatsApp Image 2026-06-14 at 6.47.56 AM (2).jpeg", category: "Weddings", title: "Draped Wedding Tent Interior", location: "Calgary, AB" },

  // Stage & dance floor — recently added
  { src: "/stage/image.png", category: "Stage", title: "Portable Stage Platform", location: "Calgary, AB" },
  { src: "/stage/stage2.jpeg", category: "Stage", title: "Stage with Stairs", location: "Calgary, AB" },
  { src: "/stage/stage.jpeg", category: "Stage", title: "Stage & Dance Floor Setup", location: "Calgary, AB" },
  { src: "/stage/stage3.jpeg", category: "Stage", title: "Dance Floor & Stage", location: "Calgary, AB" },

  { src: "/chairs/WhatsApp Image 2026-06-14 at 10.17.32 PM (4).jpeg", category: "Tables & Chairs", title: "Folding Chairs — White & Black", location: "Calgary, AB" },
  { src: "/chairs/WhatsApp Image 2026-06-14 at 6.47.56 AM.jpeg", category: "Tables & Chairs", title: "Banquet Chair — Gold Frame", location: "Calgary, AB" },
  { src: "/chairs/WhatsApp Image 2026-06-14 at 6.47.56 AM (1).jpeg", category: "Tables & Chairs", title: "Chair Cover with Gold Sash", location: "Calgary, AB" },
  { src: "/chairs/WhatsApp Image 2026-06-14 at 10.17.32 PM (2).jpeg", category: "Tables & Chairs", title: "Round Table & White Chrome-Leg Chair", location: "Calgary, AB" },
  { src: "/chairs/WhatsApp Image 2026-06-14 at 10.17.32 PM (1).jpeg", category: "Tables & Chairs", title: "Rectangular Table & Black Chair", location: "Calgary, AB" },
  { src: "/chairs/WhatsApp Image 2026-06-14 at 10.17.32 PM.jpeg", category: "Tables & Chairs", title: "Linen-Draped Rectangular Table", location: "Calgary, AB" },
  { src: "/chairs/WhatsApp Image 2026-06-14 at 10.17.32 PM (3).jpeg", category: "Tables & Chairs", title: "Wood Rectangular Banquet Table", location: "Calgary, AB" },

  { src: "/all_above/5.jpeg", category: "Backyard Parties", title: "Backyard Party Tent — Winter Setup", location: "Calgary, AB" },
  { src: "/all_above/4.jpeg", category: "Residential", title: "Residential High Peak Tent", location: "Calgary, AB" },
  { src: "/all_above/3.jpeg", category: "Corporate", title: "Heated Tent — Winter Setup", location: "Calgary, AB" },
  { src: "/all_above/2.jpeg", category: "Festivals", title: "Market / Festival Setup", location: "Calgary, AB" },
  { src: "/all_above/1.jpeg", category: "Residential", title: "Commercial Parking Setup", location: "Calgary, AB" },

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

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

// Build one "folder" per category (excluding "All"), using the first photo as the cover.
const folders = categories
  .filter((cat) => cat !== "All")
  .map((cat) => {
    const inCat = photos.filter((p) => p.category === cat);
    const cover = (inCat.find((p) => !isVideo(p.src)) ?? inCat[0])?.src ?? "";
    return { name: cat, cover, count: inCat.length };
  })
  .filter((f) => f.count > 0);

function FolderCard({ name, cover, count, onClick }: { name: string; cover: string; count: number; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group relative overflow-hidden rounded-2xl aspect-4/3 text-left img-zoom w-full">
      <img src={cover} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
      <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
        {count} {count === 1 ? "photo" : "photos"}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-extrabold tracking-tight">{name}</h3>
        <span className="inline-flex items-center gap-1 text-amber-400 text-xs font-bold tracking-widest uppercase mt-2 group-hover:gap-2 transition-all">
          View All <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </button>
  );
}

export default function GalleryPage() {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = openFolder === null || openFolder === "All" ? photos : photos.filter(p => p.category === openFolder);

  const openCategory = (cat: string) => { setOpenFolder(cat); setLightboxIndex(null); };
  const backToFolders = () => { setOpenFolder(null); setLightboxIndex(null); };

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
          style={{ backgroundImage: "url('/all_above/1.jpeg')" }}
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
            {photos.filter((p) => !isVideo(p.src)).slice(0, 5).map((p) => (
              <div key={p.src} className="overflow-hidden rounded-lg bg-slate-100">
                <img src={p.src} alt={p.title} className="w-full h-52 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Folders OR selected category photos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">

          {openFolder === null ? (
            /* ---- Folder grid (browse by category) ---- */
            <>
              <ScrollReveal>
                <div className="text-center mb-12">
                  <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Browse by Category</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Explore Our Collections.</h2>
                  <p className="text-slate-500 font-light mt-3">Tap a category to see every photo in that collection.</p>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <FolderCard name="All Photos" cover={photos.find((p) => !isVideo(p.src))?.src ?? photos[0].src} count={photos.length} onClick={() => openCategory("All")} />
                {folders.map((f) => (
                  <FolderCard key={f.name} name={f.name} cover={f.cover} count={f.count} onClick={() => openCategory(f.name)} />
                ))}
              </div>
            </>
          ) : (
            /* ---- Photos inside one folder ---- */
            <>
              <div className="mb-10">
                <button
                  onClick={backToFolders}
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-slate-500 hover:text-amber-600 transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" /> All Categories
                </button>
                <div className="flex items-end justify-between gap-4 flex-wrap">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                    {openFolder === "All" ? "All Photos" : openFolder}
                  </h2>
                  <span className="text-slate-500 font-semibold text-sm">{filtered.length} {filtered.length === 1 ? "photo" : "photos"}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((photo, idx) => (
              <div
                key={`${photo.src}-${idx}`}
                className="group relative overflow-hidden rounded-2xl cursor-pointer img-zoom aspect-4/3"
                onClick={() => openLightbox(idx)}
              >
                {isVideo(photo.src) ? (
                  <video
                    src={photo.src}
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isVideo(photo.src) ? (
                  /* Play icon — always visible for videos */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-black/45 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
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
            </>
          )}

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
            {isVideo(filtered[lightboxIndex].src) ? (
              <video
                src={filtered[lightboxIndex].src}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] max-w-full object-contain rounded-xl"
              />
            ) : (
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-h-[80vh] max-w-full object-contain rounded-xl"
              />
            )}
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
