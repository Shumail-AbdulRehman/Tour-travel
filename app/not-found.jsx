import Link from "next/link";
import { buildMetadata } from "../src/lib/seo.js";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "The page you requested could not be found. Explore destinations, travel packages, and contact options from Abid Tour & Travels.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="px-4 py-28">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-xl shadow-navy-900/10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">404</p>
        <h1 className="mt-4 font-display text-4xl font-black text-navy-900">This route does not exist.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page may have moved, or the link may be outdated. Use the routes below to continue browsing real travel
          pages that are optimized for search and booking intent.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-gold-500 px-6 py-3 font-bold text-navy-900 hover:bg-gold-400">
            Return Home
          </Link>
          <Link
            href="/locations"
            className="rounded-full border border-navy-200 bg-white px-6 py-3 font-bold text-navy-800 hover:border-navy-300"
          >
            Browse Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
