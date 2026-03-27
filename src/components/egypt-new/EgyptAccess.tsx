import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1568322445389-f64b0f36bc84?w=900&q=80",
    title: "After-hours Valley of the Kings",
    desc: "We secured private access after tourist hours. Just you, your Egyptologist, and 3,000 years of history.",
  },
  {
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=900&q=80",
    title: "Breakfast with a view no one else has",
    desc: "A rooftop in Islamic Cairo, prepared by a family who's cooked this way for four generations.",
  },
  {
    image: "https://images.unsplash.com/photo-1625244695851-1ba4609e9800?w=900&q=80",
    title: "The Nile nobody photographs",
    desc: "A traditional felucca, no other boats in sight, the kind of silence that changes you.",
  },
];

const EgyptAccess = () => (
  <FadeInSection>
    <section className="py-20 md:py-32 bg-midnight">
      <div className="section-container">
        <span className="font-body uppercase text-[11px] tracking-[0.2em] text-raw-sand/60 block mb-4">
          The Mateego Difference
        </span>
        <h2 className="font-heading text-[32px] md:text-[48px] text-warm-white font-light leading-tight mb-16">
          Moments you can't book
          <br />
          anywhere else
        </h2>

        <div className="space-y-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group overflow-hidden h-[300px] md:h-[380px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, hsl(0 0% 5% / 0.8) 0%, hsl(0 0% 5% / 0.3) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-8 md:p-12">
                <div className="max-w-lg">
                  <h3 className="font-heading text-[24px] md:text-[32px] text-warm-white font-light leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-[14px] text-warm-white/60 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/experiences" className="gold-text-link text-raw-sand hover:text-raw-sand/70">
            See All Exclusive Experiences →
          </Link>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptAccess;
