import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EgyptHero = () => (
  <section className="relative h-screen overflow-hidden flex items-end">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1800&q=80)",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, hsl(0 0% 5% / 0.85) 0%, hsl(0 0% 5% / 0.4) 50%, hsl(0 0% 5% / 0.25) 100%)",
      }}
    />

    {/* Top-left label */}
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="absolute top-8 left-6 md:left-8 z-10 font-body uppercase text-[10px] tracking-[0.25em] text-warm-white/50 font-light"
    >
      Egypt · Private Journeys · For the Curious
    </motion.span>

    <div className="relative z-10 section-container pb-20 md:pb-28 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="max-w-3xl"
      >
        <h1 className="font-heading text-[44px] md:text-[72px] lg:text-[96px] text-warm-white leading-[1.0] font-light">
          The Egypt they
          <br />
          don't show tourists.
        </h1>
        <p className="font-body text-[15px] md:text-[17px] text-warm-white/60 font-light mt-6 max-w-md leading-relaxed">
          We've lived here for 12 years. We'll show you what we know.
        </p>
        <Link
          to="/plan"
          className="inline-block mt-10 bg-raw-sand text-midnight font-body uppercase text-[11px] tracking-[0.2em] font-normal px-10 py-4 transition-all duration-300 hover:bg-raw-sand/80"
        >
          Start Your Private Journey
        </Link>
      </motion.div>
    </div>
  </section>
);

export default EgyptHero;
