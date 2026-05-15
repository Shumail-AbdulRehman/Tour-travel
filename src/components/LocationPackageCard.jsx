import { DiscountCornerBadge } from "./DiscountCornerBadge.jsx";

export function LocationPackageCard({ locationPackage }) {
  return (
    <article className="fade-up flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative h-56">
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          src={locationPackage.image}
          alt={locationPackage.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
        <DiscountCornerBadge value={locationPackage.discountPercent} />
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-navy-900 shadow-sm">
          {locationPackage.badge}
        </span>
        <div className="absolute bottom-4 left-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-300">{locationPackage.location}</p>
          <h3 className="mt-1 font-display text-2xl font-bold text-white">{locationPackage.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-bold text-navy-600">{locationPackage.duration}</p>
        <p className="mt-3 flex-1 text-sm text-gray-600">{locationPackage.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {locationPackage.highlights.map((highlight) => (
            <li key={highlight} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700">
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-navy-900 transition hover:bg-gold-400"
          >
            Book Now
          </a>
          <a href={locationPackage.detailHref} className="text-sm font-bold text-gold-600 transition hover:text-navy-700">
            View details {"\u2192"}
          </a>
        </div>
      </div>
    </article>
  );
}
