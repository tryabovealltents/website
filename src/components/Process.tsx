export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Request Quote",
      description: "Contact us with your date and guest count for a transparent estimate.",
    },
    {
      step: "02",
      title: "Confirm Details",
      description: "We help select the ideal tent size and curate needed accessories.",
    },
    {
      step: "03",
      title: "Delivery & Setup",
      description: "Our discrete, professional crew installs everything prior to your event.",
    },
    {
      step: "04",
      title: "Clean Teardown",
      description: "We efficiently dismantle and remove equipment, leaving no trace behind.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Seamless Execution.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-slate-200" />
          
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-400 mb-8 relative z-10 transition-colors group-hover:border-amber-200 group-hover:text-amber-600">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 font-light text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}