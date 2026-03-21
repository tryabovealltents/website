"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, CalendarCheck, Truck, PartyPopper, PackageCheck } from "lucide-react";

const steps = [
  {
    step: "01", icon: MessageSquare, title: "Request a Quote",
    description: "Fill out our quick form or give us a call with your date, guest count, and event type.",
    detail: "We respond within a few hours with a transparent, itemized estimate — no hidden fees, no pressure.",
  },
  {
    step: "02", icon: CalendarCheck, title: "Confirm Your Booking",
    description: "We help you choose the right tent size, accessories, and layout for your venue.",
    detail: "We can visit your site to assess the space and recommend the optimal configuration at no extra charge.",
  },
  {
    step: "03", icon: Truck, title: "Delivery & Setup",
    description: "Our professional crew arrives on schedule and installs everything before your event.",
    detail: "We confirm a delivery window 48 hours in advance. Setup is clean, efficient, and fully supervised.",
  },
  {
    step: "04", icon: PartyPopper, title: "Enjoy Your Event",
    description: "Relax and enjoy. Everything is in place — we handle any on-day support you need.",
    detail: "We're reachable throughout your event day. If anything needs adjusting, we're a call away.",
  },
  {
    step: "05", icon: PackageCheck, title: "We Handle Teardown",
    description: "After your event, our crew returns to dismantle and remove all equipment.",
    detail: "We leave your venue exactly as we found it — clean, clear, and ready for the next day.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const Icon = current.icon;

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Seamless from Start to Finish.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Step list */}
          <div className="flex flex-col gap-2">
            {steps.map((s, i) => {
              const StepIcon = s.icon;
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-5 p-5 rounded-2xl text-left transition-all duration-300 ${
                    isActive ? "bg-slate-900 shadow-xl" : "hover:bg-slate-50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-amber-400 text-slate-900" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-0.5">
                      <span className={`text-xs font-bold tracking-widest ${isActive ? "text-amber-400" : "text-slate-400"}`}>{s.step}</span>
                      <h3 className={`font-bold tracking-tight transition-colors ${isActive ? "text-white" : "text-slate-900"}`}>{s.title}</h3>
                    </div>
                    <p className={`text-sm font-light transition-colors line-clamp-1 ${isActive ? "text-slate-300" : "text-slate-500"}`}>{s.description}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full shrink-0 transition-all ${isActive ? "bg-amber-400" : "bg-transparent"}`} />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center text-slate-900 mb-6 shadow-lg shadow-amber-200/50">
                <Icon className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">{current.step}</span>
                <span className="w-8 h-px bg-amber-300" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">{current.title}</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">{current.description}</p>
              <p className="text-slate-500 text-sm font-light leading-relaxed border-l-2 border-amber-300 pl-4">{current.detail}</p>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
              >
                Start Here <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${i === active ? "w-5 h-2 bg-amber-400" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
                    aria-label={`Step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
