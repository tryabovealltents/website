import Accessories from "@/components/Accessories";
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
      <Accessories />
      <Process />
      <FAQ />
      <CTA />
      
      {/* SEO Bottom Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-blue prose-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tent Rentals in Calgary</h2>
            <p className="mb-4">
              If you&apos;re searching for rent tents in Calgary, Above All Tent and Party Rentals provides reliable tents for weddings, corporate events, festivals, and backyard parties.
            </p>
            <p className="mb-4">
              We deliver across Calgary and nearby Alberta areas, offering high-quality tents with professional installation and removal.
            </p>
            <p>
              Our team helps customers choose the right tent size, accessories, and setup for their event.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
