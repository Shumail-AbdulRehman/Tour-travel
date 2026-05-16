import { Breadcrumbs } from "../../src/components/site/Breadcrumbs.jsx";
import { PageHero } from "../../src/components/site/PageHero.jsx";
import { RentCard } from "../../src/components/site/RentCard.jsx";
import { SectionHeading } from "../../src/components/site/SectionHeading.jsx";
import { buildMetadata } from "../../src/lib/seo.js";
import { pageArt, rentalsCatalog } from "../../src/lib/site-content.js";

export const metadata = buildMetadata({
  title: "Vehicle Rentals With Driver For Northern Pakistan Travel",
  description:
    "Browse car, SUV, van, and group transport options with drivers for family trips, city transfers, and multi-day northern Pakistan travel.",
  path: "/rent",
  image: pageArt.rentHero.src,
  keywords: ["Pakistan tour vehicle rental", "car with driver Rawalpindi", "northern Pakistan travel transport"],
});

export default function RentPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Rent", href: "/rent" }]} />
      <PageHero
        image={pageArt.rentHero.src}
        alt={pageArt.rentHero.alt}
        eyebrow="Private Transport"
        title="Vehicles with drivers for city pickups, family routes, and northern road trips."
        description="Transport pages capture a different search intent from tour packages. They matter for users who already know the route but still need the right car, SUV, van, or group vehicle."
        priority
      />

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Rental Options"
            title="Choose the vehicle based on road profile, luggage, and group size."
            description="A transport page should help users self-qualify. Families often prioritize cabin space and smoother pacing, while mountain routes may need stronger vehicles depending on road conditions and overall itinerary length."
            align="left"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {rentalsCatalog.map((rental, index) => (
              <RentCard key={rental.id} rental={rental} priority={index < 4} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
