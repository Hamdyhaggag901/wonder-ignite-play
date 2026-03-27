import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700&q=80", alt: "Karnak Temple columns" },
  { src: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700&q=80", alt: "Pyramid at sunrise" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80", alt: "Red Sea coral reef" },
  { src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=700&q=80", alt: "Egyptian bread market" },
  { src: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700&q=80", alt: "Nile felucca at dusk" },
];

const EgyptPhotoGallery = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div ref={constraintsRef} className="relative cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          style={{ x: springX }}
          className="flex gap-4 pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-20"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`shrink-0 overflow-hidden ${
                i % 2 === 0 ? "w-[280px] md:w-[360px] aspect-[3/4]" : "w-[320px] md:w-[420px] aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EgyptPhotoGallery;
