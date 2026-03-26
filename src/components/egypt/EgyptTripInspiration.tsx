import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const journeys = [
  {
    num: "01",
    title: "Egypt's Ancient Wonders",
    days: "8 DAYS",
    price: "From $9,087 pp",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600",
  },
  {
    num: "02",
    title: "Classic Egypt",
    days: "11 DAYS",
    price: "From $12,972 pp",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600",
  },
  {
    num: "03",
    title: "Luxury Grand Tour",
    days: "13 DAYS",
    price: "From $29,889 pp",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600",
  },
  {
    num: "04",
    title: "Nile & Desert Explorer",
    days: "10 DAYS",
    price: "From $11,500 pp",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=600",
  },
  {
    num: "05",
    title: "Siwa & White Desert",
    days: "9 DAYS",
    price: "From $8,400 pp",
    image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=600",
  },
];

const EgyptTripInspiration = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });

  return (
    <FadeInSection>
      <section id="trip-inspiration" className="py-[60px] md:py-[100px] bg-black">
        <div className="section-container mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="md:text-right md:order-2">
              <span className="label-caps block mb-3">TRIP INSPIRATION</span>
              <h2 className="font-heading text-[40px] md:text-[52px] text-white leading-[1.1] font-normal">
                Journeys Crafted
                <br />
                for You
              </h2>
            </div>
            <Link to="/journeys" className="gold-text-link md:order-1">
              VIEW ALL JOURNEYS →
            </Link>
          </div>
        </div>

        {/* Scrollable cards */}
        <div ref={constraintsRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            style={{ x: springX }}
            className="flex gap-5 pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-20"
          >
            {journeys.map((j) => (
              <div
                key={j.num}
                className="shrink-0 w-[300px] md:w-[340px] group"
              >
                <div className="h-[260px] overflow-hidden">
                  <img
                    src={j.image}
                    alt={j.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="bg-charcoal p-6 h-[240px] flex flex-col justify-between">
                  <div>
                    <span className="font-heading text-[13px] text-gold">{j.num}</span>
                    <h3 className="font-heading text-[24px] md:text-[26px] text-white mt-1 leading-[1.2]">
                      {j.title}
                    </h3>
                    <span className="font-body text-[11px] uppercase tracking-[0.15em] text-gold block mt-2">
                      {j.days}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-[13px] text-white/80 mb-2">{j.price}</p>
                    <Link to="/journeys" className="gold-text-link text-[11px]">
                      VIEW JOURNEY →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptTripInspiration;
