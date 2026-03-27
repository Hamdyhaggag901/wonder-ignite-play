import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const hotels = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    location: "Giza, Cairo",
    name: "Marriott Mena House",
    desc: "Wake up to the Pyramids from your private terrace — no postcard comes close.",
  },
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771eb?w=600&q=80",
    location: "Aswan",
    name: "Sofitel Legend Old Cataract",
    desc: "Where Agatha Christie wrote. Where the Nile bends. Where time slows.",
  },
  {
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    location: "Cairo",
    name: "Four Seasons at Nile Plaza",
    desc: "The city's finest address — our go-to for clients who want Cairo done right.",
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    location: "Nile River",
    name: "Oberoi Philae",
    desc: "A floating palace between Luxor and Aswan. Three days that change your perspective.",
  },
  {
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
    location: "Luxor",
    name: "Al Moudira",
    desc: "A secret garden in the desert. Hand-painted ceilings, absolute silence, total beauty.",
  },
  {
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    location: "Nile River",
    name: "Zein Nile Chateau",
    desc: "Just 10 cabins. No schedule. The most intimate way to see the Nile.",
  },
];

const EgyptHotels = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });

  return (
    <FadeInSection>
      <section id="stay" className="py-20 md:py-32 bg-white scroll-mt-16 overflow-hidden">
        <div className="section-container mb-10">
          <span className="label-caps block mb-4">Where You'll Stay</span>
          <h2 className="font-heading text-[34px] md:text-[52px] text-deep-sand font-light italic leading-tight mb-3">
            Egypt's Most Enchanting Stays
          </h2>
          <p className="font-body text-[15px] text-charcoal-dark/50 font-light max-w-lg">
            Every property is handpicked by our on-the-ground team. No commissions — only quality.
          </p>
        </div>

        <div ref={constraintsRef} className="relative cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            style={{ x: springX }}
            className="flex gap-5 pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-20"
          >
            {hotels.map((h, i) => (
              <div key={i} className="shrink-0 w-[280px] md:w-[320px] group">
                <div className="overflow-hidden aspect-[3/4] mb-4">
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                  />
                </div>
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gold-accent">
                  {h.location}
                </span>
                <h3 className="font-heading text-[22px] text-deep-sand font-light italic mt-1 mb-1">
                  {h.name}
                </h3>
                <p className="font-body text-[13px] text-charcoal-dark/50 font-light leading-relaxed mb-3">
                  {h.desc}
                </p>
                <span className="font-body text-[11px] uppercase tracking-[0.15em] text-gold-accent group-hover:text-gold-accent/70 transition-colors cursor-pointer">
                  Discover →
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptHotels;
