export function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const width = align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl";

  return (
    <div className={`${alignment} ${width}`}>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-600">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-black text-navy-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
