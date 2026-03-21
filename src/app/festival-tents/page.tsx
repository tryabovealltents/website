import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Tent, Wind, Users, Truck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival & Event Tent Rentals Calgary | Above All Tent & Party Rentals",
  description:
    "Large-scale festival and corporate event tent rentals in Calgary and Alberta. Heavy-duty pole tents, fast logistics, professional crew. Free quote.",
  keywords: "festival tent rental Calgary, event tent rental Alberta, large tent rental Calgary, corporate event tent Calgary",
};

const features = [
  { icon: <Tent className="w-5 h-5" />, title: "Large Capacity", desc: "Pole tents accommodating 100 to 800+ guests. Custom sizing available for any footprint." },
  { icon: <Wind className="w-5 h-5" />, title: "Built for Canadian Weather", desc: "Heavy-duty commercial fabric engineered to handle wind, rain, and temperature swings." },
  { icon: <Truck className="w-5 h-5" />, title: "Logistics Handled", desc: "We coordinate delivery, installation, and teardown around your event schedule." },
  { icon: <Users className="w-5 h-5" />, title: "Experienced Crew", desc: "10+ years of large-scale event experience. We have seen it all and handled it all." },
];

const eventTypes = [
  { title: "Music Festivals", desc: "Large pole tents for stages, vendor areas, and VIP sections.", img: "/images/tent3.jpg" },
  { title: "Corporate Events", desc: "Professional setups for product launches, galas, and company gatherings.", img: "/images/tent6.jpg" },
  { title: "Community Events", desc: "Fairs, markets, fundraisers, and neighbourhood celebrations.", img: "/images/tent5.jpg" },
];

export default function FestivalTentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/tent3.jpg" alt="Festival tent rental Calgary" fill className="object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-900/70 to-transparent" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <Tent className="w-3 h-3 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">Festivals & Corporate</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-tight max-w-3xl">
            Festival & Event Tent <span className="shimmer-text-once">Rentals.</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10">
            Large-scale tent solutions for festivals, corporate events, and community gatherings across Calgary and Alberta. Professional logistics from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all hover:-translate-y-1 shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="tel:4034933128"
              className="inline-flex items-center justify-center px-8 py-4 text-white border border-white/30 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              Call 403-493-3128
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 max-w-6xl mx-auto">
            <div className="md:w-1/3">
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Large-Scale Capability</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Built for big events.
              </h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Whether you are running a 200-person corporate gala or a 1,000-person music festival, we have the equipment, crew, and experience to deliver a flawless setup.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-2">{f.title}</p>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Event Types</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">We cover every large event.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {eventTypes.map((e) => (
              <div key={e.title} className="group relative rounded-3xl overflow-hidden aspect-3/4 img-zoom shadow-lg">
                <Image src={e.img} alt={e.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-extrabold text-white mb-2">{e.title}</h3>
                  <p className="text-slate-300 text-sm font-light">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pole Tent Highlight */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 block">Recommended for Festivals</span>
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Pole Tents — Up to 800 Guests.</h2>
              <p className="text-slate-300 font-light leading-relaxed mb-8">
                Our heavy-duty pole tents are the workhorse of large outdoor events. Classic peaked design, tensioned commercial fabric, and available in sizes up to 40×120 ft. Cost-effective for large footprints without sacrificing quality.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Sizes from 20×40 up to 40×120",
                  "Accommodates 100–800+ guests",
                  "Heavy-duty commercial-grade fabric",
                  "Sidewalls, flooring & lighting available",
                  "Suitable for multi-day events",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all"
              >
                Request a Festival Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 img-zoom">
              <Image src="/images/tent6.jpg" alt="Large pole tent for festival" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50 border-t border-amber-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Planning a large event in Calgary?
          </h2>
          <p className="text-slate-600 font-light text-lg mb-8 max-w-xl mx-auto">
            Get in touch early to confirm availability and lock in your dates. We serve Calgary and all surrounding Alberta communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="tel:4034933128"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Call 403-493-3128
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
