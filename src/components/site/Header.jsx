"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerHeightClassName = "h-[73px]";

export function Header({ navigation, phoneDisplay }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const isTransparent = isHomePage && !isScrolled;
  const headerClassName = isTransparent
    ? "border-transparent bg-transparent text-white"
    : "border-b border-navy-100 bg-white text-navy-900 shadow-[0_14px_30px_-24px_rgba(9,20,40,0.28)]";
  const brandTextClassName = isTransparent ? "text-white" : "text-navy-900";
  const eyebrowClassName = isTransparent ? "text-white/72" : "text-slate-500";
  const brandMarkClassName = isTransparent
    ? "bg-white/10 text-gold-300 ring-1 ring-white/18"
    : "bg-navy-900 text-gold-300";
  const navLinkClassName = isTransparent
    ? "rounded-full px-4 py-2 text-sm font-semibold text-white/88 transition hover:bg-white/10 hover:text-white"
    : "rounded-full px-4 py-2 text-sm font-semibold text-navy-800 transition hover:bg-navy-50 hover:text-gold-600";
  const phoneClassName = isTransparent ? "text-sm font-semibold text-white/80" : "text-sm font-semibold text-slate-600";
  const menuButtonClassName = isTransparent
    ? "rounded-full border border-white/18 bg-white/8 px-4 py-2 text-sm font-bold text-white"
    : "rounded-full border border-navy-200 px-4 py-2 text-sm font-bold text-navy-800";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClassName}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className={`flex items-center gap-3 no-underline ${brandTextClassName}`}>
            <span className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black ${brandMarkClassName}`}>
              AT
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg font-black">Abid Tour & Travels</span>
              <span className={`block text-[11px] font-semibold uppercase tracking-[0.2em] ${eyebrowClassName}`}>
                Northern Pakistan Routes
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClassName}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${phoneDisplay.replace(/\s+/g, "")}`} className={phoneClassName}>
              {phoneDisplay}
            </a>
            <Link href="/contact" className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 hover:bg-gold-400">
              Plan My Trip
            </Link>
          </div>

          <details className="group lg:hidden">
            <summary className={menuButtonClassName}>Menu</summary>
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
      <div aria-hidden="true" className={isHomePage ? "h-0" : headerHeightClassName} />
    </>
  );
}
