import { Breadcrumbs } from "../../src/components/site/Breadcrumbs.jsx";
import { ContactInquiryForm } from "../../src/components/site/ContactInquiryForm.jsx";
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
        description="Use the direct form below to send route details, travel timing, and transport needs to the booking desk in one clear inquiry."
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
              <article
                key={card.title}
                className="rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(248,250,253,0.98),rgba(239,244,251,0.9))] p-6 shadow-[0_18px_40px_-30px_rgba(9,20,40,0.22)] ring-1 ring-navy-100"
              >
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

      <section className="bg-navy-50/70 px-4 py-20">
        <div className="mx-auto flex max-w-7xl justify-center">
          <div className="w-full max-w-4xl">
            <ContactInquiryForm phone={business.phone} phoneDisplay={business.phoneDisplay} />
          </div>
        </div>
      </section>
    </>
  );
}
