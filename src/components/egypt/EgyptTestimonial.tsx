import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const EgyptTestimonial = () => (
  <FadeInSection>
    <section className="py-[60px] md:py-[100px] bg-off-white">
      <div className="section-container">
        {/* Quote */}
        <div className="text-center mb-16">
          <span className="font-heading text-[120px] md:text-[140px] text-gold leading-none block -mb-8">
            &ldquo;
          </span>
          <blockquote className="font-heading text-[22px] md:text-[28px] italic text-text-dark leading-[1.5] max-w-[700px] mx-auto font-normal">
            This was the most extraordinary trip of our lives. Mateego's team
            felt like trusted friends, not tour operators.
          </blockquote>
          <p className="font-body text-[12px] uppercase tracking-[0.15em] text-text-muted mt-6">
            ROSIE & KITA — NEW YORK, NY
          </p>
          <div className="flex justify-center gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-gold text-[16px]">★</span>
            ))}
          </div>
        </div>

        {/* Split CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="h-[360px] md:h-[420px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=700"
              alt="Egypt temples"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-champagne flex items-center p-8 md:p-16">
            <div>
              <h3 className="font-heading text-[32px] md:text-[38px] text-text-dark leading-[1.15] font-normal mb-4">
                Your trip,
                <br />
                your story
              </h3>
              <p className="font-body text-[15px] text-text-muted leading-[1.9] font-light mb-8">
                Every journey we design is as unique as the traveler who takes
                it. Tell us your dreams, and we'll make them real.
              </p>
              <Link to="/plan" className="btn-primary">
                SPEAK TO AN EXPERT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptTestimonial;
