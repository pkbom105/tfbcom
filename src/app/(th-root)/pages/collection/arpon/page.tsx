"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Archive } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import thDict from "@/dictionaries/th.json";
import enDict from "@/dictionaries/en.json";

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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10"
    >
      {images.map((num, idx) => (
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
                src={`${path}/${num}.png`}
                alt="Product image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function ReadyToWearV232({ lang = "th" }: { lang?: string }) {
  const dict = (lang === "en" ? enDict : thDict).collections;
  
  // --- 3. การจัดการข้อมูล (Data) ---
  const subTabsA = [
    { value: "color1", label: <TabLabel iconSize={60} text={`${dict.color_set} 1`} />, start: 1, end: 8, path: "/01collection/arpon" },
    { value: "color2", label: <TabLabel iconSize={40} text={`${dict.color_set} 2`} />, start: 9, end: 16, path: "/01collection/arpon" },
    { value: "color3", label: <TabLabel iconSize={40} text={`${dict.color_set} 3`} />, start: 17, end: 24, path: "/01collection/arpon" },
    { value: "color4", label: <TabLabel iconSize={40} text={`${dict.color_set} 4`} />, start: 25, end: 32, path: "/01collection/arpon" },
    { value: "color5", label: <TabLabel iconSize={40} text={`${dict.color_set} 5`} />, start: 33, end: 40, path: "/01collection/arpon" },    
  ];

  const subTabsB = [
    { value: "color6", label: <TabLabel iconSize={40} text={`${dict.color_set} 1`} />, start: 41, end: 48, path: "/01collection/arpon" },
    { value: "color7", label: <TabLabel iconSize={40} text={`${dict.color_set} 2`} />, start: 33, end: 40, path: "/01collection/arpon" },
    { value: "color8", label: <TabLabel iconSize={40} text={`${dict.color_set} 3`} />, start: 41, end: 48, path: "/01collection/arpon" },
    { value: "color9", label: <TabLabel iconSize={40} text={`${dict.color_set} 4`} />, start: 49, end: 56, path: "/01collection/arpon" },
    { value: "color10", label: <TabLabel iconSize={40} text={`${dict.color_set} 5`} />, start: 57, end: 64, path: "/01collection/arpon" },   
  ];

  const tabItems = [
    { value: "arpon-a", label: dict.tabs.arpon_a, title: "Arpon (A)", prefix: "ESA", subColorTabs: subTabsA },
    { value: "arpon-b", label: dict.tabs.arpon_b, title: "Arpon (B)", prefix: "ELA", subColorTabs: subTabsB },   
  ];

  return (
    <div className="w-full scroll-smooth font-noto">
      <section className="py-16 px-6 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 uppercase"> 
            Arpon Collection | <span className="text-red-600">{dict.titles.arpon}</span>
          </h1>  
          <p className="text-slate-400 font-bold mt-8 text-xl max-w-2xl mx-auto">{dict.desc}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-24">
        <Tabs defaultValue="arpon-a" className="w-full flex flex-col items-center">
          
          {/* Main Tabs (Centered Pill) */}
          <div className="w-full flex justify-center mb-16">
            <TabsList className="flex h-auto p-1.5 bg-slate-100/60 rounded-full border border-slate-200/50 shadow-inner w-fit">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value}
                  className="rounded-full px-10 py-3 font-bold text-slate-500 transition-all duration-300 data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-lg hover:text-slate-800 text-base"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {tabItems.map((mainTab) => (
              <TabsContent key={mainTab.value} value={mainTab.value} className="w-full flex flex-col items-center outline-none">
                
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">{mainTab.title}</h2>
                  <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full" />
                </div>

                <Tabs defaultValue="color1" className="w-full flex flex-col items-center">
                  {/* Sub Tabs (Centered Pill) */}
                  <div className="w-full flex justify-center mb-12">
                    <TabsList className="flex flex-wrap h-auto p-1.5 bg-slate-50 rounded-full border border-slate-100 shadow-sm w-fit justify-center">
                      {mainTab.subColorTabs.map((sub: any) => (
                        <TabsTrigger 
                          key={sub.value} 
                          value={sub.value} 
                          className="rounded-full px-6 py-2.5 font-bold text-slate-400 text-sm transition-all data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md"
                        >
                          {sub.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  {mainTab.subColorTabs.map((sub: any) => (
                    <TabsContent key={sub.value} value={sub.value} className="w-full outline-none">
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