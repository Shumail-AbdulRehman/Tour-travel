import { DiscountCornerBadge } from "./DiscountCornerBadge.jsx";

export function TourPlanCard({ plan }) {
  return (
    <article className="tour-plan-card fade-up relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="relative h-52 w-full">
        <img className="h-full w-full object-cover" loading="lazy" decoding="async" src={plan.image} alt={plan.alt} />
        <DiscountCornerBadge value={plan.discountPercent} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold-500">{plan.duration}</p>
        <h4 className="font-bold text-navy-800">{plan.name}</h4>
        <p className="mt-3 flex-1 text-sm text-gray-600">{plan.description}</p>
        <a
          href="#contact"
          className="mt-5 inline-flex w-fit rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-navy-900 transition hover:bg-gold-400"
        >
          Book Now
        </a>
      </div>
    </article>
  );
}
