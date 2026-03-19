import { Armchair, Lightbulb, Thermometer, BoxSelect } from "lucide-react";

export default function Accessories() {
  const accessories = [
    {
      category: "Furniture",
      items: "Round tables, banquet tables, and premium folding chairs.",
      icon: <Armchair className="w-8 h-8 stroke-1" />
    },
    {
      category: "Ambiance",
      items: "Elegant chandeliers, bistro lighting, and spots.",
      icon: <Lightbulb className="w-8 h-8 stroke-1" />
    },
    {
      category: "Climate",
      items: "Safe, effective heating solutions to keep events warm.",
      icon: <Thermometer className="w-8 h-8 stroke-1" />
    },
    {
      category: "Structure",
      items: "Solid and windowed sidewalls, professional modular dance floors.",
      icon: <BoxSelect className="w-8 h-8 stroke-1" />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-slate-800/50 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-amber-900/20 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3 block">
            Complete The Look
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Event Accessories.
          </h2>
          <p className="text-lg text-slate-400 font-light">
            Everything you need for an unforgettable celebration. Turn an empty tent into a fully furnished luxury venue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((acc, index) => (
            <div 
              key={index}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-700/50 flex items-center justify-center text-amber-400 mb-6">
                {acc.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{acc.category}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                {acc.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}