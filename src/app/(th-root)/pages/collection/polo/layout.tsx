import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อโปโล Polo Collection - ทอฟฟี่ บูติก",
  description: "แบบเสื้อโปโลพนักงาน ยูนิฟอร์มพนักงาน ดีไซน์ทันสมัย เนื้อผ้าคุณภาพสูง ผลิตโดยผู้เชี่ยวชาญ ทอฟฟี่ บูติก",
};

export default function PoloLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
