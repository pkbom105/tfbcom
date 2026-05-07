import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "ToffyBoutique - รับผลิตเสื้อโปโล ยูนิฟอร์มพนักงาน | tfb.co.th",
  description:
    "บริษัท ทอฟฟี่ บูติก จำกัด (tfb.co.th) รับผลิตเสื้อโปโลพนักงาน ยูนิฟอร์มพนักงาน ชุดฟอร์มพนักงานโรงงาน คุณภาพสูง รับทําเสื้อโปโลตามสั่ง ครบวงจรเรื่องเสื้อผ้าชุดฟอร์ม",
  keywords: [
    "ผลิตเสื้อโปโล",
    "เสื้อโปโลพนักงาน",
    "ยูนิฟอร์มพนักงาน",
    "รับผลิตเสื้อ",
    "รับทําเสื้อโปโล",
    "ชุดฟอร์มพนักงานโรงงาน",
    "ทอฟฟี่ บูติก",
    "Toffy Boutique",
    "tfb.co.th",
    "toffyboutique.com",
    "ทอฟฟี่บูติก",
  ],
  alternates: {
    canonical: "https://tfb.co.th",
  },
  openGraph: {
    title: "ToffyBoutique - รับผลิตเสื้อโปโลและยูนิฟอร์มพนักงาน",
    description:
      "บริการรับผลิตเสื้อโปโลพนักงานและชุดยูนิฟอร์มครบวงจร โดย บริษัท ทอฟฟี่ บูติก จำกัด (tfb.co.th)",
    url: "https://tfb.co.th",
    siteName: "Toffy Boutique",
    images: [
      {
        url: "/picture/toffyboutique-logo.png",
        width: 1200,
        height: 630,
        alt: "Toffy Boutique Logo",
      },
      {
        url: "/picture/toffyboutque_factory.jpg",
        width: 1200,
        height: 630,
        alt: "Toffy Boutique Factory",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToffyBoutique - รับผลิตเสื้อโปโลและยูนิฟอร์มพนักงาน",
    description: "บริการรับผลิตเสื้อโปโลพนักงานและชุดยูนิฟอร์มครบวงจร โดย บริษัท ทอฟฟี่ บูติก จำกัด (tfb.co.th)",
    images: ["/picture/toffyboutque_factory.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * 3. Root Layout Component
 */
export default async function RootLayout({
  children,
  lang = "th",
}: {
  children: React.ReactNode;
  lang?: string;
}) {

  return (
    <html lang={lang} className={notoColorThai.variable}>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X523S45753"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X523S45753');
        `}
      </Script>
      {/* Apply Noto Sans Thai className และ variable ให้กับ body
        antialiased: ช่วยให้ฟอนต์ดูคมชัดขึ้นบนหน้าจอ Mac/iOS
        font-light: กำหนดน้ำหนักฟอนต์เริ่มต้น (Weight 300)
      */}
      <body className={`${notoColorThai.className} antialiased font-light`}>
        
        {/* Navbar จะแสดงผลในทุกหน้า */}
        <Navbar lang={lang} />

        {/* ส่วนเนื้อหาหลักของแต่ละหน้า */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer ส่วนท้ายของเว็บไซต์ */}
        <Footer lang={lang} />
        
        {/* <footer className="p-10 border-t bg-slate-50 text-center text-sm text-gray-500">
          <div className="container mx-auto">
            <p className="font-bold text-slate-900 mb-2">บริษัท ทอฟฟี่ บูติก จำกัด</p>
            <p>© 2026 Toffy Boutique. All rights reserved.</p>
          </div>
        </footer> */}

      </body>
    </html>
  );
}