export function RentCard({ rental, priority = false }) {
  return (
    <article className="rent-card fade-up flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative h-48">
        <img
          className="h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          src={rental.image}
          alt={rental.alt}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy-800">{rental.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{rental.seats}</p>
        <p className="mt-2 flex-1 text-sm text-gray-600">{rental.description}</p>
        <p className="mt-3 font-display text-base font-bold text-navy-600">{rental.price}</p>
        <a
          href="#contact"
          className="mt-3 inline-block rounded-full bg-gold-500 px-4 py-2 text-center text-sm font-bold text-navy-900 transition hover:bg-gold-400"
        >
          Inquire {"\u2192"}
        </a>
      </div>
    </article>
  );
}
