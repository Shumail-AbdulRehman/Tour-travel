export function IconFeature({ icon: Icon, title, description }) {
  return (
    <article className="fade-up rounded-2xl bg-white p-6 text-center shadow-md">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-100">
        <Icon className="h-7 w-7 text-navy-700" aria-hidden="true" />
      </div>
      <h3 className="text-[19px] font-bold text-navy-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </article>
  );
}
