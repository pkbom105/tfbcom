import { getCatalogData } from "@/lib/catalog-data";
import CatalogClient from "./CatalogClient";

export default function CatalogPage({ lang }: { lang?: string }) {
  const catalogData = getCatalogData();

  if (catalogData.products.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600">Error: No catalog data found</p>
        </div>
      </div>
    );
  }

  return <CatalogClient catalogData={catalogData} lang={lang || "th"} />;
}