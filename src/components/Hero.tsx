import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-slate-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transform origin-center animate-out"
        style={{
          backgroundImage: "url('/images/tent3.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950/90 z-10" />

      <div className="container relative z-20 mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold text-white tracking-widest uppercase">
              Premier Tent Rentals in Calgary & Alberta
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.05]">
            Elevate Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">
              Outdoor Events.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 font-light mb-12 max-w-2xl leading-relaxed">
            Heavy-duty tents, professional installation, and bespoke event rentals for weddings, festivals, and unforgettable backyard parties.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-slate-900 bg-white hover:bg-amber-50 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <a
              href="tel:7786882174"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-white border border-white/30 hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Call 778-688-2174
            </a>
          </div>

          {/* Trust Signals */}
          <div className="mt-16 flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10+</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Years Experience</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Fully Insured</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Pro</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Setup Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}