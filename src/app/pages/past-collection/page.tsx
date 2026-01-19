"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Shirt, 
  Layers, 
  Palette, 
  ChevronRight, 
  CreditCard 
} from "lucide-react";

export default function PastCollectionPage() {
  // ข้อมูลหมวดหมู่ 9 หมวดหมู่ตามเงื่อนไขที่กำหนด
  const tabItems = [
    { value: "tshirt", label: "เสื้อคอกลม", title: "ตัวอย่างงานผลิตเสื้อคอกลม", count: 9, path: "tshirt", prefix: "TS" },
    { value: "polo", label: "เสื้อโปโล", title: "ตัวอย่างงานผลิตเสื้อโปโล", count: 12, path: "polo", prefix: "PL" },
    { value: "shirt", label: "เสื้อเชิ้ต", title: "ตัวอย่างงานผลิตเสื้อเชิ้ต", count: 6, path: "shirt", prefix: "SH" },
    { value: "shop", label: "เสื้อช็อป", title: "ตัวอย่างงานผลิตเสื้อช็อป", count: 6, path: "shop", prefix: "SP" },
    { value: "jacket", label: "แจ็กเก็ต", title: "ตัวอย่างงานผลิตแจ็กเก็ต", count: 6, path: "jacket", prefix: "JK" },
    { value: "chef", label: "เสื้อเชฟ", title: "ตัวอย่างงานผลิตเสื้อเชฟ", count: 6, path: "chef", prefix: "CF" },
    { value: "apron", label: "ผ้ากันเปื้อน", title: "ตัวอย่างงานผลิตผ้ากันเปื้อน", count: 6, path: "apron", prefix: "AP" },
    { value: "pants", label: "กระโปรง/กางเกง", title: "ตัวอย่างงานผลิตกระโปรงและกางเกง", count: 6, path: "pants", prefix: "PT" },
    { value: "others", label: "อื่นๆ", title: "ผลงานผลิตอื่นๆ", count: 6, path: "others", prefix: "OT" },
  ];

  return (
    <main className="min-h-screen bg-white font-kanit pb-20">
      {/* --- Intro Section (Rewrite) --- */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Sample Product <span className="text-red-500">|</span> ตัวอย่างงานผลิตเสื้อโปโล ยูนิฟอร์มพนักงาน
          </h1>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            <p className="font-semibold text-slate-800 text-xl">
              ตัวอย่างงานผลิตเสื้อโปโล ยูนิฟอร์ม และชุดฟอร์มพนักงานคุณภาพสูง จากความไว้วางใจของลูกค้าทั่วประเทศ
            </p>
            <p>
              ลูกค้าที่เราได้รับความไว้วางใจให้ร่วมงานด้วย มีทั้งองค์กรระดับเล็กที่ผลิตสินค้าเพื่อจำหน่ายเอง เป็นของพรีเมี่ยมแจกลูกค้า เป็นเสื้อพนักงานในองค์กร ไปจนถึงองค์กรใหญ่ ผลิตสินค้าแบรนด์ขาย ทั้งในและนอกประเทศ 
            </p>
            <p>
              ซึ่งเรามีประสบการณ์มากว่า 35 ปี ในการผลิตเสื้อโปโล ยูนิฟอร์มพนักงาน เสื้อฟอร์มพนักงาน เสื้อโปโลพนักงาน ชุดฟอร์มพนักงานโรงงาน เสื้อโปโลยูนิฟอร์มให้ตรงตามความต้องการอย่างมีประสิทธิภาพ ต้องขอขอบคุณลูกค้าผู้มีอุปการะคุณที่ไว้วางใจให้ <span className="text-red-600 font-bold">Toffy Boutique</span> ดูแลงานผลิต
            </p>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery-section" className="pt-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-red-500 pl-4 text-slate-900">
          แคตตาล็อกผลงานผลิต
        </h2>
        
        <Tabs defaultValue="polo" className="w-full">
          {/* TabsList: Grid 2 แถว แถวแรก 5 ปุ่ม แถวสอง 4 ปุ่ม + ขยาย Font */}
          <div className="flex justify-center mb-16">
            <TabsList className="grid grid-cols-2 sm:grid-cols-5 bg-slate-100/80 p-2 rounded-[2rem] h-auto w-full max-w-5xl border border-slate-200 shadow-inner gap-2">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className={cn(
                    "rounded-xl transition-all font-bold text-slate-800 py-3.5",
                    "text-sm md:text-base", // ขยาย Font +1 Size
                    "data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md"
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
                    <h3 className="text-3xl font-bold text-slate-800 mb-3">{tab.title}</h3>
                    <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
                  </div>

                  {/* Grid รูปภาพ 1:1 แถวละ 3 รูป */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Array.from({ length: tab.count }).map((_, index) => (
                      <div 
                        key={index} 
                        className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2"
                      >
                        <Image
                          src={`/picture/past-collection/${tab.path}/${tab.prefix}-${index + 1}.jpg`}
                          alt={`${tab.label} ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay เมื่อ Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                           <div className="text-white">
                             <p className="font-bold text-lg tracking-wide mb-1">
                               รหัสงาน: {tab.prefix}-{String(index + 1).padStart(3, '0')}
                             </p>
                             <p className="text-sm text-slate-200">หมวดหมู่: {tab.label}</p>
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