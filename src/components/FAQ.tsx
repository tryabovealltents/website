"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What areas in Alberta do you service?",
      answer: "We proudly serve Calgary, Airdrie, Chestermere, Cochrane, Okotoks, and the surrounding Alberta area, extending our premium service directly to your location.",
    },
    {
      question: "Is delivery and setup included?",
      answer: "Absolutely. We provide a full-service experience. Every rental covers professional delivery, secure installation by our experienced crew, and complete dismantling post-event.",
    },
    {
      question: "How do I choose the correct tent size?",
      answer: "Your ideal tent size depends on your guest count, seating arrangement, and any additional areas for dance floors, catering, or stages. Our team provides complimentary expert consultation to ensure the perfect fit.",
    },
    {
      question: "Are the tents weather-resistant?",
      answer: "Yes, our inventory consists strictly of commercial-grade, heavy-duty event tents engineered to withstand standard Canadian weather conditions, offering robust shelter from rain and direct sun.",
    },
    {
      question: "Do you supply additional accessories?",
      answer: "Yes, we are a comprehensive event provider. We offer premium tables, folding chairs, modular flooring, dance floors, ambient lighting, chandeliers, sidewalls, and climate control options.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">
              Information
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Frequently Asked.
            </h2>
            <p className="text-slate-600 font-light text-lg">
              Find answers to common questions regarding our rentals, policies, and process.
            </p>
          </div>
          
          <div className="md:w-2/3 border-t border-slate-200">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200">
                <button
                  className="w-full py-8 flex justify-between items-center text-left group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xl font-bold text-slate-900 pr-8 group-hover:text-amber-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-slate-400 group-hover:text-amber-600 transition-colors">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-6 h-6 stroke-[1.5]" />
                    )}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-125 pb-8 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-600 font-light leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}