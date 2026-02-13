"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Maximize2 } from "lucide-react";
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

export default function ReadyToWearV229() {
  // --- ส่วนที่ 2: Original Data (SubTabs 1-10) ---
  const createSubTabs = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 1, end: 6, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 7, end: 12, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 13, end: 18, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 19, end: 24, path: basePath },
    { value: "color5", label: "ชุดสีที่ 5", start: 25, end: 30, path: basePath },
    { value: "color6", label: "ชุดสีที่ 6", start: 31, end: 36, path: basePath },
    { value: "color7", label: "ชุดสีที่ 7", start: 37, end: 42, path: basePath },
    { value: "color8", label: "ชุดสีที่ 8", start: 43, end: 48, path: basePath },
  ];
  const createSubTabs2 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 49, end: 62, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 63, end: 76, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 77, end: 90, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 91, end: 104, path: basePath },
    { value: "color5", label: "ชุดสีที่ 5", start: 105, end: 117, path: basePath },
    { value: "color6", label: "ชุดสีที่ 6", start: 118, end: 131, path: basePath },
    { value: "color7", label: "ชุดสีที่ 7", start: 132, end: 145, path: basePath },
    { value: "color8", label: "ชุดสีที่ 8", start: 146, end: 159, path: basePath },
  ];
  const createSubTabs3 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 1, end: 12, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 13, end: 24, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 25, end: 36, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 37, end: 48, path: basePath },
    { value: "color5", label: "ชุดสีที่ 5", start: 49, end: 60, path: basePath },
    { value: "color6", label: "ชุดสีที่ 6", start: 61, end: 72, path: basePath },
    { value: "color7", label: "ชุดสีที่ 7", start: 73, end: 84, path: basePath },
    { value: "color8", label: "ชุดสีที่ 8", start: 85, end: 96, path: basePath },
  ];
  const createSubTabs4 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 1, end: 8, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 9, end: 16, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 17, end: 24, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 25, end: 32, path: basePath },
    { value: "color5", label: "ชุดสีที่ 5", start: 33, end: 39, path: basePath },
    { value: "color6", label: "ชุดสีที่ 6", start: 40, end: 47, path: basePath },
    { value: "color7", label: "ชุดสีที่ 7", start: 48, end: 55, path: basePath },
    { value: "color8", label: "ชุดสีที่ 8", start: 56, end: 63, path: basePath },
  ];
  const createSubTabs5 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 1, end: 11, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 12, end: 22, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 23, end: 32, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 33, end: 43, path: basePath },
    { value: "color5", label: "ชุดสีที่ 5", start: 44, end: 54, path: basePath },
    { value: "color6", label: "ชุดสีที่ 6", start: 55, end: 65, path: basePath },
    { value: "color7", label: "ชุดสีที่ 7", start: 66, end: 76, path: basePath },
    { value: "color8", label: "ชุดสีที่ 8", start: 77, end: 87, path: basePath },
  ];
  const createSubTabs6 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 1, end: 12, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 13, end: 24, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 25, end: 36, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 37, end: 48, path: basePath },
    { value: "color5", label: "ชุดสีที่ 5", start: 49, end: 60, path: basePath },
    { value: "color6", label: "ชุดสีที่ 6", start: 61, end: 72, path: basePath },
    { value: "color7", label: "ชุดสีที่ 7", start: 73, end: 84, path: basePath },
    { value: "color8", label: "ชุดสีที่ 8", start: 85, end: 96, path: basePath },
  ];
  const createSubTabs7 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 19, end: 24, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 25, end: 30, path: basePath },    
  ];
  const createSubTabs8 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 31, end: 39, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 40, end: 48, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 49, end: 57, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 58, end: 66, path: basePath },
  ];
  const createSubTabs9 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 67, end: 78, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 79, end: 90, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 91, end: 102, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 103, end: 114, path: basePath },
    { value: "color5", label: "ชุดสีที่ 5", start: 115, end: 126, path: basePath },
    { value: "color6", label: "ชุดสีที่ 6", start: 127, end: 138, path: basePath },    
  ];
  const createSubTabs10 = (basePath: string) => [
    { value: "color1", label: "ชุดสีที่ 1", start: 1, end: 13, path: basePath },
    { value: "color2", label: "ชุดสีที่ 2", start: 14, end: 26, path: basePath },
    { value: "color3", label: "ชุดสีที่ 3", start: 27, end: 39, path: basePath },
    { value: "color4", label: "ชุดสีที่ 4", start: 40, end: 52, path: basePath },
    { value: "color5", label: "ชุดสีที่ 5", start: 53, end: 64, path: basePath },    
  ];

  // --- ส่วนที่ 3: Tab Items (ครบถ้วนตามเดิม) ---
  const tabItems = [
    { value: "polo-a", label: "โปโล A", title: "Polo A Series", prefix: "PA", subColorTabs: createSubTabs("/01collection/polo-a/color") },
    { value: "polo-b", label: "โปโล B", title: "Polo B Series", prefix: "PB", subColorTabs: createSubTabs2("/01collection/polo-b") },
    { value: "polo-c", label: "โปโล C", title: "Polo C Series", prefix: "PC", subColorTabs: createSubTabs3("/01collection/polo-c") },
    { value: "polo-d", label: "โปโล D", title: "Polo D Series", prefix: "PA", subColorTabs: createSubTabs4("/01collection/polo-d") },
    { value: "polo-e", label: "โปโล E", title: "Polo E Series", prefix: "PB", subColorTabs: createSubTabs5("/01collection/polo-e") },
    { value: "polo-f", label: "โปโล F", title: "Polo F Series", prefix: "PC", subColorTabs: createSubTabs6("/01collection/polo-f") },
    { value: "polo-aa", label: "โปโล AA", title: "Polo AA Series", prefix: "PAA", subColorTabs: createSubTabs7("/01collection/polo-aa/color") },
    { value: "polo-collar", label: "ปกโปโล ", title: "Polo Collar", prefix: "PB", subColorTabs: createSubTabs8("/01collection/polo-collar/color") },
    { value: "polo-arm", label: "แขนโปโล ", title: "Polo Arm", prefix: "PC", subColorTabs: createSubTabs9("/01collection/polo-arm/color") },
    { value: "plak", label: "สาปโปโล", title: "Planket", prefix: "CV", subColorTabs: createSubTabs10("/01collection/plak") },
  ];

  return (
    <div className="w-full scroll-smooth font-noto">
      {/* --- ส่วน Header (Full Width) --- */}
      <section className="bg-slate-100 py-16 px-6 border-b border-slate-200 w-full">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"> 
                Polo Collection Design | <span className="text-red-600">แบบเสื้อคอกลม</span>
            </h1>  
            <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-8 py-2.5 rounded-full border border-red-100 shadow-sm">
              <Sparkles size={18} className="animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em]">Toffy Boutique Selection</span>
            </div>  
            <p className="text-slate-500 font-bold mt-8 text-xl max-w-2xl mx-auto leading-relaxed">
                เลือกสรรดีไซน์และชุดสีคุณภาพพรีเมียม เพื่อภาพลักษณ์ที่โดดเด่นขององค์กรคุณ
            </p>
        </div>
      </section>
      
      <div className="container mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* Main Tabs Selection */}
        <section>
          <Tabs defaultValue="polo-a" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="grid grid-cols-2 sm:grid-cols-5 bg-slate-100/80 p-2 rounded-[3rem] h-auto w-full max-w-6xl border border-slate-200 shadow-inner gap-2">
                {tabItems.map((tab) => (
                  <TabsTrigger 
                    key={tab.value} 
                    value={tab.value} 
                    className="rounded-[2.5rem] py-5 font-black text-sm md:text-base uppercase transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-xl text-slate-800 hover:text-red-600"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              {tabItems.map((mainTab) => (
                <TabsContent key={mainTab.value} value={mainTab.value} className="focus-visible:outline-none">
                  <div className="text-center mb-12 space-y-2">
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">{mainTab.title}</h2>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
                  </div>

                  {/* Sub-Tabs Section */}
                  <Tabs defaultValue="color1" className="w-full">
                    <div className="flex justify-center mb-10">
                      <TabsList className="bg-white border-2 border-slate-100 p-1.5 rounded-full h-auto gap-2 shadow-sm flex flex-wrap justify-center">
                        {mainTab.subColorTabs.map((sub) => (
                          <TabsTrigger 
                            key={sub.value} 
                            value={sub.value} 
                            className="rounded-full px-6 md:px-10 py-3 font-black text-sm md:text-base uppercase data-[state=active]:bg-slate-900 data-[state=active]:text-white text-slate-800 transition-all"
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

      {/* Footer Section */}
      <footer className="pt-20 border-t border-slate-100 pb-20 text-center">
        <h3 className="font-black text-5xl md:text-6xl text-slate-900 tracking-tighter uppercase text-center">
          Toffy <span className="text-red-600">Boutique</span>
        </h3>
        <p className="text-slate-400 font-black tracking-[0.5em] text-[10px] uppercase mt-4 text-center">Quality & Innovation since 1990</p>
      </footer>
    </div>
  );
}