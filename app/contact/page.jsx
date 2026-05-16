import Link from "next/link";
import { Breadcrumbs } from "../../src/components/site/Breadcrumbs.jsx";
import { PageHero } from "../../src/components/site/PageHero.jsx";
import { SectionHeading } from "../../src/components/site/SectionHeading.jsx";
import { StructuredData } from "../../src/components/site/StructuredData.jsx";
import { buildMetadata, getContactPageSchema } from "../../src/lib/seo.js";
import { business, pageArt } from "../../src/lib/site-content.js";

export const metadata = buildMetadata({
  title: "Contact The Booking Desk",
  description:
    "Call, email, or message Abid Tour & Travels to plan Northern Pakistan tours, family packages, honeymoon routes, and vehicle rentals with driver.",
  path: "/contact",
  image: pageArt.about.src,
  keywords: ["contact travel agency", "tour booking Rawalpindi", "Pakistan tour inquiry"],
});

const contactCards = [
  {
    title: "Call for quick route planning",
    description: "Best for urgent bookings, vehicle checks, or when you want to talk through the route in one conversation.",
    href: `tel:${business.phone}`,
    label: business.phoneDisplay,
  },
  {
    title: "Email trip details",
    description: "Useful when you want to share dates, group size, route preferences, and budget context in writing.",
    href: `mailto:${business.email}`,
    label: business.email,
  },
  {
    title: "Open the head office location",
    description: "Use the office listing if you want directions, local verification, or a reference point before contacting the agency.",
    href: business.mapUrl,
    label: "View office on map",
  },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData data={getContactPageSchema()} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <PageHero
        image={pageArt.about.src}
        alt={pageArt.about.alt}
        eyebrow="Contact The Agency"
        title="Talk to the booking desk with the route in mind."
        description="Contact pages convert better when they reduce friction. This page focuses on clear next steps instead of a fake static form that never actually sends a lead."
        priority
      />

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Booking Contact"
            title="Use the channel that matches how far along the trip plan already is."
            description="Some travelers are still comparing destinations, some already know they want a Skardu or Hunza route, and others only need a vehicle with driver. Clear contact options improve conversions because they respect those different stages instead of forcing everyone into the same low-trust form pattern."
            align="left"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contactCards.map((card) => (
              <article key={card.title} className="rounded-[1.75rem] bg-navy-50 p-6 ring-1 ring-navy-100">
                <h2 className="text-xl font-black text-navy-900">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noreferrer" : undefined} className="mt-5 inline-flex text-sm font-bold text-gold-700 no-underline hover:text-navy-900">
                  {card.label} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-xl shadow-navy-900/10 sm:p-10">
          <SectionHeading
            eyebrow="Before You Message"
            title="The four details that make itinerary replies faster and better."
            description="If you include these details in your email, WhatsApp message, or call, the route planning discussion becomes much clearer from the first reply."
            align="left"
          />
          <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
            <li>• Travel dates or at least a rough season.</li>
            <li>• Number of travelers and whether children are included.</li>
            <li>• Preferred destination or the kind of scenery you want.</li>
            <li>• Whether you need a full package or only a vehicle with driver.</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/locations" className="rounded-full bg-navy-900 px-6 py-3 font-bold text-white no-underline hover:bg-navy-800">
              Browse destination guides
            </Link>
            <a href={`mailto:${business.email}`} className="rounded-full bg-gold-500 px-6 py-3 font-bold text-navy-900 no-underline hover:bg-gold-400">
              Email the booking desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
