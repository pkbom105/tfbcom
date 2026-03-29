import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบผ้ากันเปื้อน Arpon Collection - ทอฟฟี่ บูติก",
  description: "ผ้ากันเปื้อนดีไซน์ทันสมัย สำหรับร้านอาหาร คาเฟ่ และการใช้งานทั่วไป คุณภาพพรีเมียมจาก Toffy Boutique Selection",
};

export default function ArponLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
