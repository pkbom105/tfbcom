import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Thai } from 'next/font/google'; // เปลี่ยนจาก Kanit เป็น Noto_Sans_Thai
import { Navbar } from "@/components/Navbar";

// 1. Initialize Noto Sans Thai Font
// สำหรับ "Light" แนะนำให้ใช้ weight 300 หรือ 400 ครับ
const notoColorThai = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans-thai', // เปลี่ยนชื่อตัวแปรให้สอดคล้องกัน
});

export const metadata: Metadata = {
  title: "รับผลิตเสื้อโปโล ยูนิฟอร์มพนักงาน - บริษัท ทอฟฟี่ บูติก จำกัด",
  description: "บริษัท ทอฟฟี่ บูติก จำกัด รับผลิตเสื้อโปโลพนักงาน ยูนิฟอร์มพนักงาน ชุดฟอร์มพนักงานโรงงาน คุณภาพสูง รับทําเสื้อโปโลตามสั่ง ครบวงจรเรื่องเสื้อผ้าชุดฟอร์ม",
  keywords: [
    "ผลิตเสื้อโปโล",
    "เสื้อโปโลพนักงาน",
    "ยูนิฟอร์มพนักงาน",
    "รับผลิตเสื้อ",
    "รับทําเสื้อโปโล",
    "ชุดฟอร์มพนักงานโรงงาน",
    "ทอฟฟี่ บูติก",
    "Toffy Boutique"
  ],
  openGraph: {
    title: "ติดต่อผลิตเสื้อโปโลและยูนิฟอร์มพนักงาน - ทอฟฟี่ บูติก",
    description: "บริการรับผลิตเสื้อโปโลพนักงานและชุดยูนิฟอร์มครบวงจร โดย บริษัท ทอฟฟี่ บูติก จำกัด",
    images: ["/picture/toffyboutique-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th"> {/* เปลี่ยนเป็น th เพื่อ SEO ที่ดีขึ้นสำหรับภาษาไทย */}
      {/* 2. Apply Noto Sans Thai and its variable to the body */}
      <body className={`${notoColorThai.variable} ${notoColorThai.className} antialiased font-light`}>
        
        {/* 3. The Navbar is placed here so it repeats on every page */}
        <Navbar />

        {/* 4. The 'children' represents the specific page */}
        <main className="min-h-screen">
          {children}
        </main>

        <footer className="p-4 border-t text-center text-sm text-gray-500">
          © 2026 Toffy Boutique. All rights reserved.
        </footer>
      </body>
    </html>
  );
}