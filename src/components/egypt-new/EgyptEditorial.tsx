import FadeInSection from "@/components/FadeInSection";

const EgyptEditorial = () => (
  <FadeInSection>
    <section className="py-20 md:py-32 bg-warm-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="label-caps block mb-6">We Live Here</span>
            <div className="font-heading text-[22px] md:text-[28px] text-midnight leading-[1.65] font-light space-y-6">
              <p>
                Most Egypt tours are designed in New York or London.
                Ours are designed in Cairo — because that's where we are.
              </p>
              <p>
                We know which temple is empty at 7am. We know the chef
                who cooks in a 200-year-old kitchen in Luxor. We know
                when the light hits Abu Simbel and it looks like a dream.
              </p>
              <p className="text-raw-sand italic">
                This is the Egypt we'll show you.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590059390098-4e0200c38d25?w=800&q=80"
                alt="Candid moment with locals in Cairo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="font-body text-[11px] text-text-muted mt-3 italic">
              Ahmed, our lead guide, with a family in Old Cairo
            </p>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptEditorial;
