import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "../../src/components/site/Breadcrumbs.jsx";
import { PageHero } from "../../src/components/site/PageHero.jsx";
import { SectionHeading } from "../../src/components/site/SectionHeading.jsx";
import { StructuredData } from "../../src/components/site/StructuredData.jsx";
import { buildMetadata, getAboutPageSchema } from "../../src/lib/seo.js";
import { pageArt, planningSteps } from "../../src/lib/site-content.js";

export const metadata = buildMetadata({
  title: "About The Travel Agency",
  description:
    "Learn how Abid Tour & Travels plans Northern Pakistan routes with practical pacing, private transport coordination, and location-based travel guidance.",
  path: "/about",
  image: pageArt.about.src,
  keywords: ["about travel agency", "Northern Pakistan travel planner", "Rawalpindi tour agency"],
});

const operationsPoints = [
  {
    title: "Route pacing comes first",
    description:
      "A route that looks impressive on paper can still feel exhausting on the road. Practical planning means matching sightseeing ambition with actual mountain travel hours, overnight placement, meal stops, and traveler energy.",
  },
  {
    title: "Vehicle fit changes the whole trip",
    description:
      "Families, honeymoon travelers, photography groups, and mixed-age private parties rarely need the same transport setup. Good planning means choosing cabin size, luggage space, and road-fit before the itinerary is treated as finished.",
  },
  {
    title: "Clear communication reduces booking friction",
    description:
      "Trust usually improves when the traveler understands what the route will feel like, not just where it goes. That is why the strongest trip conversations focus on timing, comfort, stop density, and expectations instead of generic promo promises.",
  },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData data={getAboutPageSchema()} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <PageHero
        image={pageArt.about.src}
        alt={pageArt.about.alt}
        eyebrow="About The Agency"
        title="Travel planning built around route reality, not generic brochure copy."
        description="The strongest tourism pages are not only inspiring. They also prove experience, reduce uncertainty, and show that the business understands how the route behaves in practice."
        priority
      />

      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Why This Matters"
              title="Better travel pages are also better trust signals."
              description="Search engines reward pages that clearly match intent, and travel buyers reward businesses that reduce uncertainty. That is why the site now presents destination pages, package pages, and transport pages as separate assets with clearer semantic structure. It helps users understand what they can book and it helps Google understand which page should rank for which kind of query."
              align="left"
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              In practical terms, this agency focuses on route pacing, vehicle selection, realistic day planning, and clear communication. Those are the details that keep a family trip comfortable, a honeymoon route scenic instead of rushed, and a longer northern package operationally clean.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-gold-500 px-6 py-3 font-bold text-navy-900 no-underline hover:bg-gold-400">
              Start planning
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-50 p-3 shadow-xl shadow-navy-900/10">
            <div className="relative h-[28rem] overflow-hidden rounded-[1.5rem]">
              <Image src={pageArt.about.src} alt={pageArt.about.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Operational Focus"
            title="What the agency is really managing behind every good itinerary."
            description="Travel buyers often judge an agency by scenic photos first, but real satisfaction usually depends on less visible decisions. These planning disciplines are what keep a northern route comfortable, believable, and easier to execute once the trip starts."
            align="left"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {operationsPoints.map((point) => (
              <article key={point.title} className="rounded-[1.75rem] bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
                <h2 className="text-xl font-black text-navy-900">{point.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Planning Model"
            title="A three-step process that is easy to explain and easier to sell."
            description="Clear process copy improves both conversion and trust. It also gives the About page enough substance to support branded and commercial searches without feeling thin."
            align="left"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {planningSteps.map((item) => (
              <article key={item.step} className="rounded-[1.75rem] bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
                <p className="font-display text-3xl font-black text-gold-700">{item.step}</p>
                <h2 className="mt-4 text-2xl font-black text-navy-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
