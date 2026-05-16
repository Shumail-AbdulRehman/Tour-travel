import Image from "next/image";
import Link from "next/link";
import { DiscountCornerBadge } from "../DiscountCornerBadge.jsx";

export function TourPlanCard({ plan }) {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
      <div className="relative h-56">
        <Image
          src={plan.image}
          alt={plan.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <DiscountCornerBadge value={plan.discountPercent} />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">{plan.duration}</p>
        <h3 className="mt-2 font-display text-2xl font-black text-navy-900">{plan.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{plan.description}</p>
        <Link href={plan.href} className="mt-5 inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 no-underline hover:bg-gold-400">
          Plan this trip
        </Link>
      </div>
    </article>
  );
}
