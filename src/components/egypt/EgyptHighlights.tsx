import FadeInSection from "@/components/FadeInSection";

const tiles = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 2L4 28h24L16 2z" /><line x1="16" y1="2" x2="16" y2="28" />
      </svg>
    ),
    title: "Ancient Egyptian History",
    subtitle: "From the Pyramids to hidden tombs",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="16" cy="16" r="10" /><path d="M12 14c0 0 2 4 4 4s4-4 4-4" /><circle cx="13" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Delicious Cuisine",
    subtitle: "Koshari, Ful, Ta'ameya & more",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 28C8 20 12 14 16 10c4 4 8 10 12 18" /><circle cx="24" cy="8" r="4" />
      </svg>
    ),
    title: "Sahara Desert",
    subtitle: "Rolling sands and desert oases",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=600",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 20c4-2 6-6 10-6s6 4 10 6" /><path d="M10 24l2-8 4 4 4-4 2 8" />
      </svg>
    ),
    title: "The River Nile",
    subtitle: "Sail on a traditional felucca",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 28V12l6-8 6 8v16" /><rect x="13" y="18" width="6" height="10" />
      </svg>
    ),
    title: "Unrivalled Museums",
    subtitle: "Some of the world's finest collections",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600",
  },
];

const bulletPoints = [
  "Private access to temples before public hours",
  "Egyptologist guides with academic credentials",
  "Boutique luxury accommodations hand-selected",
  "Seamless logistics with 24/7 local support",
  "Fully customizable itineraries for every traveler",
];

const EgyptHighlights = () => (
  <section id="highlights">
    {/* 5 tiles */}
    <div className="bg-black">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className="relative h-[280px] group overflow-hidden cursor-pointer"
          >
            <img
              src={tile.image}
              alt={tile.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
              <div className="text-gold mb-3">{tile.icon}</div>
              <h3 className="font-heading text-[18px] md:text-[20px] text-white mb-1">
                {tile.title}
              </h3>
              <p className="font-body text-[12px] text-text-muted">{tile.subtitle}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>
    </div>

    {/* Editorial block */}
    <FadeInSection>
      <div className="bg-champagne py-[80px] md:py-[100px]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="font-heading text-[36px] md:text-[44px] text-text-dark leading-[1.15] font-normal">
                Rich in ancient history.
                <br />
                Alive with modern wonder.
              </h2>
            </div>
            <div>
              <p className="font-body text-[15px] text-text-muted leading-[1.9] mb-8 font-light">
                Egypt is not just a destination — it's a living, breathing story
                that spans five thousand years. From the silent majesty of the
                Great Pyramids to the vibrant chaos of Cairo's markets, every
                corner holds a revelation.
              </p>
              <ul className="space-y-3">
                {bulletPoints.map((bp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold mt-2 shrink-0" />
                    <span className="font-body text-[14px] text-text-dark font-light">
                      {bp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default EgyptHighlights;
