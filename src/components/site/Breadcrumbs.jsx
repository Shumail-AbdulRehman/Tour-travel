import Link from "next/link";
import { StructuredData } from "./StructuredData.jsx";
import { getBreadcrumbSchema } from "../../lib/seo.js";

export function Breadcrumbs({ items }) {
  return (
    <>
      <StructuredData data={getBreadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-5 text-sm sm:px-6">
        <ol className="flex flex-wrap items-center gap-2 text-slate-500">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index < items.length - 1 ? (
                <Link href={item.href} className="hover:text-navy-800">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-navy-900">{item.label}</span>
              )}
              {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
