import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { IconFeature } from "../components/IconFeature.jsx";
import { LocationPackageCard } from "../components/LocationPackageCard.jsx";
import { RentCard } from "../components/RentCard.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { hero, pageImages, popularLocationPackages, reasons, rentals } from "../data/siteData.js";

export function HomePage() {
  return (
    <section id="page-home">
      <Hero />
      <PopularPackages />
      <FeaturedRentals />
      <WhyChooseUs />
      <CtaBanner />
    </section>
  );
}

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {hero.video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster={hero.image}
          aria-label={hero.alt}
          loop
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      ) : (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          src={hero.image}
          alt={hero.alt}
        />
      )}
      <div className="hero-overlay absolute inset-0"></div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="slide-in mb-4 text-sm font-bold uppercase tracking-widest text-gold-400">{hero.tagline}</p>
        <h1
          className="slide-in mb-6 max-w-4xl font-display text-[44px] font-black leading-tight text-white sm:text-[48px]"
          style={{ animationDelay: "0.2s" }}
        >
          {hero.title}
        </h1>
        <a
          href={hero.ctaHref}
          className="slide-in mt-2 inline-block rounded-full bg-gold-500 px-8 py-4 font-bold text-navy-900 transition-all hover:scale-105 hover:bg-gold-400"
          style={{ animationDelay: "0.6s" }}
        >
          {hero.ctaLabel}
        </a>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="bg-navy-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Why Choose Us" title="Your Adventure, Our Expertise" className="mb-10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <IconFeature key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PopularPackages() {
  const featuredPackages = popularLocationPackages.slice(0, 3);

  return (
    <div className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Popular Packages"
          title="Traveler Favorites From Our Packages"
          description="Explore our most-booked destination packages before diving into the full collection."
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPackages.map((locationPackage) => (
            <LocationPackageCard key={locationPackage.id} locationPackage={locationPackage} />
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <a
            href="#packages"
            className="inline-flex rounded-full bg-navy-800 px-8 py-3 font-bold text-white transition hover:bg-navy-700"
          >
            Explore More Packages
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}

function FeaturedRentals() {
  const featuredRentalIds = ["prado", "land-cruiser", "grand-cabin"];
  const featuredRentals = featuredRentalIds.map((id) => rentals.find((rental) => rental.id === id)).filter(Boolean);

  return (
    <div className="bg-navy-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Rental Cars"
          title="Reliable Vehicles for Every Route"
          description="Choose comfortable private transport for family trips, city transfers, events, and group tours."
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredRentals.map((rental) => (
            <RentCard key={rental.id} rental={rental} />
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <a
            href="#rent"
            className="inline-flex rounded-full bg-navy-800 px-8 py-3 font-bold text-white transition hover:bg-navy-700"
          >
            Explore More Rental Cars
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <div className="relative px-4 py-20">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        src={pageImages.ctaBackground.src}
        alt={pageImages.ctaBackground.alt}
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/60"></div>
      <AnimatedSection className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="mb-4 font-display text-[24px] font-black text-white">Ready to Start Your Journey?</h2>
        <p className="mx-auto mb-8 max-w-xl text-white/80">
          Book your dream Northern Pakistan adventure today and experience the magic firsthand.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full bg-gold-500 px-8 py-4 font-bold text-navy-900 transition-all hover:scale-105 hover:bg-gold-400"
        >
          Plan My Trip
        </a>
      </AnimatedSection>
    </div>
  );
}
