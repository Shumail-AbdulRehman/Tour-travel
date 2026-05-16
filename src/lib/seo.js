import { business, destinationGuides, packages, siteSettings } from "./site-content.js";

export function absoluteUrl(path = "/") {
  return new URL(path, siteSettings.siteUrl).toString();
}

export function buildMetadata({ title, description, path, image = "/images/hero-video-poster.webp", keywords = [] }) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    keywords,
  };
}

export function getGlobalSchemas() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    legalName: business.legalName,
    url: siteSettings.siteUrl,
    email: business.email,
    telephone: business.phone,
    logo: absoluteUrl("/images/hero-video-poster.webp"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: business.phone,
        email: business.email,
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: business.name,
    url: siteSettings.siteUrl,
    email: business.email,
    telephone: business.phone,
    image: absoluteUrl("/images/hero-video-poster.webp"),
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    areaServed: business.areaServed,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: siteSettings.siteUrl,
    inLanguage: "en-PK",
  };

  return [organization, localBusiness, website];
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function getHomeSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Northern Pakistan Tours, Travel Packages & Vehicle Rentals",
      description:
        "Homepage for Abid Tour & Travels covering private northern Pakistan tours, family packages, honeymoon trips, and vehicle rentals.",
      url: siteSettings.siteUrl,
    },
  ];
}

export function getDestinationSchemas(destination) {
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.metaDescription,
    url: absoluteUrl(destination.href),
    image: absoluteUrl(destination.heroImage),
    touristType: destination.idealFor,
  };

  const trips = destination.plans.map((plan) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: plan.name,
    description: plan.description,
    image: absoluteUrl(plan.image),
    provider: {
      "@type": "TravelAgency",
      name: business.name,
      url: siteSettings.siteUrl,
    },
    itinerary: {
      "@type": "TouristDestination",
      name: destination.name,
      url: absoluteUrl(destination.href),
    },
  }));

  return [destinationSchema, ...trips];
}

export function getPackageSchemas() {
  return packages.map((travelPackage) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: travelPackage.name,
    description: travelPackage.description,
    image: absoluteUrl(travelPackage.image),
    provider: {
      "@type": "TravelAgency",
      name: business.name,
      url: siteSettings.siteUrl,
    },
  }));
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Abid Tour & Travels",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": ["TravelAgency", "LocalBusiness"],
      name: business.name,
      telephone: business.phone,
      email: business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address,
        addressLocality: business.city,
        addressRegion: business.region,
        postalCode: business.postalCode,
        addressCountry: business.country,
      },
    },
  };
}

export function getLocationsSitemapEntries() {
  return destinationGuides.map((destination) => ({
    url: absoluteUrl(destination.href),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
}
