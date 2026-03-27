import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const articles = [
  { title: "Best Places to Visit in Egypt", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80" },
  { title: "Egypt vs Jordan: Where Should I Go?", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80" },
  { title: "How to Plan a Private Nile Cruise", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80" },
  { title: "Egypt with Kids: A Family Guide", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80" },
];

const EgyptJournal = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });

  return (
    <FadeInSection>
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="section-container mb-10">
          <span className="label-caps block mb-4">From Our Journal</span>
          <h2 className="font-heading text-[34px] md:text-[52px] text-deep-sand font-light italic leading-tight">
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
              <div key={i} className="shrink-0 w-[300px] md:w-[380px] group cursor-pointer">
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-deep-sand/0 group-hover:bg-deep-sand/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="font-body text-[11px] uppercase tracking-[0.15em] text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read More →
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-[20px] text-deep-sand font-light italic mt-4">
                  {a.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptJournal;
