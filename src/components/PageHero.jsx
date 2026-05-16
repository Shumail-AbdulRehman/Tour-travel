export function PageHero({ image, eyebrow, title, description }) {
  return (
    <div className="relative min-h-[320px] w-full" style={{ height: "50vh" }}>
      <img
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        src={image.src}
        alt={image.alt}
      />
      <div className="page-hero-overlay absolute inset-0"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12 text-center">
        <p className="mb-3 text-[13px] font-bold uppercase tracking-widest text-gold-400">{eyebrow}</p>
        <h1 className="font-display text-[32px] font-black text-white">{title}</h1>
        {description ? <p className="mt-3 max-w-2xl text-white/80">{description}</p> : null}
      </div>
    </div>
  );
}
