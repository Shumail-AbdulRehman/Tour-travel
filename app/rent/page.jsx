import Link from "next/link";
import { Breadcrumbs } from "../../src/components/site/Breadcrumbs.jsx";
import { PageHero } from "../../src/components/site/PageHero.jsx";
import { RentCard } from "../../src/components/site/RentCard.jsx";
import { SectionHeading } from "../../src/components/site/SectionHeading.jsx";
import { StructuredData } from "../../src/components/site/StructuredData.jsx";
import { buildMetadata, getRentSchemas } from "../../src/lib/seo.js";
import { pageArt, rentIntentLinks, rentPlanningNotes, rentalsCatalog } from "../../src/lib/site-content.js";

export const metadata = buildMetadata({
  title: "Vehicle Rentals With Driver For Northern Pakistan Travel",
  description:
    "Browse car, SUV, van, and group transport options with drivers for family trips, city transfers, and multi-day northern Pakistan travel.",
  path: "/rent",
  image: pageArt.rentHero.src,
  keywords: ["Pakistan tour vehicle rental", "car with driver Rawalpindi", "northern Pakistan travel transport"],
});

const rentalScenarios = [
  {
    title: "Airport pickup and city transfer",
    description:
      "Sedans and compact family vehicles usually work well when the traveler only needs a clean pickup, light luggage handling, and comfortable movement across Rawalpindi, Islamabad, Murree-side stays, or shorter regional routes.",
  },
  {
    title: "Family holiday with luggage",
    description:
      "As soon as group size, children, or overnight luggage increase, transport comfort becomes a bigger ranking factor than base vehicle price alone. Cabin width, bag storage, and smoother day-to-day seating matter much more on longer road sections.",
  },
  {
    title: "Long northern circuit",
    description:
      "Deeper routes toward Hunza, Skardu, or mixed-destination northern travel usually need stronger planning because road profile, weather variability, and total drive hours make vehicle selection part of the itinerary itself instead of a separate booking detail.",
  },
];

export default function RentPage() {
  return (
    <>
      <StructuredData data={getRentSchemas()} />
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

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Booking Guidance"
            title="Transport pages work better when they explain fit, not just fleet names."
            description="Travelers comparing a sedan, SUV, van, or group vehicle are often much closer to booking than people still browsing destination ideas. These notes help qualify that decision with route reality in mind."
            align="left"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {rentPlanningNotes.map((note) => (
              <article key={note.title} className="rounded-[1.75rem] bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
                <h2 className="text-xl font-black text-navy-900">{note.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pair With A Route"
            title="Travel guides that help vehicle inquiries turn into cleaner trip planning."
            description="Many transport inquiries are really destination-planning inquiries in disguise. These internal links connect rental intent with the route pages most likely to answer timing, road-profile, and pacing questions."
            align="left"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {rentIntentLinks.map((item) => (
              <article key={item.href} className="rounded-[1.75rem] bg-navy-50 p-6 ring-1 ring-navy-100">
                <h2 className="font-display text-2xl font-black text-navy-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <Link href={item.href} className="mt-5 inline-flex text-sm font-bold text-gold-700 no-underline hover:text-navy-900">
                  Open route guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Use Cases"
            title="The rental decision changes depending on what kind of trip the vehicle is supporting."
            description="A user asking for a car with driver is not always asking the same question. Sometimes they need a simple transfer, sometimes they are planning a family road trip, and sometimes they are really asking how transport should shape a full northern route."
            align="left"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {rentalScenarios.map((scenario) => (
              <article key={scenario.title} className="rounded-[1.75rem] bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
                <h2 className="text-xl font-black text-navy-900">{scenario.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{scenario.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
