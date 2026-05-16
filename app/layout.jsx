import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { Footer } from "../src/components/site/Footer.jsx";
import { Header } from "../src/components/site/Header.jsx";
import { StructuredData } from "../src/components/site/StructuredData.jsx";
import { WhatsAppButton } from "../src/components/site/WhatsAppButton.jsx";
import { business, primaryNavigation, siteSettings } from "../src/lib/site-content.js";
import { getGlobalSchemas } from "../src/lib/seo.js";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteSettings.siteUrl),
  title: {
    default: "Northern Pakistan Tours, Travel Packages & Vehicle Rentals",
    template: "%s | Abid Tour & Travels",
  },
  description:
    "Plan Northern Pakistan tours, Skardu trips, Hunza holidays, family travel packages, honeymoon routes, and private vehicle rentals with Abid Tour & Travels.",
  applicationName: business.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: business.name,
    title: "Northern Pakistan Tours, Travel Packages & Vehicle Rentals",
    description:
      "Private tours, scenic travel packages, and reliable car rentals for Skardu, Hunza, Swat, Kashmir, and more.",
    url: siteSettings.siteUrl,
    images: [
      {
        url: "/images/hero-video-poster.webp",
        width: 1200,
        height: 630,
        alt: "Snow-covered mountain valley in Northern Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northern Pakistan Tours, Travel Packages & Vehicle Rentals",
    description:
      "Private tours, scenic travel packages, and reliable car rentals for Skardu, Hunza, Swat, Kashmir, and more.",
    images: ["/images/hero-video-poster.webp"],
  },
  category: "travel",
  keywords: [
    "Northern Pakistan tours",
    "Skardu tour packages",
    "Hunza valley tours",
    "Pakistan honeymoon tours",
    "family travel packages Pakistan",
    "travel agency Rawalpindi",
    "Pakistan vehicle rental with driver",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const schemas = getGlobalSchemas();

  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="bg-navy-50 font-body text-slate-900 antialiased">
        <a
          href="#main-content"
          className="sr-only absolute left-4 top-4 z-[100] rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 focus:not-sr-only"
        >
          Skip to content
        </a>
        <StructuredData data={schemas} />
        <div className="flex min-h-screen flex-col">
          <Header navigation={primaryNavigation} phoneDisplay={business.phoneDisplay} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <WhatsAppButton phone={business.whatsappNumber} />
          <Footer business={business} navigation={primaryNavigation} />
        </div>
      </body>
    </html>
  );
}
