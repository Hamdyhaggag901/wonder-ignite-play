import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const EgyptExpert = () => (
  <FadeInSection>
    <section id="expert" className="py-20 md:py-32 bg-warm-cream scroll-mt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Portrait */}
          <div className="overflow-hidden aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80"
              alt="Ahmed — Mateego Egypt specialist"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Bio */}
          <div>
            <span className="label-caps block mb-4">Your Guide to Egypt</span>
            <h3 className="font-heading text-[32px] md:text-[42px] text-deep-sand font-light italic leading-tight mb-2">
              Ahmed El-Masry
            </h3>
            <p className="font-body text-[13px] uppercase tracking-[0.12em] text-gold-accent mb-8">
              Egypt Travel Specialist · Based in Cairo
            </p>

            <blockquote className="font-heading text-[24px] md:text-[30px] text-deep-sand/80 italic font-light leading-snug mb-8 border-l-2 border-gold-accent/30 pl-6">
              "There is no place on earth that humbles and inspires quite like Egypt. After fifteen years, it still surprises me."
            </blockquote>

            <p className="font-body text-[14px] text-charcoal-dark/60 font-light leading-[1.9] mb-4">
              Ahmed has spent 15 years guiding travelers through Egypt — not the Egypt of tourist buses and chain hotels, but the Egypt of hidden courtyards, family-run kitchens, and temples at dawn. He holds a degree in Egyptology from Cairo University and has personally walked every route we offer.
            </p>
            <p className="font-body text-[14px] text-charcoal-dark/60 font-light leading-[1.9] mb-8">
              When he's not designing journeys, you'll find him exploring the back streets of Islamic Cairo or sailing a felucca past Elephantine Island.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-gold-accent text-deep-sand font-body uppercase text-[11px] tracking-[0.2em] font-medium px-10 py-4 transition-all duration-300 hover:bg-gold-accent/85"
            >
              Plan Your Egypt Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptExpert;
