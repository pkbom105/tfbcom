"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Maximize2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- 1. Reusable Gallery Component ---
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
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12"
    >
      {images.map((num) => {
        const fileName = `${num}.png`; 
        return (
          <div 
            key={num} 
            className="group relative aspect-square overflow-hidden rounded-[3rem] border border-slate-100 bg-[#F8FAFC] transition-all duration-500 hover:bg-red-50 hover:shadow-2xl hover:shadow-red-100/50 hover:-translate-y-3"
          >
            <Image
              src={`${path}/${fileName}`}
              alt={`${prefix} catalog ${num}`}
              fill
              className="object-contain p-10 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            
            <div className="absolute bottom-8 left-0 w-full flex justify-center pointer-events-none">
              <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Code: {prefix}-{num}
              </span>
            </div>

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

export default function ReadyToWearV231() {
  // --- 2. Configuration Data ---
  const tabItems = [
    { 
      value: "polo-a", 
      label: " Pants Collection", // อัปเดต Label ตามต้องการ
      title: "Pants Collection", 
      prefix: "PA", 
      subColorTabs: [
        { value: "color1", label: "ชุดสีที่ 1", start: 11, end: 17, path: "/01collection/pants" }
      ]
    },
    // เพิ่ม Tab อื่นๆ ได้ที่นี่
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 py-12 space-y-24 scroll-smooth font-noto">
      
      {/* --- 3. Header Section --- */}
      <header className="text-center space-y-6 pt-12 relative">
        <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-8 py-2.5 rounded-full border border-red-100 shadow-sm">
          <Sparkles size={18} className="animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em]">Toffy Boutique Selection</span>
        </div>
        
        <div className="space-y-2 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter">
            Collection <span className="text-red-600">Design</span>
          </h1>
          <p className="text-slate-400 font-bold text-xl max-w-2xl mx-auto leading-relaxed">
            เลือกสรรดีไซน์และชุดสีคุณภาพพรีเมียม เพื่อภาพลักษณ์ที่โดดเด่นขององค์กรคุณ
          </p>
        </div>
      </header>

      {/* --- 4. Main Navigation Tabs --- */}
      <section className="relative w-full">
        <Tabs defaultValue="polo-a" className="w-full">
          {/* Main Tab List - ปรับเป็น Flex Center */}
          <div className="flex justify-center w-full mb-20 px-4">
            <TabsList className="flex flex-wrap justify-center bg-slate-100/60 p-2 rounded-[3.5rem] h-auto w-auto max-w-full border border-slate-200 shadow-inner gap-2">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className="rounded-[3rem] px-10 py-5 font-black text-sm md:text-base uppercase transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-2xl text-slate-500 hover:text-red-600 min-w-[140px]"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {tabItems.map((mainTab) => (
              <TabsContent key={mainTab.value} value={mainTab.value} className="focus-visible:outline-none">
                {/* Section Title */}
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                    {mainTab.title}
                  </h2>
                  <div className="w-32 h-2 bg-red-600 mx-auto rounded-full shadow-lg shadow-red-200" />
                </div>

                {/* --- 5. Sub-Tabs Section (Color Selection) --- */}
                <Tabs defaultValue="color1" className="w-full">
                  <div className="flex justify-center mb-12 px-4">
                    <TabsList className="flex flex-wrap justify-center bg-white border-2 border-slate-100 p-2 rounded-full h-auto gap-2 shadow-xl shadow-slate-100/50">
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

      {/* --- 6. Footer Branding --- */}
      <footer className="pt-32 border-t border-slate-100 pb-20 text-center">
        <div className="space-y-6">
          <h3 className="font-black text-6xl md:text-7xl text-slate-900 tracking-tighter uppercase opacity-90">
            Toffy <span className="text-red-600">Boutique</span>
          </h3>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-12 bg-slate-200" />
             <p className="text-slate-400 font-black tracking-[0.6em] text-[11px] uppercase">
               Premium Quality Since 1990
             </p>
             <div className="h-px w-12 bg-slate-200" />
          </div>
        </div>
      </footer>
    </div>
  );
}