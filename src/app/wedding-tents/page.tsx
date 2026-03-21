import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Heart, Star, Shield, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Tent Rentals Calgary | Above All Tent & Party Rentals",
  description:
    "Elegant wedding tent rentals in Calgary. High peak tents, clear roof tents, chandeliers, dance floors and full setup. Free quote for your wedding day.",
  keywords: "wedding tent rental Calgary, wedding tent Alberta, outdoor wedding tent Calgary",
};

const features = [
  { icon: <Heart className="w-5 h-5" />, title: "Elegant Designs", desc: "High peak and clear roof tents that photograph beautifully and impress guests." },
  { icon: <Shield className="w-5 h-5" />, title: "Weather Protected", desc: "Heavy-duty Canadian-grade fabric keeps your guests comfortable rain or shine." },
  { icon: <Star className="w-5 h-5" />, title: "Full Accessories", desc: "Chandeliers, dance floors, lighting, sidewalls — everything in one place." },
  { icon: <Clock className="w-5 h-5" />, title: "Stress-Free Setup", desc: "Our crew handles delivery, installation, and teardown so you can focus on your day." },
];

const included = [
  "Professional delivery & installation",
  "Certified heavy-duty tent structure",
  "Sidewall options (solid or windowed)",
  "Anchoring and staking",
  "Post-event dismantling & removal",
  "Expert sizing consultation",
];

const addons = [
  "Crystal chandeliers",
  "String & bistro lighting",
  "Hardwood dance floors",
  "Modular flooring",
  "Propane tent heaters",
  "Banquet & round tables",
  "Folding & chiavari chairs",
  "Linen packages",
];

export default function WeddingTentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/tent2.jpg" alt="Wedding tent rental Calgary" fill className="object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-900/70 to-transparent" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <Heart className="w-3 h-3 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">Wedding Rentals</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-tight max-w-3xl">
            Wedding Tent Rentals <span className="shimmer-text-once">Calgary.</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10">
            Create the outdoor wedding of your dreams. Elegant tents, full accessories, and professional setup — all handled by our experienced team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all hover:-translate-y-1 shadow-lg"
            >
              Get a Free Wedding Quote
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

      {/* Why Choose Us for Weddings */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden aspect-4/5 shadow-2xl img-zoom">
                <Image src="/images/tent4.jpg" alt="Elegant wedding tent setup" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4">
                    <p className="text-white font-bold">Clear Roof & High Peak Tents</p>
                    <p className="text-amber-300 text-sm">Perfect for weddings</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Why Above All</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Your wedding day deserves the best.
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-10">
                We understand how much your wedding day means. Our team brings 10+ years of experience to every setup, ensuring your tent is installed perfectly, on time, and exactly as you envisioned.
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
          </div>
        </div>
      </section>

      {/* What's Included + Add-ons */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Everything You Need</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Complete Wedding Packages.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">Every Rental Includes</h3>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white">
              <h3 className="text-xl font-extrabold mb-6 tracking-tight">Popular Add-ons</h3>
              <ul className="space-y-4">
                {addons.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tent Options for Weddings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Tent Styles</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Best Tents for Weddings.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { img: "/images/tent2.jpg", title: "High Peak Tents", desc: "Dramatic sweeping peaks create an elegant silhouette. Perfect for chandeliers and draping. The most popular choice for weddings." },
              { img: "/images/tent4.jpg", title: "Clear Roof Tents", desc: "Transparent panels let in natural light by day and showcase the stars at night. A luxury option for unforgettable evening receptions." },
            ].map((t) => (
              <div key={t.title} className="group relative rounded-3xl overflow-hidden aspect-4/3 img-zoom shadow-lg">
                <Image src={t.img} alt={t.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-extrabold text-white mb-2">{t.title}</h3>
                  <p className="text-slate-300 text-sm font-light">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tent-rentals" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-amber-600 hover:border-amber-600 transition-all">
              View All Tent Types
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50 border-t border-amber-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Let us make your wedding unforgettable.
          </h2>
          <p className="text-slate-600 font-light text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free, no-obligation wedding tent quote. We serve Calgary, Airdrie, Cochrane, Okotoks, and surrounding Alberta areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              Get a Free Wedding Quote
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
