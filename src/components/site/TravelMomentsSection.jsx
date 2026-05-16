import Image from "next/image";
import { TripVideoCard } from "./TripVideoCard.jsx";

export function TravelMomentsSection({ items, video }) {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:py-28">
      <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-[140%] rounded-full bg-gold-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="max-w-xl pt-2">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-600">On The Road</p>
            <h2 className="mt-5 max-w-lg text-[clamp(2.7rem,5vw,4.75rem)] font-black leading-[0.92] tracking-[-0.06em] text-navy-900">
              Real trip moments with the travelers who trusted us to take them north.
            </h2>
            <div className="mt-8 max-w-lg border-t-2 border-navy-200 pt-6">
              <p className="text-[0.76rem] font-bold uppercase tracking-[0.24em] text-navy-900">Travel documentation</p>
              <div className="mt-5">
                <TripVideoCard src={video.src} poster={video.poster} title={video.title} />
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="group relative overflow-hidden rounded-[2rem] shadow-[0_28px_70px_-42px_rgba(9,20,40,0.34)] sm:col-span-2">
              <div className="relative aspect-[16/10]">
                <Image
                  src={items[0].src}
                  alt={items[0].alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </figure>

            {items.slice(1).map((item) => (
              <figure
                key={item.src}
                className="group relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-40px_rgba(9,20,40,0.32)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 21vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/12 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">{item.label}</p>
                    <p className="mt-2 max-w-[14rem] text-xl font-semibold leading-7 tracking-[-0.02em]">{item.title}</p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
