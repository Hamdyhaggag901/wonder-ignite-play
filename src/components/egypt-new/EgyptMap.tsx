import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const pins = [
  { name: "Cairo", x: 62, y: 22, image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80", desc: "The beating heart — chaotic, beautiful, endlessly surprising." },
  { name: "Luxor", x: 56, y: 48, image: "https://images.unsplash.com/photo-1568322445389-f64b0f36bc84?w=400&q=80", desc: "The world's greatest open-air museum, minus the crowds." },
  { name: "Aswan", x: 55, y: 62, image: "https://images.unsplash.com/photo-1625244695851-1ba4609e9800?w=400&q=80", desc: "Where the Nile is quietest and the sunsets are loudest." },
  { name: "Abu Simbel", x: 50, y: 72, image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=400&q=80", desc: "Ramesses II's masterpiece, best seen at dawn." },
  { name: "Alexandria", x: 52, y: 14, image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80", desc: "Mediterranean Egypt — a different flavor entirely." },
  { name: "Siwa Oasis", x: 28, y: 22, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80", desc: "The edge of the Sahara. Silence you've never experienced." },
  { name: "Red Sea", x: 72, y: 40, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80", desc: "Some of the world's best diving, without the crowds." },
  { name: "White Desert", x: 42, y: 35, image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&q=80", desc: "Chalk formations under a blanket of stars." },
];

const EgyptMap = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <FadeInSection>
      <section className="py-20 md:py-32 bg-midnight">
        <div className="section-container">
          <span className="font-body uppercase text-[11px] tracking-[0.2em] text-raw-sand/60 block mb-4 text-center">
            Where We'll Take You
          </span>
          <h2 className="font-heading text-[32px] md:text-[48px] text-warm-white font-light leading-tight mb-16 text-center">
            Your Egypt
          </h2>

          <div className="relative max-w-3xl mx-auto aspect-[3/4]">
            {/* Stylized map background */}
            <div className="absolute inset-0 rounded-sm border border-raw-sand/10 bg-midnight/50">
              {/* Egypt outline suggestion via subtle shape */}
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                <path
                  d="M45,5 L75,5 L80,15 L78,20 L72,22 L68,18 L65,22 L70,30 L72,35 L75,45 L70,55 L65,60 L60,70 L55,80 L45,85 L40,80 L35,70 L30,55 L25,40 L20,30 L25,20 L30,12 L38,8 Z"
                  fill="none"
                  stroke="hsl(37 42% 60%)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Pins */}
            {pins.map((pin, i) => (
              <div
                key={i}
                className="absolute z-10 cursor-pointer"
                style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -50%)" }}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-raw-sand transition-transform duration-300 hover:scale-150" />
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-[11px] text-warm-white/50 whitespace-nowrap">
                    {pin.name}
                  </span>
                </div>
              </div>
            ))}

            {/* Active card */}
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute z-20 bg-warm-white w-[260px] shadow-xl"
                  style={{
                    left: `${Math.min(70, Math.max(30, pins[active].x))}%`,
                    top: `${Math.min(60, pins[active].y + 8)}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <img
                    src={pins[active].image}
                    alt={pins[active].name}
                    className="w-full h-[120px] object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-heading text-[18px] text-midnight font-light mb-1">
                      {pins[active].name}
                    </h4>
                    <p className="font-body text-[13px] text-text-muted font-light leading-snug mb-3">
                      {pins[active].desc}
                    </p>
                    <Link
                      to="/experiences"
                      className="font-body uppercase text-[10px] tracking-[0.15em] text-raw-sand hover:text-raw-sand/70 transition-colors"
                    >
                      Explore →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptMap;
