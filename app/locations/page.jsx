import { Breadcrumbs } from "../../src/components/site/Breadcrumbs.jsx";
import { DestinationCard } from "../../src/components/site/DestinationCard.jsx";
import { PageHero } from "../../src/components/site/PageHero.jsx";
import { SectionHeading } from "../../src/components/site/SectionHeading.jsx";
import { StructuredData } from "../../src/components/site/StructuredData.jsx";
import { destinationGuides, pageArt } from "../../src/lib/site-content.js";
import { buildMetadata, getLocationsPageSchemas } from "../../src/lib/seo.js";

export const metadata = buildMetadata({
  title: "Northern Pakistan Destinations & Travel Guides",
  description:
    "Browse destination guides for Skardu, Hunza, Swat, Kashmir, Naran Kaghan, Nathia Gali, Chitral, and more with route-specific travel planning advice.",
  path: "/locations",
  image: pageArt.locationsHero.src,
  keywords: ["Northern Pakistan destinations", "Skardu travel guide", "Hunza tour guide", "Swat family tours"],
});

export default function LocationsPage() {
  return (
    <>
      <StructuredData data={getLocationsPageSchemas()} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/locations" }]} />
      <PageHero
        image={pageArt.locationsHero.src}
        alt={pageArt.locationsHero.alt}
        eyebrow="Destination Guides"
        title="Real location pages for routes people actually search."
        description="Each destination now has its own crawlable URL, descriptive metadata, and internal links so search engines and travelers can evaluate the route directly."
        priority
      />

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Where To Go"
            title="Choose the destination first, then shape the package around your pace."
            description="Northern Pakistan travel works best when the route matches the traveler. Families usually care about easier drives and comfort, honeymoon travelers care about atmosphere and pacing, and photographers care about seasonality, light, and viewpoint density. These location pages are structured to support that decision with clearer content, stronger semantics, and much better indexability than the previous single-page setup."
            align="left"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {destinationGuides.map((destination, index) => (
              <DestinationCard key={destination.slug} destination={destination} priority={index < 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
