import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อช็อป Engineer Jacket - ทอฟฟี่ บูติก",
  description: "เสื้อช็อปวิศวกร เสื้อกาวน์โรงงาน ดีไซน์ปลอดภัย กระเป๋าอเนกประสงค์ ผลิตด้วยเนื้อผ้าทนทาน โดย ทอฟฟี่ บูติก",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Engineer Jacket - เสื้อช็อปวิศวกร",
  description: "เสื้อช็อปวิศวกร เสื้อกาวน์โรงงาน ดีไซน์ปลอดภัย กระเป๋าอเนกประสงค์",
  url: "https://tfb.co.th/pages/collection/mechanic/",
  brand: { "@type": "Brand", name: "Toffy Boutique" },
  manufacturer: { "@type": "Organization", name: "บริษัท ทอฟฟี่ บูติก จำกัด" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "THB" },
  },
};

export default function MechanicLayout({ children }: { children: React.ReactNode }) {
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