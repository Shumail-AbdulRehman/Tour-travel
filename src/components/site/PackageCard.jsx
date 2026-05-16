import Image from "next/image";
import Link from "next/link";
import { DiscountCornerBadge } from "../DiscountCornerBadge.jsx";

export function PackageCard({ travelPackage, showPrice = true }) {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
      <DiscountCornerBadge value={travelPackage.discountPercent} />
      <div className="relative h-52">
        <Image
          src={travelPackage.image}
          alt={travelPackage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-black text-navy-900">{travelPackage.name}</h3>
            <p className="mt-1 text-sm font-semibold text-slate-500">{travelPackage.duration}</p>
          </div>
          {travelPackage.popular ? (
            <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
              Popular
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{travelPackage.description}</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-600">
          {travelPackage.audiences.map((audience) => (
            <li key={audience}>• {audience}</li>
          ))}
        </ul>
        <div className={`mt-6 flex items-center gap-4 ${showPrice ? "justify-between" : "justify-end"}`}>
          {showPrice ? <p className="font-display text-lg font-black text-navy-700">{travelPackage.price}</p> : null}
          <Link href={travelPackage.href} className="text-sm font-bold text-gold-700 hover:text-navy-900">
            Request quote →
          </Link>
        </div>
      </div>
    </article>
  );
}
