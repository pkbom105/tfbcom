"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Maximize2, Sparkles, Diamond } from "lucide-react";
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

export default function ReadyToWearV229Fixed() {
  // สร้าง Icon ไว้ล่วงหน้าเพื่อความสะอาด
  // const DiamondIcon = <Diamond fill="#de2126" size={32} className="text-[#de2126]" />;

  // ฟังก์ชันช่วยสร้าง Sub-tabs เพื่อลดความซ้ำซ้อนของโค้ด
  const createSubTabs = (basePath: string) => [
    { value: "color1",  label: "ชุดสีที่ 1", start: 10, end: 25, path: basePath },
    { value: "color2",  label: "ชุดสีที่ 2", start: 26, end: 41, path: basePath },
    { value: "color3",  label: "ชุดสีที่ 3", start: 42, end: 57, path: basePath },
    { value: "color4",  label: "ชุดสีที่ 4", start: 58, end: 73, path: basePath },
    { value: "color5",  label: "ชุดสีที่ 5", start: 75, end: 90, path: basePath },  
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
  <div className="w-full scroll-smooth font-noto">
      {/* Section นี้จะกว้างเต็มจอ (Full Width) */}
        <section className="bg-slate-100 py-16 px-6 border-b border-slate-100 w-full">
          {/* ใช้ container ด้านในเพื่อจัดเนื้อหาให้อยู่ตรงกลาง */} {/* --- Header Section --- */}
          <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"> 
                  Shirt Collection Design | <span className="text-red-600">แบบเสื้อเชิ้ต</span>
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
                            "data-[state=active]:bg-red-500 text-black text-bold text-lg data-[state=active]:text-white *:data-[state=active]:scale-[1.05] data-[state=active]:shadow-md"
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
      </div>

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