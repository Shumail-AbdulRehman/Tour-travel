import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { TourPlanCard } from "../components/TourPlanCard.jsx";

export function LocationDetailPage({ destination }) {
  return (
    <section id={`page-${destination.page}`} className="pb-16 pt-16">
      <div className="relative h-80 w-full">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          src={destination.heroImage}
          alt={destination.heroAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
        <div className="absolute bottom-8 left-4 z-10 max-w-xl sm:left-8">
          <h1 className="font-display text-[42px] font-black text-white">{destination.name}</h1>
          <p className="mt-2 text-white/80">{destination.subtitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <AnimatedSection className="mb-10">
          <h2 className="mb-4 font-display text-[24px] font-bold text-navy-800">{destination.aboutTitle}</h2>
          <p className="leading-relaxed text-gray-600">{destination.about}</p>
        </AnimatedSection>

        <h3 className="fade-up mb-6 font-display text-[19px] font-bold text-navy-800">
          Tour Plans for {destination.name}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {destination.plans.map((plan) => (
            <TourPlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="#locations" className="font-medium text-navy-600 transition hover:text-gold-500">
            {"\u2190"} Back to All Locations
          </a>
        </div>
      </div>
    </section>
  );
}
