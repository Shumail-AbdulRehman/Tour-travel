import { DiscountCornerBadge } from "./DiscountCornerBadge.jsx";

export function PackageCard({ tourPackage }) {
  return (
    <article
      className={`fade-up relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ${
        tourPackage.popular ? "border-2 border-gold-500" : ""
      }`}
    >
      <DiscountCornerBadge value={tourPackage.discountPercent} />
      {tourPackage.popular ? <PopularBadge /> : null}
      <div className="relative h-48">
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          src={tourPackage.image}
          alt={tourPackage.alt}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[19px] font-bold text-navy-800">{tourPackage.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{tourPackage.duration}</p>
        <p className="mt-3 flex-1 text-sm text-gray-600">{tourPackage.description}</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <p className="font-display text-base font-bold text-navy-600">{tourPackage.price}</p>
          <a href="#contact" className="text-sm font-bold text-gold-500 transition hover:text-gold-600">
            Book Now {"\u2192"}
          </a>
        </div>
      </div>
    </article>
  );
}

function PopularBadge() {
  return (
    <div className="absolute left-4 top-4 z-20 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-navy-900 shadow-sm">
      Most Popular
    </div>
  );
}
