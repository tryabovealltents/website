"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const tents = [
  {
    id: "frame",
    title: "Frame Tents",
    subtitle: "Best for tight spaces & patios",
    image: "/all_above/3.jpeg",
    description:
      "Frame tents use a freestanding aluminum frame with no center poles or stakes required. Maximum usable floor space makes them ideal for patios, parking lots, or any surface where staking isn't possible.",
    sizes: ["10×10", "10×20", "20×20", "20×40", "30×60"],
    capacity: "Up to 300 guests",
    features: ["No center poles", "Works on any surface", "Maximum interior space", "Easy to configure"],
    bestFor: ["Backyard parties", "Patios & decks", "Parking lots", "Tight venues"],
  },
  {
    id: "high-peak",
    title: "High Peak Tents",
    subtitle: "Elegant & dramatic for weddings",
    image: "/all_above/1.jpeg",
    description:
      "High peak tents feature dramatic sweeping peaks that create an elegant, upscale atmosphere. High ceilings allow for chandeliers, draping, and lighting that transform any outdoor space into a luxury venue.",
    sizes: ["20×20", "20×40", "40×40", "40×60"],
    capacity: "Up to 400 guests",
    features: ["Dramatic high peaks", "Perfect for chandeliers", "Elegant silhouette", "Great for photos"],
    bestFor: ["Weddings", "Galas", "Corporate events", "Upscale parties"],
  },
  {
    id: "clear-roof",
    title: "Clear Roof Tents",
    subtitle: "Luxury open-sky experience",
    image: "/all_above/5.jpeg",
    description:
      "Clear roof tents offer a stunning open-sky experience while keeping guests protected from the elements. Perfect for evening events where guests can enjoy the stars, or daytime events where natural light is a priority.",
    sizes: ["20×40", "30×60", "40×80"],
    capacity: "Up to 500 guests",
    features: ["Transparent roof panels", "Natural light & stargazing", "Weather protected", "Premium aesthetic"],
    bestFor: ["Evening weddings", "Luxury events", "Daytime galas", "Unique experiences"],
  },
  {
    id: "pole",
    title: "Pole Tents",
    subtitle: "Classic large-scale gatherings",
    image: "/images/tent6.jpg",
    description:
      "Pole tents are the classic choice for large outdoor events. Their traditional peaked silhouette and tensioned fabric create a timeless look. Cost-effective for large guest counts with excellent coverage.",
    sizes: ["20×40", "30×60", "40×80", "40×120"],
    capacity: "Up to 800 guests",
    features: ["Classic design", "Large capacity", "Cost-effective", "Excellent coverage"],
    bestFor: ["Festivals", "Large weddings", "Community events", "Fairs & markets"],
  },
];

const sizeGuide = [
  { guests: "25–50", size: "20×20", sqft: "400 sq ft" },
  { guests: "50–100", size: "20×40", sqft: "800 sq ft" },
  { guests: "100–200", size: "30×60", sqft: "1,800 sq ft" },
  { guests: "200–300", size: "40×60", sqft: "2,400 sq ft" },
  { guests: "300–500", size: "40×80", sqft: "3,200 sq ft" },
  { guests: "500+", size: "Custom", sqft: "Contact us" },
];

export default function TentRentalsPage() {
  const [activeTent, setActiveTent] = useState(0);
  const [openSize, setOpenSize] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-slate-900 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/all_above/1.jpeg" alt="Premium tent rentals Calgary" fill className="object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/70 to-transparent" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">Our Collection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-tight max-w-3xl">
            Premium Tent <span className="shimmer-text-once">Rentals.</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10">
            Heavy-duty, commercial-grade tents for every event size and style. Delivered and installed across Calgary and Alberta.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all hover:-translate-y-1 shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Tent Selector */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Tent Types</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Find Your Perfect Tent.
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tents.map((tent, i) => (
              <button
                key={tent.id}
                onClick={() => setActiveTent(i)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeTent === i ? "bg-slate-900 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tent.title}
              </button>
            ))}
          </div>

          {tents.map((tent, i) => (
            <div key={tent.id} className={activeTent === i ? "block" : "hidden"}>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-2xl img-zoom">
                  <Image src={tent.image} alt={tent.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-4 py-2 rounded-full">
                      {tent.capacity}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2 block">{tent.subtitle}</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">{tent.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-8">{tent.description}</p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">Features</p>
                      <ul className="space-y-2">
                        {tent.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-amber-500 shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">Best For</p>
                      <ul className="space-y-2">
                        {tent.bestFor.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-amber-500 shrink-0" />{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mb-8">
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">Available Sizes</p>
                    <div className="flex flex-wrap gap-2">
                      {tent.sizes.map((s) => (
                        <span key={s} className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                  >
                    Get a Quote for This Tent
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Planning Tool</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Tent Size Guide.</h2>
              <p className="text-slate-600 font-light">Not sure what size you need? Use this as a starting point.</p>
            </div>
          </ScrollReveal>
          <button
            onClick={() => setOpenSize(!openSize)}
            className="w-full flex items-center justify-between px-6 py-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-amber-300 transition-colors mb-2"
          >
            <span className="font-bold text-slate-900">View Size Chart by Guest Count</span>
            <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openSize ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openSize ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="bg-white border border-slate-200 border-t-0 rounded-b-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left font-bold tracking-wide">Guest Count</th>
                    <th className="px-6 py-4 text-left font-bold tracking-wide">Recommended Size</th>
                    <th className="px-6 py-4 text-left font-bold tracking-wide">Floor Area</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeGuide.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 font-semibold text-slate-900">{row.guests}</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">{row.size}</td>
                      <td className="px-6 py-4 text-slate-600">{row.sqft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-6 font-light">
            Need a custom size?{" "}
            <Link href="/contact" className="text-amber-600 font-semibold hover:underline">Contact us</Link>
            {" "}and we will find the right fit.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Ready to book your tent?</h2>
            <p className="text-slate-400 font-light text-lg mb-8 max-w-xl mx-auto">
              Get a free, no-obligation quote. We will help you choose the right tent and accessories for your event.
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
