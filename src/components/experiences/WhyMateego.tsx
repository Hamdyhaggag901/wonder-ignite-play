import FadeInSection from "@/components/FadeInSection";

const pillars = [
  {
    num: "01",
    heading: "Private. Always.",
    body: "Every journey is yours alone — no groups, no compromises. Just you, your guide, and the wonders of Egypt.",
  },
  {
    num: "02",
    heading: "Expert. Local.",
    body: "Our Egyptologists live and breathe Egypt's history every day. Their knowledge transforms sightseeing into storytelling.",
  },
  {
    num: "03",
    heading: "Effortless. Guaranteed.",
    body: "From your first inquiry to your last sunset — we handle everything. You simply arrive and experience.",
  },
];

const WhyMateego = () => (
  <FadeInSection>
    <section className="py-20 md:py-28 bg-champagne">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-body text-[11px] uppercase tracking-[0.2em] text-gold font-normal block mb-3">
            Why Mateego
          </span>
          <h2 className="font-heading text-[32px] md:text-[44px] text-foreground font-semibold leading-tight">
            The Difference Is in the Details
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {pillars.map((p) => (
            <div key={p.num} className="text-center md:text-left">
              <span className="font-heading text-[64px] md:text-[72px] text-sand leading-none block mb-4">
                {p.num}
              </span>
              <h3 className="font-heading text-[24px] md:text-[28px] text-foreground font-semibold mb-3">
                {p.heading}
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.85]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default WhyMateego;
