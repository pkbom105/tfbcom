import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tfb.co.th";
  const lastModified = new Date();

  interface PageEntry {
    path: string;
    priority: number;
    changefreq: "weekly" | "monthly";
  }

  const pages: PageEntry[] = [
    // Homepage
    { path: "", priority: 1.0, changefreq: "weekly" },
    // Main pages
    { path: "/pages/aboutus", priority: 0.7, changefreq: "monthly" },
    { path: "/pages/catalog", priority: 0.8, changefreq: "weekly" },
    { path: "/pages/contact", priority: 0.7, changefreq: "monthly" },
    { path: "/pages/customer-review", priority: 0.6, changefreq: "monthly" },
    { path: "/pages/faq", priority: 0.8, changefreq: "monthly" },
    { path: "/pages/order", priority: 0.7, changefreq: "monthly" },
    { path: "/pages/our-customer", priority: 0.6, changefreq: "monthly" },
    { path: "/pages/past-collection", priority: 0.7, changefreq: "monthly" },
    { path: "/pages/process", priority: 0.8, changefreq: "monthly" },
    { path: "/pages/products1", priority: 0.6, changefreq: "monthly" },
    { path: "/pages/payment", priority: 0.6, changefreq: "monthly" },
    { path: "/pages/quotation", priority: 0.6, changefreq: "monthly" },
    { path: "/pages/ready-to-wear", priority: 0.7, changefreq: "monthly" },
    { path: "/pages/service", priority: 0.5, changefreq: "monthly" },
    { path: "/pages/sizespec", priority: 0.7, changefreq: "monthly" },
    { path: "/pages/work-sample", priority: 0.6, changefreq: "monthly" },
    // Collections
    { path: "/pages/collection/t-shirt", priority: 0.8, changefreq: "monthly" },
    { path: "/pages/collection/polo", priority: 0.8, changefreq: "monthly" },
    { path: "/pages/collection/shirt", priority: 0.8, changefreq: "monthly" },
    { path: "/pages/collection/mechanic", priority: 0.8, changefreq: "monthly" },
    { path: "/pages/collection/workshop", priority: 0.8, changefreq: "monthly" },
    { path: "/pages/collection/pants", priority: 0.8, changefreq: "monthly" },
    { path: "/pages/collection/arpon", priority: 0.8, changefreq: "monthly" },
  ];

  // Generate English versions by prefixing /en
  const enPages: PageEntry[] = pages
    .filter((p) => p.path !== "")
    .map((p) => ({
      ...p,
      path: `/en${p.path}`,
    }));
  enPages.unshift({ path: "/en", priority: 0.9, changefreq: "weekly" });

  const allPages = [...pages, ...enPages];

  return allPages.map(({ path, priority, changefreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: changefreq,
    priority,
  }));
}