import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

const destinations = [
  { name: "Cairo", desc: "The bustling capital, home to the Great Pyramids", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800" },
  { name: "Luxor", desc: "The world's greatest open-air museum", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800" },
  { name: "Aswan", desc: "Gateway to Nubia and the great temples", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800" },
  { name: "Siwa Oasis", desc: "Egypt's most remote and magical oasis", image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=800" },
  { name: "White Desert", desc: "Surreal chalk formations under starlit skies", image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=800" },
  { name: "Abu Simbel", desc: "Ramesses II's monumental lakeside temples", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800" },
  { name: "Alexandria", desc: "Mediterranean charm meets ancient history", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800" },
  { name: "Red Sea", desc: "World-class diving and pristine coastlines", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800" },
  { name: "Sinai", desc: "Sacred mountains and bedouin culture", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
];

const EgyptWhereToGo = () => {
  const [active, setActive] = useState(0);

  return (
    <FadeInSection>
      <section id="where-to-go" className="py-[60px] md:py-[100px] bg-champagne">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="label-caps block mb-3">WHERE WE GO</span>
            <h2 className="font-heading text-[40px] md:text-[52px] leading-[1.1] font-normal text-text-dark">
              All of Egypt.
              <br />
              None of the Crowds.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: destination list */}
            <div>
              {destinations.map((d, i) => (
                <div
                  key={d.name}
                  onMouseEnter={() => setActive(i)}
                  className={`flex items-center gap-4 py-4 border-b border-gold/20 cursor-pointer transition-all duration-300 group ${
                    active === i ? "bg-black -mx-4 px-4" : ""
                  }`}
                >
                  <span
                    className={`font-heading text-[14px] w-8 ${
                      active === i ? "text-gold" : "text-gold/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className={`font-heading text-[24px] md:text-[28px] transition-colors duration-300 ${
                        active === i ? "text-white" : "text-text-dark group-hover:text-gold"
                      }`}
                    >
                      {d.name}
                    </h3>
                    <p
                      className={`font-body text-[13px] font-light ${
                        active === i ? "text-white/60" : "text-text-muted"
                      }`}
                    >
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: changing image */}
            <div className="relative h-[400px] md:h-auto overflow-hidden">
              {destinations.map((d, i) => (
                <img
                  key={d.name}
                  src={d.image}
                  alt={d.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptWhereToGo;
