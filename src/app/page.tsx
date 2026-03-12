// src/app/page.tsx
import HeroSlider from "@/components/HeroSlider";
import HeroSlider2 from "@/components/HeroSlider2";
import Process from "@/components/Process";
import WhatWeDo, { SizeSpec } from "@/components/WhatWeDo";
import AboutFactory from "@/components/AboutFactory"; // Import ตัวใหม่
import OurClient from "@/components/OurClient";

export default function HomePage() {
  return (
    <main className="min-h-screen">        
      {/* ส่วน Slide (aa1) */}
      <HeroSlider2 />

      {/* ส่วน Process (aa2) */}
      <Process />

      {/* ส่วนหมวดหมู่สินค้า (aa3) */}
      <WhatWeDo />

      {/* ส่วน Size Spec (aa4) */}
      <SizeSpec />

      {/* ส่วนประวัติและผลงาน (aa5, aa6, aa7) */}
      <AboutFactory />
      
      <OurClient />
    </main>
  );
}