import { Navigation, ShieldCheck, Hammer, Sparkles } from "lucide-react";

export default function Services() {
  const features = [
    {
      icon: <Navigation className="w-6 h-6 stroke-[1.5]" />,
      title: "Reliable Delivery",
      description: "On-time, precise delivery across Calgary and the surrounding Alberta area."
    },
    {
      icon: <Hammer className="w-6 h-6 stroke-[1.5]" />,
      title: "Professional Setup",
      description: "Our experienced crew secures every detail so you can focus on the event."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />,
      title: "Fully Insured",
      description: "Safety meets peace of mind with our commercial-grade equipment and liability coverage."
    },
    {
      icon: <Sparkles className="w-6 h-6 stroke-[1.5]" />,
      title: "Custom Planning",
      description: "Personalized advice to ensure the right tent, size, and layout for your guest count."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          <div className="md:w-1/3 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">
              The Above All Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Flawless <br /> Execution.
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              From backyard celebrations to grand corporate events and festivals, our full-service approach ensures zero stress on your big day.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feat, idx) => (
              <div key={idx} className="group flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}