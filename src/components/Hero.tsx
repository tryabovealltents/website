"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  { src: "/images/tent3.jpg", label: "Weddings" },
  { src: "/images/tent2.jpg", label: "Festivals" },
  { src: "/images/tent1.jpg", label: "Backyard Parties" },
  { src: "/images/tent4.jpg", label: "Corporate Events" },
];

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Fully Insured" },
  { value: 200, suffix: "+", label: "Events Completed" },
];

function useCountUp(target: number, duration = 2800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1600, active);
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-extrabold text-white tabular-nums">{count}{suffix}</span>
      <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 9000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStatsActive(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-slate-950 overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={slide.src} alt={slide.label} fill className="object-cover scale-105" priority={i === 0} />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30 z-10" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950/80 z-10" />

      {/* Slide indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group flex items-center gap-2"
            aria-label={`View ${slide.label}`}
          >
            <span className={`block h-0.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-amber-400" : "w-4 bg-white/30 group-hover:bg-white/60"}`} />
          </button>
        ))}
      </div>


      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 pt-36 pb-16 md:pt-40 md:pb-24 lg:pb-20">
        <div className="max-w-4xl">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.02]">
            Elevate Your<br className="hidden md:block" />{" "}
            <span className="shimmer-text-once">Outdoor Events.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 font-light mb-12 max-w-2xl leading-relaxed">
            Heavy-duty tents, professional installation, and full event accessories for weddings, festivals, and unforgettable backyard parties across Calgary and Alberta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)]"
            >
              Get a Free Quote
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:4034933128"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white border border-white/20 hover:border-white/50 hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="h-4 w-4" />
              403-493-3128
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 items-center border-t border-white/10 pt-8">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-10">
                <StatItem {...s} active={statsActive} />
                {i < stats.length - 1 && <div className="w-px h-10 bg-white/10 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
