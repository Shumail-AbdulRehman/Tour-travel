import {
  business,
  destinationGuides,
  packages,
  rentalsCatalog,
  siteSettings,
  travelMomentsVideo,
} from "./site-content.js";

export function absoluteUrl(path = "/") {
  return new URL(path, siteSettings.siteUrl).toString();
}

function getIsoDate(dateString = siteSettings.lastUpdated) {
  return new Date(`${dateString}T00:00:00Z`).toISOString();
}

function getWebPageSchema({ path, name, description, type = "WebPage" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: siteSettings.locale,
    dateModified: getIsoDate(),
  };
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
      type: "website",
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
    inLanguage: siteSettings.locale,
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
    getWebPageSchema({
      path: "/",
      name: "Northern Pakistan Tours, Travel Packages & Vehicle Rentals",
      description:
        "Homepage for Abid Tour & Travels covering private northern Pakistan tours, family packages, honeymoon trips, and vehicle rentals.",
    }),
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: travelMomentsVideo.title,
      description: "Customer trip footage showing real route coverage and on-road travel moments in Northern Pakistan.",
      thumbnailUrl: absoluteUrl(travelMomentsVideo.poster),
      contentUrl: absoluteUrl(travelMomentsVideo.src),
      uploadDate: getIsoDate(),
      inLanguage: siteSettings.locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Featured Northern Pakistan destination guides",
      itemListElement: destinationGuides.slice(0, 6).map((destination, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(destination.href),
        name: destination.name,
      })),
    },
  ];
}

export function getLocationsPageSchemas() {
  return [
    getWebPageSchema({
      path: "/locations",
      name: "Northern Pakistan Destinations & Travel Guides",
      description:
        "Destination collection page for Skardu, Hunza, Swat, Kashmir, Naran Kaghan, Nathia Gali, Chitral, and other Northern Pakistan travel routes.",
      type: "CollectionPage",
    }),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Northern Pakistan destination guides",
      itemListElement: destinationGuides.map((destination, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(destination.href),
        name: destination.name,
      })),
    },
  ];
}

export function getDestinationSchemas(destination) {
  const pageSchema = getWebPageSchema({
    path: destination.href,
    name: `${destination.name} Tour Packages, Travel Guide & Private Trips`,
    description: destination.metaDescription,
  });

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

  return [pageSchema, destinationSchema, ...trips];
}

export function getPackageSchemas() {
  return [
    getWebPageSchema({
      path: "/packages",
      name: "Northern Pakistan Travel Packages & Tour Formats",
      description:
        "Travel package collection page comparing Northern Pakistan family trips, honeymoon tours, and private multi-day itineraries.",
      type: "CollectionPage",
    }),
    ...packages.map((travelPackage) => ({
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
    })),
  ];
}

export function getRentSchemas() {
  return [
    getWebPageSchema({
      path: "/rent",
      name: "Vehicle Rentals With Driver For Northern Pakistan Travel",
      description:
        "Vehicle rental page covering sedans, SUVs, vans, and group transport with driver for Northern Pakistan travel.",
      type: "CollectionPage",
    }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Vehicle rental with driver",
      provider: {
        "@type": "TravelAgency",
        name: business.name,
        url: siteSettings.siteUrl,
      },
      areaServed: business.areaServed,
      serviceType: "Private transport for tours, transfers, and Northern Pakistan road trips",
      url: absoluteUrl("/rent"),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Rental fleet",
        itemListElement: rentalsCatalog.map((rental) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: rental.name,
            description: rental.description,
          },
        })),
      },
    },
  ];
}

export function getAboutPageSchema() {
  return getWebPageSchema({
    path: "/about",
    name: "About Abid Tour & Travels",
    description:
      "About page for Abid Tour & Travels covering route planning, private transport coordination, and Northern Pakistan travel guidance.",
    type: "AboutPage",
  });
}

export function getContactPageSchema() {
  return {
    ...getWebPageSchema({
      path: "/contact",
      name: "Contact Abid Tour & Travels",
      description:
        "Contact page for Abid Tour & Travels with phone, email, and office location details for Northern Pakistan bookings.",
      type: "ContactPage",
    }),
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
    lastModified: destination.lastUpdated,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
}
