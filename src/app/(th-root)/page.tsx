// src/app/page.tsx
import HeroSlider from "@/components/HeroSlider";
import HeroSlider2 from "@/components/HeroSlider2";
import Process from "@/components/Process";
import StepByStep from "@/components/StepByStep";
import WhatWeDo from "@/components/WhatWeDo";
import SizeSpec from "@/components/SizeSpec";
import WhatWeProvide  from "@/components/WhatWeProvide";
// import AboutFactory from "@/components/AboutFactory"; // Import ตัวใหม่
import OurClient from "@/components/OurClient";
import { getDictionary } from "@/lib/get-dictionary";

export default async function HomePage({ lang = "th" }: { lang?: string }) {
  const dict = await getDictionary(lang as "th" | "en");

  return (
    <main className="min-h-screen">        
      {/* ส่วน Slide (aa1) */}
      <HeroSlider2 lang={lang} />

      {/* ส่วน Process (aa2) */}
      <Process lang={lang} dict={dict.process} />

      {/* ส่วนหมวดหมู่สินค้า (aa3) */}
      <WhatWeDo lang={lang} dict={dict.whatwedo} />

      {/* ส่วน Size Spec  */}
      <SizeSpec lang={lang} dict={dict.sizespec} />
      
      <StepByStep lang={lang} dict={dict.stepbystep} />
      <WhatWeProvide lang={lang} dict={dict.whatweprovide} />
      {/* ส่วนประวัติและผลงาน (aa5, aa6, aa7) */}
      {/* <AboutFactory lang={lang} /> */}
      
      <OurClient lang={lang} dict={dict.ourclient} />
    </main>
  );
}