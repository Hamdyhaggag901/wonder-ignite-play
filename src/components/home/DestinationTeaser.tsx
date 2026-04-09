import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const destinations = [
  "Cairo", "Luxor", "Aswan", "Siwa Oasis", "White Desert",
  "Abu Simbel", "Alexandria", "Red Sea", "Sinai",
];

const DestinationTeaser = () => (
  <FadeInSection>
    <section className="min-h-[60vh] flex items-center justify-center py-24 md:py-32" style={{ backgroundColor: "#0A1628" }}>
      <div className="section-container text-center">
        <span className="font-body uppercase text-[11px] tracking-[0.25em] text-[#c9a84c] block mb-4">Where We Go</span>
        <h2 className="font-heading text-[40px] md:text-[56px] leading-[1.1] text-white mb-14">
          All of Egypt.<br />None of the crowds.
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {destinations.map((d) => (
            <Link
              key={d}
              to="/journeys"
              className="border border-[#c9a84c]/40 text-white font-body text-[11px] uppercase tracking-[0.18em] px-6 py-3 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-white transition-all duration-300"
            >
              {d}
            </Link>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default DestinationTeaser;
