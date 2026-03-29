import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อเชิ้ต Shirt Collection - ทอฟฟี่ บูติก",
  description: "เสื้อเชิ้ตพนักงาน ชุดฟอร์มสำนักงาน คุณภาพพรีเมียม รีดง่าย สวมใส่สบาย โดย บริษัท ทอฟฟี่ บูติก จำกัด",
};

export default function ShirtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
