import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const journeys = [
  {
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    title: "The Depths of the Nile",
    duration: "10 Days · Fully Private",
    desc: "From Cairo's hidden quarters to Aswan's silent temples — a journey through the Egypt that lives between the guidebook pages.",
    cities: ["Cairo", "Luxor", "Aswan"],
    price: "From $4,200 per person",
    note: "Our most requested journey — and our personal favorite.",
    slug: "depths-of-the-nile",
  },
  {
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
    title: "Cairo, Unfiltered",
    duration: "5 Days · Fully Private",
    desc: "The city behind the headlines. Rooftop breakfasts, midnight markets, and a Cairo no visitor is supposed to see.",
    cities: ["Cairo", "Giza", "Old Cairo"],
    price: "From $2,800 per person",
    note: "Best for first-timers who want to go deep, not wide.",
    slug: "cairo-unfiltered",
  },
  {
    image: "https://images.unsplash.com/photo-1568322445389-f64b0f36bc84?w=800&q=80",
    title: "Ancient South: Aswan to Abu Simbel",
    duration: "7 Days · Fully Private",
    desc: "The quieter, older Egypt. Nubian villages, desert stars, and temples that make you forget what century you're in.",
    cities: ["Aswan", "Abu Simbel", "Kom Ombo"],
    price: "From $3,600 per person",
    note: "If you've already seen Cairo, start here.",
    slug: "ancient-south",
  },
];

const EgyptJourneys = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <FadeInSection>
      <section className="py-20 md:py-32 bg-papyrus">
        <div className="section-container">
          <span className="label-caps block mb-4">Private Journeys</span>
          <h2 className="font-heading text-[32px] md:text-[48px] text-midnight font-light leading-tight mb-3">
            No two are the same.
            <br />
            Yours won't be either.
          </h2>
          <p className="font-body text-[15px] text-text-muted font-light mb-16 max-w-lg">
            These are starting points. We rebuild every journey around the person taking it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeys.map((j, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-warm-white flex flex-col group relative"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={j.image}
                    alt={j.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="font-body text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
                    {j.duration}
                  </p>
                  <h3 className="font-heading text-[24px] md:text-[28px] text-midnight font-light leading-tight mb-3">
                    {j.title}
                  </h3>
                  <p className="font-body text-[14px] text-text-muted font-light leading-relaxed mb-4">
                    {j.desc}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {j.cities.map((city, ci) => (
                      <span key={ci} className="flex items-center gap-2 font-body text-[12px] text-midnight/60">
                        {ci > 0 && <span className="w-1 h-1 rounded-full bg-raw-sand" />}
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-[13px] font-medium text-midnight mb-4">{j.price}</p>
                  <Link
                    to={`/journeys/${j.slug}`}
                    className="mt-auto font-body uppercase text-[11px] tracking-[0.15em] text-raw-sand hover:text-raw-sand/70 transition-colors"
                  >
                    Customize This Journey →
                  </Link>
                </div>

                {/* Hover note */}
                {hoveredIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 right-4 bg-midnight/90 px-4 py-3 max-w-[200px]"
                  >
                    <p className="font-body text-[12px] text-warm-white/80 font-light italic leading-snug">
                      {j.note}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptJourneys;
