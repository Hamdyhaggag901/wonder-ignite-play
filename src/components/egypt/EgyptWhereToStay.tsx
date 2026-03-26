import FadeInSection from "@/components/FadeInSection";

const hotels = [
  {
    name: "Mena House Cairo",
    location: "CAIRO",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
  },
  {
    name: "Old Cataract Aswan",
    location: "ASWAN",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
  },
  {
    name: "Al Moudira Luxor",
    location: "LUXOR",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
  },
  {
    name: "Adrère Amellal Siwa",
    location: "SIWA OASIS",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=800",
  },
];

const EgyptWhereToStay = () => (
  <FadeInSection>
    <section id="where-to-stay" className="py-[60px] md:py-[100px] bg-off-white">
      <div className="section-container">
        <div className="mb-12">
          <span className="label-caps block mb-3">WHERE TO STAY</span>
          <h2 className="font-heading text-[40px] md:text-[52px] leading-[1.1] font-normal text-text-dark">
            Sleep Like Royalty
          </h2>
        </div>

        {/* Row 1: large left + small right */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <HotelCard hotel={hotels[0]} className="md:col-span-3 h-[320px] md:h-[420px]" />
          <HotelCard hotel={hotels[1]} className="md:col-span-2 h-[320px] md:h-[420px]" />
        </div>

        {/* Row 2: small left + large right */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <HotelCard hotel={hotels[2]} className="md:col-span-2 h-[320px] md:h-[420px]" />
          <HotelCard hotel={hotels[3]} className="md:col-span-3 h-[320px] md:h-[420px]" />
        </div>
      </div>
    </section>
  </FadeInSection>
);

const HotelCard = ({
  hotel,
  className = "",
}: {
  hotel: (typeof hotels)[0];
  className?: string;
}) => (
  <div className={`relative group overflow-hidden card-image-hover ${className}`}>
    <img
      src={hotel.image}
      alt={hotel.name}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ transitionDuration: "600ms" }}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 md:p-8">
      <span className="label-caps text-gold block mb-2">{hotel.location}</span>
      <h3 className="font-heading text-[22px] md:text-[24px] text-white">
        {hotel.name}
      </h3>
      <span className="gold-text-link mt-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        DISCOVER →
      </span>
    </div>
  </div>
);

export default EgyptWhereToStay;
