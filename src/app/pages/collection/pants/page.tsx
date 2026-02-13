"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";

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
            // เอฟเฟกต์ Ring และขยับขึ้นยังคงอยู่ แต่ลบความสามารถในการซูมภาพข้างในออก
            className="group relative aspect-square overflow-hidden rounded-[3rem] bg-gray-100 transition-all duration-300 hover:ring-3 hover:ring-red-500 hover:ring-offset-4 hover:-translate-y-1 shadow-sm hover:shadow-2xl"
          >
            <Image
              src={`${path}/${fileName}`}
              alt={`${prefix} catalog ${num}`}
              fill
              // ลบ group-hover:scale-110 ออกจากตรงนี้แล้ว
              className="object-contain p-10 transition-transform duration-700" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default function ReadyToWearV231() {
  const tabItems = [
    { 
      value: "polo-a", 
      label: "Pants Collection", 
      title: "Pants Collection", 
      prefix: "PA", 
      subColorTabs: [
        { value: "color1", label: "ชุดสีที่ 1", start: 11, end: 17, path: "/01collection/pants" }
      ]
    },
  ];

  return (
    <div className="w-full scroll-smooth font-noto">
       <section className="bg-slate-100 py-16 px-6 border-b border-slate-100 w-full">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"> 
              Pants Collection Design | <span className="text-red-600">แบบกางเกง</span>
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
 
      <div className="container mx-auto px-4 md:px-12 py-12 space-y-24">
        <section className="relative w-full">
          <Tabs defaultValue="polo-a" className="w-full">
            <div className="flex justify-center w-full mb-20 px-4">
              <TabsList className="flex flex-wrap justify-center bg-slate-100/60 p-2 rounded-[3.5rem] h-auto w-auto max-w-full border border-slate-200 shadow-inner gap-2">
                {tabItems.map((tab) => (
                  <TabsTrigger 
                    key={tab.value} 
                    value={sub.value}
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
                  <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                      {mainTab.title}
                    </h2>
                    <div className="w-32 h-2 bg-red-600 mx-auto rounded-full shadow-lg shadow-red-200" />
                  </div>

                  <Tabs defaultValue="color1" className="w-full">
                    <div className="flex justify-center mb-12 px-4">
                      <TabsList className="flex flex-wrap justify-center bg-white border-2 border-slate-100 p-2 rounded-full h-auto gap-2 shadow-xl shadow-slate-100/50">
                        {mainTab.subColorTabs.map((sub) => (
                          <TabsTrigger 
                            key={sub.id} 
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