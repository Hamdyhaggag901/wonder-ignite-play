import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import { toast } from "sonner";

const EgyptFinalCTA = () => {
  const [form, setForm] = useState({ name: "", email: "", dates: "", dream: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received. A real person in Cairo will reply within 24 hours.");
    setForm({ name: "", email: "", dates: "", dream: "" });
  };

  const inputClass =
    "w-full bg-transparent border-b border-warm-white/20 font-body text-[15px] text-warm-white placeholder:text-warm-white/30 py-3 px-0 focus:outline-none focus:border-raw-sand transition-colors font-light";

  return (
    <FadeInSection>
      <section className="py-20 md:py-32 bg-midnight">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-[36px] md:text-[56px] text-warm-white font-light leading-tight mb-4">
            Tell us what you're
            <br />
            dreaming of.
          </h2>
          <p className="font-body text-[15px] text-warm-white/50 font-light mb-16 max-w-md mx-auto leading-relaxed">
            We'll tell you if we can make it happen — and how we'd do it differently than anyone else.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Ideal travel dates"
              value={form.dates}
              onChange={(e) => setForm({ ...form, dates: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="What would make this trip unforgettable for you?"
              rows={3}
              value={form.dream}
              onChange={(e) => setForm({ ...form, dream: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-raw-sand text-midnight font-body uppercase text-[11px] tracking-[0.2em] font-normal px-12 py-4 transition-all duration-300 hover:bg-raw-sand/80"
              >
                Start the Conversation
              </button>
            </div>
          </form>

          <p className="font-body text-[12px] text-warm-white/30 font-light mt-10">
            No automated emails. A real person in Cairo will reply within 24 hours.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EgyptFinalCTA;
