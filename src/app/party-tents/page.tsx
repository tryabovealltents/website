import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, PartyPopper, Zap, DollarSign, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backyard Party Tent Rentals Calgary | Above All Tent & Party Rentals",
  description:
    "Affordable backyard party tent rentals in Calgary. Quick setup, all sizes available. Perfect for birthdays, BBQs, and family gatherings. Get a free quote.",
  keywords: "party tent rental Calgary, backyard tent rental Calgary, outdoor party tent Alberta",
};

const features = [
  { icon: <Zap className="w-5 h-5" />, title: "Quick Setup", desc: "Our crew arrives on time and has your tent ready well before guests arrive." },
  { icon: <DollarSign className="w-5 h-5" />, title: "Affordable Pricing", desc: "Competitive rates with no hidden fees. Free quotes so you know exactly what to expect." },
  { icon: <Users className="w-5 h-5" />, title: "Any Size Party", desc: "From intimate 25-person gatherings to 300+ guest celebrations — we have the right tent." },
  { icon: <PartyPopper className="w-5 h-5" />, title: "Full Accessories", desc: "Tables, chairs, lighting, and more to make your backyard party complete." },
];

const occasions = [
  "Birthday parties",
  "BBQs & cookouts",
  "Family reunions",
  "Graduation parties",
  "Baby & bridal showers",
  "Neighbourhood block parties",
  "Retirement celebrations",
  "Holiday gatherings",
];

export default function PartyTentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/tent5.jpg" alt="Backyard party tent rental Calgary" fill className="object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-900/70 to-transparent" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <PartyPopper className="w-3 h-3 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">Backyard Parties</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-tight max-w-3xl">
            Backyard Party Tent <span className="shimmer-text-once">Rentals.</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10">
            Turn your backyard into the perfect party venue. Affordable tents, fast setup, and everything you need for an unforgettable celebration.
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
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                The easiest way to host outdoors.
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-10">
                Hosting a backyard party in Calgary means dealing with unpredictable weather. Our heavy-duty tents keep your guests comfortable and your event on track — no matter what the sky decides to do.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">{f.title}</p>
                      <p className="text-slate-600 text-sm font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-2xl img-zoom">
                <Image src="/all_above/4.jpeg" alt="Backyard party tent setup" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions + Frame Tent Highlight */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Perfect For</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">
                Any backyard occasion.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {occasions.map((o) => (
                  <div key={o} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{o}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 block">Most Popular for Backyards</span>
              <h3 className="text-2xl font-extrabold mb-4">Frame Tents</h3>
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 img-zoom">
                <Image src="/all_above/3.jpeg" alt="Frame tent for backyard party" fill className="object-cover" />
              </div>
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                Frame tents are the go-to choice for backyard parties. No center poles means maximum open space, and they work on any surface — grass, concrete, or decking.
              </p>
              <ul className="space-y-3 mb-8">
                {["No center poles — open floor plan", "Works on grass, concrete, or decking", "Available in 20×20 up to 30×60", "Sidewalls available for privacy"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50 border-t border-amber-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Ready to throw the perfect backyard party?
          </h2>
          <p className="text-slate-600 font-light text-lg mb-8 max-w-xl mx-auto">
            Get a free quote today. We serve Calgary, Airdrie, Chestermere, Cochrane, Okotoks, and surrounding areas.
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
