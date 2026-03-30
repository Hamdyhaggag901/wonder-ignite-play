import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";
import ExperienceDetail from "@/components/experiences/ExperienceDetail";
import WhyMateego from "@/components/experiences/WhyMateego";
import ExperiencesJournal from "@/components/experiences/ExperiencesJournal";
import ExperiencesTestimonial from "@/components/experiences/ExperiencesTestimonial";

/* ── data ─────────────────────────────────────── */

const categories = [
  { key: "who", label: "WHO" },
  { key: "what", label: "WHAT" },
  { key: "remarkable", label: "REMARKABLE EXPERIENCES" },
  { key: "collaborations", label: "COLLABORATIONS" },
] as const;

type CatKey = (typeof categories)[number]["key"];

interface Card {
  title: string;
  subtitle: string;
  image?: string;
  bg?: string;
  badge?: string;
  isViewAll?: boolean;
}

const cards: Record<CatKey, Card[]> = {
  who: [
    { title: "Honeymoon Couples", subtitle: "Romance on the Nile", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=85" },
    { title: "Family Vacations", subtitle: "Egypt Through Young Eyes", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=85" },
    { title: "Multi-Generational", subtitle: "A Story for Every Age", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=85" },
    { title: "Groups & Celebrations", subtitle: "Celebrate Somewhere Extraordinary", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85" },
    { title: "Solo Travellers", subtitle: "Egypt, On Your Terms", image: "https://images.unsplash.com/photo-1608217829647-e2359d5de2ab?w=800&q=85" },
    { title: "Anniversary Trips", subtitle: "Milestones Worth Celebrating", image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=800&q=85" },
    { title: "Travel With Teens", subtitle: "Adventure They'll Remember", image: "https://images.unsplash.com/photo-1569949380651-5140e1096b4a?w=800&q=85" },
    { title: "Grown Up Family", subtitle: "Egypt for the Curious Mind", image: "https://images.unsplash.com/photo-1596639959477-0f5e40a8d90a?w=800&q=85" },
    { title: "View All", subtitle: "", isViewAll: true },
  ],
  what: [
    { title: "History & Archaeology", subtitle: "5,000 Years, Yours Alone", image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=85" },
    { title: "Luxury & Wellness", subtitle: "Comfort Beyond Compare", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=85" },
    { title: "Desert & Adventure", subtitle: "Beyond the Horizon", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=85" },
    { title: "Food & Culture", subtitle: "Egypt Tastes Like Nothing Else", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=85" },
    { title: "Nile Journeys", subtitle: "Carried by the Ancient River", image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?w=800&q=85" },
    { title: "Photography Expeditions", subtitle: "Light, Texture, Eternity", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=85" },
  ],
  remarkable: [
    { title: "Before the World Wakes", subtitle: "Private Sunrise — Pyramids of Giza", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=85" },
    { title: "Sleep Under Eternity", subtitle: "Luxury Camp — White Desert", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=85" },
    { title: "Dine on the Nile", subtitle: "Private Candlelit Felucca Dinner", image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?w=800&q=85" },
    { title: "The Hidden Egypt", subtitle: "Places No Tourist Has Ever Visited", image: "https://images.unsplash.com/photo-1596639959477-0f5e40a8d90a?w=800&q=85" },
    { title: "Meet the Makers", subtitle: "Cairo's Living Heritage", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=85" },
  ],
  collaborations: [
    { title: "National Geographic Journeys", subtitle: "Coming Soon", bg: "#1B2B4B", badge: "COMING SOON" },
    { title: "Photography Expeditions", subtitle: "Capture Egypt's Soul", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=85" },
    { title: "Academic Tours with Egyptologists", subtitle: "Deep Knowledge, Deeper Connection", image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=85" },
  ],
};

/* ── page ──────────────────────────────────────── */

const Experiences = () => {
  const [active, setActive] = useState<CatKey>("who");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const isWide = active === "remarkable" || active === "collaborations";

  const handleCardClick = (card: Card) => {
    if (card.isViewAll) return;
    setSelectedCard(card.title);
  };

  return (
    <div className="bg-off-white">
      {/* ── Hero ─────────────────────────── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 px-6 bg-champagne">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="font-heading text-[36px] md:text-[64px] font-semibold leading-[1.1] text-foreground">
            Every Journey, Crafted for You
          </h1>
          <p className="font-body text-[13px] md:text-[15px] uppercase tracking-[0.15em] text-gold mt-5">
            Discover Egypt Through the Experience That Speaks to You
          </p>
          <div className="w-[60px] h-px bg-gold-light mx-auto mt-6" />
        </div>
      </section>

      {/* ── Sidebar + Grid ───────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 py-14 md:py-16" ref={gridRef}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Sidebar */}
          <nav className="md:w-[220px] shrink-0 md:sticky md:top-[120px] md:self-start">
            {/* Mobile tabs */}
            <div className="flex md:hidden gap-0 overflow-x-auto border-b border-gold-light">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => { setActive(c.key); setSelectedCard(null); }}
                  className={`font-body text-[10px] uppercase whitespace-nowrap px-4 py-3 transition-all duration-300 tracking-[0.2em] ${
                    active === c.key
                      ? "text-gold font-semibold border-b-2 border-gold"
                      : "text-foreground/50 border-b-2 border-transparent"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Desktop sidebar */}
            <div className="hidden md:flex flex-col gap-0">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => { setActive(c.key); setSelectedCard(null); }}
                  className={`text-left font-body text-[11px] uppercase py-4 transition-all duration-300 tracking-[0.2em] ${
                    active === c.key
                      ? "text-gold font-semibold border-l-2 border-gold pl-3"
                      : "text-foreground/50 hover:text-gold-light hover:opacity-100 border-l-2 border-transparent pl-3"
                  }`}
                >
                  {c.label}
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
                className={`grid gap-3 ${
                  isWide
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                }`}
              >
                {cards[active].map((card, i) => (
                  <CardItem
                    key={`${active}-${i}`}
                    card={card}
                    tall={isWide}
                    onClick={() => handleCardClick(card)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Detail panel ─────────────────── */}
      <AnimatePresence>
        {selectedCard && (
          <ExperienceDetail title={selectedCard} onClose={() => setSelectedCard(null)} />
        )}
      </AnimatePresence>

      {/* ── Bottom sections ───────────────── */}
      <WhyMateego />
      <ExperiencesJournal />
      <ExperiencesTestimonial />

      {/* ── Footer CTA ────────────────────── */}
      <section className="py-10 md:py-14 px-6 bg-gold">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-heading text-[24px] md:text-[32px] text-white font-semibold text-center md:text-left">
            Ready to design your perfect Egypt journey?
          </h3>
          <Link
            to="/contact"
            className="font-body text-[11px] uppercase tracking-[0.2em] text-white font-semibold px-10 py-4 border border-white hover:bg-white/10 transition-colors"
          >
            Begin Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

/* ── Card component ─────────────────────────── */

const CardItem = ({
  card,
  tall,
  onClick,
}: {
  card: Card;
  tall: boolean;
  onClick: () => void;
}) => {
  const height = tall ? "h-[420px] md:h-[520px]" : "h-[340px] md:h-[420px]";

  if (card.isViewAll) {
    return (
      <Link
        to="/journeys"
        className={`relative ${height} flex items-center justify-center bg-foreground group transition-all duration-400`}
      >
        <span className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-gold-light font-semibold group-hover:text-gold transition-colors">
          View All →
        </span>
      </Link>
    );
  }

  if (card.bg && !card.image) {
    return (
      <div
        onClick={onClick}
        className={`relative ${height} flex flex-col items-start justify-end p-6 cursor-pointer group transition-all duration-400 hover:scale-[1.02]`}
        style={{ backgroundColor: card.bg }}
      >
        {card.badge && (
          <span className="absolute top-5 left-5 font-body text-[9px] uppercase tracking-[0.2em] text-gold-light font-semibold px-3 py-1 border border-gold-light">
            {card.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
        <h3 className="font-heading text-[20px] md:text-[22px] text-white font-semibold leading-tight">
          {card.title}
        </h3>
        {card.subtitle && (
          <p className="font-body text-[10px] uppercase tracking-[0.15em] text-sand mt-2">
            {card.subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative ${height} overflow-hidden group cursor-pointer transition-all duration-400 hover:scale-[1.02]`}
    >
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
        }}
      />
      {/* Gold bottom line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
      <div className="absolute bottom-0 left-0 p-5 md:p-6">
        <h3 className="font-heading text-[18px] md:text-[22px] text-white font-semibold leading-[1.2]">
          {card.title}
        </h3>
        {card.subtitle && (
          <p className="font-body text-[10px] uppercase tracking-[0.15em] text-sand mt-2">
            {card.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Experiences;
