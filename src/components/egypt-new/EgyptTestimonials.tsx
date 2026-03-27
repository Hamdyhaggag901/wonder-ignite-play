import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const testimonials = [
  {
    quote: "I've done A&K. I've done Abercrombie. Mateego is different. I don't know how to explain it — it felt like Egypt wanted us there.",
    name: "Margaret H.",
    detail: "New York · 10-Day Private Journey",
  },
  {
    quote: "Our guide knew the guards by name. We went places that aren't in any book. My husband said it was the best trip of his life — and he's been everywhere.",
    name: "David & Carol R.",
    detail: "San Francisco · Nile & Abu Simbel",
  },
  {
    quote: "The difference is that these people actually live in Egypt. You can feel it in every recommendation, every hidden spot, every meal they chose for us.",
    name: "James W.",
    detail: "Chicago · Cairo & Luxor",
  },
];

const EgyptTestimonials = () => {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <FadeInSection>
      <section className="py-20 md:py-32 bg-deep-sand text-warm-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="font-heading text-[80px] text-gold-accent/30 leading-none block mb-4">"</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-heading text-[22px] md:text-[30px] italic font-light leading-snug mb-8">
                {t.quote}
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-gold-accent text-sm">★</span>
                ))}
              </div>
              <p className="font-body text-[14px] font-medium text-warm-white/80">{t.name}</p>
              <p className="font-body text-[12px] text-warm-white/40 font-light">{t.detail}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === i ? "bg-gold-accent w-6" : "bg-warm-white/20 hover:bg-warm-white/40"
                }`}
              />
            ))}
          </div>
          <p className="font-body text-[12px] uppercase tracking-[0.15em] text-warm-white/30 mt-10">
            Trusted by 500+ American travelers since 2012
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptTestimonials;
