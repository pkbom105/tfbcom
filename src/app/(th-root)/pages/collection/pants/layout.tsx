import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบกางเกง Pants Collection - ทอฟฟี่ บูติก",
  description: "กางเกงพนักงาน กางเกงสแล็ค กางเกงช่าง ดีไซน์เนี๊ยบ เนื้อผ้าคุณภาพเยี่ยม สวมใส่สบายทุกอิริยาบถ โดย ทอฟฟี่ บูติก",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Pants Collection - กางเกงพนักงาน",
  description: "กางเกงพนักงาน กางเกงสแล็ค กางเกงช่าง เนื้อผ้าคุณภาพเยี่ยม",
  url: "https://tfb.co.th/pages/collection/pants/",
  brand: { "@type": "Brand", name: "Toffy Boutique" },
  manufacturer: { "@type": "Organization", name: "บริษัท ทอฟฟี่ บูติก จำกัด" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "THB" },
  },
};

export default function PantsLayout({ children }: { children: React.ReactNode }) {
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