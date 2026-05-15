import { PageHero } from "../components/PageHero.jsx";
import { RentCard } from "../components/RentCard.jsx";
import { pageImages, rentals } from "../data/siteData.js";

export function RentPage() {
  return (
    <section id="page-rent">
      <PageHero
        image={pageImages.rentHero}
        eyebrow="Vehicle Rentals"
        title="Rent a Vehicle for Your Adventure"
        description="Reliable, well-maintained vehicles with experienced drivers for city travel, events, family trips, and custom routes."
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rentals.map((rental) => (
            <RentCard key={rental.id} rental={rental} />
          ))}
        </div>

        <p className="fade-up mt-8 text-center text-xs text-gray-400">
          {"\u2139"} All prices include driver. Fuel costs may vary by route. Contact us for custom quotes.
        </p>
      </div>
    </section>
  );
}
