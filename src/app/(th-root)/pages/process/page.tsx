"use client";

import React from "react";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import thDict from "@/dictionaries/th.json";
import enDict from "@/dictionaries/en.json";

export default function MakeToOrderPage({ lang = "th" }: { lang?: string }) {
  const dict = lang === "en" ? enDict.process_page : thDict.process_page;

  const isEn = lang === "en";
  const processSteps = isEn 
    ? [
        "1. Contact us and discuss requirements",
        "2. Design and quotation",
        "3. Material selection and preparation",
        "4. Sample production",
        "5. Sample approval",
        "6. Mass production",
        "7. Quality inspection",
        "8. Packing and delivery",
      ]
    : [
        "1. ติดต่อและแจ้งความต้องการ",
        "2. ออกแบบและเสนอราคา",
        "3. เลือกวัตถุดิบและเตรียมการผลิต",
        "4. ผลิตตัวอย่าง",
        "5. อนุมัติตัวอย่าง",
        "6. ดำเนินการผลิตจริง",
        "7. ตรวจสอบคุณภาพ",
        "8. บรรจุภัณฑ์และจัดส่ง",
      ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: dict?.hero?.title || (isEn ? "Production Process" : "ขั้นตอนการผลิต"),
    description: dict?.hero?.subtitle || (isEn ? "Manufacturing Process" : "กระบวนการผลิต"),
    step: processSteps.map((stepText, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: stepText,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    <main className="min-h-screen bg-white font-noto pb-20">
      {/* --- Section: บทนำ --- */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"> 
            {dict.hero.title} | <span className="text-red-600">{dict.hero.subtitle}</span>
          </h1> 
          <div className="space-y-6 text-lg text-slate-800 leading-relaxed max-w-4xl mx-auto">
            <p className="text-slate-800 text-md"> 
              {dict.hero.desc}
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 1: รูปภาพกว้างสุดจอ --- */}
      <section className="w-full">
        <div className="w-full h-[390px] md:h-[500px] relative overflow-hidden">
          <Image
            src="/process/p1.png"
            alt="ภาพรวมการผลิต"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      {/* --- Section 2: ตรวจสอบวัตถุดิบ --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{dict.material.title}</h2>
              <p className="text-slate-800">{dict.material.subtitle}</p>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-video shadow-sm">
              <Image
                src="/process/p2.png"
                alt="การตรวจสอบผ้า"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-square shadow-sm">
                <Image
                  src="/process/p3.png"
                  alt="การตัดเย็บ 1"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-square shadow-sm">
                <Image
                  src="/process/p4.png"
                  alt="การตัดเย็บ 2"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{dict.material.precision}</h2>
              <p className="text-slate-600">
              {dict.material.precision_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: สายการผลิต --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.cutting.title} | <span className="text-red-600">{dict.cutting.subtitle}</span>
            </h2>
            <p className="text-slate-600 text-lg font-bold max-w-3xl">
              {dict.cutting.desc1}               
            </p><br />
            <p>{dict.cutting.desc2}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-8">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square">
                <Image
                  src="/process/p5.png"
                  alt="Process 5"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square">
                <Image
                  src="/process/p6.png"
                  alt="Process 6"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-4 aspect-square">
                {[7, 8, 9, 10].map((n) => (
                  <div key={n} className="relative rounded-xl overflow-hidden shadow-sm bg-gray-200">
                    <Image
                      src={`/process/p${n}.png`}
                      alt={`Process ${n}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                ))}
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square">
                <Image
                  src="/process/p11.png"
                  alt="Process 11"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: แผนกเย็บ (ปรับเป็น Max-w-6xl) --- */}
      <section className="py-20 px-6 bg-white border-t border-slate-100 font-noto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* ฝั่งซ้าย: รูปภาพหลัก (ปรับจาก Full Screen เป็น Rounded Box) */}
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl order-1">
              <Image
                src="/process/p12.png"
                alt="บรรยากาศแผนกเย็บ"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="50vw"
              />
            </div>

            {/* ฝั่งขวา: เนื้อหาและรูปรายละเอียด */}
            <div className="flex flex-col h-full order-2">
              <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  {dict.sewing.title} | <span className="text-red-600">{dict.sewing.subtitle}</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {dict.sewing.desc1}
                </p>

                {/* รูปรายละเอียด 2 รูปคู่กึ่งกลาง */}
                <div className="flex w-full overflow-hidden rounded-2xl shadow-lg my-8 bg-slate-100">
                  <div className="relative w-1/2 aspect-[3/2] border-r border-white/20">
                  <Image
                    src="/process/p13.png"
                    alt="รายละเอียดการเย็บ 1"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative w-1/2 aspect-[3/2]">
                  <Image
                    src="/process/p14.png"
                    alt="รายละเอียดการเย็บ 2"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                </div>
              </div>

              {/* ส่วนท้าย: เน้นย้ำเรื่องฝีมือ */}
              <div className="mt-auto p-8 bg-slate-50 rounded-2xl border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.sewing.expert_title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {dict.sewing.expert_desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
{/* --- Section 5: บริการและความเชี่ยวชาญ (3-Column Grid) --- */}
<section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.packing.title} | <span className="text-red-600">{dict.packing.subtitle}</span>
            </h2>            
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/process/p15.png"
                  alt="ออกแบบตามความต้องการ"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-md font-bold text-gray-900 mb-2">{dict.packing.item1}</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/process/p16.png"
                  alt="ควบคุมคุณภาพ"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-md font-bold text-gray-900 mb-2">{dict.packing.item2}</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/process/p17.png"
                  alt="การจัดส่ง"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-md font-bold text-gray-900 mb-2">{dict.packing.item3}</h3>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- Section 6: การจัดส่ง (Layout 30/70 และ 3-Column Content) --- */}
      <section className="py-15 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          
          {/* --- Part 1: Header (30/70 Transparent Image) --- */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mb-4 items-center">
            {/* Title (30%) */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <h2 className="text-6xl md:text-8xl font-light italic text-gray-900 uppercase tracking-tighter leading-none">
                {dict.delivery.title}
              </h2>
              <p className="text-2xl font-bold text-gray-800 mt-4 border-l-4 border-red-600 pl-4">
                {dict.delivery.subtitle}
              </p>
            </div>

            {/* Space Filler */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Main Delivery Image (Transparent) (60%) */}
            <div className="md:col-span-6 flex justify-center items-center">
              <div className="relative w-full h-[250px] md:h-[350px]">
                <Image
                  src="/process/p20.png"
                  alt="บรรยากาศการส่งของ"
                  fill
                  className="object-contain"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>

          {/* --- Part 2: Content (3 Columns Equal) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-slate-100 items-start">
            
            {/* Column 1: Video Production/Loading */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] bg-slate-100">
                <video 
                  src="/process/p18.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-sm text-slate-500 italic text-center">{dict.delivery.video_caption}</p>
            </div>

            {/* Column 2: Details & Guidelines */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {dict.delivery.box_title1} <br/>{dict.delivery.box_title2}
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <CircleArrowRight className="w-7 h-7 text-red-600 shrink-0 mt-1" />
                  <p className="text-[16px] leading-relaxed">
                    {dict.delivery.list1_1} <br/>
                    <span className="font-bold text-gray-900 underline decoration-red-200 underline-offset-4">
                      {dict.delivery.list1_2}
                    </span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <CircleArrowRight className="w-7 h-7 text-red-600 shrink-0 mt-1" />
                  <p className="text-[16px] leading-relaxed">
                    {dict.delivery.list2}
                  </p>
                </li>
                <li className="flex gap-4">
                  <CircleArrowRight className="w-7 h-7 text-red-600 shrink-0 mt-1" />
                  <p className="text-[16px] leading-relaxed">
                    {dict.delivery.list3}
                  </p>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
                <p className="text-red-900 font-medium italic">
                  {dict.delivery.quote}
                </p>
              </div>
            </div>

            {/* Column 3: Logistics Showcase (Match Video Height) */}
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4] bg-slate-50">
                <Image
                  src="/process/p19.png"
                  alt="รถขนส่งทอฟฟี่"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <p className="text-sm text-slate-500 italic text-center">{dict.delivery.truck_caption}</p>
            </div>

          </div>
        </div>
      </section>
      {/* --- Section 7: รูปปิดท้าย (แก้ไขลด White Space) --- */}
      <section className="w-full bg-white border-t border-slate-100">
        <div className="relative w-full h-[420px] md:h-[500px]">
          <Image
            src="/process/p21.png"
            alt="การตรวจสอบคุณภาพสุดท้าย"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </section>
    </main>
    </>
  );
}
