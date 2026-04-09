import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const images = [
  "https://iluxuryegypt.com/api/assets/uploads/1b441ddc-202b-4c9c-82a7-20cadb19fbf3.jpeg",
  "https://iluxuryegypt.com/api/assets/uploads/1bfd6d3f-6529-4454-a29a-d790e638b745.jpg",
  "https://iluxuryegypt.com/api/assets/uploads/8994e48c-b7ec-4fed-846f-e2fe7a4bd8ed.webp",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([false, false, false]);

  // Preload images
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.onload = () =>
        setLoaded((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      img.src = src;
    });
  }, []);

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-end">
      {/* Slideshow layers */}
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${src})`,
            opacity: current === i ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            animation: current === i ? "kenBurns 12s ease-in-out infinite alternate" : "none",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container pb-24 w-full">
        <div className="max-w-2xl">
          <span className="label-caps mb-4 block">Egypt · Private Journeys</span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[88px] text-white leading-[1.0] font-light mb-6">
            Egypt.<br />Rediscovered.
          </h1>
          <p className="font-body text-[17px] text-white/85 font-light max-w-md mb-10">
            Private journeys for curious minds and discerning travelers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/journeys" className="btn-primary">Explore Journeys</Link>
            <Link to="/plan" className="btn-outline-white">Speak to an Expert</Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mt-16 text-white/50 font-body text-[11px] uppercase tracking-[0.15em]">
          <span>500+ American Travelers</span>
          <span>Est. 2012</span>
          <span>4.9★ Rated</span>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-8 h-[2px] transition-all duration-500"
            style={{
              backgroundColor: current === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="font-body text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} strokeWidth={1} />
      </div>

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
