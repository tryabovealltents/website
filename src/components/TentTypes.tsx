import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function TentTypes() {
  const tents = [
    {
      title: "Frame Tents",
      description: "Ideal for tight spaces and patios. No center poles, providing maximum open interior space.",
      image: "/images/tent1.jpg",
      className: "md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]",
    },
    {
      title: "High Peak Tents",
      description: "Elegant sweeping curves perfect for high-end weddings and premium corporate events.",
      image: "/images/tent2.jpg",
      className: "col-span-1 h-[300px] md:h-auto",
    },
    {
      title: "Clear Roof Tents",
      description: "A luxury option for evening events wanting to showcase the night sky.",
      image: "/images/tent4.jpg",
      className: "col-span-1 h-[300px] md:h-auto",
    },
    {
      title: "Pole Tents",
      description: "Classic tension event tents for large gatherings with a traditional peak.",
      image: "/images/tent6.jpg",
      className: "md:col-span-2 h-[300px]",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Premium Event Tents.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group flex items-center text-sm font-bold tracking-widest uppercase text-slate-900 pb-1 border-b-2 border-slate-900 transition-all hover:text-amber-600 hover:border-amber-600"
          >
            Request Custom Sizing
            <ArrowUpRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-2">
          {tents.map((tent, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${tent.className}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                style={{ backgroundImage: `url('${tent.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {tent.title}
                </h3>
                <p className="text-slate-300 font-light text-sm max-w-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {tent.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}