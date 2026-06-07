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
      {/* Latest Work - small showcase of client's recent images */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-extrabold">Latest Work</h3>
            <a href="/gallery" className="text-amber-600 font-bold hover:text-amber-700">View Gallery →</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <img src="/all_above/1.jpeg" alt="Above All client work 1" className="w-full h-40 object-cover rounded-lg" />
            <img src="/all_above/2.jpeg" alt="Above All client work 2" className="w-full h-40 object-cover rounded-lg" />
            <img src="/all_above/3.jpeg" alt="Above All client work 3" className="w-full h-40 object-cover rounded-lg" />
            <img src="/all_above/4.jpeg" alt="Above All client work 4" className="w-full h-40 object-cover rounded-lg" />
            <img src="/all_above/5.jpeg" alt="Above All client work 5" className="w-full h-40 object-cover rounded-lg" />
          </div>
        </div>
      </section>
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
