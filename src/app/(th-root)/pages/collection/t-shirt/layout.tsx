import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แบบเสื้อคอกลม T-Shirt Collection - ทอฟฟี่ บูติก",
  description: "รวมดีไซน์เสื้อคอกลมคุณภาพพรีเมียม เลือกสรรชุดสีที่โดดเด่นสำหรับองค์กรคุณ โดย บริษัท ทอฟฟี่ บูติก จำกัด",
};

export default function TShirtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
