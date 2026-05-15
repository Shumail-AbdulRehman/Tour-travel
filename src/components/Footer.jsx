import { contactDetails } from "../data/siteData.js";

export function Footer() {
  return (
    <footer className="bg-navy-800 px-4 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-6 flex flex-col items-center justify-center gap-4 text-white/75 lg:flex-row lg:gap-8">
          {contactDetails.map(({ label, icon: Icon, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="inline-flex max-w-2xl items-center justify-center gap-2 text-sm font-medium transition hover:text-gold-400"
            >
              <Icon className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-white/60">
            {"\u00A9"} 2026 Abid Tour & Travels. All rights reserved. Made with {"\u2764\uFE0F"} in Gilgit-Baltistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
