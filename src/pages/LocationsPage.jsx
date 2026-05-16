import { DestinationCard } from "../components/DestinationCard.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { locations, pageImages } from "../data/siteData.js";

export function LocationsPage() {
  return (
    <section id="page-locations">
      <PageHero
        image={pageImages.locationsHero}
        eyebrow="Destinations"
        title="Explore Northern Pakistan"
        description="Click any destination to discover its tour plans, scenery, and unique experiences."
      />

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <DestinationCard key={location.id} location={location} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
