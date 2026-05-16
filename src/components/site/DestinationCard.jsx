import Image from "next/image";
import Link from "next/link";

export function DestinationCard({ destination, priority = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_60px_-34px_rgba(9,20,40,0.3)] ring-1 ring-navy-100/90 transition-transform duration-300 hover:-translate-y-1">
      <Link href={destination.href} className="block no-underline">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/36 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300/95">{destination.subtitle}</p>
            <h3 className="mt-3 font-display text-[2rem] font-black leading-none text-white sm:text-[2.2rem]">{destination.name}</h3>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[1rem] leading-8 text-slate-600">{destination.summary}</p>
        <div className="mt-6 flex flex-1 items-end justify-between gap-5 border-t border-navy-100 pt-5">
          <div className="min-w-0">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-slate-500">Best season</p>
            <p className="mt-2 max-w-[18rem] text-sm font-medium leading-6 text-navy-800">{destination.bestTime}</p>
          </div>
          <Link
            href={destination.href}
            className="inline-flex shrink-0 items-center rounded-full bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white no-underline transition-colors duration-200 hover:bg-navy-800"
          >
            Explore guide
          </Link>
        </div>
      </div>
    </article>
  );
}
