import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/images/tent3.jpg" alt="Event tent Calgary" fill className="object-cover opacity-15" />
      </div>
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-slate-900/80 to-amber-950/30" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="text-sm font-bold tracking-widest text-amber-400 uppercase mb-4 block">Ready to Book?</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
              Let&apos;s make your event <span className="shimmer-text-once">unforgettable.</span>
            </h2>
            <p className="text-slate-300 font-light text-lg leading-relaxed mb-10">
              Get a free, no-obligation quote today. We serve Calgary, Airdrie, Chestermere, Cochrane, Okotoks, and all surrounding Alberta areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-300 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(251,191,36,0.25)] hover:shadow-[0_0_50px_rgba(251,191,36,0.4)]"
              >
                Request a Free Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:4034933128"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white border border-white/20 hover:border-white/50 hover:bg-white/10 font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" />
                403-493-3128
              </a>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: Phone,
                title: "Call or Text Us",
                lines: ["403-493-3128", "778-955-9402"],
              },
              {
                icon: Clock,
                title: "Business Hours",
                lines: ["7:00 AM – 9:00 PM", "7 Days a Week"],
              },
              {
                icon: MapPin,
                title: "Service Area",
                lines: ["Calgary & Surrounding Alberta", "Airdrie · Cochrane · Okotoks · Chestermere"],
              },
            ].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <div key={i} className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <CardIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">{card.title}</p>
                    {card.lines.map((l, j) => (
                      <p key={j} className="text-white font-semibold text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
