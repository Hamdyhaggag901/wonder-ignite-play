import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";
import EgyptHighlights from "@/components/egypt/EgyptHighlights";
import EgyptPhotoMoment from "@/components/egypt/EgyptPhotoMoment";
import EgyptWhereToStay from "@/components/egypt/EgyptWhereToStay";
import EgyptTripInspiration from "@/components/egypt/EgyptTripInspiration";
import EgyptWhereToGo from "@/components/egypt/EgyptWhereToGo";
import EgyptWhenToVisit from "@/components/egypt/EgyptWhenToVisit";
import EgyptTravelGuides from "@/components/egypt/EgyptTravelGuides";
import EgyptTestimonial from "@/components/egypt/EgyptTestimonial";

const tabs = [
  { label: "HIGHLIGHTS", id: "highlights" },
  { label: "WHERE TO STAY", id: "where-to-stay" },
  { label: "TRIP INSPIRATION", id: "trip-inspiration" },
  { label: "WHERE TO GO", id: "where-to-go" },
  { label: "WHEN TO VISIT", id: "when-to-visit" },
  { label: "TRAVEL GUIDES", id: "travel-guides" },
];

const EgyptDestination = () => {
  const [activeTab, setActiveTab] = useState("highlights");
  const [isSticky, setIsSticky] = useState(false);
  const subNavRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((t) => document.getElementById(t.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1800)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
          }}
        />
        <div className="relative h-full flex items-end">
          <div className="section-container pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="label-caps block mb-3">DESTINATION</span>
              <h1 className="font-heading text-[64px] md:text-[88px] text-white font-light leading-[1.0]">
                Egypt
              </h1>
              <p className="font-body text-[17px] text-white/80 mt-4 max-w-lg font-light">
                Ancient wonders, vibrant culture, and landscapes that defy imagination.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentinel for sticky detection */}
      <div ref={sentinelRef} className="h-0" />

      {/* Sticky Sub-Nav */}
      <div
        ref={subNavRef}
        className={`bg-off-white border-b border-border z-40 transition-shadow duration-300 ${
          isSticky ? "sticky top-[72px] shadow-sm" : ""
        }`}
      >
        <div className="section-container">
          <div className="flex items-center gap-6 md:gap-8 overflow-x-auto py-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`font-body uppercase text-[11px] tracking-[0.15em] font-normal whitespace-nowrap pb-2 border-b-2 transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "border-gold text-gold"
                    : "border-transparent text-text-muted hover:text-text-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <EgyptHighlights />
      <EgyptPhotoMoment />
      <EgyptWhereToStay />
      <EgyptTripInspiration />
      <EgyptWhereToGo />
      <EgyptWhenToVisit />
      <EgyptTravelGuides />
      <EgyptTestimonial />
    </div>
  );
};

export default EgyptDestination;
