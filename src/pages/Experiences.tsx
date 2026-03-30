import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { key: "who", label: "WHO" },
  { key: "what", label: "WHAT" },
  { key: "remarkable", label: "REMARKABLE EXPERIENCES" },
  { key: "collaborations", label: "COLLABORATIONS" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

interface Card {
  title: string;
  subtitle?: string;
  image?: string;
  bg?: string;
  textColor?: string;
  badge?: string;
  isViewAll?: boolean;
}

const cardData: Record<CategoryKey, Card[]> = {
  who: [
    { title: "HONEYMOON COUPLES", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80" },
    { title: "FAMILY VACATIONS", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80" },
    { title: "MULTI-GENERATIONAL TRIPS", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80" },
    { title: "GROUP & CELEBRATIONS", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80" },
    { title: "SOLO TRAVELLERS", image: "https://images.unsplash.com/photo-1608217829647-e2359d5de2ab?w=600&q=80" },
    { title: "ANNIVERSARY TRIPS", image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=600&q=80" },
    { title: "TRAVEL WITH TEENS", image: "https://images.unsplash.com/photo-1569949380651-5140e1096b4a?w=600&q=80" },
    { title: "GROWN UP FAMILY", image: "https://images.unsplash.com/photo-1596639959477-0f5e40a8d90a?w=600&q=80" },
    { title: "VIEW ALL →", isViewAll: true },
  ],
  what: [
    { title: "HISTORY & ARCHAEOLOGY", image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600&q=80" },
    { title: "LUXURY & WELLNESS", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80" },
    { title: "DESERT & ADVENTURE", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80" },
    { title: "FOOD & CULTURE", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=80" },
    { title: "NILE JOURNEYS", image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?w=600&q=80" },
    { title: "PHOTOGRAPHY EXPEDITIONS", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80" },
  ],
  remarkable: [
    { title: "BEFORE THE WORLD WAKES", subtitle: "Private Sunrise — Pyramids of Giza", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80" },
    { title: "SLEEP UNDER ETERNITY", subtitle: "Luxury Camp — White Desert", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80" },
    { title: "DINE ON THE NILE", subtitle: "Private Candlelit Felucca Dinner", image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?w=600&q=80" },
    { title: "THE HIDDEN EGYPT", subtitle: "Places No Tourist Has Ever Visited", image: "https://images.unsplash.com/photo-1596639959477-0f5e40a8d90a?w=600&q=80" },
    { title: "MEET THE MAKERS", subtitle: "Cairo's Living Heritage & Artisans", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=80" },
  ],
  collaborations: [
    { title: "NATIONAL GEOGRAPHIC JOURNEYS", bg: "#1B2B4B", badge: "COMING SOON" },
    { title: "PHOTOGRAPHY EXPEDITIONS", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80" },
    { title: "ACADEMIC TOURS WITH EGYPTOLOGISTS", image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600&q=80" },
  ],
};

const ExperienceCard = ({ card }: { card: Card }) => {
  if (card.isViewAll) {
    return (
      <Link
        to="/journeys"
        className="relative aspect-[3/4] flex items-end p-6 cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
        style={{ backgroundColor: "#1C1C1C" }}
      >
        <span
          className="font-body text-sm font-semibold uppercase"
          style={{ color: "#C5A46D", letterSpacing: "4px" }}
        >
          {card.title}
        </span>
      </Link>
    );
  }

  if (card.bg && !card.image) {
    return (
      <div
        className="relative aspect-[3/4] flex flex-col items-start justify-end p-6 transition-transform duration-300 hover:scale-[1.03]"
        style={{ backgroundColor: card.bg }}
      >
        {card.badge && (
          <span
            className="absolute top-4 left-4 font-body text-[10px] font-semibold uppercase px-3 py-1"
            style={{ color: "#C5A46D", letterSpacing: "3px", border: "1px solid #C5A46D" }}
          >
            {card.badge}
          </span>
        )}
        <h3
          className="font-body text-sm font-bold uppercase text-white leading-tight"
          style={{ letterSpacing: "4px" }}
        >
          {card.title}
        </h3>
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/4] overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78), transparent 60%)" }}
      />
      <div className="absolute bottom-0 left-0 p-5 md:p-6">
        <h3
          className="font-body text-[13px] md:text-sm font-bold uppercase text-white leading-tight"
          style={{ letterSpacing: "4px" }}
        >
          {card.title}
        </h3>
        {card.subtitle && (
          <p className="font-body text-xs text-white/70 italic mt-2">
            {card.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

const Experiences = () => {
  const [active, setActive] = useState<CategoryKey>("who");

  return (
    <div style={{ backgroundColor: "#F9F6F1" }}>
      {/* Hero Bar */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-6" style={{ backgroundColor: "#F0E2D0" }}>
        <div className="max-w-[1280px] mx-auto">
          <h1
            className="font-heading text-[32px] md:text-[48px] font-normal leading-tight"
            style={{ color: "#1C1C1C" }}
          >
            Every Journey, Crafted for You
          </h1>
          <p
            className="font-body text-base md:text-lg mt-3"
            style={{ color: "#9E7B49", lineHeight: 1.8 }}
          >
            Discover Egypt through the experience that speaks to you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
          {/* Sidebar — desktop: sticky vertical, mobile: horizontal tabs */}
          <nav className="md:w-[200px] shrink-0 md:sticky md:top-28 md:self-start">
            {/* Mobile: horizontal scroll */}
            <div className="flex md:hidden gap-0 overflow-x-auto border-b" style={{ borderColor: "#C5A46D" }}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className="font-body text-xs uppercase whitespace-nowrap px-4 py-3 transition-colors duration-200"
                  style={{
                    letterSpacing: "3px",
                    fontWeight: active === cat.key ? 700 : 400,
                    color: active === cat.key ? "#9E7B49" : "#1C1C1C",
                    borderBottom: active === cat.key ? "2px solid #9E7B49" : "2px solid transparent",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden md:flex flex-col">
              {categories.map((cat, i) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className="text-left font-body text-[13px] uppercase py-4 transition-colors duration-200"
                  style={{
                    letterSpacing: "3px",
                    fontWeight: active === cat.key ? 700 : 400,
                    color: active === cat.key ? "#9E7B49" : "#1C1C1C",
                    borderBottom: i < categories.length - 1 ? "1px solid #C5A46D" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (active !== cat.key) (e.target as HTMLElement).style.color = "#C5A46D";
                  }}
                  onMouseLeave={(e) => {
                    if (active !== cat.key) (e.target as HTMLElement).style.color = "#1C1C1C";
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Card grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
              >
                {cardData[active].map((card, i) => (
                  <ExperienceCard key={`${active}-${i}`} card={card} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer CTA Bar */}
      <section className="py-12 md:py-16 px-6" style={{ backgroundColor: "#9E7B49" }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-white text-base md:text-lg text-center md:text-left" style={{ lineHeight: 1.8 }}>
            Ready to design your perfect Egypt journey?
          </p>
          <Link
            to="/contact"
            className="font-body text-[11px] uppercase text-white px-10 py-4 transition-all duration-300 hover:bg-white/10"
            style={{ letterSpacing: "4px", fontWeight: 600, border: "1px solid white" }}
          >
            BEGIN YOUR JOURNEY
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
