import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface DetailData {
  heroImage: string;
  description: string[];
  included: string[];
  route: string[];
  hotels: string[];
  relatedCards: { title: string; subtitle: string; image: string }[];
}

const detailContent: Record<string, DetailData> = {
  "Honeymoon Couples": {
    heroImage: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=85",
    description: [
      "Egypt is one of the most romantic destinations on earth — and we don't say that lightly. Imagine watching the sun set behind the Pyramids from a private rooftop, or drifting down the Nile on a traditional felucca with nothing but starlight above you.",
      "Our honeymoon journeys are designed for couples who want more than a beach resort. We pair iconic wonders with intimate moments — a candlelit dinner in a 200-year-old Luxor courtyard, a sunrise hot air balloon ride over the Valley of the Kings, or a private suite aboard the most elegant Nile cruise ship in Egypt.",
      "Every detail is handled. Every moment is yours.",
    ],
    included: [
      "Private Egyptologist guide throughout",
      "Luxury Nile cruise with suite upgrade",
      "Romantic dinner experiences",
      "Airport VIP meet & greet",
      "All internal transfers & flights",
    ],
    route: ["Cairo", "Giza", "Luxor", "Aswan"],
    hotels: ["Four Seasons Cairo at Nile Plaza", "Sofitel Winter Palace Luxor", "Old Cataract Aswan"],
    relatedCards: [
      { title: "Anniversary Trips", subtitle: "Milestones Worth Celebrating", image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=800&q=85" },
      { title: "Dine on the Nile", subtitle: "Private Candlelit Felucca Dinner", image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?w=800&q=85" },
      { title: "Luxury & Wellness", subtitle: "Comfort Beyond Compare", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=85" },
    ],
  },
  "Family Vacations": {
    heroImage: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=85",
    description: [
      "Egypt sparks curiosity like nowhere else — and for families, that magic is multiplied. Watching your children's eyes widen inside the Great Pyramid, or seeing them ride a camel across the Giza plateau, creates memories that last a lifetime.",
      "We design family journeys that balance wonder with comfort. Kid-friendly guides who make history feel like an adventure story. Hotels with pools for downtime. Pacing that works for all ages.",
    ],
    included: ["Family-friendly Egyptologist guide", "Child-appropriate pacing", "Hotel family suites", "Private transfers throughout", "Camel riding experience"],
    route: ["Cairo", "Giza", "Luxor", "Hurghada"],
    hotels: ["Mena House Cairo", "Steigenberger Nile Palace Luxor", "Oberoi Sahl Hasheesh"],
    relatedCards: [
      { title: "Multi-Generational", subtitle: "A Story for Every Age", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=85" },
      { title: "Travel With Teens", subtitle: "Adventure They'll Remember", image: "https://images.unsplash.com/photo-1569949380651-5140e1096b4a?w=800&q=85" },
      { title: "History & Archaeology", subtitle: "5,000 Years, Yours Alone", image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=85" },
    ],
  },
};

const defaultDetail: DetailData = {
  heroImage: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=85",
  description: [
    "Every journey with Mateego is designed around you — your interests, your pace, your sense of wonder. We don't believe in one-size-fits-all itineraries.",
    "Our team on the ground in Egypt will craft a private experience that reveals the country's most extraordinary moments, from ancient temples at golden hour to hidden local gems that no guidebook covers.",
  ],
  included: ["Private expert Egyptologist", "Luxury accommodation", "All internal transfers", "24/7 on-ground support", "Curated dining experiences"],
  route: ["Cairo", "Luxor", "Aswan", "Abu Simbel"],
  hotels: ["Four Seasons Cairo", "Sofitel Winter Palace", "Old Cataract Aswan"],
  relatedCards: [
    { title: "Honeymoon Couples", subtitle: "Romance on the Nile", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=85" },
    { title: "Desert & Adventure", subtitle: "Beyond the Horizon", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=85" },
    { title: "Food & Culture", subtitle: "Egypt Tastes Like Nothing Else", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=85" },
  ],
};

interface Props {
  title: string;
  onClose: () => void;
}

const ExperienceDetail = ({ title, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const data = detailContent[title] || defaultDetail;

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [title]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="bg-off-white"
    >
      {/* Hero image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src={data.heroImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7), rgba(0,0,0,0.2))" }} />
        <h2 className="absolute bottom-10 left-0 right-0 text-center font-heading text-[36px] md:text-[56px] text-white font-semibold leading-tight">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Two-column content */}
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left content */}
          <div className="md:w-[60%]">
            <h3 className="font-heading text-[28px] md:text-[36px] text-foreground font-semibold">{title}</h3>
            <div className="w-[50px] h-[2px] bg-gold-light mt-4 mb-8" />
            {data.description.map((p, i) => (
              <p key={i} className="font-body text-[15px] md:text-base text-foreground leading-[1.9] mb-4">{p}</p>
            ))}
            <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-gold mt-10 mb-4 font-semibold">What's Included</h4>
            <ul className="space-y-3">
              {data.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                  <span className="font-body text-[15px] text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right sidebar */}
          <div className="md:w-[40%] bg-champagne p-8 md:p-10 self-start">
            <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-foreground font-semibold mb-4">Best Route</h4>
            <p className="font-body text-[15px] text-foreground">{data.route.join(" → ")}</p>
            <div className="w-full h-px bg-gold-light my-6" />
            <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-foreground font-semibold mb-4">Featured Hotels</h4>
            {data.hotels.map((h, i) => (
              <p key={i} className="font-heading text-[18px] italic text-foreground mb-2">{h}</p>
            ))}
            <div className="w-full h-px bg-gold-light my-6" />
            <Link
              to="/contact"
              className="block w-full text-center bg-gold text-white font-body text-[11px] uppercase tracking-[0.2em] font-semibold px-6 py-4 hover:bg-gold-light transition-colors"
            >
              Design This Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Related cards */}
      <div className="max-w-[1280px] mx-auto px-6 pb-16">
        <h4 className="font-heading text-[24px] md:text-[28px] text-foreground font-semibold mb-8">You May Also Love...</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.relatedCards.map((card, i) => (
            <div key={i} className="relative h-[360px] overflow-hidden group cursor-pointer">
              <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-[20px] text-white font-semibold leading-tight">{card.title}</h3>
                <p className="font-body text-[10px] text-sand uppercase tracking-[0.15em] mt-2">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceDetail;
