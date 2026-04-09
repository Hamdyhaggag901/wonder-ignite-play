import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Compass, MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const destinations = [
  {
    city: "Alexandria",
    region: "NORTH",
    desc: "Mediterranean charm meets ancient Greco-Roman heritage.",
    coords: "31.2001° N, 29.9187° E",
    attractions: ["Bibliotheca Alexandrina", "Citadel of Qaitbay", "Montaza Palace", "Roman Amphitheatre"],
  },
  {
    city: "Cairo",
    region: "NORTH",
    desc: "The sprawling capital where pharaonic history meets vibrant city life.",
    coords: "30.0444° N, 31.2357° E",
    attractions: ["Great Pyramids of Giza", "Egyptian Museum", "Khan El Khalili", "Al-Azhar Mosque"],
  },
  {
    city: "Giza",
    region: "NORTH",
    desc: "Home to the last remaining wonder of the ancient world.",
    coords: "29.9792° N, 31.1342° E",
    attractions: ["Great Pyramid of Khufu", "The Sphinx", "Solar Boat Museum", "Sound & Light Show"],
  },
  {
    city: "Luxor",
    region: "CENTRAL",
    desc: "The world's greatest open-air museum on the banks of the Nile.",
    coords: "25.6872° N, 32.6396° E",
    attractions: ["Valley of the Kings", "Karnak Temple", "Hatshepsut Temple", "Luxor Temple"],
  },
  {
    city: "Aswan",
    region: "SOUTH",
    desc: "Gateway to Nubia with serene islands and monumental temples.",
    coords: "24.0889° N, 32.8998° E",
    attractions: ["Philae Temple", "Nubian Village", "Aswan High Dam", "Elephantine Island"],
  },
  {
    city: "Abu Simbel",
    region: "SOUTH",
    desc: "Ramesses II's colossal lakeside temples carved into rock.",
    coords: "22.3372° N, 31.6258° E",
    attractions: ["Great Temple of Ramesses II", "Temple of Nefertari", "Lake Nasser Cruise"],
  },
  {
    city: "Siwa Oasis",
    region: "WEST",
    desc: "Egypt's most remote and magical desert oasis.",
    coords: "29.2032° N, 25.5195° E",
    attractions: ["Oracle Temple of Amun", "Cleopatra's Spring", "Shali Fortress", "Great Sand Sea"],
  },
  {
    city: "White Desert",
    region: "WEST",
    desc: "Surreal chalk formations rising from golden sands under starlit skies.",
    coords: "28.0000° N, 28.5833° E",
    attractions: ["Chalk Rock Formations", "Crystal Mountain", "Desert Camping", "Black Desert"],
  },
  {
    city: "Red Sea",
    region: "EAST",
    desc: "World-class diving and pristine coral coastlines.",
    coords: "27.1827° N, 33.8313° E",
    attractions: ["Coral Reefs", "Ras Mohammed", "Hurghada Marina", "Desert Safari"],
  },
];

const DestinationTeaser = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <FadeInSection>
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5EDD8" }}>
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-14">
            <Compass size={28} strokeWidth={1.2} className="mx-auto mb-5 text-[#C9A96E]" />
            <h2 className="font-heading text-[32px] md:text-[44px] leading-[1.15] text-[#1a1208] mb-4">
              Journey Across Egypt's<br />Iconic Destinations
            </h2>
            <p className="font-body text-[14px] md:text-[15px] text-[#1a1208]/60 max-w-2xl mx-auto leading-relaxed font-light">
              Discover Egypt's treasures from the Mediterranean coast to the Nubian heartland,
              each destination offering unique luxury experiences.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center text-[#1a1208]/40 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center text-[#1a1208]/40 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {destinations.map((d, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={d.city}
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className={`flex-shrink-0 w-[280px] md:w-[300px] border cursor-pointer transition-all duration-400 flex flex-col ${
                    isActive
                      ? "bg-[#0A1628] border-[#C9A96E]/60"
                      : "bg-white/80 border-[#C9A96E]/30 hover:border-[#C9A96E]"
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Top bar */}
                  <div className="flex items-center justify-between px-5 pt-5 mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} strokeWidth={1.5} className={isActive ? "text-[#C9A96E]" : "text-[#C9A96E]/60"} />
                      <span className={`font-body text-[10px] uppercase tracking-[0.2em] ${
                        isActive ? "text-[#C9A96E]" : "text-[#1a1208]/40"
                      }`}>
                        {d.region}
                      </span>
                    </span>
                    <ArrowUpRight size={14} strokeWidth={1.5} className={isActive ? "text-white/60" : "text-[#1a1208]/25"} />
                  </div>

                  {/* City name */}
                  <div className="px-5 flex-1">
                    <h3 className={`font-heading text-[26px] md:text-[28px] leading-[1.15] mb-2 ${
                      isActive ? "text-white" : "text-[#1a1208]"
                    }`}>
                      {d.city}
                    </h3>
                    <p className={`font-body text-[13px] leading-relaxed font-light mb-3 ${
                      isActive ? "text-white/60" : "text-[#1a1208]/50"
                    }`}>
                      {d.desc}
                    </p>
                    <span className={`font-body text-[10px] tracking-[0.1em] block mb-4 ${
                      isActive ? "text-[#C9A96E]/60" : "text-[#1a1208]/25"
                    }`}>
                      {d.coords}
                    </span>

                    {/* Attractions (shown when active) */}
                    <div className={`overflow-hidden transition-all duration-400 ${
                      isActive ? "max-h-[200px] opacity-100 mb-5" : "max-h-0 opacity-0"
                    }`}>
                      <span className={`font-body text-[10px] uppercase tracking-[0.2em] block mb-3 ${
                        isActive ? "text-[#C9A96E]" : ""
                      }`}>
                        Key Attractions
                      </span>
                      <ul className="space-y-1.5">
                        {d.attractions.map((a) => (
                          <li key={a} className="font-body text-[12px] text-white/50 font-light flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#C9A96E]/50" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom link */}
                  <div className="px-5 pb-5">
                    <Link
                      to="/journeys"
                      onClick={(e) => e.stopPropagation()}
                      className={`font-body text-[11px] uppercase tracking-[0.15em] transition-colors ${
                        isActive ? "text-[#C9A96E] hover:text-white" : "text-[#C9A96E]/60 hover:text-[#C9A96E]"
                      }`}
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default DestinationTeaser;
