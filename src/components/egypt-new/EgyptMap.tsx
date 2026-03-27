import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const locations = [
  { name: "Cairo", x: 62, y: 28, desc: "The city that never sleeps — and never stops surprising.", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80" },
  { name: "Luxor", x: 58, y: 52, desc: "The world's greatest open-air museum, best seen at dawn.", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&q=80" },
  { name: "Aswan", x: 55, y: 65, desc: "Where the Nile narrows and the pace slows to something magical.", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80" },
  { name: "Abu Simbel", x: 50, y: 78, desc: "Ramses' masterpiece — best experienced in total solitude.", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=400&q=80" },
  { name: "Alexandria", x: 55, y: 20, desc: "The Mediterranean side of Egypt most travelers miss.", image: "https://images.unsplash.com/photo-1568322445389-f64b0f36bc84?w=400&q=80" },
  { name: "Siwa Oasis", x: 30, y: 28, desc: "Salt lakes, date palms, and the oracle that Alexander visited.", image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=400&q=80" },
  { name: "Red Sea", x: 75, y: 42, desc: "World-class diving and coral reefs just hours from Cairo.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80" },
  { name: "White Desert", x: 42, y: 38, desc: "Surreal chalk formations under a blanket of stars.", image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=400&q=80" },
];

const EgyptMap = () => {
  const [active, setActive] = useState(0);

  return (
    <FadeInSection>
      <section id="map" className="py-20 md:py-32 bg-white scroll-mt-16">
        <div className="section-container">
          <span className="label-caps block mb-4">Where We'll Take You</span>
          <h2 className="font-heading text-[34px] md:text-[52px] text-deep-sand font-light italic leading-tight mb-14">
            Places We Love in Egypt
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative bg-warm-cream aspect-[3/4] overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-gold-accent/20 to-transparent" />
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-8 opacity-[0.08]">
                <path d="M55 5 L75 15 L80 25 L78 30 L82 35 L80 45 L75 55 L65 65 L55 80 L50 95 L45 80 L40 65 L30 45 L25 35 L30 25 L35 18 L45 10 Z" fill="currentColor" className="text-deep-sand"/>
              </svg>
              {locations.map((loc, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="absolute group"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <span className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                    active === i ? "bg-gold-accent scale-150 shadow-lg" : "bg-deep-sand/40 group-hover:bg-gold-accent"
                  }`} />
                  <span className={`absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] transition-colors ${
                    active === i ? "text-gold-accent" : "text-deep-sand/40"
                  }`}>
                    {loc.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-0">
              {locations.map((loc, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-4 py-4 border-b border-deep-sand/5 transition-all ${
                    active === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="w-14 h-14 shrink-0 overflow-hidden">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-[20px] text-deep-sand font-light italic">{loc.name}</h4>
                    <p className="font-body text-[12px] text-charcoal-dark/50 font-light">{loc.desc}</p>
                  </div>
                  <span className="font-body text-[10px] uppercase tracking-[0.15em] text-gold-accent shrink-0">
                    Discover →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptMap;
