export function DestinationCard({ location }) {
  return (
    <a href={`#${location.page}`} className="loc-card fade-up block overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative h-64">
        <img className="h-full w-full object-cover" loading="lazy" decoding="async" src={location.image} alt={location.alt} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 font-display text-xl font-bold text-white">{location.name}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">{location.description}</p>
      </div>
    </a>
  );
}
