import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const journeysData = {
  private: [
    {
      image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
      title: "The Depths of the Nile",
      duration: "10 Days",
      guests: "Fully Private",
      desc: "From Cairo's hidden quarters to Aswan's silent temples — a journey through the Egypt that lives between the guidebook pages.",
      cities: ["Cairo", "Luxor", "Aswan", "Abu Simbel"],
      price: "From $11,500 per person",
      slug: "depths-of-the-nile",
    },
    {
      image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
      title: "Cairo, Unfiltered",
      duration: "5 Days",
      guests: "Fully Private",
      desc: "The city behind the headlines. Rooftop breakfasts, midnight markets, and a Cairo no visitor is supposed to see.",
      cities: ["Cairo", "Giza", "Old Cairo"],
      price: "From $6,800 per person",
      slug: "cairo-unfiltered",
    },
    {
      image: "https://images.unsplash.com/photo-1568322445389-f64b0f36bc84?w=800&q=80",
      title: "Ancient South: Aswan to Abu Simbel",
      duration: "7 Days",
      guests: "Fully Private",
      desc: "The quieter, older Egypt. Nubian villages, desert stars, and temples that make you forget what century you're in.",
      cities: ["Aswan", "Abu Simbel", "Kom Ombo"],
      price: "From $9,200 per person",
      slug: "ancient-south",
    },
  ],
  group: [
    {
      image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
      title: "Egypt Unveiled",
      duration: "12 Days",
      guests: "Limited to 12 Guests",
      desc: "Our signature group journey — intimate enough to feel private, curated enough to feel extraordinary.",
      cities: ["Cairo", "Luxor", "Aswan", "Abu Simbel"],
      price: "From $7,900 per person",
      slug: "egypt-unveiled",
    },
    {
      image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=800&q=80",
      title: "The Nile by Dahabiya",
      duration: "8 Days",
      guests: "Limited to 8 Guests",
      desc: "A traditional sailing vessel, three days on the Nile, and the kind of silence that stays with you.",
      cities: ["Luxor", "Edfu", "Aswan"],
      price: "From $8,500 per person",
      slug: "nile-dahabiya",
    },
    {
      image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=800&q=80",
      title: "Desert & Temples",
      duration: "9 Days",
      guests: "Limited to 10 Guests",
      desc: "Where sand meets stone — from the White Desert's surreal landscapes to the temples of Upper Egypt.",
      cities: ["Cairo", "White Desert", "Luxor"],
      price: "From $8,200 per person",
      slug: "desert-temples",
    },
  ],
};

const EgyptJourneys = () => {
  const [tab, setTab] = useState<"private" | "group">("private");
  const journeys = journeysData[tab];

  return (
    <FadeInSection>
      <section id="journeys" className="py-20 md:py-32 bg-white scroll-mt-16">
        <div className="section-container">
          <span className="label-caps block mb-4">Private Journeys</span>
          <h2 className="font-heading text-[34px] md:text-[52px] text-deep-sand font-light italic leading-tight mb-4">
            Our Favorite Ways to Experience Egypt
          </h2>
          <p className="font-body text-[15px] text-charcoal-dark/50 font-light mb-10 max-w-lg">
            Every journey is a starting point. We rebuild it around you.
          </p>

          {/* Toggle */}
          <div className="flex gap-1 mb-12">
            {(["private", "group"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-body text-[11px] uppercase tracking-[0.15em] px-6 py-3 transition-all duration-300 ${
                  tab === t
                    ? "bg-deep-sand text-warm-cream"
                    : "bg-warm-cream text-deep-sand/60 hover:text-deep-sand"
                }`}
              >
                {t === "private" ? "Travel Privately" : "Small Group"}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {journeys.map((j, i) => (
              <motion.div
                key={`${tab}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-0 bg-warm-cream group"
              >
                <div className="md:col-span-2 overflow-hidden aspect-[4/3] md:aspect-auto">
                  <img
                    src={j.image}
                    alt={j.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gold-accent mb-3">
                    {j.duration} · {j.guests}
                  </p>
                  <h3 className="font-heading text-[28px] md:text-[36px] text-deep-sand font-light italic leading-tight mb-3">
                    {j.title}
                  </h3>
                  <p className="font-body text-[14px] text-charcoal-dark/60 font-light leading-relaxed mb-5 max-w-md">
                    {j.desc}
                  </p>
                  <div className="flex items-center gap-2 mb-5 flex-wrap">
                    {j.cities.map((city, ci) => (
                      <span key={ci} className="flex items-center gap-2 font-body text-[12px] text-deep-sand/50">
                        {ci > 0 && <span className="w-1 h-1 rounded-full bg-gold-accent" />}
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-[14px] font-medium text-deep-sand mb-5">{j.price}</p>
                  <Link
                    to={`/journeys/${j.slug}`}
                    className="font-body uppercase text-[11px] tracking-[0.15em] text-gold-accent hover:text-gold-accent/70 transition-colors self-start"
                  >
                    View Journey →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/journeys" className="btn-secondary">
              View All Egypt Journeys
            </Link>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptJourneys;
