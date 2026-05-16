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
              <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
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
    </>
  );
}
