import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const EgyptCTABanner = () => (
  <FadeInSection>
    <section className="py-16 md:py-20 bg-warm-cream">
      <div className="section-container">
        <div className="border-l-4 border-gold-accent/40 pl-8 md:pl-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="label-caps block mb-2">Egypt Travel Experts</span>
            <h3 className="font-heading text-[26px] md:text-[34px] text-deep-sand font-light italic leading-tight mb-2">
              Connect with our Egypt Travel Experts
            </h3>
            <p className="font-body text-[14px] text-charcoal-dark/50 font-light max-w-md">
              Begin planning your private Egyptian journey — call us or schedule a consultation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="tel:+1234567890" className="font-body text-[14px] text-deep-sand font-medium hover:text-gold-accent transition-colors">
              +1 (234) 567-890
            </a>
            <Link
              to="/contact"
              className="inline-block bg-gold-accent text-deep-sand font-body uppercase text-[11px] tracking-[0.2em] font-medium px-8 py-4 transition-all duration-300 hover:bg-gold-accent/85"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptCTABanner;
