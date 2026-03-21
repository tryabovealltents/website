"use client";

import { Navigation, ShieldCheck, Hammer, Sparkles } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Navigation,
    title: "Reliable Delivery",
    description: "On-time, precise delivery across Calgary and the surrounding Alberta area. We coordinate around your schedule.",
    detail: "We confirm delivery windows 48 hours in advance and our crew arrives fully equipped — no delays, no surprises.",
  },
  {
    icon: Hammer,
    title: "Professional Setup",
    description: "Our experienced crew secures every detail so you can focus on the event, not the logistics.",
    detail: "From anchoring and staking to sidewall installation and final walkthrough, we handle it all with precision.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Safety meets peace of mind with our commercial-grade equipment and full liability coverage.",
    detail: "We carry comprehensive liability insurance on every job. Your venue, your guests, and your event are protected.",
  },
  {
    icon: Sparkles,
    title: "Custom Planning",
    description: "Personalized advice to ensure the right tent, size, and layout for your exact guest count and venue.",
    detail: "We visit your site, assess the space, and recommend the optimal tent configuration — at no extra charge.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">
              The Above All Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Flawless<br />Execution.
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              From backyard celebrations to grand corporate events, our full-service approach ensures zero stress on your big day.
            </p>
            {/* Active detail panel */}
            <div className={`mt-8 overflow-hidden transition-all duration-500 ${active !== null ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              {active !== null && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <p className="text-sm text-slate-700 leading-relaxed font-light">{features[active].detail}</p>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const isActive = active === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActive(isActive ? null : idx)}
                  className={`group text-left flex flex-col items-start p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 border-slate-900 shadow-xl -translate-y-1"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-1"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    isActive ? "bg-amber-400 text-slate-900" : "bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white"
                  }`}>
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 tracking-tight transition-colors ${isActive ? "text-white" : "text-slate-900"}`}>
                    {feat.title}
                  </h3>
                  <p className={`text-sm font-light leading-relaxed transition-colors ${isActive ? "text-slate-300" : "text-slate-600"}`}>
                    {feat.description}
                  </p>
                  <span className={`mt-4 text-xs font-bold tracking-widest uppercase transition-colors ${isActive ? "text-amber-400" : "text-slate-400 group-hover:text-amber-600"}`}>
                    {isActive ? "Click to close ↑" : "Learn more →"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
