"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProductPage() {
  // ข้อมูลหมวดหมู่สินค้า 6 รายการ (จัดวางแถวเดียวบน Desktop)
  const tabItems = [
    { value: "polo", label: "เสื้อโปโล", title: "สินค้าเสื้อโปโล", count: 9, path: "polo", prefix: "ST-PL" },
    { value: "shirt-men", label: "เสื้อเชิ้ตชาย", title: "สินค้าเสื้อเชิ้ตชาย", count: 6, path: "shirt-men", prefix: "ST-SM" },
    { value: "shirt-women", label: "เสื้อเชิ้ตหญิง", title: "สินค้าเสื้อเชิ้ตหญิง", count: 6, path: "shirt-women", prefix: "ST-SW" },
    { value: "shop-short", label: "เสื้อช็อปแขนสั้น", title: "สินค้าเสื้อช็อปแขนสั้น", count: 6, path: "shop-short", prefix: "ST-SS" },
    { value: "shop-long", label: "เสื้อช็อปแขนยาว", title: "สินค้าเสื้อช็อปแขนยาว", count: 6, path: "shop-long", prefix: "ST-SL" },
    { value: "cargo-pants", label: "กางเกงคาร์โก้", title: "สินค้ากางเกงคาร์โก้", count: 6, path: "cargo-pants", prefix: "ST-CG" },
  ];

  return (
    <main className="min-h-screen bg-white font-kanit pb-20">
      {/* --- Intro Section --- */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Our Products <span className="text-red-500">|</span> สินค้าพร้อมส่งและสั่งผลิตราคาพิเศษ
          </h1>
          <div className="space-y-6 text-lg text-slate-800 leading-relaxed max-w-4xl mx-auto">
            <p className="font-semibold text-slate-800 text-xl">
              ศูนย์รวมยูนิฟอร์มสำเร็จรูปพร้อมจัดส่ง และบริการงานสั่งผลิตมาตรฐานพรีเมียมในราคาโรงงาน
            </p>
            <p>
              เราบริหารจัดการสินค้าที่มีอยู่ในสต็อก (Ready to Ship) ทั้งเสื้อโปโลและชุดเชิ้ตพนักงานหลากหลายดีไซน์ 
              ผ่านกระบวนการ QC ที่เข้มงวด พร้อมบริการจัดส่งด่วนให้คุณใช้งานได้ทันที 
              ประหยัดเวลาและมั่นใจในคุณภาพทุกชิ้น
            </p>
            <p>
              นอกจากนี้ เรายังมีโซลูชัน "สินค้าสั่งผลิตราคาพิเศษ" 
              สำหรับองค์กรที่ต้องการปรับเปลี่ยนรายละเอียดบางส่วนตามอัตลักษณ์แบรนด์ 
              โดยใช้ความเชี่ยวชาญกว่า 35 ปี เพื่อมอบความคุ้มค่าสูงสุดภายใต้งบประมาณที่คุณกำหนด
            </p>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="product-catalog" className="pt-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-red-500 pl-4 text-slate-900 font-kanit">
          รายการสินค้าพร้อมส่ง (Product Catalog)
        </h2>
        
        <Tabs defaultValue="polo" className="w-full">
          {/* TabsList: แถวเดียวบน Desktop (sm:grid-cols-6) ขยาย Font +1 size */}
          <div className="flex justify-center mb-16 overflow-x-auto">
            <TabsList className="grid grid-cols-2 sm:grid-cols-6 bg-slate-100/80 p-2 rounded-[2rem] h-auto w-full max-w-6xl border border-slate-200 shadow-inner gap-2 font-kanit min-w-[600px] sm:min-w-0">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className={cn(
                    "rounded-xl transition-all font-bold py-3.5",
                    "text-sm md:text-base", // ขยาย Font +1 Size
                    "data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md text-slate-800"
                  )}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {tabItems.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0 focus-visible:outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{tab.title}</h3>
                    <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
                  </div>

                  {/* Grid รูปภาพ 1:1 แถวละ 3 รูป (Desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Array.from({ length: tab.count }).map((_, index) => (
                      <div 
                        key={index} 
                        className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2"
                      >
                        <Image
                          src={`/picture/products/${tab.path}/${tab.prefix}-${index + 1}.jpg`}
                          alt={`${tab.label} ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                           <div className="text-white">
                             <p className="font-bold text-lg tracking-wide">
                               SKU: {tab.prefix}-{String(index + 1).padStart(3, '0')}
                             </p>
                             <p className="text-sm opacity-80 font-medium">พร้อมจัดส่งทันที</p>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </section>
    </main>
  );
}