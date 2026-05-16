import Link from "next/link";

export function Header({ navigation, phoneDisplay }) {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-navy-900 no-underline">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-sm font-black text-gold-300">
            AT
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-black">Abid Tour & Travels</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Northern Pakistan Routes
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-navy-800 transition hover:bg-navy-50 hover:text-gold-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${phoneDisplay.replace(/\s+/g, "")}`} className="text-sm font-semibold text-slate-600">
            {phoneDisplay}
          </a>
          <Link href="/contact" className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 hover:bg-gold-400">
            Plan My Trip
          </Link>
        </div>

        <details className="group lg:hidden">
          <summary className="rounded-full border border-navy-200 px-4 py-2 text-sm font-bold text-navy-800">
            Menu
          </summary>
          <div className="absolute right-4 top-[72px] w-[min(20rem,calc(100vw-2rem))] rounded-3xl border border-navy-100 bg-white p-4 shadow-2xl shadow-navy-900/10">
            <nav aria-label="Mobile" className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-navy-800 transition hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${phoneDisplay.replace(/\s+/g, "")}`}
                className="rounded-2xl border border-navy-100 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                Call {phoneDisplay}
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
