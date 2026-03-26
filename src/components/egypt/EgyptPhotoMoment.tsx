import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const images = [
  "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700",
  "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700",
  "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=700",
  "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=700",
  "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700",
];

const EgyptPhotoMoment = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });

  return (
    <FadeInSection>
      <section className="py-[100px] md:py-[100px] bg-white overflow-hidden">
        {/* Drag slider */}
        <div ref={constraintsRef} className="relative cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            style={{ x: springX }}
            className="flex gap-4 pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-20"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-[260px] md:w-[320px] aspect-[2/3] overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Egypt moment ${i + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Strip */}
        <div className="bg-charcoal mt-12">
          <div className="section-container py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <p className="font-heading text-[24px] md:text-[26px] text-white italic font-normal">
                Ready to plan your adventure?
              </p>
              <p className="font-body text-[14px] text-white/70 font-light">
                Our specialists are ready to design your perfect Egypt journey.
              </p>
              <div className="md:text-right">
                <Link to="/plan" className="btn-primary">
                  START PLANNING
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptPhotoMoment;
