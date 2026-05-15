import { DiscountCornerBadge } from "../components/DiscountCornerBadge.jsx";
import { LocationPackageCard } from "../components/LocationPackageCard.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { createDiscountPercent, locationDetails, pageImages, popularLocationPackages } from "../data/siteData.js";

const extendedTourPages = [
  "loc-hunza",
  "loc-skardu",
  "loc-naran-kaghan",
  "loc-swat",
  "loc-kashmir",
  "loc-chitral",
];

function summarizeLocation(text) {
  const firstSentence = text.split(". ")[0]?.trim();
  return firstSentence?.endsWith(".") ? firstSentence : `${firstSentence}.`;
}

export function PackagesPage() {
  const featuredPackages = popularLocationPackages.slice(0, 3);
  const extendedTourLocations = extendedTourPages
    .map((page) => locationDetails.find((location) => location.page === page))
    .map((location) =>
      location
        ? {
            ...location,
            discountPercent: createDiscountPercent(`${location.page}-package`),
          }
        : null,
    )
    .filter(Boolean);

  return (
    <section id="page-packages">
      <PageHero
        image={pageImages.packagesHero}
        eyebrow="Our Packages"
        title="Choose Your Adventure"
        description="Start with our most-booked routes, then explore more destinations with single-day and multi-day tour options."
      />

      <div className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Choice"
            title="Popular Location Packages"
            description="Three strong picks for travelers who want proven routes, scenic variety, and easy booking."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredPackages.map((locationPackage) => (
              <LocationPackageCard key={locationPackage.id} locationPackage={locationPackage} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-navy-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="More Destinations"
            title="Single-Day and Multi-Day Tours Across the North"
            description="Browse more valleys and mountain routes with flexible plans, from quick one-day escapes to complete multi-night journeys."
            className="mb-10"
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {extendedTourLocations.map((location) => (
              <article
                key={location.page}
                className="fade-up flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="grid h-full gap-0">
                  <div className="relative h-72 w-full">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      src={location.heroImage}
                      alt={location.heroAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/15 to-transparent"></div>
                    <DiscountCornerBadge value={location.discountPercent} />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div>
                      <h3 className="font-display text-[21px] font-black text-navy-900 sm:text-[23px]">{location.name}</h3>
                      <p
                        className="mt-2 text-[13px] text-navy-600"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                          overflow: "hidden",
                        }}
                      >
                        {location.subtitle}
                      </p>
                      <p
                        className="mt-3 text-[14px] leading-7 text-gray-600"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                        }}
                      >
                        {summarizeLocation(location.about)}
                      </p>
                    </div>

                    <div className="mt-5">
                      <a
                        href={`#${location.page}`}
                        className="inline-flex rounded-full bg-gold-500 px-5 py-2 text-[13px] font-bold text-navy-900 transition hover:bg-gold-400"
                      >
                        Explore {location.name} Tours
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="fade-up mt-12 text-center">
            <p className="mx-auto max-w-2xl text-sm text-gray-600">
              Need another valley, a family-friendly route, or a longer custom mountain trip? Explore every destination
              before you decide.
            </p>
            <a
              href="#locations"
              className="mt-5 inline-flex rounded-full bg-navy-800 px-7 py-3 font-bold text-white transition hover:bg-navy-700"
            >
              Explore All Destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
