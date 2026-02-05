import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import { Navbar } from "@/components/Navbar";

/**
 * 1. Initialize Noto Sans Thai Font
 * กำหนดค่าฟอนต์และสร้าง CSS Variable เพื่อนำไปใช้ใน Tailwind
 */
const notoColorThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-thai",
  display: "swap", // ช่วยให้ข้อความแสดงผลได้เร็วขึ้นขณะรอโหลดฟอนต์
});

/**
 * 2. Metadata Configuration (SEO)
 */
export const metadata: Metadata = {
  title: "รับผลิตเสื้อโปโล ยูนิฟอร์มพนักงาน - บริษัท ทอฟฟี่ บูติก จำกัด",
  description:
    "บริษัท ทอฟฟี่ บูติก จำกัด รับผลิตเสื้อโปโลพนักงาน ยูนิฟอร์มพนักงาน ชุดฟอร์มพนักงานโรงงาน คุณภาพสูง รับทําเสื้อโปโลตามสั่ง ครบวงจรเรื่องเสื้อผ้าชุดฟอร์ม",
  keywords: [
    "ผลิตเสื้อโปโล",
    "เสื้อโปโลพนักงาน",
    "ยูนิฟอร์มพนักงาน",
    "รับผลิตเสื้อ",
    "รับทําเสื้อโปโล",
    "ชุดฟอร์มพนักงานโรงงาน",
    "ทอฟฟี่ บูติก",
    "Toffy Boutique",
  ],
  openGraph: {
    title: "ติดต่อผลิตเสื้อโปโลและยูนิฟอร์มพนักงาน - ทอฟฟี่ บูติก",
    description:
      "บริการรับผลิตเสื้อโปโลพนักงานและชุดยูนิฟอร์มครบวงจร โดย บริษัท ทอฟฟี่ บูติก จำกัด",
    url: "https://www.toffyboutique.com", // แนะนำให้ใส่ URL เว็บไซต์ของคุณ
    siteName: "Toffy Boutique",
    images: [
      {
        url: "/picture/toffyboutique-logo.png",
        width: 1200,
        height: 630,
        alt: "Toffy Boutique Logo",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

/**
 * 3. Root Layout Component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={notoColorThai.variable}>
      {/* Apply Noto Sans Thai className และ variable ให้กับ body 
        antialiased: ช่วยให้ฟอนต์ดูคมชัดขึ้นบนหน้าจอ Mac/iOS
        font-light: กำหนดน้ำหนักฟอนต์เริ่มต้น (Weight 300)
      */}
      <body className={`${notoColorThai.className} antialiased font-light`}>
        
        {/* Navbar จะแสดงผลในทุกหน้า */}
        <Navbar />

        {/* ส่วนเนื้อหาหลักของแต่ละหน้า */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer ส่วนท้ายของเว็บไซต์ */}
        <footer className="p-10 border-t bg-slate-50 text-center text-sm text-gray-500">
          <div className="container mx-auto">
            <p className="font-bold text-slate-900 mb-2">บริษัท ทอฟฟี่ บูติก จำกัด</p>
            <p>© 2026 Toffy Boutique. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}