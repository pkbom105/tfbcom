import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อโปโล Polo Collection - ทอฟฟี่ บูติก",
  description: "แบบเสื้อโปโลพนักงาน ยูนิฟอร์มพนักงาน ดีไซน์ทันสมัย เนื้อผ้าคุณภาพสูง ผลิตโดยผู้เชี่ยวชาญ ทอฟฟี่ บูติก",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Polo Collection - เสื้อโปโลพนักงาน",
  description: "แบบเสื้อโปโลพนักงาน ยูนิฟอร์มพนักงาน ดีไซน์ทันสมัย",
  url: "https://tfb.co.th/pages/collection/polo/",
  brand: { "@type": "Brand", name: "Toffy Boutique" },
  manufacturer: { "@type": "Organization", name: "บริษัท ทอฟฟี่ บูติก จำกัด" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "THB" },
  },
};

export default function PoloLayout({ children }: { children: React.ReactNode }) {
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
