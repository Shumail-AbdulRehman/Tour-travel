import { AnimatedSection } from "./AnimatedSection.jsx";

export function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <AnimatedSection className={`text-center ${className}`}>
      <p className="mb-2 text-[13px] font-bold uppercase tracking-widest text-gold-500">{eyebrow}</p>
      <h2 className="font-display text-[24px] font-black text-navy-800">{title}</h2>
      {description ? <p className="mx-auto mt-3 max-w-2xl text-gray-500">{description}</p> : null}
    </AnimatedSection>
  );
}
