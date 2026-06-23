import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อคอกลม T-Shirt Collection - ทอฟฟี่ บูติก",
  description: "รวมดีไซน์เสื้อคอกลมคุณภาพพรีเมียม เลือกสรรชุดสีที่โดดเด่นสำหรับองค์กรคุณ โดย บริษัท ทอฟฟี่ บูติก จำกัด",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "T-Shirt Collection - เสื้อคอกลม",
  description: "รวมดีไซน์เสื้อคอกลมคุณภาพพรีเมียม สำหรับองค์กร",
  url: "https://tfb.co.th/pages/collection/t-shirt/",
  brand: { "@type": "Brand", name: "Toffy Boutique" },
  manufacturer: { "@type": "Organization", name: "บริษัท ทอฟฟี่ บูติก จำกัด" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "THB" },
  },
};

export default function TShirtLayout({ children }: { children: React.ReactNode }) {
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
