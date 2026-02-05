"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Maximize2, Sparkles, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";


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
            className="group relative aspect-square overflow-hidden rounded-[3rem] border border-slate-100 bg-[#F8FAFC] transition-all duration-500 hover:bg-red-50 hover:shadow-2xl hover:shadow-red-100/50 hover:-translate-y-3"
          >
            {/* รูปภาพสินค้า */}
            <Image
              src={`${path}/${fileName}`}
              alt={`${prefix} catalog ${num}`}
              fill
              className="object-contain p-10 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            
            {/* รหัสสินค้า (แสดงเมื่อ Hover) */}
            <div className="absolute bottom-8 left-0 w-full flex justify-center pointer-events-none">
              <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
                Code: {prefix}-{num}
              </span>
            </div>

            {/* ไอคอนขยายรูป */}
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
              <div className="bg-white p-4 rounded-full shadow-xl border border-slate-50">
                <Maximize2 size={22} className="text-red-600" />
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default function ReadyToWearV232() {
  // --- 2. การจัดการข้อมูล (Configuration) ---
  
  // ชุดสีสำหรับผ้ากันเปื้อน (A)
  const subTabsA = [
    { value: "color1", label: <Diamond fill="#de2126" size={40} className="text-[#de2126]" />, start: 1, end: 8, path: "/01collection/arpon" },
    { value: "color2", label: <Diamond fill="#de2126" size={40} className="text-[#de2126]" />, start: 9, end: 16, path: "/01collection/arpon" },
    { value: "color3", label: <Diamond fill="#de2126" size={40} className="text-[#de2126]" />, start: 17, end: 24, path: "/01collection/arpon" },
    { value: "color4", label: <Diamond fill="#de2126" size={40} className="text-[#de2126]" />, start: 25, end: 32, path: "/01collection/arpon" },
    { value: "color5", label: <Diamond fill="#de2126" size={40} className="text-[#de2126]" />, start: 33, end: 40, path: "/01collection/arpon" },    
  ];

  // เสื้อช็อป ผ้ากันเปื้อน (B)
  const subTabsB = [
    { value: "color6", label: <Diamond fill="#de2126" size={24} className="text-[#de2126]" />, start: 41, end: 48, path: "/01collection/arpon" },
    { value: "color7", label: <Diamond fill="#de2126" size={24} className="text-[#de2126]" />, start: 33, end: 40, path: "/01collection/arpon" },
    { value: "color8", label: <Diamond fill="#de2126" size={24} className="text-[#de2126]" />, start: 41, end: 48, path: "/01collection/arpon" },
    { value: "color9", label: <Diamond fill="#de2126" size={24} className="text-[#de2126]" />, start: 49, end: 56, path: "/01collection/arpon" },
    { value: "color10", label: <Diamond fill="#de2126" size={24} className="text-[#de2126]" />, start: 57, end: 64, path: "/01collection/arpon" },   
  ];

  const tabItems = [
    { value: "arpon-a", label: "ผ้ากันเปื้อน (A)", title: "ผ้ากันเปื้อน (A)", prefix: "ESA", subColorTabs: subTabsA },
    { value: "arpon-b", label: "ผ้ากันเปื้อน (ฺB)", title: "ผ้ากันเปื้อน (B)", prefix: "ELA", subColorTabs: subTabsB },   
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 py-12 space-y-24 scroll-smooth font-noto">
      
      {/* --- 3. ส่วนหัว (Header) --- */}
      <header className="text-center space-y-6 pt-12 relative">
        <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-8 py-2.5 rounded-full border border-red-100 shadow-sm">
          <Sparkles size={18} className="animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em]">Toffy Boutique Selection</span>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter">
            Collection <span className="text-red-600">Design</span>
          </h1>
          <p className="text-slate-400 font-bold text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            เลือกสรรดีไซน์และชุดสีที่ต้องการสั่งผลิตสำหรับองค์กรคุณ
          </p>
        </div>
      </header>

      {/* --- 4. ส่วนเมนูหลัก (Main Tabs) --- */}
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

                {/* --- 5. ส่วนเมนูย่อยชุดสี (Sub-Tabs Selection) --- */}
                <Tabs defaultValue="color1" className="w-full">
                  <div className="flex justify-center mb-12">
                    <TabsList className="bg-white border-2 border-slate-100 p-2 rounded-full h-auto gap-3 shadow-xl shadow-slate-100/50 flex flex-wrap justify-center">
                      {mainTab.subColorTabs.map((sub) => (
                        <TabsTrigger 
                          key={sub.value} 
                          value={sub.value} 
                          className="rounded-full px-12 py-4 font-black text-sm md:text-base uppercase data-[state=active]:bg-slate-200 data-[state=active]:text-white text-slate-400 transition-all duration-300"
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

      {/* --- 6. ส่วนท้าย (Footer) --- */}
      <footer className="pt-32 border-t border-slate-100 pb-20 text-center">
        <h3 className="font-black text-6xl md:text-7xl text-slate-900 tracking-tighter uppercase opacity-90">
          Toffy <span className="text-red-600">Boutique</span>
        </h3>
        <p className="text-slate-400 font-black tracking-[0.5em] text-[11px] uppercase mt-4">Quality & Innovation since 1990</p>
      </footer>
    </div>
  );
}