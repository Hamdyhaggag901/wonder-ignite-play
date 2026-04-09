import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const journeys = [
  {
    name: "The Nile Unveiled",
    type: "10 Days · Nile Cruise",
    desc: "A curated river voyage through ancient Egypt's most treasured sites.",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700",
    link: "/journeys/nile-in-depth",
  },
  {
    name: "Temples & Desert",
    type: "12 Days · Private",
    desc: "From the Great Pyramids to the vast silence of the Western Desert.",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700",
    link: "/journeys",
  },
  {
    name: "Egypt Uncovered VIP",
    type: "14 Days · VIP Private",
    desc: "The ultimate private exploration with exclusive behind-the-scenes access.",
    image: "https://images.unsplash.com/photo-1562600430-c4c0a48e7fbb?w=700",
    link: "/journeys",
  },
  {
    name: "Egypt & the Desert",
    type: "12 Days · Private",
    desc: "White Desert, Siwa Oasis and the best of ancient Egypt.",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=700",
    link: "/journeys",
  },
  {
    name: "Dawn Over Luxor",
    type: "8 Days · Small Group",
    desc: "Private balloon flights and exclusive temple access at sunrise.",
    image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=700",
    link: "/journeys",
  },
];

const JourneySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 440;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <FadeInSection>
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5EDD8" }}>
        <div className="section-container">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="label-caps block mb-3">Signature Journeys</span>
              <h2 className="font-heading text-[36px] md:text-[48px] text-deep-sand leading-[1.1]">
                Journeys Designed<br />Around You
              </h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 border border-deep-sand/20 text-deep-sand/50 flex items-center justify-center hover:border-gold-accent hover:text-gold-accent transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 border border-deep-sand/20 text-deep-sand/50 flex items-center justify-center hover:border-gold-accent hover:text-gold-accent transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide px-6 md:px-8 pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {journeys.map((j, i) => (
            <Link
              key={i}
              to={j.link}
              className="group flex-shrink-0 w-[340px] md:w-[400px] h-[540px] relative overflow-hidden"
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                src={j.image}
                alt={j.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Default state: no overlay, no text */}
              {/* Hover state: overlay + content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="absolute inset-0 flex flex-col justify-end p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-y-3 group-hover:translate-y-0">
                <h3 className="font-heading text-[28px] md:text-[32px] text-white leading-[1.15] mb-2">
                  {j.name}
                </h3>
                <span className="font-body uppercase text-[10px] tracking-[0.2em] text-gold-accent font-medium block mb-3">
                  {j.type}
                </span>
                <p className="font-body text-[14px] text-white/75 font-light leading-relaxed mb-4">
                  {j.desc}
                </p>
                <span className="font-body text-[12px] uppercase tracking-[0.15em] text-gold-accent hover:text-white transition-colors">
                  View Journey →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default JourneySlider;
