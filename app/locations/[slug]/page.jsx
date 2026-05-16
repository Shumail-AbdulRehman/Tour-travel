import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../src/components/site/Breadcrumbs.jsx";
import { DestinationCard } from "../../../src/components/site/DestinationCard.jsx";
import { PageHero } from "../../../src/components/site/PageHero.jsx";
import { SectionHeading } from "../../../src/components/site/SectionHeading.jsx";
import { StructuredData } from "../../../src/components/site/StructuredData.jsx";
import { TourPlanCard } from "../../../src/components/site/TourPlanCard.jsx";
import { buildMetadata, getDestinationSchemas } from "../../../src/lib/seo.js";
import { destinationGuides, getDestinationBySlug, getRelatedDestinations } from "../../../src/lib/site-content.js";

export function generateStaticParams() {
  return destinationGuides.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {};
  }

  return buildMetadata({
    title: destination.metaTitle,
    description: destination.metaDescription,
    path: destination.href,
    image: destination.heroImage,
    keywords: [
      `${destination.name} tour packages`,
      `${destination.name} travel guide`,
      `${destination.name} private trips`,
      `${destination.name} family tours`,
    ],
  });
}

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedDestinations = getRelatedDestinations(destination.slug);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/locations" },
    { label: destination.name, href: destination.href },
  ];

  return (
    <>
      <StructuredData data={getDestinationSchemas(destination)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        image={destination.heroImage}
        alt={destination.heroAlt}
        eyebrow={`${destination.name} travel guide`}
        title={`${destination.name} tours, route ideas, and private trip planning.`}
        description={destination.metaDescription}
        priority
      />

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <article>
            <SectionHeading
              eyebrow={destination.aboutTitle}
              title={`Why ${destination.name} is worth planning properly.`}
              description={`${destination.about} ${destination.localAngle}`}
              align="left"
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] bg-navy-50 p-6 ring-1 ring-navy-100">
                <h2 className="text-lg font-black text-navy-900">Best time to travel</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{destination.bestTime}</p>
              </div>
              <div className="rounded-[1.75rem] bg-navy-50 p-6 ring-1 ring-navy-100">
                <h2 className="text-lg font-black text-navy-900">Ideal for</h2>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  {destination.idealFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <aside className="rounded-[2rem] bg-navy-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-300">Route highlights</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/78">
              {destination.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-gold-300">Travel notes</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/78">
              {destination.travelNotes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-gold-500 px-5 py-3 font-bold text-navy-900 no-underline hover:bg-gold-400">
              Ask for a custom {destination.name} route
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Suggested Tour Plans"
            title={`${destination.name} package ideas with practical pacing.`}
            description="These plans help search engines and travelers understand the shape of the route: quick visits, short escapes, mid-length explorer trips, and slower multi-night options."
            align="left"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {destination.plans.map((plan) => (
              <TourPlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {relatedDestinations.length ? (
        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Related Routes"
              title={`Other destinations travelers compare with ${destination.name}.`}
              description="Internal links matter for crawl depth and for traveler decision-making, so every strong destination page should point to logical alternatives and companion routes."
              align="left"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedDestinations.map((item) => (
                <DestinationCard key={item.slug} destination={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
