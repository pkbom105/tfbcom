import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from 'next/font/google';
import { Navbar } from "@/components/Navbar";


// 1. Initialize Kanit Font
const kanit = Kanit({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit', // Used for Tailwind or CSS Variables
});

export const metadata = {
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
    images: ["/picture/toffyboutique-logo.png"], // ใส่รูปภาพตัวอย่างร้านหรือสินค้า
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. Apply font and variable to the body */}
      <body className={`${kanit.variable} ${kanit.className} antialiased`}>
        
        {/* 3. The Navbar is placed here so it repeats on every page */}
        < Navbar />

        {/* 4. The 'children' represents the specific page (Home, Contact, etc.) */}
        <main className="min-h-screen">
          {children}
        </main>

        <footer className="p-4 border-t text-center text-sm text-gray-500">
          © 2026 My Website
        </footer>
      </body>
    </html>
  );
}