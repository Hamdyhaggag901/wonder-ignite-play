import EgyptHero from "@/components/egypt-new/EgyptHero";
import EgyptSubNav from "@/components/egypt-new/EgyptSubNav";
import EgyptOverview from "@/components/egypt-new/EgyptOverview";
import EgyptJourneys from "@/components/egypt-new/EgyptJourneys";
import EgyptPhotoGallery from "@/components/egypt-new/EgyptPhotoGallery";
import EgyptExperiences from "@/components/egypt-new/EgyptExperiences";
import EgyptHotels from "@/components/egypt-new/EgyptHotels";
import EgyptExpert from "@/components/egypt-new/EgyptExpert";
import EgyptMap from "@/components/egypt-new/EgyptMap";
import EgyptWhenToGo from "@/components/egypt-new/EgyptWhenToGo";
import EgyptJournal from "@/components/egypt-new/EgyptJournal";
import EgyptTestimonials from "@/components/egypt-new/EgyptTestimonials";
import EgyptCTABanner from "@/components/egypt-new/EgyptCTABanner";
import EgyptFinalCTA from "@/components/egypt-new/EgyptFinalCTA";

const EgyptDestination = () => {
  return (
    <div className="scroll-smooth">
      <EgyptHero />
      <section
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://iluxuryegypt.com/api/assets/uploads/8994e48c-b7ec-4fed-846f-e2fe7a4bd8ed.webp)",
        }}
      >
        <div className="absolute inset-0 bg-deep-sand/30" />
      </section>
      <EgyptSubNav />
      <EgyptOverview />
      <EgyptJourneys />
      <EgyptPhotoGallery />
      <EgyptExperiences />
      <EgyptHotels />
      <EgyptExpert />
      <EgyptMap />
      <EgyptWhenToGo />
      <EgyptJournal />
      <EgyptTestimonials />
      <EgyptCTABanner />
      <EgyptFinalCTA />
    </div>
  );
};

export default EgyptDestination;
