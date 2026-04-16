"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Maximize2 } from "lucide-react";
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

export default function ReadyToWearV229({ lang = "th" }: { lang?: string }) {
  const dict = (lang === "en" ? enDict : thDict).collections;

  // --- ส่วนที่ 2: Original Data (SubTabs 1-10) ---
  const createSubTabs = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 1, end: 6, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 7, end: 12, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 13, end: 18, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 19, end: 24, path: basePath },
    { value: "color5", label: `${dict.color_set} 5`, start: 25, end: 30, path: basePath },
    { value: "color6", label: `${dict.color_set} 6`, start: 31, end: 36, path: basePath },
    { value: "color7", label: `${dict.color_set} 7`, start: 37, end: 42, path: basePath },
    { value: "color8", label: `${dict.color_set} 8`, start: 43, end: 48, path: basePath },
  ];
  const createSubTabs2 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 49, end: 62, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 63, end: 76, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 77, end: 90, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 91, end: 104, path: basePath },
    { value: "color5", label: `${dict.color_set} 5`, start: 105, end: 117, path: basePath },
    { value: "color6", label: `${dict.color_set} 6`, start: 118, end: 131, path: basePath },
    { value: "color7", label: `${dict.color_set} 7`, start: 132, end: 145, path: basePath },
    { value: "color8", label: `${dict.color_set} 8`, start: 146, end: 159, path: basePath },
  ];
  const createSubTabs3 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 1, end: 12, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 13, end: 24, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 25, end: 36, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 37, end: 48, path: basePath },
    { value: "color5", label: `${dict.color_set} 5`, start: 49, end: 60, path: basePath },
    { value: "color6", label: `${dict.color_set} 6`, start: 61, end: 72, path: basePath },
    { value: "color7", label: `${dict.color_set} 7`, start: 73, end: 84, path: basePath },
    { value: "color8", label: `${dict.color_set} 8`, start: 85, end: 96, path: basePath },
  ];
  const createSubTabs4 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 1, end: 8, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 9, end: 16, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 17, end: 24, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 25, end: 32, path: basePath },
    { value: "color5", label: `${dict.color_set} 5`, start: 33, end: 39, path: basePath },
    { value: "color6", label: `${dict.color_set} 6`, start: 40, end: 47, path: basePath },
    { value: "color7", label: `${dict.color_set} 7`, start: 48, end: 55, path: basePath },
    { value: "color8", label: `${dict.color_set} 8`, start: 56, end: 63, path: basePath },
  ];
  const createSubTabs5 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 1, end: 11, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 12, end: 22, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 23, end: 32, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 33, end: 43, path: basePath },
    { value: "color5", label: `${dict.color_set} 5`, start: 44, end: 54, path: basePath },
    { value: "color6", label: `${dict.color_set} 6`, start: 55, end: 65, path: basePath },
    { value: "color7", label: `${dict.color_set} 7`, start: 66, end: 76, path: basePath },
    { value: "color8", label: `${dict.color_set} 8`, start: 77, end: 87, path: basePath },
  ];
  const createSubTabs6 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 1, end: 12, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 13, end: 24, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 25, end: 36, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 37, end: 48, path: basePath },
    { value: "color5", label: `${dict.color_set} 5`, start: 49, end: 60, path: basePath },
    { value: "color6", label: `${dict.color_set} 6`, start: 61, end: 72, path: basePath },
    { value: "color7", label: `${dict.color_set} 7`, start: 73, end: 84, path: basePath },
    { value: "color8", label: `${dict.color_set} 8`, start: 85, end: 96, path: basePath },
  ];
  const createSubTabs7 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 19, end: 24, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 25, end: 30, path: basePath },    
  ];
  const createSubTabs8 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 31, end: 39, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 40, end: 48, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 49, end: 57, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 58, end: 66, path: basePath },
  ];
  const createSubTabs9 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 67, end: 78, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 79, end: 90, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 91, end: 102, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 103, end: 114, path: basePath },
    { value: "color5", label: `${dict.color_set} 5`, start: 115, end: 126, path: basePath },
    { value: "color6", label: `${dict.color_set} 6`, start: 127, end: 138, path: basePath },    
  ];
  const createSubTabs10 = (basePath: string) => [
    { value: "color1", label: `${dict.color_set} 1`, start: 1, end: 13, path: basePath },
    { value: "color2", label: `${dict.color_set} 2`, start: 14, end: 26, path: basePath },
    { value: "color3", label: `${dict.color_set} 3`, start: 27, end: 39, path: basePath },
    { value: "color4", label: `${dict.color_set} 4`, start: 40, end: 52, path: basePath },
    { value: "color5", label: `${dict.color_set} 5`, start: 53, end: 64, path: basePath },    
  ];

  // --- ส่วนที่ 3: Tab Items (ครบถ้วนตามเดิม) ---
  const tabItems = [
    { value: "polo-a", label: dict.tabs.polo_a, title: "Polo A Series", prefix: "PA", subColorTabs: createSubTabs("/01collection/polo-a/color") },
    { value: "polo-b", label: dict.tabs.polo_b, title: "Polo B Series", prefix: "PB", subColorTabs: createSubTabs2("/01collection/polo-b") },
    { value: "polo-c", label: dict.tabs.polo_c, title: "Polo C Series", prefix: "PC", subColorTabs: createSubTabs3("/01collection/polo-c") },
    { value: "polo-d", label: dict.tabs.polo_d, title: "Polo D Series", prefix: "PA", subColorTabs: createSubTabs4("/01collection/polo-d") },
    { value: "polo-e", label: dict.tabs.polo_e, title: "Polo E Series", prefix: "PB", subColorTabs: createSubTabs5("/01collection/polo-e") },
    { value: "polo-f", label: dict.tabs.polo_f, title: "Polo F Series", prefix: "PC", subColorTabs: createSubTabs6("/01collection/polo-f") },
    { value: "polo-aa", label: dict.tabs.polo_aa, title: "Polo AA Series", prefix: "PAA", subColorTabs: createSubTabs7("/01collection/polo-aa/color") },
    { value: "polo-collar", label: dict.tabs.polo_collar, title: "Polo Collar", prefix: "PB", subColorTabs: createSubTabs8("/01collection/polo-collar/color") },
    { value: "polo-arm", label: dict.tabs.polo_arm, title: "Polo Arm", prefix: "PC", subColorTabs: createSubTabs9("/01collection/polo-arm/color") },
    { value: "plak", label: dict.tabs.polo_planket, title: "Planket", prefix: "CV", subColorTabs: createSubTabs10("/01collection/plak") },
  ];

  return (
    <div className="w-full scroll-smooth font-noto">
      {/* --- ส่วน Header (Full Width) --- */}
      <section className="py-16 px-6 w-full">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"> 
                Polo Collection Design | <span className="text-red-600">{dict.titles.polo}</span>
            </h1>  
            <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-8 py-2.5 rounded-full border border-red-100 shadow-sm">
              <Sparkles size={18} className="animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em]">{dict.badge}</span>
            </div>  
            <p className="text-slate-500 font-bold mt-8 text-xl max-w-2xl mx-auto leading-relaxed">
                {dict.desc}
            </p>
        </div>
      </section>
      
      <div className="container mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* Main Tabs Selection (Centered Pill) */}
        <section className="w-full flex flex-col items-center">
          <Tabs defaultValue="polo-a" className="w-full flex flex-col items-center">
            <div className="w-full flex justify-center mb-16">
              <TabsList className="flex flex-wrap h-auto p-1.5 bg-slate-100/60 rounded-full border border-slate-200/50 shadow-inner w-fit justify-center">
                {tabItems.map((tab) => (
                  <TabsTrigger 
                    key={tab.value} 
                    value={tab.value} 
                    className="rounded-full px-8 py-3 font-bold text-slate-500 transition-all duration-300 data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-lg hover:text-slate-800 text-sm md:text-base"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              {tabItems.map((mainTab) => (
                <TabsContent key={mainTab.value} value={mainTab.value} className="w-full flex flex-col items-center focus-visible:outline-none">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">{mainTab.title}</h2>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full" />
                  </div>

                  {/* Sub-Tabs Section (Centered Pill) */}
                  <Tabs defaultValue="color1" className="w-full flex flex-col items-center">
                    <div className="w-full flex justify-center mb-10">
                        <TabsList className="flex flex-wrap h-auto p-1.5 bg-slate-50 rounded-full border border-slate-100 shadow-sm w-fit justify-center">
                          {mainTab.subColorTabs.map((sub: any) => (
                            <TabsTrigger 
                              key={sub.value} 
                              value={sub.value} 
                              className="rounded-full px-6 py-2.5 font-bold text-slate-400 text-xs md:text-sm transition-all duration-300 data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md"
                            >
                              {sub.label}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                    </div>

                    {mainTab.subColorTabs.map((sub: any) => (
                      <TabsContent key={sub.value} value={sub.value} className="w-full outline-none">
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
        <p className="text-slate-400 font-black tracking-[0.5em] text-[10px] uppercase mt-4 text-center">{dict.footer_slogan}</p>
      </footer>
    </div>
  );
}