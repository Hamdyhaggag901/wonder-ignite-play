import { useEffect, useState } from "react";

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Journeys", href: "#journeys" },
  { label: "Experiences", href: "#experiences" },
  { label: "Where to Stay", href: "#stay" },
  { label: "Places", href: "#places" },
  { label: "When to Visit", href: "#when" },
  { label: "Map", href: "#map" },
];

const EgyptSubNav = () => {
  const [active, setActive] = useState("#overview");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);

      const ids = tabs.map((t) => t.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${ids[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-cream/95 backdrop-blur-sm border-b border-gold-accent/10 transition-all">
      <div className="section-container">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide py-0">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(tab.href);
                document.querySelector(tab.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`shrink-0 font-body text-[11px] uppercase tracking-[0.15em] px-4 py-4 border-b-2 transition-colors duration-200 ${
                active === tab.href
                  ? "border-gold-accent text-deep-sand font-medium"
                  : "border-transparent text-charcoal-dark/50 hover:text-charcoal-dark"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default EgyptSubNav;
