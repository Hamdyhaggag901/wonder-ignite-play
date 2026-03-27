import FadeInSection from "@/components/FadeInSection";

const theirs = [
  "Pyramids at noon with 3,000 strangers",
  "A guide reading from a script",
  "Hotels chosen for commissions, not quality",
  "The same 4 sites. Same order. Same photos.",
];

const ours = [
  "Private access to Valley of the Kings after closing",
  "Your own Egyptologist who's been here 20 years",
  "Hotels we actually stay in ourselves",
  "Places that don't appear in any guidebook",
];

const EgyptTension = () => (
  <FadeInSection>
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      {/* Left – dark */}
      <div className="bg-midnight px-8 md:px-16 py-16 md:py-24 flex items-center">
        <div>
          <h3 className="font-heading text-[28px] md:text-[36px] text-warm-white/40 font-light leading-tight mb-10">
            What every Egypt
            <br />
            tour looks like
          </h3>
          <ul className="space-y-5">
            {theirs.map((item, i) => (
              <li
                key={i}
                className="font-body text-[15px] text-warm-white/25 line-through decoration-warm-white/20 font-light flex items-start gap-3"
              >
                <span className="text-warm-white/20 text-sm mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right – light */}
      <div className="bg-warm-white px-8 md:px-16 py-16 md:py-24 flex items-center">
        <div>
          <h3 className="font-heading text-[28px] md:text-[36px] text-midnight font-light leading-tight mb-10">
            What Mateego
            <br />
            looks like
          </h3>
          <ul className="space-y-5">
            {ours.map((item, i) => (
              <li
                key={i}
                className="font-body text-[15px] text-midnight/80 font-light flex items-start gap-3"
              >
                <span className="text-raw-sand text-sm mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptTension;
