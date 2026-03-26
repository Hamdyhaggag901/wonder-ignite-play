import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const articles = [
  {
    title: "Best Places to Visit in Egypt",
    category: "DESTINATION GUIDE",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600",
  },
  {
    title: "Best Time to Visit Egypt",
    category: "PLANNING GUIDE",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600",
  },
  {
    title: "Egypt vs Morocco",
    category: "INSPIRATION",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=600",
  },
];

const EgyptTravelGuides = () => (
  <FadeInSection>
    <section id="travel-guides" className="py-[60px] md:py-[100px] bg-off-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="label-caps block mb-3">THE MATEEGO JOURNAL</span>
            <h2 className="font-heading text-[40px] md:text-[52px] leading-[1.1] font-normal text-text-dark">
              Egypt Travel Guides
            </h2>
          </div>
          <Link to="/journal" className="gold-text-link mt-4 md:mt-0">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <article
              key={i}
              className="group cursor-pointer border-t-2 border-transparent hover:border-gold transition-colors duration-300"
            >
              <div className="h-[280px] overflow-hidden mb-4">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="label-caps text-gold block mb-2">{a.category}</span>
              <h3 className="font-heading text-[20px] md:text-[22px] text-text-dark leading-[1.3]">
                {a.title}
              </h3>
              <span className="font-body text-[12px] text-text-muted mt-2 block">
                {a.readTime}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default EgyptTravelGuides;
