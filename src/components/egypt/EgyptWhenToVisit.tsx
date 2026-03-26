import FadeInSection from "@/components/FadeInSection";

const months = [
  { name: "Jan", peak: true },
  { name: "Feb", peak: true },
  { name: "Mar", peak: true },
  { name: "Apr", peak: true },
  { name: "May", peak: false },
  { name: "Jun", peak: false },
  { name: "Jul", peak: false },
  { name: "Aug", peak: false },
  { name: "Sep", peak: false },
  { name: "Oct", peak: true },
  { name: "Nov", peak: true },
  { name: "Dec", peak: true },
];

const seasons = [
  {
    icon: "☀",
    title: "Peak Summer",
    period: "June – August",
    desc: "Ideal for Red Sea diving and beach stays",
  },
  {
    icon: "🐠",
    title: "Marine Life",
    period: "May – July",
    desc: "Abundant underwater life in full bloom",
  },
  {
    icon: "🏛",
    title: "Best Sightseeing",
    period: "October – April",
    desc: "Cool temperatures, perfect for temples",
  },
];

const EgyptWhenToVisit = () => (
  <FadeInSection>
    <section id="when-to-visit" className="py-[60px] md:py-[100px] bg-black">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="label-caps block mb-3">WHEN TO VISIT</span>
          <h2 className="font-heading text-[40px] md:text-[52px] text-white leading-[1.1] font-normal">
            The Perfect Time
            <br />
            to Explore
          </h2>
        </div>

        {/* Timeline bar */}
        <div className="flex justify-between mb-12 overflow-x-auto gap-1">
          {months.map((m) => (
            <div key={m.name} className="flex flex-col items-center flex-1 min-w-[48px]">
              <div
                className={`w-full h-2 mb-3 ${
                  m.peak ? "bg-gold" : "bg-white/20"
                }`}
              />
              <span
                className={`font-body text-[11px] uppercase tracking-wider ${
                  m.peak ? "text-gold" : "text-white/40"
                }`}
              >
                {m.name}
              </span>
            </div>
          ))}
        </div>

        {/* Cards + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {seasons.map((s, i) => (
              <div key={i} className="bg-champagne p-6">
                <span className="text-[28px] block mb-2">{s.icon}</span>
                <h3 className="font-heading text-[22px] md:text-[24px] text-text-dark">
                  {s.title}
                </h3>
                <span className="font-body text-[12px] uppercase tracking-[0.15em] text-gold block mt-1 mb-2">
                  {s.period}
                </span>
                <p className="font-body text-[13px] text-text-muted font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-[400px] md:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=700"
              alt="Egypt temples"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <p className="font-heading text-[24px] md:text-[28px] text-white italic font-normal mb-6">
                When is the Best Time
                <br />
                to Visit Egypt?
              </p>
              <a href="#" className="btn-secondary border-white text-white hover:bg-white/10 hover:text-white">
                READ THE GUIDE →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptWhenToVisit;
