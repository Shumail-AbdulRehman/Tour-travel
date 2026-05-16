import Image from "next/image";
import Link from "next/link";

export function RentCard({ rental, priority = false }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
      <div className="relative h-48">
        <Image
          src={rental.image}
          alt={rental.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black text-navy-900">{rental.name}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-500">{rental.seats}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600">{rental.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="font-display text-base font-black text-navy-700">{rental.price}</p>
          <Link href={rental.href} className="text-sm font-bold text-gold-700 hover:text-navy-900">
            Ask now →
          </Link>
        </div>
      </div>
    </article>
  );
}
