import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อเชิ้ต Shirt Collection - ทอฟฟี่ บูติก",
  description: "เสื้อเชิ้ตพนักงาน ชุดฟอร์มสำนักงาน คุณภาพพรีเมียม รีดง่าย สวมใส่สบาย โดย บริษัท ทอฟฟี่ บูติก จำกัด",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Shirt Collection - เสื้อเชิ้ตพนักงาน",
  description: "เสื้อเชิ้ตพนักงาน ชุดฟอร์มสำนักงาน คุณภาพพรีเมียม",
  url: "https://tfb.co.th/pages/collection/shirt/",
  brand: { "@type": "Brand", name: "Toffy Boutique" },
  manufacturer: { "@type": "Organization", name: "บริษัท ทอฟฟี่ บูติก จำกัด" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "THB" },
  },
};

export default function ShirtLayout({ children }: { children: React.ReactNode }) {
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