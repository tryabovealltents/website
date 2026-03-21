import Accessories from "@/components/Accessories";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import TentTypes from "@/components/TentTypes";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Hero />
      <Services />
      <TentTypes />
      <Testimonials />
      <Accessories />
      <Process />
      <FAQ />
      <CTA />
      
      {/* SEO Bottom Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Tent Rentals in Calgary &amp; Alberta
            </h2>
            <p className="text-slate-600 font-light leading-relaxed mb-4 text-lg">
              If you&apos;re searching for tent rentals in Calgary, Above All Tent and Party Rentals provides reliable, heavy-duty tents for weddings, corporate events, festivals, and backyard parties across Calgary and nearby Alberta areas.
            </p>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              We deliver across Calgary, Airdrie, Chestermere, Cochrane, Okotoks, and surrounding communities — offering high-quality tents with professional installation and removal. Our team helps you choose the right tent size, accessories, and setup for your event.
            </p>
            <a href="/about" className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors text-sm uppercase tracking-widest border-b-2 border-amber-300 hover:border-amber-500 pb-0.5">
              Meet the Team Behind Above All →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
