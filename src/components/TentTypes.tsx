"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const tents = [
  {
    title: "Frame Tents",
    tag: "Most Popular",
    description: "No center poles — maximum open floor space. Works on any surface including patios, concrete, and decking.",
    image: "/images/tent1.jpg",
    href: "/tent-rentals",
    features: ["No center poles", "Any surface", "Up to 300 guests"],
    color: "amber",
  },
  {
    title: "High Peak Tents",
    tag: "Best for Weddings",
    description: "Dramatic sweeping peaks create an elegant silhouette. Perfect for chandeliers and luxury draping.",
    image: "/images/tent2.jpg",
    href: "/wedding-tents",
    features: ["Elegant peaks", "Chandelier-ready", "Up to 400 guests"],
    color: "slate",
  },
  {
    title: "Clear Roof Tents",
    tag: "Premium",
    description: "Transparent panels let in natural light by day and showcase the stars at night. A luxury statement.",
    image: "/images/image.png",
    href: "/tent-rentals",
    features: ["Transparent roof", "Stargazing nights", "Up to 500 guests"],
    color: "amber",
  },
  {
    title: "Pole Tents",
    tag: "Large Events",
    description: "Classic tensioned fabric with a traditional peak. The go-to for festivals and large-scale gatherings.",
    image: "/images/tent6.jpg",
    href: "/festival-tents",
    features: ["Classic design", "Cost-effective", "Up to 800 guests"],
    color: "slate",
  },
];

export default function TentTypes() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Premium Event Tents.
            </h2>
          </div>
          <Link
            href="/tent-rentals"
            className="group flex items-center text-sm font-bold tracking-widest uppercase text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-amber-600 hover:border-amber-600 transition-all shrink-0"
          >
            View All Tents
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden md:grid grid-cols-12 grid-rows-2 gap-4 h-170">
          {/* Large card — col 1-5, row 1-2 */}
          <TentCard tent={tents[0]} index={0} hovered={hovered} setHovered={setHovered} className="col-span-5 row-span-2" />
          {/* Top right — col 6-9 */}
          <TentCard tent={tents[1]} index={1} hovered={hovered} setHovered={setHovered} className="col-span-4 row-span-1" />
          {/* Top far right — col 10-12 */}
          <TentCard tent={tents[2]} index={2} hovered={hovered} setHovered={setHovered} className="col-span-3 row-span-1" />
          {/* Bottom right — col 6-12 */}
          <TentCard tent={tents[3]} index={3} hovered={hovered} setHovered={setHovered} className="col-span-7 row-span-1" />
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-4">
          {tents.map((tent, i) => (
            <TentCard key={i} tent={tent} index={i} hovered={hovered} setHovered={setHovered} className="h-72" />
          ))}
        </div>
      </div>
    </section>
  );
}

function TentCard({
  tent, index, hovered, setHovered, className,
}: {
  tent: typeof tents[0];
  index: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
  className?: string;
}) {
  const isHovered = hovered === index;
  return (
    <Link
      href={tent.href}
      className={`group relative overflow-hidden rounded-2xl bg-slate-900 cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Image */}
      <Image
        src={tent.image}
        alt={tent.title}
        fill
        className={`object-cover transition-all duration-700 ${isHovered ? "scale-110 brightness-50" : "scale-100 brightness-75"}`}
      />

      {/* Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-amber-400 text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-full tracking-wide">
          {tent.tag}
        </span>
      </div>

      {/* Arrow */}
      <div className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-amber-400 rotate-0" : "rotate-0"}`}>
        <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isHovered ? "text-slate-900 translate-x-0.5" : "text-white"}`} />
      </div>

      {/* Default content */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-400 ${isHovered ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
        <h3 className="text-xl font-extrabold text-white tracking-tight">{tent.title}</h3>
        <p className="text-slate-300 text-sm font-light mt-1 line-clamp-2">{tent.description}</p>
      </div>

      {/* Hover content */}
      <div className={`absolute inset-0 p-6 z-10 flex flex-col justify-center transition-all duration-400 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">{tent.title}</h3>
        <p className="text-slate-200 text-sm font-light leading-relaxed mb-5">{tent.description}</p>
        <ul className="space-y-2">
          {tent.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-white">
              <Check className="w-4 h-4 text-amber-400 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-amber-400 text-xs font-bold tracking-widest uppercase">
          View Details <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
