"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProductPageV238() {
  // ข้อมูลหมวดหมู่สินค้าแบบบรรทัดเดียว
  const tabItems = [
    { value: "tshirt-men", label: "เสื้อคอกลม", title: "สินค้าคอกลม", count: 12, path: "/02catalog/tshirt-sample", startNumber: 1 },
    { value: "polo", label: "เสื้อโปโล", title: "สินค้าเสื้อโปโล", count: 12, path: "/02catalog/polo-sample", startNumber: 104 },
    { value: "shirt-men", label: "เสื้อเชิ้ตชาย", title: "สินค้าเสื้อเชิ้ตชาย", count: 9, path: "/02catalog/shirt-sample", startNumber: 1 },   
    { value: "mac", label: "เสื้อช็อป", title: "สินค้าเสื้อช็อป", count: 10, path: "/02catalog/mac-sample", startNumber: 42 },    
    { value: "cargo-pants", label: "กางเกงคาร์โก้", title: "สินค้ากางเกง/กระโปรง", count: 5, path: "/02catalog/pants", startNumber: 1 },
    { value: "arpon", label: "ผ้ากันเปื้อน", title: "ผ้ากันเปื้อน", count: 5, path: "/02catalog/arpon", startNumber: 6 },
  ];

  return (
    <main className="min-h-screen bg-white font-noto pb-20">
      {/* --- Intro Section --- */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight uppercase">
            Our Products <span className="text-red-500">|</span> สินค้าพร้อมส่งและสั่งผลิตราคาพิเศษ
          </h1>
          <div className="space-y-6 text-lg text-slate-800 leading-relaxed max-w-4xl mx-auto">
            <p className="font-bold text-slate-800 text-xl">ศูนย์รวมยูนิฟอร์มสำเร็จรูปพร้อมจัดส่ง และบริการงานสั่งผลิตมาตรฐานพรีเมียมในราคาโรงงาน</p>
            <p>เราบริหารจัดการสินค้าที่มีอยู่ในสต็อก (Ready to Ship) ทั้งเสื้อโปโลและชุดเชิ้ตพนักงานหลากหลายดีไซน์ ผ่านกระบวนการ QC ที่เข้มงวด พร้อมบริการจัดส่งด่วนให้คุณใช้งานได้ทันที</p>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="product-catalog" className="pt-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-red-500 pl-4 text-slate-900">รายการสินค้า (Catalog)</h2>
        
        <Tabs defaultValue="tshirt-men" className="w-full">
          <div className="flex justify-center mb-16 overflow-x-auto">
            <TabsList className="grid grid-cols-2 sm:grid-cols-6 bg-slate-100/80 p-2 rounded-[2rem] h-auto w-full max-w-7xl border border-slate-200 shadow-inner gap-2 min-w-[800px] sm:min-w-0">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className={cn(
                    "rounded-xl transition-all font-black py-4 px-2 text-xs md:text-sm", 
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
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-black text-slate-800 mb-2 uppercase">{tab.title}</h3>
                    <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {Array.from({ length: tab.count }).map((_, index) => {
                      const fileNumber = tab.startNumber + index;
                      // ตรวจสอบว่า path มี / นำหน้าแล้วหรือไม่
                      const imagePath = `${tab.path}/${fileNumber}.png`;

                      return (
                        <div key={index} className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-slate-100 bg-[#F8FAFC] transition-all duration-500 hover:bg-red-50 hover:shadow-2xl hover:shadow-red-100/30 hover:-translate-y-2">
                          <Image
                            src={imagePath}
                            alt={`${tab.label} catalog ${fileNumber}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-contain p-10 transition-transform duration-700 group-hover:scale-110"
                            priority={index < 3} // โหลด 3 รูปแรกทันทีเพื่อประสิทธิภาพ
                          />
                          <div className="absolute bottom-6 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                             <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Item #{fileNumber}</span>
                          </div>
                        </div>
                      );
                    })}
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