// src/app/page.tsx
import HeroSlider from "@/components/HeroSlider";
import Process from "@/components/Process";
import WhatWeDo, { SizeSpec } from "@/components/WhatWeDo";
import AboutFactory from "@/components/AboutFactory"; // Import ตัวใหม่

export default function HomePage() {
  return (
    <main className="min-h-screen">
        <div className="text-2xl text-center ">Vesion  2.50</div>
      {/* ส่วน Slide (aa1) */}
      <HeroSlider />

      {/* ส่วน Process (aa2) */}
      <Process />

      {/* ส่วนหมวดหมู่สินค้า (aa3) */}
      <WhatWeDo />

      {/* ส่วน Size Spec (aa4) */}
      <SizeSpec />

      {/* ส่วนประวัติและผลงาน (aa5, aa6, aa7) */}
      <AboutFactory />
    </main>
  );
}