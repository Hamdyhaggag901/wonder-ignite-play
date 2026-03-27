import FadeInSection from "@/components/FadeInSection";

const seasons = [
  {
    icon: "☀️",
    title: "Peak Season",
    period: "October – April",
    desc: "Clear skies, comfortable temperatures, perfect for temples and tombs. This is when Egypt is at its most magical — and most popular. Book early.",
  },
  {
    icon: "🌊",
    title: "Summer",
    period: "June – August",
    desc: "Too hot for the Valley of the Kings, but ideal for Red Sea diving. Fewer crowds, lower prices, and the kind of heat that makes evening Nile cruises feel divine.",
  },
  {
    icon: "🌤",
    title: "Shoulder Season",
    period: "May & September",
    desc: "Our favorite secret. Warm but manageable. The crowds have thinned. Prices drop. You get the Egypt we fell in love with — unhurried and intimate.",
  },
];

const EgyptWhenToGo = () => (
  <FadeInSection>
    <section id="when" className="py-20 md:py-32 bg-warm-cream scroll-mt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="label-caps block mb-4">When to Visit</span>
            <h2 className="font-heading text-[34px] md:text-[48px] text-deep-sand font-light italic leading-tight mb-6">
              When to Visit Egypt
            </h2>
            <p className="font-body text-[15px] text-charcoal-dark/60 font-light leading-[1.9] mb-10">
              October is our favorite month in Egypt. The crowds haven't arrived yet, the light is
              extraordinary, and the desert nights are cool enough to sleep without AC. Here's what
              we'd tell a close friend planning their trip.
            </p>
            <div className="space-y-6">
              {seasons.map((s, i) => (
                <div key={i} className="bg-white p-6 border-l-2 border-gold-accent/30">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg">{s.icon}</span>
                    <h4 className="font-heading text-[20px] text-deep-sand font-light italic">{s.title}</h4>
                  </div>
                  <p className="font-body text-[11px] uppercase tracking-[0.15em] text-gold-accent mb-2">{s.period}</p>
                  <p className="font-body text-[13px] text-charcoal-dark/50 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden aspect-[3/4] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80"
              alt="Egypt at golden hour"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-sand/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-heading text-[22px] text-warm-white italic font-light mb-3">
                Read our complete guide
              </p>
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-gold-accent cursor-pointer">
                Best Time to Visit Egypt →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptWhenToGo;
