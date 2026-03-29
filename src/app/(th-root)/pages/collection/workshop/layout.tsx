import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อช็อป Workshop Shirt - ทอฟฟี่ บูติก",
  description: "เสื้อช็อปพนักงานโรงงาน เสื้อแขนสั้นชุดฟอร์ม ดีไซน์มาตรฐาน แข็งแรง ทนทาน โดย บริษัท ทอฟฟี่ บูติก จำกัด",
};

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
