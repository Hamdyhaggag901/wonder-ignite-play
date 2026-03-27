import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const seasons = [
  {
    label: "October – November",
    title: "Our favorite months",
    desc: "The crowds haven't arrived yet, the light is extraordinary, and the desert nights are cool enough to sleep without AC. If we could only visit Egypt once a year, we'd choose October.",
    temp: "28–32°C / 82–90°F",
    tag: "Best Overall",
  },
  {
    label: "December – February",
    title: "Peak season, done right",
    desc: "Yes, it's busier. But we know how to avoid the crowds — early mornings, private access, routes nobody else takes. The weather is perfect for exploring all day.",
    temp: "18–24°C / 64–75°F",
    tag: "Most Popular",
  },
  {
    label: "March – April",
    title: "The shoulder sweet spot",
    desc: "Warm but not hot. Quiet but not empty. The Nile is particularly beautiful, and spring flowers transform the desert edges. A well-kept secret.",
    temp: "24–30°C / 75–86°F",
    tag: "Hidden Gem",
  },
];

const EgyptWhenToGo = () => (
  <FadeInSection>
    <section className="py-20 md:py-32 bg-warm-white">
      <div className="section-container">
        <span className="label-caps block mb-4">When to Go</span>
        <div className="max-w-2xl mb-16">
          <h2 className="font-heading text-[32px] md:text-[48px] text-midnight font-light leading-tight mb-6">
            Advice from someone
            <br />
            who actually lives here
          </h2>
          <p className="font-heading text-[18px] md:text-[22px] text-midnight/70 font-light italic leading-[1.7]">
            "October is our favorite month in Egypt. The crowds haven't arrived yet,
            the light is extraordinary, and the desert nights are cool enough to sleep
            without AC. Here's what we'd tell a close friend planning their trip…"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {seasons.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-papyrus p-8 relative"
            >
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-raw-sand bg-midnight/5 px-3 py-1 inline-block mb-4">
                {s.tag}
              </span>
              <p className="font-body text-[12px] uppercase tracking-[0.15em] text-text-muted mb-2">
                {s.label}
              </p>
              <h3 className="font-heading text-[22px] text-midnight font-light mb-3">
                {s.title}
              </h3>
              <p className="font-body text-[14px] text-text-muted font-light leading-relaxed mb-4">
                {s.desc}
              </p>
              <p className="font-body text-[12px] text-midnight/50 font-light">
                {s.temp}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptWhenToGo;
