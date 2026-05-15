import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationLinks } from "../data/siteData.js";

export function Navbar({ activePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const shouldUseSolidNavbar = isScrolled || activePage === "about" || activePage === "contact";

  const navbarSurface = shouldUseSolidNavbar
    ? "border-gold-400/20 bg-navy-800/95 shadow-lg shadow-navy-900/20 backdrop-blur-sm"
    : "border-transparent bg-transparent";

  const mobileMenuSurface = shouldUseSolidNavbar ? "bg-navy-800/96" : "bg-navy-900/90 backdrop-blur-md";

  return (
    <nav
      id="main-nav"
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${navbarSurface}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-3" onClick={handleNavClick} aria-label="Abid Tours home">
          <BrandLogo isSolid={shouldUseSolidNavbar} />
          <span className="leading-none">
            <span className="block font-display text-[18px] font-black tracking-[-0.02em] text-white drop-shadow-sm">
              Abid <span className="text-gold-300">Tours</span>
            </span>
            <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.28em] text-white/55 sm:block">
              Travel Studio
            </span>
          </span>
        </a>

        <button
          type="button"
          className="text-white sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>

        <div id="nav-links" className="hidden items-center gap-3 sm:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.page}
              link={link}
              activePage={activePage}
              isTransparent={!shouldUseSolidNavbar}
              onClick={handleNavClick}
            />
          ))}
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${isMobileMenuOpen ? "block" : "hidden"} space-y-3 border-t border-gold-400/20 px-4 pb-4 transition-colors sm:hidden ${mobileMenuSurface}`}
      >
        {navigationLinks.map((link) => (
          <a
            key={link.page}
            href={link.href}
            onClick={handleNavClick}
            className={`block py-2 text-white/80 transition hover:text-gold-400 ${
              activePage === link.page ? "text-gold-400" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function BrandLogo({ isSolid }) {
  const logoSurface = isSolid
    ? "border-gold-400/35 bg-navy-900 shadow-lg shadow-navy-900/20"
    : "border-white/25 bg-navy-900/45 shadow-lg shadow-navy-900/20 backdrop-blur-md";

  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:border-gold-300 ${logoSurface}`}
    >
      <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M11 29.5L15.5 20.8C16.2 19.4 17.6 18.5 19.2 18.5H29.8C31.4 18.5 32.8 19.4 33.5 20.8L38 29.5"
          className="stroke-gold-300"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M12.7 29.2H35.3C37 29.2 38.4 30.6 38.4 32.3V34.9H9.6V32.3C9.6 30.6 11 29.2 12.7 29.2Z"
          className="fill-gold-400"
        />
        <path
          d="M18.9 21.9H29.1C30.1 21.9 31 22.5 31.5 23.4L33.3 27H14.7L16.5 23.4C17 22.5 17.9 21.9 18.9 21.9Z"
          className="fill-white"
          opacity="0.92"
        />
        <path
          d="M17.2 35.5C17.2 37 16 38.2 14.5 38.2C13 38.2 11.8 37 11.8 35.5"
          className="stroke-white"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M36.2 35.5C36.2 37 35 38.2 33.5 38.2C32 38.2 30.8 37 30.8 35.5"
          className="stroke-white"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M20 14.2C22.4 10.9 25.6 10.9 28 14.2"
          className="stroke-gold-300"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M24 10.2V16.2"
          className="stroke-white"
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}

function SavedMountainLogo({ isSolid }) {
  const logoSurface = isSolid
    ? "border-gold-400/35 bg-navy-900 shadow-lg shadow-navy-900/20"
    : "border-white/25 bg-navy-900/40 shadow-lg shadow-navy-900/20 backdrop-blur-md";

  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:border-gold-300 ${logoSurface}`}
    >
      <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M8 33.5L19.4 14.5L26.8 27.2L31.9 19.5L40 33.5H8Z"
          className="fill-gold-400"
        />
        <path
          d="M18.6 26.4L24 33.5H13.8L18.6 26.4Z"
          className="fill-white"
          opacity="0.92"
        />
        <path
          d="M15.5 36.2C20.2 32.7 26.9 32.6 34.5 36.2"
          className="stroke-white"
          strokeLinecap="round"
          strokeWidth="2.4"
          opacity="0.9"
        />
        <path
          d="M23.7 15.6L27.5 8.8L31.4 15.6"
          className="stroke-gold-300"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
        />
      </svg>
    </span>
  );
}

function NavLink({ link, activePage, isTransparent, onClick }) {
  const baseClass = "inline-flex items-center rounded-full px-3.5 py-2 text-[15px] font-semibold transition";
  const inactiveClass = isTransparent
    ? "text-white/90 hover:text-gold-300"
    : "bg-navy-900/20 text-white/90 hover:bg-white/12 hover:text-gold-300";
  const activeClass = isTransparent ? "text-gold-300" : "bg-white/14 text-gold-300";
  const ctaClass = "bg-gold-500 px-5 py-2.5 font-bold text-navy-900 shadow-lg shadow-navy-900/15 hover:bg-gold-400";

  return (
    <a
      href={link.href}
      onClick={onClick}
      className={`${baseClass} ${link.isCta ? ctaClass : activePage === link.page ? activeClass : inactiveClass}`}
    >
      {link.label}
    </a>
  );
}
