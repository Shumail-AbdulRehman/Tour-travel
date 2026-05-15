import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { Car, Compass, MapPin, ShieldCheck, Users } from "lucide-react";
import { pageImages } from "../data/siteData.js";

const trustHighlights = [
  {
    title: "Local Route Knowledge",
    description: "Real guidance on travel times, road conditions, hotel areas, viewpoints, and realistic daily pacing.",
    icon: MapPin,
  },
  {
    title: "Private Trip Planning",
    description: "Every plan is adjusted around your group size, comfort level, dates, budget, and preferred travel style.",
    icon: Compass,
  },
  {
    title: "Reliable Transport",
    description: "Cars, vans, SUVs, and group vehicles are matched to the route so the journey feels safe and practical.",
    icon: Car,
  },
  {
    title: "Clear Support",
    description: "Straightforward communication before and during the trip, with driver coordination and quick updates.",
    icon: ShieldCheck,
  },
];

const planningSteps = [
  {
    step: "01",
    title: "Understand the Trip",
    description: "We confirm dates, travelers, pickup point, must-see places, comfort needs, and the kind of pace you want.",
  },
  {
    step: "02",
    title: "Shape the Route",
    description: "We build a clean itinerary with realistic drives, good stop timing, vehicle fit, and hotel suggestions.",
  },
  {
    step: "03",
    title: "Run It Properly",
    description: "Drivers, guides, route changes, and daily details are coordinated so you can focus on the experience.",
  },
];

const quickFacts = [
  { value: "500+", label: "Travelers Hosted" },
  { value: "10+", label: "Featured Destinations" },
  { value: "11", label: "Rental Vehicle Options" },
];

export function AboutPage() {
  return (
    <section id="page-about" className="overflow-hidden bg-navy-50">
      <div className="relative px-4 pb-20 pt-28">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl"></div>
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-navy-300/30 blur-3xl"></div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedSection>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-widest text-gold-600">About Abid Tour & Travels</p>
            <h1 className="max-w-3xl font-display text-[38px] font-black leading-tight text-navy-900 sm:text-[48px]">
              Travel Planning Built by People Who Know the Route
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-600">
              We design private tours, family holidays, group trips, and vehicle rentals with practical route knowledge,
              clear communication, and reliable coordination from first message to final drop-off.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Whether you want Skardu, Hunza, Swat, Naran Kaghan, a city transfer, or a custom plan, we shape the
              itinerary around your time, people, comfort, and budget.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gold-500 px-7 py-3 font-bold text-navy-900 transition hover:bg-gold-400"
              >
                Plan My Trip
              </a>
              <a
                href="#packages"
                className="rounded-full border border-navy-800/15 bg-white px-7 py-3 font-bold text-navy-800 transition hover:border-navy-800/30"
              >
                View Packages
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-display text-[23px] font-black text-navy-900">{fact.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{fact.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-300/30 to-navy-300/20 blur-xl"></div>
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-navy-900/15">
              <img
                className="h-[460px] w-full rounded-[1.4rem] object-cover"
                loading="lazy"
                src={pageImages.about.src}
                alt={pageImages.about.alt}
                decoding="async"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-navy-900/90 p-5 text-white backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">Field Tested Planning</p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Real route decisions, reliable drivers, flexible pacing, and cleaner travel days for every group.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-widest text-gold-600">Why Travel With Us</p>
            <h2 className="font-display text-[30px] font-black text-navy-900">Clean Plans, Safer Routes, Better Days</h2>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustHighlights.map((item) => (
              <AnimatedSection key={item.title} as="article" className="rounded-3xl border border-navy-100 bg-navy-50/70 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy-800 shadow-sm">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-navy-900 px-4 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <AnimatedSection>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-widest text-gold-400">How We Work</p>
            <h2 className="font-display text-[30px] font-black">From First Message to Final Drop-off</h2>
            <p className="mt-5 leading-7 text-white/75">
              Good travel feels simple because the details are handled early. We keep the planning practical, transparent,
              and flexible enough for real road conditions.
            </p>
          </AnimatedSection>

          <div className="grid gap-4">
            {planningSteps.map((item) => (
              <AnimatedSection key={item.step} as="article" className="grid gap-4 rounded-3xl bg-white/10 p-5 sm:grid-cols-[auto_1fr]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 font-display text-lg font-black text-navy-900">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-2 leading-6 text-white/70">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-16">
        <AnimatedSection className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-xl shadow-navy-900/10 sm:p-10">
          <Users className="mx-auto mb-4 h-10 w-10 text-gold-500" aria-hidden="true" />
          <h2 className="font-display text-[28px] font-black text-navy-900">Tell Us Where You Want to Go</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Share your dates, group size, preferred vehicle, and destination. We will suggest a route that fits your time
            and keeps the trip comfortable.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-navy-800 px-8 py-3 font-bold text-white transition hover:bg-navy-700"
          >
            Start Planning
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
