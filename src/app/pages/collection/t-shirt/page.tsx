"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Maximize2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- ส่วนที่ 1: Gallery Component (แสดงรูปภาพพร้อม Hover Ring เอฟเฟกต์) ---
const ColorRangeGallery = ({ path, prefix, start, end }: { path: string; prefix: string; start: number; end: number }) => {
  const images = [];
  for (let i = start; i <= end; i++) {
    images.push(i);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10"
    >
      {images.map((num) => {
        const fileName = `${num}.png`; 
        return (
          <div 
            key={num} 
            className="group relative aspect-square overflow-hidden rounded-[3rem] bg-gray-100 transition-all duration-300 hover:ring-3 hover:ring-red-500 hover:ring-offset-4 hover:-translate-y-1 shadow-sm hover:shadow-2xl"
          >
            {/* รูปภาพสินค้า */}
            <Image
              src={`${path}/${fileName}`}
              alt={`${prefix} image ${num}`}
              fill
              className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default function ReadyToWearV233() {
  // --- 2. การจัดการข้อมูลชุดสี (8 ชุดสี) ---
  const subTabsData = [
    { value: "color1", label: "ชุดสีที่ 1", start: 13, end: 24 },
    { value: "color2", label: "ชุดสีที่ 2", start: 25, end: 36 },
    { value: "color3", label: "ชุดสีที่ 3", start: 37, end: 48 },
    { value: "color4", label: "ชุดสีที่ 4", start: 49, end: 58 },
    { value: "color5", label: "ชุดสีที่ 5", start: 59, end: 70 },
    { value: "color6", label: "ชุดสีที่ 6", start: 71, end: 82 },
    { value: "color7", label: "ชุดสีที่ 7", start: 83, end: 94 },
    { value: "color8", label: "ชุดสีที่ 8", start: 95, end: 106 },
  ];

  const tabItems = [
    { 
      value: "tshirt-a", 
      label: "คอกลม", 
      title: "T-Shirt Series", 
      prefix: "PA", 
      path: "/01collection/tshirt-a",
      subColorTabs: subTabsData 
    },
  ];

  return (
    <div className="w-full scroll-smooth font-noto">
    {/* Section นี้จะกว้างเต็มจอ (Full Width) */}
      <section className="bg-slate-100 py-16 px-6 border-b border-slate-100 w-full">
        {/* ใช้ container ด้านในเพื่อจัดเนื้อหาให้อยู่ตรงกลาง */} {/* --- Header Section --- */}
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"> 
                T-Shirt Collection Design | <span className="text-red-600">แบบเสื้อคอกลม</span>
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
      
     {/* container  */}      
<div className="container mx-auto px-15 md:px-12 py-12 space-y-24">

          {/* --- 4. Main Navigation Tabs (Centered) --- */}
      <section className="flex flex-col items-center w-full">
        <Tabs defaultValue="tshirt-a" className="w-full">
          <div className="flex justify-center mb-20 px-4">
            <TabsList className="flex flex-wrap justify-center bg-slate-100/60 p-2.5 rounded-[3.5rem] h-auto w-auto border border-slate-200 shadow-inner gap-3">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className="rounded-[3rem] px-12 py-6 font-black text-sm md:text-base uppercase transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-2xl text-slate-800 hover:text-red-600"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {tabItems.map((mainTab) => (
              <TabsContent key={mainTab.value} value={mainTab.value} className="focus-visible:outline-none flex flex-col items-center">
                {/* Section Title */}
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                    {mainTab.title}
                  </h2>
                  <div className="w-32 h-2 bg-red-600 mx-auto rounded-full shadow-lg shadow-red-200" />
                </div>

                {/* --- 5. Sub-Tabs Section (Color Selection Centered) --- */}
                <Tabs defaultValue="color1" className="w-full flex flex-col items-center">
                  <div className="flex justify-center mb-12 px-4">
                    <TabsList className="flex flex-wrap justify-center bg-white border-2 border-slate-100 p-2 rounded-full h-auto gap-3 shadow-xl shadow-slate-100/50">
                      {mainTab.subColorTabs.map((sub) => (
                        <TabsTrigger 
                          key={sub.value} 
                          value={sub.value} 
                          className="rounded-full px-10 py-4 font-black text-sm md:text-base uppercase data-[state=active]:bg-slate-900 data-[state=active]:text-white text-slate-800 transition-all duration-300"
                        >
                          {sub.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  {mainTab.subColorTabs.map((sub) => (
                    <TabsContent key={sub.value} value={sub.value} className="w-full">
                      <ColorRangeGallery 
                        path={mainTab.path} 
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

      {/* --- 6. Footer Branding (Centered) --- */}
      <footer className="pt-32 border-t border-slate-100 pb-20 flex flex-col items-center text-center">
        <h3 className="font-black text-6xl md:text-7xl text-slate-900 tracking-tighter uppercase opacity-90">
          Toffy <span className="text-red-600">Boutique</span>
        </h3>
        <p className="text-slate-400 font-black tracking-[0.5em] text-[11px] uppercase mt-4">
          Quality & Innovation since 1990
        </p>
      </footer>
    </div>
  );
}