import Link from "next/link";
import { BrandLogo } from "./BrandLogo.jsx";

export function Footer({ business, navigation }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 px-4 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-12 w-12 shrink-0" dark />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-300">Abid Tour & Travels</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">Northern Pakistan Routes</p>
            </div>
          </div>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-black">Private route planning built for real northern travel days.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            Book Northern Pakistan tours, family travel packages, honeymoon routes, and vehicle rentals with a team that
            keeps pacing, logistics, and comfort in view from the first inquiry onward.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${business.phone}`}
              className="rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-900 no-underline hover:bg-gold-400"
            >
              Call {business.phoneDisplay}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white no-underline hover:border-white/30"
            >
              Email the booking desk
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">Explore</h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href={`tel:${business.phone}`} className="hover:text-white">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
              </li>
              <li>
                <a href={business.mapUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                  {business.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/55">
        © {year} {business.name}. Northern Pakistan tours, travel packages, and rentals from Rawalpindi.
      </div>
    </footer>
  );
}
