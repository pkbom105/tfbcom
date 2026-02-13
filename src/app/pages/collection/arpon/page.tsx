"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Archive } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

// --- 1. ย้าย TabLabel ออกมาไว้นอกสุด (เพื่อแก้ Error) ---
const TabLabel = ({ iconSize, text }: { iconSize: number; text: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-2">
    <Archive 
      size={iconSize} 
      strokeWidth={2} 
      className="text-[#de2126] flex-shrink-0" 
    />
    <span className="whitespace-nowrap">{text}</span>
  </div>
);

// --- 2. Gallery Component (อยู่นอกเหมือนเดิม) ---
const ColorRangeGallery = ({ path, prefix, start, end }: { path: string; prefix: string; start: number; end: number }) => {
  const images = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10"
    >
      {images.map((num) => (
        <div key={num} className="group relative aspect-square overflow-hidden rounded-[3rem] bg-gray-100 transition-all duration-300 hover:ring-3 hover:ring-red-500 hover:ring-offset-4 hover:-translate-y-1 shadow-sm hover:shadow-2xl">
          <Image
            src={`${path}/${num}.png`}
            alt={`${prefix} image ${num}`}
            fill
            className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function ReadyToWearV232() {
  // --- 3. การจัดการข้อมูล (Data) ---
  const subTabsA = [
    { value: "color1", label: <TabLabel iconSize={60} text="ชุดสีที่ 1" />, start: 1, end: 8, path: "/01collection/arpon" },
    { value: "color2", label: <TabLabel iconSize={40} text="ชุดสีที่ 2" />, start: 9, end: 16, path: "/01collection/arpon" },
    { value: "color3", label: <TabLabel iconSize={40} text="ชุดสีที่ 3" />, start: 17, end: 24, path: "/01collection/arpon" },
    { value: "color4", label: <TabLabel iconSize={40} text="ชุดสีที่ 4" />, start: 25, end: 32, path: "/01collection/arpon" },
    { value: "color5", label: <TabLabel iconSize={40} text="ชุดสีที่ 5" />, start: 33, end: 40, path: "/01collection/arpon" },    
  ];

  const subTabsB = [
    { value: "color6", label: <TabLabel iconSize={40} text="ชุดสีที่ 1" />, start: 41, end: 48, path: "/01collection/arpon" },
    { value: "color7", label: <TabLabel iconSize={40} text="ชุดสีที่ 2" />, start: 33, end: 40, path: "/01collection/arpon" },
    { value: "color8", label: <TabLabel iconSize={40} text="ชุดสีที่ 3" />, start: 41, end: 48, path: "/01collection/arpon" },
    { value: "color9", label: <TabLabel iconSize={40} text="ชุดสีที่ 4" />, start: 49, end: 56, path: "/01collection/arpon" },
    { value: "color10", label: <TabLabel iconSize={40} text="ชุดสีที่ 5" />, start: 57, end: 64, path: "/01collection/arpon" },   
  ];

  const tabItems = [
    { value: "arpon-a", label: "ผ้ากันเปื้อน (A)", title: "ผ้ากันเปื้อน (A)", prefix: "ESA", subColorTabs: subTabsA },
    { value: "arpon-b", label: "ผ้ากันเปื้อน (B)", title: "ผ้ากันเปื้อน (B)", prefix: "ELA", subColorTabs: subTabsB },   
  ];

  return (
    <div className="w-full scroll-smooth font-noto">
      <section className="bg-slate-100 py-16 px-6 border-b-0 border-slate-100 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 uppercase"> 
            Arpon Collection | <span className="text-red-600">แบบผ้ากันเปื้อน</span>
          </h1>  
          <p className="text-slate-400 font-bold mt-8 text-xl max-w-2xl mx-auto">เลือกสรรชุดสีพรีเมียมจาก Toffy Boutique</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-24">
        <Tabs defaultValue="arpon-a" className="w-full">
          <div className="flex justify-center mb-20">
            <TabsList className="flex flex-wrap justify-center bg-slate-100/60 p-2.5 rounded-[3.5rem] h-auto  shadow-inner gap-3">
              {tabItems.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className="rounded-[3rem] px-10 py-6 font-black uppercase transition-all data-[state=active]:bg-red-600 data-[state=active]:text-white shadow-red-100">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {tabItems.map((mainTab) => (
              <TabsContent key={mainTab.value} value={mainTab.value}>
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl font-black text-slate-900 uppercase">{mainTab.title}</h2>
                  <div className="w-32 h-2 bg-red-500 mx-auto rounded-full" />
                </div>

                <Tabs defaultValue="color1" className="w-full">
                  <div className="flex justify-center mb-12">
                    <TabsList className="bg-white  p-2 rounded-[2.5rem] h-auto gap-4 shadow-xl flex flex-wrap justify-center py-6">
                      {mainTab.subColorTabs.map((sub) => (
                        <TabsTrigger key={sub.value} value={sub.value} className="rounded-[1.5rem] px-6 py-4 font-black transition-all h-auto min-w-[120px] data-[state=active]:bg-slate-50 data-[state=active]:text-[#de2126]">
                          {sub.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  {mainTab.subColorTabs.map((sub) => (
                    <TabsContent key={sub.value} value={sub.value}>
                      <ColorRangeGallery path={sub.path} prefix={mainTab.prefix} start={sub.start} end={sub.end} />
                    </TabsContent>
                  ))}
                </Tabs>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
}