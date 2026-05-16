import { Breadcrumbs } from "../../src/components/site/Breadcrumbs.jsx";
import { LocationPackageCard } from "../../src/components/site/LocationPackageCard.jsx";
import { PackageCard } from "../../src/components/site/PackageCard.jsx";
import { PageHero } from "../../src/components/site/PageHero.jsx";
import { SectionHeading } from "../../src/components/site/SectionHeading.jsx";
import { StructuredData } from "../../src/components/site/StructuredData.jsx";
import { buildMetadata, getPackageSchemas } from "../../src/lib/seo.js";
import { featuredLocationPackages, packageBuyingGuidance, packages, pageArt } from "../../src/lib/site-content.js";

export const metadata = buildMetadata({
  title: "Northern Pakistan Travel Packages & Tour Formats",
  description:
    "Compare Northern Pakistan travel packages, family trips, honeymoon tours, and private multi-day route options before you request a custom quote.",
  path: "/packages",
  image: pageArt.packagesHero.src,
  keywords: ["Northern Pakistan packages", "Skardu package", "Hunza honeymoon package", "family travel package Pakistan"],
});

const packageFitNotes = [
  {
    title: "Shorter packages reduce friction",
    description:
      "For school breaks, first-time northern travel, and family-led planning, a shorter package often performs better because the traveler can understand the route quickly and picture the pace without uncertainty.",
  },
  {
    title: "Longer routes need stronger justification",
    description:
      "As package length increases, travelers usually need clearer reasons to choose it: better photography coverage, more comfortable honeymoon pacing, multi-valley movement, or a more private premium itinerary shape.",
  },
  {
    title: "Destination and package intent overlap",
    description:
      "Many users search for both a route and a package format at the same time. That is why a good packages page should explain trip shape clearly while still connecting users to destination pages with stronger place-specific detail.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <StructuredData data={getPackageSchemas()} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }]} />
      <PageHero
        image={pageArt.packagesHero.src}
        alt={pageArt.packagesHero.alt}
        eyebrow="Package Planning"
        title="Tour formats for family travel, scenic holidays, and premium private routes."
        description="Package pages help users compare route depth and help search engines map commercial intent to real offerings."
        priority
      />

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Packages"
            title="Use package structure to filter the right trip before choosing the final destination."
            description="Searchers landing on package pages are often closer to conversion than users still browsing generic inspiration. That is why this page focuses on practical buying intent: how long the route is, who it suits, and how much complexity the itinerary can handle."
            align="left"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {packages.map((travelPackage) => (
              <PackageCard key={travelPackage.id} travelPackage={travelPackage} showPrice={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Package Guidance"
            title="What usually makes one package a better fit than another."
            description="A strong travel site should not hide package logic. These points help users qualify themselves faster and improve conversion from search traffic that arrives with budget, timing, or family-fit questions."
            align="left"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {packageBuyingGuidance.map((note) => (
              <article key={note} className="rounded-[1.75rem] bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
                <p className="text-sm leading-7 text-slate-600">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Destination Packages"
            title="Commercial pages that bridge package intent with route intent."
            description="Users often search destination + package together, so these cards connect the package mindset with the underlying place pages that can rank for location-based travel terms."
            align="left"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredLocationPackages.map((travelPackage) => (
              <LocationPackageCard key={travelPackage.id} travelPackage={travelPackage} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Decision Signals"
            title="What usually moves a traveler from comparing packages to requesting a quote."
            description="Package pages are strongest when they answer the practical question behind the search: not just where the trip goes, but why this route depth, this pacing, and this package shape make sense for the traveler."
            align="left"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {packageFitNotes.map((note) => (
              <article key={note.title} className="rounded-[1.75rem] bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
                <h2 className="text-xl font-black text-navy-900">{note.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
