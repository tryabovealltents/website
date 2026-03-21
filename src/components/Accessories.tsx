"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const accessories = [
  {
    category: "Furniture",
    tagline: "Seating & Tables",
    items: ["Round banquet tables", "Rectangular tables", "Premium folding chairs", "Chiavari chairs"],
    desc: "The right furniture sets the tone for your entire event. We supply clean, well-maintained tables and chairs suited to any style — from casual backyard gatherings to formal seated dinners.",
  },
  {
    category: "Lighting",
    tagline: "Ambiance & Atmosphere",
    items: ["Crystal chandeliers", "Bistro string lights", "Uplighting", "Spotlights"],
    desc: "Lighting transforms a tent into a venue. Our packages range from warm bistro strings for a relaxed outdoor feel to crystal chandeliers for black-tie elegance.",
  },
  {
    category: "Climate",
    tagline: "Comfort in Any Weather",
    items: ["Propane tent heaters", "Fan units", "Sidewall insulation", "Weather sealing"],
    desc: "Alberta weather is unpredictable. Our climate solutions keep your guests comfortable whether it's a cool spring evening or a warm summer afternoon.",
  },
  {
    category: "Flooring",
    tagline: "Dance Floors & Surfaces",
    items: ["Hardwood dance floors", "Modular event flooring", "Carpet runners", "Entrance mats"],
    desc: "Professional flooring protects your surface, levels uneven ground, and gives your event a polished, finished look from the moment guests walk in.",
  },
  {
    category: "Sidewalls",
    tagline: "Privacy & Structure",
    items: ["Solid sidewalls", "Windowed sidewalls", "Draping & fabric", "Entrance arches"],
    desc: "Sidewalls define your space, provide wind and rain protection, and add a layer of privacy. Available in solid white or with clear windows to let in natural light.",
  },
  {
    category: "Décor",
    tagline: "Finishing Touches",
    items: ["Linen packages", "Table centrepieces", "Entrance draping", "Aisle runners"],
    desc: "The details make the difference. Our décor add-ons help tie together the look of your event so every corner of your tent feels intentional and complete.",
  },
];

export default function Accessories() {
  const [active, setActive] = useState(0);
  const acc = accessories[active];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Complete The Look</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Event Accessories.
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-sm leading-relaxed">
            Everything you need to turn an empty tent into a fully furnished venue — all from one supplier.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 border-b border-slate-200 mb-12 overflow-x-auto pb-px">
          {accessories.map((a, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 px-5 py-3 text-sm font-bold tracking-wide transition-all duration-200 border-b-2 -mb-px ${
                active === i
                  ? "border-slate-900 text-slate-900"
                  : "border-transparent text-slate-400 hover:text-slate-700 hover:border-slate-300"
              }`}
            >
              {a.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl">
          <div>
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-3 block">{acc.tagline}</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{acc.category}</h3>
            <p className="text-slate-600 font-light leading-relaxed text-lg mb-10">{acc.desc}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
            >
              Add to Your Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {acc.items.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-4 px-5 py-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50 transition-all duration-200"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
