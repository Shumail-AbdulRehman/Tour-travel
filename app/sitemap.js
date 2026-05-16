import { getLocationsSitemapEntries } from "../src/lib/seo.js";
import { absoluteUrl } from "../src/lib/seo.js";
import { siteSettings } from "../src/lib/site-content.js";

export default function sitemap() {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: siteSettings.lastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/locations"),
      lastModified: siteSettings.lastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/packages"),
      lastModified: siteSettings.lastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/rent"),
      lastModified: siteSettings.lastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: siteSettings.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: siteSettings.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...getLocationsSitemapEntries(),
  ];
}
