import FadeInSection from "@/components/FadeInSection";

const highlights = [
  "Private after-hours access to the Valley of the Kings",
  "Sunrise felucca on the Nile with no other boats",
  "Breakfast with a view of the Pyramids",
  "Hidden courtyards of Islamic Cairo with a local historian",
  "Stargazing in the White Desert under total silence",
];

const iconTiles = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M18 3L6 31h24L18 3z" /><line x1="18" y1="3" x2="18" y2="31" />
      </svg>
    ),
    label: "Ancient History",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 22c4-2 8-8 12-8s8 6 12 8" /><path d="M10 26l3-10 5 5 5-5 3 10" />
      </svg>
    ),
    label: "Nile Cruises",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M4 30C10 22 14 14 18 10c4 4 8 12 14 20" /><circle cx="28" cy="8" r="4" />
      </svg>
    ),
    label: "Desert Landscapes",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="18" cy="18" r="10" /><path d="M14 16c0 0 2 4 4 4s4-4 4-4" />
      </svg>
    ),
    label: "Egyptian Cuisine",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M10 30V14l8-10 8 10v16" /><rect x="14" y="20" width="8" height="10" />
      </svg>
    ),
    label: "World-Class Museums",
  },
];

const EgyptOverview = () => (
  <FadeInSection>
    <section id="overview" className="py-20 md:py-32 bg-warm-cream scroll-mt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-[36px] md:text-[52px] text-deep-sand leading-[1.1] font-light italic mb-8">
              Rich in ancient history,
              <br />
              alive with wonder.
            </h2>
            <div className="space-y-5 font-body text-[15px] text-charcoal-dark/70 font-light leading-[1.9]">
              <p>
                Egypt doesn't need embellishment. Five thousand years of civilization have left behind
                a landscape that shifts between the monumental and the intimate — from the soaring
                columns of Karnak to the whispered prayers in a Coptic chapel. What it does need is
                someone who knows how to show it to you properly.
              </p>
              <p>
                Our team has lived in Cairo for over a decade. We know which temple is empty at 7am.
                We know the chef who cooks in a 200-year-old kitchen in Luxor. We know when the light
                hits Abu Simbel and it looks like a dream. This isn't a destination we sell — it's a
                place we call home.
              </p>
              <p>
                Every journey we craft is private, personal, and built around you — your curiosity,
                your pace, your sense of adventure. No groups. No scripts. No compromises.
              </p>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-2">
            <span className="label-caps block mb-4">Egypt Highlights</span>
            <ul className="space-y-4">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-accent mt-2 shrink-0" />
                  <span className="font-body text-[14px] text-deep-sand font-light leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Icon row */}
        <div className="mt-20 pt-12 border-t border-gold-accent/15">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {iconTiles.map((tile, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="text-gold-accent">{tile.icon}</div>
                <span className="font-body text-[12px] uppercase tracking-[0.12em] text-deep-sand/60 font-normal">
                  {tile.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptOverview;
