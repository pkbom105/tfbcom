"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Maximize2, Sparkles, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";
import thDict from "@/dictionaries/th.json";
import enDict from "@/dictionaries/en.json";

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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10"
    >
      {images.map((num, idx) => {
        const fileName = `${num}.png`; 
        return (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx % 3) * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-xl bg-white p-2 hover:bg-red-50 cursor-pointer">
              <CardContent className="p-0 relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`${path}/${fileName}`}
                  alt={`${prefix} image ${num}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default function ReadyToWearV229Fixed({ lang = "th" }: { lang?: string }) {
  const dict = (lang === "en" ? enDict : thDict).collections;

  // สร้าง Icon ไว้ล่วงหน้าเพื่อความสะอาด
  // const DiamondIcon = <Diamond fill="#de2126" size={32} className="text-[#de2126]" />;

  // ฟังก์ชันช่วยสร้าง Sub-tabs เพื่อลดความซ้ำซ้อนของโค้ด
  const createSubTabs = (basePath: string) => [
    { value: "color1",  label: `${dict.color_set} 1`, start: 10, end: 25, path: basePath },
    { value: "color2",  label: `${dict.color_set} 2`, start: 26, end: 41, path: basePath },
    { value: "color3",  label: `${dict.color_set} 3`, start: 42, end: 57, path: basePath },
    { value: "color4",  label: `${dict.color_set} 4`, start: 58, end: 73, path: basePath },
    { value: "color5",  label: `${dict.color_set} 5`, start: 75, end: 90, path: basePath },  
  ];
  
  const tabItems = [
    { 
      value: "shirt-a", 
      label: dict.tabs.shirt_a, 
      title: "Shirt A Series", 
      prefix: "PA", 
      subColorTabs: createSubTabs("/01collection/shirt-a") 
    },
    // สามารถเพิ่มหมวดหมู่เพิ่มได้ที่นี่
  ];

  return (
  <div className="w-full scroll-smooth font-noto">
      {/* Section นี้จะกว้างเต็มจอ (Full Width) */}
        <section className="py-16 px-6 w-full">
          {/* ใช้ container ด้านในเพื่อจัดเนื้อหาให้อยู่ตรงกลาง */} {/* --- Header Section --- */}
          <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"> 
                  Shirt Collection Design | <span className="text-red-600">{dict.titles.shirt}</span>
              </h1>  
              <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-8 py-2.5 rounded-full border border-red-100 shadow-sm">
                <Sparkles size={18} className="animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.5em]">{dict.badge}</span>
              </div>  
              <p className="text-slate-400 font-bold mt-8 text-xl max-w-2xl mx-auto leading-relaxed">
                  {dict.desc}
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
            <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-slate-100/80 p-2 rounded-2xl md:rounded-[2rem] h-auto w-full max-w-6xl border border-slate-200 shadow-inner gap-1">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className="rounded-xl transition-all font-bold text-slate-800 py-3 text-xs md:text-sm lg:text-base px-1 data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md"
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
                    <TabsList className="flex flex-wrap justify-center bg-slate-100/80 p-2 rounded-2xl md:rounded-full h-auto w-auto border border-slate-200 shadow-inner gap-1">
                      {mainTab.subColorTabs.map((sub) => (
                        <TabsTrigger 
                          key={sub.value} 
                          value={sub.value} 
                          className="rounded-xl md:rounded-full transition-all font-bold text-slate-800 py-2 px-4 text-xs md:text-sm data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md"
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
          {dict.footer_slogan}
        </p>
      </footer>
    </div>
  );
}