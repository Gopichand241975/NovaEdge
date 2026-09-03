import AnimatedSection from "@/components/ui/AnimatedSection";

const brands = [
  "TechCorp", "Luminos", "Nexus", "Orbit", "Stratos", "Pinnacle",
];

export default function BrandsSection() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm text-slate-500 font-medium uppercase tracking-widest mb-8">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {brands.map((brand) => (
              <div
                key={brand}
                className="text-slate-600 font-bold text-lg tracking-tight hover:text-slate-400 transition-colors duration-300 cursor-default select-none"
              >
                {brand}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
