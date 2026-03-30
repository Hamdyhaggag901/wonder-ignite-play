import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const articles = [
  {
    title: "The Perfect Egypt Honeymoon Route",
    category: "Honeymoons",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80",
  },
  {
    title: "Why Aswan Is Egypt's Best Kept Secret",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1596639959477-0f5e40a8d90a?w=600&q=80",
  },
  {
    title: "How to See the Pyramids Without the Crowds",
    category: "Insider Tips",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80",
  },
  {
    title: "Sleeping Under Stars in the White Desert",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
  },
];

const ExperiencesJournal = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });

  return (
    <FadeInSection>
      <section className="py-20 md:py-28 bg-off-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 mb-10">
          <span className="font-body text-[11px] uppercase tracking-[0.2em] text-gold font-normal block mb-3">
            From Our Journal
          </span>
          <h2 className="font-heading text-[32px] md:text-[44px] text-foreground font-semibold leading-tight">
            Egypt Travel Guides
          </h2>
        </div>

        <div ref={constraintsRef} className="relative cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            style={{ x: springX }}
            className="flex gap-5 pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-20"
          >
            {articles.map((a, i) => (
              <div key={i} className="shrink-0 w-[300px] md:w-[340px] group cursor-pointer">
                <div className="overflow-hidden aspect-[16/10] relative">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                  />
                </div>
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gold mt-4 block font-semibold">
                  {a.category}
                </span>
                <h3 className="font-heading text-[20px] md:text-[22px] text-foreground font-semibold mt-2 leading-tight">
                  {a.title}
                </h3>
                <span className="font-body text-[12px] text-gold mt-2 block hover:text-gold-light transition-colors">
                  Read More →
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ExperiencesJournal;
