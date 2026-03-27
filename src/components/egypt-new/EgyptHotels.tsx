import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const hotels = [
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771eb?w=600&q=80",
    name: "Al Moudira",
    location: "Luxor",
    note: "Our team's favorite corner table is on the third floor.",
  },
  {
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    name: "Sofitel Legend Old Cataract",
    location: "Aswan",
    note: "Ask for the Agatha Christie suite. You'll understand why.",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    name: "The St. Regis Cairo",
    location: "Cairo",
    note: "The Nile view from Room 714 is worth the entire trip.",
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    name: "Adrère Amellal",
    location: "Siwa Oasis",
    note: "No electricity, no WiFi — and that's exactly the point.",
  },
];

const EgyptHotels = () => (
  <FadeInSection>
    <section className="py-20 md:py-32 bg-papyrus">
      <div className="section-container">
        <span className="label-caps block mb-4">Hand-Selected Stays</span>
        <h2 className="font-heading text-[32px] md:text-[48px] text-midnight font-light leading-tight mb-3">
          We only recommend hotels
          <br />
          we've slept in ourselves
        </h2>
        <p className="font-body text-[15px] text-text-muted font-light mb-16 max-w-lg">
          No commissions influence our choices. Only quality does.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-warm-white group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-text-muted mb-1">
                  {h.location}
                </p>
                <h3 className="font-heading text-[20px] text-midnight font-light mb-3">
                  {h.name}
                </h3>
                <p className="font-body text-[13px] text-text-muted font-light italic leading-snug">
                  "{h.note}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptHotels;
