import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const experiences = [
  {
    location: "Cairo, Egypt",
    title: "Private Evening at the Grand Egyptian Museum",
    desc: "An after-hours tour of the world's newest antiquities collection.",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80",
  },
  {
    location: "Abu Simbel, Egypt",
    title: "Abu Simbel at Dawn",
    desc: "Watch the sun illuminate Ramses' face — with no one else around.",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80",
  },
  {
    location: "Luxor, Egypt",
    title: "Hot Air Balloon Over the Valley of the Kings",
    desc: "Drift above 3,000 years of royal tombs as the Nile catches the first light.",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=600&q=80",
  },
  {
    location: "Aswan, Egypt",
    title: "Felucca Sunset on the Nile",
    desc: "A traditional sailing vessel, a bottle of wine, and absolute silence.",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80",
  },
  {
    location: "Aswan, Egypt",
    title: "Nubian Village Visit",
    desc: "Cross to the west bank and be welcomed into a world most tourists never see.",
    image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=600&q=80",
  },
  {
    location: "Siwa, Egypt",
    title: "Siwa Oasis Expedition",
    desc: "The edge of Egypt. Salt lakes, ancient oracles, and starlit desert camps.",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80",
  },
];

const EgyptExperiences = () => (
  <FadeInSection>
    <section id="experiences" className="py-20 md:py-32 bg-warm-cream scroll-mt-16">
      <div className="section-container">
        <span className="label-caps block mb-4">Add-On Experiences</span>
        <h2 className="font-heading text-[34px] md:text-[52px] text-deep-sand font-light italic leading-tight mb-14">
          Moments That Define a Journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white overflow-hidden"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gold-accent">
                  {exp.location}
                </span>
                <h3 className="font-heading text-[22px] text-deep-sand font-light italic leading-tight mt-2 mb-2">
                  {exp.title}
                </h3>
                <p className="font-body text-[13px] text-charcoal-dark/50 font-light leading-relaxed mb-4">
                  {exp.desc}
                </p>
                <span className="font-body text-[11px] uppercase tracking-[0.15em] text-gold-accent group-hover:text-gold-accent/70 transition-colors cursor-pointer">
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptExperiences;
