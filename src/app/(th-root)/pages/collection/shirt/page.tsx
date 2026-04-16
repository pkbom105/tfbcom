"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import thDict from "@/dictionaries/th.json";
import enDict from "@/dictionaries/en.json";

// --- ส่วนที่ 1: Gallery Component ---
const ColorRangeGallery = ({ path, prefix, start, end }: { path: string; prefix: string; start: number; end: number }) => {
  const images = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
    >
      {images.map((num, idx) => (
        <motion.div
          key={num}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (idx % 3) * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl bg-white p-3 hover:bg-red-50 cursor-pointer">
            <CardContent className="p-0 relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={`${path}/${num}.png`}
                alt={`${prefix} image ${num}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function ShirtCollectionPage({ lang = "th" }: { lang?: string }) {
  const dict = (lang === "en" ? enDict : thDict).collections;

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
  ];

  return (
    <div className="w-full scroll-smooth font-noto bg-white">
      {/* --- Header Section --- */}
      <section className="py-20 px-6 w-full">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"> 
            Shirt Collection Design | <span className="text-red-600">{dict.titles.shirt}</span>
          </h1>  
          
          <div className="inline-flex items-center gap-3 bg-red-50/50 text-red-600 px-6 py-2 rounded-full border border-red-100">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{dict.badge}</span>
          </div>  

          <p className="text-slate-500 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {dict.desc}
          </p>
        </div>
      </section>
        
      {/* --- Main Content Section --- */}
      <div className="container mx-auto px-6 md:px-12 pb-24">
        <Tabs defaultValue="shirt-a" className="w-full flex flex-col items-center">
          
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
                
                <div className="text-center mb-12">
                  <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6" />
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
                    {mainTab.title}
                  </h2>
                </div>

                <Tabs defaultValue="color1" className="w-full flex flex-col items-center">
                  {/* Sub-Tabs Section (Centered Pill) */}
                  <div className="w-full flex justify-center mb-10">
                    <TabsList className="flex flex-wrap h-auto p-1.5 bg-slate-50 rounded-full border border-slate-100 shadow-sm w-fit justify-center">
                      {mainTab.subColorTabs.map((sub) => (
                        <TabsTrigger 
                          key={sub.value} 
                          value={sub.value} 
                          className="rounded-full px-6 py-2.5 font-bold text-slate-500 text-sm transition-all duration-300 data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md"
                        >
                          {sub.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  <AnimatePresence mode="wait">
                    {mainTab.subColorTabs.map((sub) => (
                      <TabsContent key={sub.value} value={sub.value} className="w-full outline-none">
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
      </div>

      {/* --- Footer Branding --- */}
      <footer className="py-20 border-t border-slate-50 flex flex-col items-center text-center">
        <div className="space-y-4">
          <h3 className="font-black text-5xl md:text-6xl text-slate-900 tracking-tighter uppercase">
            Toffy <span className="text-red-600">Boutique</span>
          </h3>
          <p className="text-slate-400 font-bold tracking-[0.5em] text-[10px] uppercase">
            {dict.footer_slogan}
          </p>
        </div>
      </footer>
    </div>
  );
}