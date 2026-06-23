import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อช็อป Workshop Shirt - ทอฟฟี่ บูติก",
  description: "เสื้อช็อปพนักงานโรงงาน เสื้อแขนสั้นชุดฟอร์ม ดีไซน์มาตรฐาน แข็งแรง ทนทาน โดย บริษัท ทอฟฟี่ บูติก จำกัด",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Workshop Shirt - เสื้อช็อปพนักงาน",
  description: "เสื้อช็อปพนักงานโรงงาน เสื้อแขนสั้นชุดฟอร์ม ดีไซน์มาตรฐาน",
  url: "https://tfb.co.th/pages/collection/workshop/",
  brand: { "@type": "Brand", name: "Toffy Boutique" },
  manufacturer: { "@type": "Organization", name: "บริษัท ทอฟฟี่ บูติก จำกัด" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "THB" },
  },
};

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}