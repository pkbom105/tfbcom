"use client";

import React from "react";
import { CircleArrowRight } from "lucide-react";

export default function MakeToOrderPage() {
  return (
    <main className="min-h-screen bg-white font-noto pb-20">
      {/* --- Section: บทนำ --- */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"> 
            Manufacturing Process | <span className="text-red-600">ขบวนการผลิต</span>
          </h1> 
          <div className="space-y-6 text-lg text-slate-800 leading-relaxed max-w-4xl mx-auto">
            <p className="text-slate-800 text-md"> 
              ขั้นตอนการสั่งผลิตมาตรฐาน ทอฟฟี่ บูติก 
              ที่ช่วยให้คุณได้ยูนิฟอร์มคุณภาพเยี่ยม ตรงตามสเปก และส่งมอบตรงเวลา
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 1: รูปภาพกว้างสุดจอ --- */}
      <section className="w-full">
        <div className="w-full h-[390px] md:h-[500px] overflow-hidden">
          <img 
            src="/process/p1.png" 
            alt="ภาพรวมการผลิต" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* --- Section 2: ตรวจสอบวัตถุดิบ --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Material Quality Check</h2>
              <p className="text-slate-800">ขั้นตอนตรวจสอบวัตถุดิบและคัดสรรเนื้อผ้าคุณภาพสูง</p>
            </div>
            <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video shadow-sm">
              <img src="/process/p2.png" alt="การตรวจสอบผ้า" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl overflow-hidden bg-slate-100 aspect-square shadow-sm">
                <img src="/process/p3.png" alt="การตัดเย็บ 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-100 aspect-square shadow-sm">
                <img src="/process/p4.png" alt="การตัดเย็บ 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Precision Manufacturing</h2>
              <p className="text-slate-600">
              จุดเริ้มต้นของยูนิฟอร์มที่ดีมีคุณภาพ เริ่มจากวัตถุดิบที่ดีได้มาตรฐาน งานผลิตได้มาตรฐานของเราจึงเริ่มจากการตรวจผ้า 
              ที่มีใส่ใจในคุณภาพและสเปคของผ้าว่าตรงตามที่กำหนดไว้ ทั้งเริ่มสี น้ำหนัก ความหนาหรือ 
              การหดของผ้า ผ้าที่ผลิตเป็นเสื้อหรือสินค้าทุกชิ้นจะผ่านการคัดกรองก่อนลงกระบวนการผลิตจริงเสมอ
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
              Cutting | <span className="text-red-600">แผนกตัด</span>
            </h2>
            <p className="text-slate-600 text-lg font-bold max-w-3xl">
              ขั้นตอนฝ่ายแพทเทิร์น และการวางมาร์คตัด               
            </p><br />
            <p>อีกหนึ่งขั้นตอนสำคัญที่จะช่วยให้งานผลิตออกมามีคุณภาพ คือการทำแพทเทิร์นที่ดี คือเมื่อคนได้สวมใส่เสื้อหรือสินค้าแล้ว
              ทำให้ผู้สวมใส่ ใส่ได้อย่างมั่นใจสบายตัว พอดีกับรูปร่าง </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img src="/process/p5.png" alt="Process 5" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img src="/process/p6.png" alt="Process 6" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-4 aspect-square">
                {[7, 8, 9, 10].map((n) => (
                  <div key={n} className="rounded-xl overflow-hidden shadow-sm bg-gray-200">
                    <img src={`/process/p${n}.png`} alt={`Process ${n}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img src="/process/p11.png" alt="Process 11" className="w-full h-full object-cover" />
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
            <div className="w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl order-1">
              <img 
                src="/process/p12.png" 
                alt="บรรยากาศแผนกเย็บ" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>

            {/* ฝั่งขวา: เนื้อหาและรูปรายละเอียด */}
            <div className="flex flex-col h-full order-2">
              <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  Sewing | <span className="text-red-600">แผนกเย็บ</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  ทอฟฟี่ บูติก มุ่งเน้นการผลิตด้วยความประณีต 
                  เราพร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอนเพื่อให้ได้ชุดยูนิฟอร์มที่สมบูรณ์แบบที่สุด
                </p>

                {/* รูปรายละเอียด 2 รูปคู่กึ่งกลาง */}
                <div className="flex w-full overflow-hidden rounded-2xl shadow-lg my-8 bg-slate-100">
                  <div className="w-1/2 aspect-[3/2] border-r border-white/20">
                    <img src="/process/p13.png" alt="รายละเอียดการเย็บ 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-1/2 aspect-[3/2]">
                    <img src="/process/p14.png" alt="รายละเอียดการเย็บ 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* ส่วนท้าย: เน้นย้ำเรื่องฝีมือ */}
              <div className="mt-auto p-8 bg-slate-50 rounded-2xl border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">การเย็บที่ประณีต</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  ขั้นตอนการเย็บคือหัวใจสำคัญ งานทุกชิ้นผ่านมือช่างผู้เชี่ยวชาญที่มีประสบการณ์สูง 
                  เราให้ความสำคัญกับความละเอียดของฝีเข็มและความทนทาน 
                  เพื่อให้มั่นใจว่ายูนิฟอร์มทุกตัวจะได้มาตรฐานระดับสากล
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
              Packing | <span className="text-red-600">แผนกผับ</span>
            </h2>            
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/process/p15.png" alt="ออกแบบตามความต้องการ" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-md font-bold text-gray-900 mb-2">การตัดขี้ด้าย และตรวจสอบความเรียบร้อย</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/process/p16.png" alt="ควบคุมคุณภาพ" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-md font-bold text-gray-900 mb-2">การรีดสินค้าให้เรียบดูสวยงามก่อนจัดส่ง</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/process/p17.png" alt="การจัดส่ง" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-md font-bold text-gray-900 mb-2">การพับสินค้าใส่ถุงเตรียมพร้อมส่งมอบให้ลูกค้า</h3>
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
                Delivery
              </h2>
              <p className="text-2xl font-bold text-gray-800 mt-4 border-l-4 border-red-600 pl-4">
                จัดส่งสินค้า
              </p>
            </div>

            {/* Space Filler */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Main Delivery Image (Transparent) (60%) */}
            <div className="md:col-span-6 flex justify-center items-center">
              <div className="w-full h-[250px] md:h-[350px] relative">
                <img 
                  src="/process/p20.png" 
                  alt="บรรยากาศการส่งของ" 
                  className="w-full h-full object-contain" 
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
              <p className="text-sm text-slate-500 italic text-center">ภาพบรรยากาศการแพ็คและเตรียมจัดส่ง</p>
            </div>

            {/* Column 2: Details & Guidelines */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                สินค้าจะถูกแพ็คลงกล่องลัง <br/>พร้อมจัดส่งตามที่ได้นัดหมาย
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <CircleArrowRight className="w-7 h-7 text-red-600 shrink-0 mt-1" />
                  <p className="text-[16px] leading-relaxed">
                    เมื่อลูกค้าสั่งสินค้า 100 ตัวขึ้นไป <br/>
                    <span className="font-bold text-gray-900 underline decoration-red-200 underline-offset-4">
                      บริการจัดส่งสินค้าให้ฟรี ภายในกรุงเทพ
                    </span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <CircleArrowRight className="w-7 h-7 text-red-600 shrink-0 mt-1" />
                  <p className="text-[16px] leading-relaxed">
                    ระยะเวลาการผลิตภายใน 30 วัน เมื่อมีการอนุมัติเสื้อตัวอย่างเรียบร้อยแล้ว
                  </p>
                </li>
                <li className="flex gap-4">
                  <CircleArrowRight className="w-7 h-7 text-red-600 shrink-0 mt-1" />
                  <p className="text-[16px] leading-relaxed">
                    หากอยู่ต่างจังหวัด จัดส่งผ่านขนส่งเอกชนโดยคิดค่าใช้จ่ายตามจริง
                  </p>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
                <p className="text-red-900 font-medium italic">
                  "เราให้ความสำคัญกับความเร็วและความปลอดภัย เพื่อให้สินค้าถึงมือคุณในสภาพสมบูรณ์ที่สุด"
                </p>
              </div>
            </div>

            {/* Column 3: Logistics Showcase (Match Video Height) */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] bg-slate-50">
                <img 
                  src="/process/p19.png" 
                  alt="รถขนส่งทอฟฟี่" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-sm text-slate-500 italic text-center">รถขนส่ง Toffy Boutique พร้อมให้บริการ</p>
            </div>

          </div>
        </div>
      </section>
       {/* --- Section 7: รูป --- */}
       <section className="w-full min-h-screen flex flex-col md:flex-row bg-white border-t border-slate-100">
        <div className="w-full  md:h-auto">
          <img src="/process/p21.png" alt="การตรวจสอบ" className="w-full h-full object-cover" />
        </div>        
      </section>
    </main>
  );
}