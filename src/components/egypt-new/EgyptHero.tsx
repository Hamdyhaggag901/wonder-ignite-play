import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EgyptHero = () => (
  <section className="relative h-screen overflow-hidden flex items-end">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://iluxuryegypt.com/api/assets/uploads/1bfd6d3f-6529-4454-a29a-d790e638b745.jpg)",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, hsl(37 52% 7% / 0.92) 0%, hsl(37 52% 7% / 0.5) 40%, hsl(37 52% 7% / 0.2) 100%)",
      }}
    />

    {/* Breadcrumb */}
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="absolute top-8 left-6 md:left-10 z-10 font-body uppercase text-[10px] tracking-[0.25em] text-gold-accent font-normal"
    >
      Egypt · Private Journeys
    </motion.span>

    <div className="relative z-10 section-container pb-20 md:pb-28 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="max-w-4xl"
      >
        <h1 className="font-heading text-[48px] md:text-[80px] lg:text-[104px] text-warm-white leading-[1.0] font-light italic">
          Where Eternity
          <br />
          Feels Close.
        </h1>
        <p className="font-body text-[15px] md:text-[17px] text-warm-white/60 font-light mt-6 max-w-lg leading-relaxed">
          Private journeys crafted for curious minds and discerning travelers.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#journeys"
            className="inline-block bg-gold-accent text-deep-sand font-body uppercase text-[11px] tracking-[0.2em] font-medium px-10 py-4 transition-all duration-300 hover:bg-gold-accent/85"
          >
            Explore Journeys
          </a>
          <a
            href="#expert"
            className="btn-outline-white"
          >
            Speak to an Expert
          </a>
        </div>
      </motion.div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 flex flex-wrap gap-6 md:gap-10 items-center"
      >
        {["500+ American Travelers", "Est. 2012", "4.9★ Rated"].map((t, i) => (
          <span key={i} className="font-body text-[11px] uppercase tracking-[0.15em] text-warm-white/40 font-light">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default EgyptHero;
