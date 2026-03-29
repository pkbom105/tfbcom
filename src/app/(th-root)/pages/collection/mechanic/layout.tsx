import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อช็อป Engineer Jacket - ทอฟฟี่ บูติก",
  description: "เสื้อช็อปวิศวกร เสื้อกาวน์โรงงาน ดีไซน์ปลอดภัย กระเป๋าอเนกประสงค์ ผลิตด้วยเนื้อผ้าทนทาน โดย ทอฟฟี่ บูติก",
};

export default function MechanicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
