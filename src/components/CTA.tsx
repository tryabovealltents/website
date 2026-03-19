import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-amber-50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/50 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200/50 rounded-full blur-[80px]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-amber-100/50">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Ready to plan your event?
          </h2>
          <p className="text-lg text-slate-600 font-light mb-10 max-w-xl mx-auto">
            Contact our team today to discuss your vision, confirm availability, and secure your tent rental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-slate-900 text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
            >
              Request a Quote
            </Link>
            <span className="text-slate-400 font-medium">or</span>
            <a
              href="tel:7786882174"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-white text-slate-900 text-sm font-bold tracking-widest uppercase rounded-full border-2 border-slate-900 hover:bg-slate-50 transition-all"
            >
              Call 778.688.2174
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}