import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const testimonials = [
  {
    text: "I've done A&K. I've done Abercrombie. Mateego is different. I don't know how to explain it — it felt like Egypt wanted us there.",
    author: "Margaret H.",
    location: "New York",
  },
  {
    text: "Our guide knew the guards by name. We went places that aren't in any book.",
    author: "David & Carol R.",
    location: "San Francisco",
  },
  {
    text: "We've traveled to 40+ countries. Egypt with Mateego was the first time a trip made us cry — from beauty, not frustration.",
    author: "James T.",
    location: "Chicago",
  },
];

const EgyptTestimonials = () => (
  <FadeInSection>
    <section className="py-20 md:py-32 bg-warm-white">
      <div className="section-container max-w-4xl mx-auto">
        <span className="label-caps block mb-4 text-center">Living Proof</span>
        <h2 className="font-heading text-[32px] md:text-[44px] text-midnight font-light leading-tight mb-16 text-center">
          Don't take our word for it.
        </h2>

        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-papyrus p-8 md:p-10 ${
                i % 2 === 0 ? "md:ml-0 md:mr-16" : "md:ml-16 md:mr-0"
              }`}
              style={{
                borderLeft: i % 2 === 0 ? "3px solid hsl(37 42% 60%)" : "none",
                borderRight: i % 2 !== 0 ? "3px solid hsl(37 42% 60%)" : "none",
              }}
            >
              <p className="font-heading text-[18px] md:text-[22px] text-midnight font-light leading-[1.7] italic mb-6">
                "{t.text}"
              </p>
              <p className="font-body text-[12px] uppercase tracking-[0.15em] text-text-muted">
                — {t.author}, {t.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptTestimonials;
