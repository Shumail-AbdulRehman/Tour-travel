import Image from "next/image";

export function PageHero({ image, alt, eyebrow, title, description, priority = false }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative min-h-[22rem]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        <div className="page-hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-300">{eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-black leading-tight text-white sm:text-5xl">{title}</h1>
            {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-white/82">{description}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
