import Image from "next/image";
import Link from "next/link";
import { FAQSection } from "../src/components/site/FAQSection.jsx";
import { LocationPackageCard } from "../src/components/site/LocationPackageCard.jsx";
import { PackageCard } from "../src/components/site/PackageCard.jsx";
import { SectionHeading } from "../src/components/site/SectionHeading.jsx";
import { StructuredData } from "../src/components/site/StructuredData.jsx";
import {
  faqItems,
  featuredLocationPackages,
  homeHero,
  internalGuides,
  packages,
  planningSteps,
  socialProof,
  trustReasons,
} from "../src/lib/site-content.js";
import { buildMetadata, getHomeSchemas } from "../src/lib/seo.js";

export const metadata = buildMetadata({
  title: "Northern Pakistan Tours, Private Travel Packages & Rentals",
  description:
    "Book Northern Pakistan tours, Skardu travel packages, Hunza holidays, family trips, honeymoon routes, and private vehicle rentals with Abid Tour & Travels.",
  path: "/",
  image: homeHero.image,
  keywords: [
    "Northern Pakistan tours",
    "private tour packages Pakistan",
    "Skardu travel packages",
    "Hunza honeymoon tours",
    "family tours northern areas Pakistan",
  ],
});

export default function HomePage() {
  const schemas = getHomeSchemas();

  return (
    <>
      <StructuredData data={schemas} />

      <section className="relative isolate overflow-hidden">
        <div className="relative min-h-[42rem]">
          <Image
            src={homeHero.image}
            alt={homeHero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 mx-auto flex min-h-[42rem] max-w-7xl items-center px-4 py-24 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-300">{homeHero.eyebrow}</p>
              <h1 className="mt-5 font-display text-5xl font-black leading-tight text-white sm:text-6xl">
                {homeHero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{homeHero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={homeHero.primaryCta.href} className="rounded-full bg-gold-500 px-6 py-3 font-bold text-navy-900 no-underline hover:bg-gold-400">
                  {homeHero.primaryCta.label}
                </Link>
                <Link href={homeHero.secondaryCta.href} className="rounded-full border border-white/20 px-6 py-3 font-bold text-white no-underline hover:border-white/40">
                  {homeHero.secondaryCta.label}
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/10 p-4 backdrop-blur">
                  <p className="font-display text-3xl font-black text-white">10+</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Featured destinations</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4 backdrop-blur">
                  <p className="font-display text-3xl font-black text-white">11</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Vehicle options</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4 backdrop-blur">
                  <p className="font-display text-3xl font-black text-white">Private</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Trip coordination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Plan"
            title="High-intent travel pages built around routes people actually book."
            description="The site now targets destination-specific and conversion-focused intent instead of hiding every route behind hash navigation. That means clearer destination pages, better crawlability, and more precise ranking signals for Skardu, Hunza, Swat, Kashmir, and other core searches."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {internalGuides.map((guide) => (
              <article key={guide.href} className="rounded-[1.75rem] bg-navy-50 p-6 ring-1 ring-navy-100">
                <h2 className="font-display text-2xl font-black text-navy-900">{guide.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
                <Link href={guide.href} className="mt-5 inline-flex text-sm font-bold text-gold-700 no-underline hover:text-navy-900">
                  Open destination guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Popular Tours"
            title="Destination packages that convert well because the route is easy to understand."
            description="These pages balance search intent, scenic appeal, and practical itinerary planning, which makes them strong candidates for both organic rankings and booking inquiries."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredLocationPackages.slice(0, 3).map((travelPackage, index) => (
              <LocationPackageCard key={travelPackage.id} travelPackage={travelPackage} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tour Formats"
            title="Packages for first-time visitors, family travel, adventure trips, and premium private planning."
            description="Not every traveler needs the same route depth. Shorter packages help first-time visitors and school-break families, while longer itineraries support photography, honeymoon pacing, and multi-valley travel."
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
            eyebrow="Why Travelers Choose Us"
            title="A route-first approach instead of generic package copy."
            description="Northern Pakistan tours succeed when the route makes sense on the road. That is why the planning process emphasizes realistic timing, private transport fit, and destination sequencing rather than overpromising on paper."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustReasons.map((reason) => (
              <article key={reason.title} className="rounded-[1.75rem] bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                  <reason.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-black text-navy-900">{reason.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How Planning Works"
            title="Cleaner execution from the first inquiry to the final drop-off."
            description="Travelers looking for Skardu tours, Hunza holidays, family travel packages, or a private driver usually need quick clarity: how many days, which route, what vehicle, and how hard the travel days will feel. The process below keeps those decisions simple."
            align="left"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {planningSteps.map((item) => (
              <article key={item.step} className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur">
                <p className="font-display text-3xl font-black text-gold-300">{item.step}</p>
                <h2 className="mt-5 text-2xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Reviews"
            title="Travelers respond best when the route, pacing, and support feel trustworthy."
            description="Testimonials matter because travel services are high-trust purchases. Strong route pages, clear internal linking, and consistent contact details help search engines and users see the same thing: this is a real travel business with destination-specific expertise."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {socialProof.map((review) => (
              <blockquote key={review.author} className="rounded-[1.75rem] bg-navy-50 p-8 ring-1 ring-navy-100">
                <p className="text-lg leading-8 text-slate-700">“{review.quote}”</p>
                <footer className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-gold-700">{review.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Travel Questions"
            title="Useful answers for booking-intent visitors."
            description="These answers are here to improve clarity and conversion for users. They are intentionally not marked up as FAQ schema because current Google guidance restricts FAQ rich results for commercial sites like this one."
          />
          <div className="mt-12">
            <FAQSection items={faqItems} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 text-center shadow-xl shadow-navy-900/10 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-600">Ready to plan?</p>
          <h2 className="mt-4 font-display text-4xl font-black text-navy-900">Turn search traffic into a real itinerary.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
            If you are comparing Northern Pakistan tours, Skardu travel packages, Hunza honeymoon routes, or private family
            trips, the next step is simple: open the destination guide that matches your route or contact the booking desk
            for a custom itinerary.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/locations" className="rounded-full bg-navy-900 px-6 py-3 font-bold text-white no-underline hover:bg-navy-800">
              Browse destinations
            </Link>
            <Link href="/contact" className="rounded-full bg-gold-500 px-6 py-3 font-bold text-navy-900 no-underline hover:bg-gold-400">
              Contact the agency
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
