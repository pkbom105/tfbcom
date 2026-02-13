"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Maximize2, Sparkles } from "lucide-react";

// --- 1. ส่วนแสดงผลรูปภาพ (Gallery Component) ---
const ColorRangeGallery = ({ path, prefix, start, end }: { path: string; prefix: string; start: number; end: number }) => {
  const images = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12"
    >
      {images.map((num) => {
        const fileName = `${num}.png`; 
        return (
          <div 
            key={num} 
            // อัปเดตคลาสตามที่คุณต้องการ: Ring สีแดง, Offset, ยกตัวขึ้น และเงาแบบพรีเมียม
            className="group relative aspect-square overflow-hidden rounded-[3rem] bg-gray-100 transition-all duration-300 hover:ring-3 hover:ring-red-500 hover:ring-offset-4 hover:-translate-y-1 shadow-sm hover:shadow-2xl"
          >
            {/* รูปภาพสินค้า */}
            <Image
              src={`${path}/${fileName}`}
              alt={`${prefix} catalog ${num}`}
              fill
              className="object-contain p-10 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default function ReadyToWearV232() {
  // --- 2. การจัดการข้อมูล (Configuration) ---
  
  const subTabsA = [
    { value: "color1", label: "ชุดสีที่ 1", start: 24, end: 32, path: "/01collection/engineer-a" },
    { value: "color2", label: "ชุดสีที่ 2", start: 33, end: 41, path: "/01collection/engineer-a" },
    { value: "color3", label: "ชุดสีที่ 3", start: 52, end: 60, path: "/01collection/engineer-a" },
    { value: "color4", label: "ชุดสีที่ 4", start: 70, end: 78, path: "/01collection/engineer-a" },
    { value: "color5", label: "ชุดสีที่ 5", start: 61, end: 69, path: "/01collection/engineer-a" },
    { value: "color6", label: "แขนยาว", start: 79, end: 84, path: "/01collection/engineer-b" },
  ];

  const subTabsB = [
    { value: "color1", label: "ชุดสีที่ 1", start: 1, end: 12, path: "/01collection/engineer-c" },
    { value: "color2", label: "ชุดสีที่ 2", start: 13, end: 24, path: "/01collection/engineer-c" },
    { value: "color3", label: "ชุดสีที่ 3", start: 25, end: 36, path: "/01collection/engineer-c" },
    { value: "color4", label: "ชุดสีที่ 4", start: 37, end: 48, path: "/01collection/engineer-c" },
    { value: "color5", label: "ชุดสีที่ 5", start: 49, end: 60, path: "/01collection/engineer-c" },
    { value: "color6", label: "ชุดสีที่ 6", start: 61, end: 72, path: "/01collection/engineer-c" },
    { value: "color7", label: "ชุดสีที่ 7", start: 73, end: 84, path: "/01collection/engineer-c" },
    { value: "color8", label: "ชุดสีที่ 8", start: 85, end: 96, path: "/01collection/engineer-c" },
  ];

  const tabItems = [
    { value: "eng-a", label: "เสื้อช็อป แขนสั้น (A)", title: "เสื้อช็อป แขนสั้น (A)", prefix: "ESA", subColorTabs: subTabsA },
    { value: "eng-b", label: "เสื้อช็อป แขนสั้น (B)", title: "เสื้อช็อป แขนสั้น (B)", prefix: "ELA", subColorTabs: subTabsB },   
  ];

  return (
    <div className="w-full scroll-smooth font-noto">
      {/* Header Section - Full Width */}
      <section className="bg-slate-100 py-16 px-6 border-b border-slate-100 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"> 
            Machanic Collection Design | <span className="text-red-600">แบบเสื้อช็อป</span>
          </h1>  
          <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-8 py-2.5 rounded-full border border-red-100 shadow-sm">
            <Sparkles size={18} className="animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em]">Toffy Boutique Selection</span>
          </div>  
          <p className="text-slate-400 font-bold mt-8 text-xl max-w-2xl mx-auto leading-relaxed">
            เลือกสรรดีไซน์และชุดสีคุณภาพพรีเมียม เพื่อภาพลักษณ์ที่โดดเด่นขององค์กรคุณ
          </p>
        </div>
      </section>
      
      {/* Content Container */}      
      <div className="container mx-auto px-4 md:px-12 py-12 space-y-24">
        <section className="relative">
          <Tabs defaultValue="eng-a" className="w-full">
            <div className="flex justify-center mb-20">
              <TabsList className="flex flex-wrap justify-center bg-slate-100/60 p-2.5 rounded-[3.5rem] h-auto w-auto border border-slate-200 shadow-inner gap-3">
                {tabItems.map((tab) => (
                  <TabsTrigger 
                    key={tab.value} 
                    value={tab.value} 
                    className="rounded-[3rem] px-10 py-6 font-black text-sm md:text-base uppercase transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-2xl text-slate-800 hover:text-red-600"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              {tabItems.map((mainTab) => (
                <TabsContent key={mainTab.value} value={mainTab.value} className="focus-visible:outline-none">
                  <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                      {mainTab.title}
                    </h2>
                    <div className="w-32 h-2 bg-red-600 mx-auto rounded-full shadow-lg shadow-red-200" />
                  </div>

                  <Tabs defaultValue="color1" className="w-full">
                    <div className="flex justify-center mb-12">
                      <TabsList className="bg-white border-2 border-slate-100 p-2 rounded-full h-auto gap-3 shadow-xl shadow-slate-100/50 flex flex-wrap justify-center">
                        {mainTab.subColorTabs.map((sub) => (
                          <TabsTrigger 
                            key={sub.value} 
                            value={sub.value} 
                            className="rounded-full px-12 py-4 font-black text-sm md:text-base uppercase data-[state=active]:bg-slate-900 data-[state=active]:text-white text-slate-400 transition-all duration-300"
                          >
                            {sub.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>

                    {mainTab.subColorTabs.map((sub) => (
                      <TabsContent key={sub.value} value={sub.value}>
                        <ColorRangeGallery 
                          path={sub.path} 
                          prefix={mainTab.prefix} 
                          start={sub.start} 
                          end={sub.end} 
                        />
                      </TabsContent>
                    ))}
                  </Tabs>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </section>
      </div>

      <footer className="pt-32 border-t border-slate-100 pb-20 text-center">
        <h3 className="font-black text-6xl md:text-7xl text-slate-900 tracking-tighter uppercase opacity-90">
          Toffy <span className="text-red-600">Boutique</span>
        </h3>
        <p className="text-slate-400 font-black tracking-[0.5em] text-[11px] uppercase mt-4">Quality & Innovation since 1990</p>
      </footer>
    </div>
  );
}