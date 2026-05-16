import Image from "next/image";
import Link from "next/link";
import { DiscountCornerBadge } from "../DiscountCornerBadge.jsx";

export function LocationPackageCard({ travelPackage, priority = false }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
      <div className="relative h-56">
        <Image
          src={travelPackage.image}
          alt={travelPackage.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 to-transparent" />
        <DiscountCornerBadge value={travelPackage.discountPercent} />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-900">
          {travelPackage.badge}
        </span>
        <div className="absolute bottom-4 left-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">{travelPackage.location}</p>
          <h3 className="mt-1 font-display text-2xl font-black text-white">{travelPackage.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-bold text-navy-700">{travelPackage.duration}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600">{travelPackage.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {travelPackage.highlights.map((highlight) => (
            <li key={highlight} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={travelPackage.href} className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-800">
            View destination
          </Link>
          <Link href={travelPackage.contactHref} className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 hover:bg-gold-400">
            Ask about this package
          </Link>
        </div>
      </div>
    </article>
  );
}
