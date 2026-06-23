import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบผ้ากันเปื้อน Arpon Collection - ทอฟฟี่ บูติก",
  description: "ผ้ากันเปื้อนดีไซน์ทันสมัย สำหรับร้านอาหาร คาเฟ่ และการใช้งานทั่วไป คุณภาพพรีเมียมจาก Toffy Boutique Selection",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Arpon Collection - ผ้ากันเปื้อน",
  description: "ผ้ากันเปื้อนดีไซน์ทันสมัย สำหรับร้านอาหาร คาเฟ่",
  url: "https://tfb.co.th/pages/collection/arpon/",
  brand: { "@type": "Brand", name: "Toffy Boutique" },
  manufacturer: { "@type": "Organization", name: "บริษัท ทอฟฟี่ บูติก จำกัด" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "THB" },
  },
};

export default function ArponLayout({ children }: { children: React.ReactNode }) {
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