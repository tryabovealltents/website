"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Quote, Star, Target, Eye, Heart, Award, Users, Wrench, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const founders = [
  {
    name: "Prabhjit Singh",
    title: "Co-Founder & Operations Lead",
    photo: "/images/WhatsApp Image 2026-03-18 at 5.55.29 AM (1).jpeg",
    tagline: "The man who gets it done.",
    bio: [
      "Prabhjit brings over a decade of real, hands-on experience in the outdoor services industry. He's not someone who learned from a textbook — he learned by doing. From managing large-scale outdoor setups to coordinating complex event logistics in unpredictable Canadian weather, Prabhjit has seen it all.",
      "His background spans tent installation, equipment management, and on-site event coordination across Calgary and surrounding Alberta communities. He knows what it takes to deliver a flawless setup — and more importantly, he knows how to solve problems fast when things don't go to plan.",
      "Starting this business wasn't just a career move for Prabhjit. It was a chance to build something of his own — something that reflects his values of hard work, reliability, and genuine care for every client.",
    ],
    highlights: [
      "10+ years in outdoor services",
      "Expert in tent installation & logistics",
      "Hands-on event coordination",
      "Problem-solver under pressure",
    ],
  },
  {
    name: "Gurnam Kaur",
    title: "Co-Founder & Client Experience",
    photo: "/images/WhatsApp Image 2026-03-18 at 5.55.29 AM (2).jpeg",
    tagline: "The heart behind every event.",
    bio: [
      "Gurnam is the reason clients feel taken care of from the very first call. With years of experience in customer service and community event coordination, she has a natural gift for understanding what people need — and making sure they get it.",
      "She has supported outdoor and community events of all sizes, always bringing warmth, precision, and a genuine desire to help. Gurnam understands that behind every event is a person with a vision, and she takes that seriously.",
      "For Gurnam, Above All isn't just a business — it's a way to serve her community and build something meaningful alongside her partner. She's committed to making every client feel like their event is the most important one we've ever done.",
    ],
    highlights: [
      "Years in customer service & coordination",
      "Community event experience",
      "Client-first communication",
      "Detail-oriented planning",
    ],
  },
];

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion First",
    desc: "We started this because we love what we do. That passion shows in every setup, every call, every event.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Get It Done",
    desc: "No excuses. We show up, we set up, and we deliver — every single time, no matter what.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Roots",
    desc: "We're local. We serve our neighbours, and we take pride in being part of the Calgary community.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experience Backed",
    desc: "New business, but not new to the industry. 10+ years of real-world experience backs every decision we make.",
  },
];

export default function AboutPage() {
  const [activeFounder, setActiveFounder] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/tent3.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900/90 to-slate-800/80" />
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
            Built by Two People<br />
            <span className="shimmer-text-once">Who Care.</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Above All is not a corporation. It is a business built from passion, experience, and a genuine desire to serve our community.
          </p>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-amber-500 py-5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-900">
            <div className="flex items-center gap-3">
              <Wrench className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">10+ Years Industry Experience</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-slate-900/30" />
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">Passionate Entrepreneurs</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-slate-900/30" />
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">Community-First Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Meet the Founders</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                The People Behind the Tents.
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 rounded-full p-1.5 gap-1">
              {founders.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFounder(i)}
                  className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeFounder === i
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {f.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {founders.map((founder, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${activeFounder === idx ? "block" : "hidden"}`}
            >
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                <div className={`relative ${idx === 1 ? "md:order-2" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-4/5 shadow-2xl img-zoom">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="glass rounded-2xl p-4">
                        <p className="text-white font-bold text-lg">{founder.name}</p>
                        <p className="text-amber-300 text-sm">{founder.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 rounded-2xl px-4 py-3 shadow-xl font-bold text-sm">
                    Co-Founder
                  </div>
                </div>

                <div className={idx === 1 ? "md:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full mb-4">
                    <Quote className="w-3 h-3 text-amber-600" />
                    <span className="text-amber-700 text-xs font-bold tracking-wide">{founder.tagline}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    {founder.name}
                  </h3>
                  <div className="space-y-4 mb-8">
                    {founder.bio.map((para, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed font-light">{para}</p>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {founder.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        <span className="text-sm font-semibold text-slate-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">Our Journey</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                  Why We Started Above All.
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover-lift">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                    <Quote className="w-6 h-6" />
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed italic mb-4">
                    "We have spent years working in this industry for other people. We know the work, we know the clients, and we know how to deliver. Starting Above All was about doing it our way — with more care, more commitment, and more pride in the work."
                  </p>
                  <p className="text-amber-600 font-bold">— Prabhjit Singh</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover-lift">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 mb-6">
                    <Quote className="w-6 h-6" />
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed italic mb-4">
                    "Every event matters to someone. A wedding, a birthday, a community gathering — these are moments people remember forever. I want every client to feel like we treated their event as if it were our own."
                  </p>
                  <p className="text-slate-700 font-bold">— Gurnam Kaur</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-white text-center">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-200 mb-6">
                  We are a new business — but we are not new to this. Between us, we bring over{" "}
                  <span className="text-amber-400 font-bold">10 years of real industry experience</span>{" "}
                  to every single job. We started Above All because we believe Calgary deserves a tent rental company that actually cares.
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-amber-400">10+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Years Experience</div>
                  </div>
                  <div className="w-px bg-white/10 hidden md:block" />
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-amber-400">2</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Passionate Founders</div>
                  </div>
                  <div className="w-px bg-white/10 hidden md:block" />
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-amber-400">100%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Commitment</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">What Drives Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Vision &amp; Mission.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <ScrollReveal delay={100}>
              <div className="relative bg-amber-500 rounded-3xl p-10 text-slate-900 overflow-hidden hover-lift">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/40 rounded-full -mr-10 -mt-10" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900/10 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 tracking-tight">Our Vision</h3>
                  <p className="text-slate-800 leading-relaxed text-lg font-light">
                    To become Calgary's most trusted tent and event rental partner — known not just for our equipment, but for our personal touch, our reliability, and our genuine investment in every client's success.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-slate-900 rounded-3xl p-10 text-white overflow-hidden hover-lift">
                <div className="absolute top-0 right-0 w-40 h-40 bg-slate-800/60 rounded-full -mr-10 -mt-10" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 tracking-tight">Our Mission</h3>
                  <p className="text-slate-300 leading-relaxed text-lg font-light">
                    To provide high-quality tents and exceptional service that makes every event memorable and stress-free. We go above and beyond — not because we have to, but because that is who we are.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-slate-50 rounded-2xl p-6 hover:bg-amber-50 hover:border-amber-200 border border-transparent transition-all duration-300 hover-lift">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-amber-600 shadow-sm mb-4">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{v.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50 border-t border-amber-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Ready to work with us?
            </h2>
            <p className="text-slate-600 font-light text-lg mb-8 max-w-xl mx-auto">
              Let us make your next event something to remember. Get in touch and we will take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="tel:4034933128"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                Call 403-493-3128
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
