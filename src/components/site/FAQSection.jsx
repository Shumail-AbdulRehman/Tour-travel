export function FAQSection({ items }) {
  return (
    <div className="grid gap-5">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-[1.85rem] border border-navy-100/90 bg-white shadow-[0_20px_50px_-32px_rgba(9,20,40,0.28)] transition-colors duration-200 open:bg-navy-50/35"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-6 py-5 text-left sm:px-7 sm:py-6">
            <div className="flex min-w-0 items-start gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/14 text-sm font-bold tracking-[0.08em] text-gold-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-balance text-lg font-semibold leading-7 text-navy-900 sm:text-[1.3rem] sm:leading-8">
                {item.question}
              </span>
            </div>
            <span className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-900 shadow-sm shadow-navy-900/5">
              <span className="absolute h-0.5 w-4 rounded-full bg-current" />
              <span className="absolute h-4 w-0.5 rounded-full bg-current transition-transform duration-200 group-open:scale-y-0" />
            </span>
          </summary>
          <div className="px-6 pb-6 sm:px-7">
            <div className="mb-4 ml-[3.25rem] h-px bg-navy-100" />
            <p className="ml-[3.25rem] max-w-4xl text-[0.98rem] leading-8 text-slate-600 sm:text-base">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
