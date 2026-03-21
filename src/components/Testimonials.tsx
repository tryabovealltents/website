"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Emily R.",
    event: "Wedding · Calgary",
    feedback: "Above All made our wedding day absolutely perfect. The high peak tent looked stunning and the team had everything set up flawlessly before we even arrived.",
  },
  {
    name: "Jason T.",
    event: "Corporate Event · Airdrie",
    feedback: "They exceeded our expectations with their passion and attention to detail. You can tell they have years of experience — everything ran like clockwork.",
  },
  {
    name: "Priya S.",
    event: "Wedding · Cochrane",
    feedback: "The tent was spotless, sturdy, and looked beautiful. The team was friendly and made the whole process completely stress-free from quote to teardown.",
  },
  {
    name: "Michael B.",
    event: "Festival · Okotoks",
    feedback: "Great service, on-time delivery, and the setup crew was incredibly professional. We had 400 guests and not a single issue. Will absolutely use them again.",
  },
  {
    name: "Samantha L.",
    event: "Backyard Party · Chestermere",
    feedback: "We had to make last-minute changes and Above All handled everything without hesitation. Highly recommended for any outdoor event in Alberta.",
  },
  {
    name: "David K.",
    event: "Corporate Gala · Calgary",
    feedback: "The clear roof tent was a showstopper. Our guests were blown away. The chandeliers and dance floor they provided completed the entire look.",
  },
];

const VISIBLE = 3;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(testimonials.length - VISIBLE, i + 1));

  const atStart = index === 0;
  const atEnd = index >= testimonials.length - VISIBLE;

  return (
    <section className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">
              Client Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              What Our Clients Say.
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={atStart}
              aria-label="Previous"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                atStart
                  ? "border-slate-200 text-slate-300 cursor-not-allowed"
                  : "border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={atEnd}
              aria-label="Next"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                atEnd
                  ? "border-slate-200 text-slate-300 cursor-not-allowed"
                  : "border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE} + 8px)))` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-100 flex flex-col gap-5 shrink-0 hover:shadow-md transition-shadow duration-300"
                style={{ width: `calc(${100 / VISIBLE}% - ${(VISIBLE - 1) * 24 / VISIBLE}px)` }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-[15px] flex-1">
                  &ldquo;{t.feedback}&rdquo;
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5 font-medium">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={atStart}
            aria-label="Previous"
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
              atStart
                ? "border-slate-200 text-slate-300 cursor-not-allowed"
                : "border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-slate-400 font-medium">{index + 1} / {testimonials.length - VISIBLE + 1}</span>
          <button
            onClick={next}
            disabled={atEnd}
            aria-label="Next"
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
              atEnd
                ? "border-slate-200 text-slate-300 cursor-not-allowed"
                : "border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="hidden md:flex justify-center gap-1.5 mt-8">
          {Array.from({ length: testimonials.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === index ? "w-6 h-1.5 bg-slate-900" : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
