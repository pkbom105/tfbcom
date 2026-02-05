"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Maximize2, Sparkles, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";

// --- 1. Gallery Component ---
// ใช้ Array.from เพื่อสร้างรายการรูปภาพตามช่วงที่กำหนด
const ColorRangeGallery = ({ 
  path, 
  prefix, 
  start, 
  end 
}: { 
  path: string; 
  prefix: string; 
  start: number; 
  end: number 
}) => {
  const images = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12"
    >
      {images.map((num) => (
        <div 
          key={num} 
          className="group relative aspect-square overflow-hidden rounded-[3rem] border border-slate-100 bg-[#F8FAFC] transition-all duration-500 hover:bg-red-50 hover:shadow-2xl hover:shadow-red-100/50 hover:-translate-y-3"
        >
          {/* รูปภาพสินค้า */}
          <div className="relative w-full h-full p-10">
            <Image
              src={`${path}/${num}.png`}
              alt={`${prefix} catalog ${num}`}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          
          {/* รหัสสินค้า (แสดงเมื่อ Hover) */}
          <div className="absolute bottom-8 left-0 w-full flex justify-center pointer-events-none">
            <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
              Code: {prefix}-{num}
            </span>
          </div>

          {/* ไอคอนขยายรูป */}
          <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
            <div className="bg-white p-4 rounded-full shadow-xl border border-slate-50">
              <Maximize2 size={22} className="text-[#de2126]" />
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default function ReadyToWearV229Fixed() {
  // สร้าง Icon ไว้ล่วงหน้าเพื่อความสะอาด
  const DiamondIcon = <Diamond fill="#de2126" size={32} className="text-[#de2126]" />;

  // ฟังก์ชันช่วยสร้าง Sub-tabs เพื่อลดความซ้ำซ้อนของโค้ด
  const createSubTabs = (basePath: string) => [
    { value: "color1", label: DiamondIcon, start: 10, end: 25, path: basePath },
    { value: "color2", label: DiamondIcon, start: 26, end: 41, path: basePath },
    { value: "color3", label: DiamondIcon, start: 42, end: 57, path: basePath },
    { value: "color4", label: DiamondIcon, start: 58, end: 73, path: basePath },
    { value: "color5", label: DiamondIcon, start: 75, end: 90, path: basePath },  
  ];
  
  const tabItems = [
    { 
      value: "shirt-a", 
      label: "เชิ้ต A", 
      title: "Shirt A Series", 
      prefix: "PA", 
      subColorTabs: createSubTabs("/01collection/shirt-a") 
    },
    // สามารถเพิ่มหมวดหมู่เพิ่มได้ที่นี่
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 py-12 space-y-24 scroll-smooth font-noto">
      
      {/* --- Header Section --- */}
      <header className="text-center space-y-6 pt-12">
        <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-8 py-2.5 rounded-full border border-red-100 shadow-sm">
          <Sparkles size={18} className="animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em]">Toffy Boutique Selection</span>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
            Collection <span className="text-[#de2126]">Design</span>
          </h1>
          <p className="text-slate-400 font-bold text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            เลือกหมวดหมู่และชุดสีที่ต้องการสั่งผลิตสำหรับองค์กรคุณ
          </p>
        </div>
      </header>

      {/* --- Main Section --- */}
      <section className="relative">
        <Tabs defaultValue="shirt-a" className="w-full">
          {/* Main Category Tabs */}
          <div className="flex justify-center mb-20">
            <TabsList className="flex flex-wrap justify-center bg-slate-100/60 p-2.5 rounded-[3.5rem] h-auto w-auto border border-slate-200 shadow-inner gap-3">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className="rounded-[3rem] px-12 py-6 font-black text-sm md:text-base uppercase transition-all data-[state=active]:bg-[#de2126] data-[state=active]:text-white data-[state=active]:shadow-2xl text-slate-800 hover:text-[#de2126]"
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
                  <h2 className="text-6xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">{mainTab.title}</h2>
                  <div className="w-32 h-2 bg-[#de2126] mx-auto rounded-full shadow-lg shadow-red-200" />
                </div>

                {/* Sub-Tabs (Diamond Color Selectors) */}
                <Tabs defaultValue="color1" className="w-full">
                  <div className="flex justify-center mb-12">
                    <TabsList className="bg-white border-2 border-slate-100 p-2 rounded-full h-auto gap-4 shadow-xl shadow-slate-100/50 flex flex-wrap justify-center">
                      {mainTab.subColorTabs.map((sub) => (
                        <TabsTrigger 
                          key={sub.value} 
                          value={sub.value} 
                          // ปรับลด Hover Effect ลง 50% (Scale 1.05)
                          className={cn(
                            "rounded-full px-8 py-4 transition-all duration-300",
                            "hover:scale-[1.05] hover:bg-slate-50",
                            "data-[state=active]:bg-slate-900 data-[state=active]:scale-[1.05] data-[state=active]:shadow-md"
                          )}
                        >
                          {sub.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  <AnimatePresence mode="wait">
                    {mainTab.subColorTabs.map((sub) => (
                      <TabsContent key={sub.value} value={sub.value} className="focus-visible:outline-none">
                        <ColorRangeGallery 
                          path={sub.path} 
                          prefix={mainTab.prefix} 
                          start={sub.start} 
                          end={sub.end} 
                        />
                      </TabsContent>
                    ))}
                  </AnimatePresence>
                </Tabs>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </section>

      {/* --- Footer --- */}
      <footer className="pt-32 border-t border-slate-100 pb-20 text-center">
        <h3 className="font-black text-6xl md:text-7xl text-slate-900 tracking-tighter uppercase opacity-90">
          Toffy <span className="text-[#de2126]">Boutique</span>
        </h3>
        <p className="text-slate-400 font-black tracking-[0.5em] text-[11px] uppercase mt-4">
          Quality & Innovation since 1990
        </p>
      </footer>
    </div>
  );
}