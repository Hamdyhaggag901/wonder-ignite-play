import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EgyptFinalCTA = () => (
  <section className="relative py-24 md:py-36 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1600&q=80)",
      }}
    />
    <div className="absolute inset-0 bg-deep-sand/85" />
    <div className="relative z-10 section-container text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-[36px] md:text-[56px] text-warm-white font-light italic leading-tight mb-4">
          Your Egypt Story
          <br />
          Begins Here.
        </h2>
        <p className="font-body text-[15px] text-warm-white/50 font-light mb-10 max-w-md mx-auto">
          Let us design a private journey that reveals the Egypt most travelers never see.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-block bg-gold-accent text-deep-sand font-body uppercase text-[11px] tracking-[0.2em] font-medium px-10 py-4 transition-all duration-300 hover:bg-gold-accent/85"
          >
            Start Planning
          </Link>
          <a
            href="#"
            className="inline-block border border-warm-white/30 text-warm-white font-body uppercase text-[11px] tracking-[0.2em] font-light px-10 py-4 transition-all duration-300 hover:bg-warm-white/10"
          >
            Download Egypt Brochure
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EgyptFinalCTA;
