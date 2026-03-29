import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบกางเกง Pants Collection - ทอฟฟี่ บูติก",
  description: "กางเกงพนักงาน กางเกงสแล็ค กางเกงช่าง ดีไซน์เนี๊ยบ เนื้อผ้าคุณภาพเยี่ยม สวมใส่สบายทุกอิริยาบถ โดย ทอฟฟี่ บูติก",
};

export default function PantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
