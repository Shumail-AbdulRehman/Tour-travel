import Image from "next/image";
import Link from "next/link";

export function DestinationCard({ destination, priority = false }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
      <Link href={destination.href} className="block no-underline">
        <div className="relative h-64">
          <Image
            src={destination.image}
            alt={destination.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-2xl font-black text-white">{destination.name}</h3>
            <p className="mt-2 text-sm leading-6 text-white/82">{destination.subtitle}</p>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <p className="text-sm leading-7 text-slate-600">{destination.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Best time: {destination.bestTime}
          </span>
          <Link href={destination.href} className="text-sm font-bold text-gold-700 hover:text-navy-900">
            Explore guide →
          </Link>
        </div>
      </div>
    </article>
  );
}
