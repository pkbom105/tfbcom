"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import thDict from "@/dictionaries/th.json";
import enDict from "@/dictionaries/en.json";

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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-12"
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

export default function ReadyToWearV231({ lang = "th" }: { lang?: string }) {
  const dict = (lang === "en" ? enDict : thDict).collections;

  const tabItems = [
    { 
      value: "polo-a", 
      label: dict.tabs.pants, 
      title: "Pants Collection", 
      prefix: "PA", 
      subColorTabs: [
        { value: "color1", label: `${dict.color_set} 1`, start: 11, end: 17, path: "/01collection/pants" }
      ]
    },
  ];

  return (
    <div className="w-full scroll-smooth font-noto">
       <section className="py-16 px-6 w-full">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"> 
              Pants Collection Design | <span className="text-red-600">{dict.titles.pants}</span>
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
 
      <div className="container mx-auto px-4 md:px-12 py-12 space-y-24">
        <Tabs defaultValue="polo-a" className="w-full flex flex-col items-center">
          
          {/* Main Tabs (Centered Pill) */}
          <div className="w-full flex justify-center mb-20 px-4">
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
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                    {mainTab.title}
                  </h2>
                  <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full" />
                </div>

                <Tabs defaultValue="color1" className="w-full flex flex-col items-center">
                  {/* Sub Tabs (Centered Pill) */}
                  <div className="flex justify-center mb-12 px-4">
                        <TabsList className="flex flex-wrap h-auto p-1.5 bg-slate-50 rounded-full border border-slate-100 shadow-sm w-fit justify-center">
                          {mainTab.subColorTabs.map((sub) => (
                            <TabsTrigger 
                              key={sub.value} 
                              value={sub.value} 
                              className="rounded-full px-6 py-2.5 font-bold text-slate-400 text-sm transition-all duration-300 data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md"
                            >
                              {sub.label}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                  </div>

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
                </Tabs>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>

      <footer className="pt-32 border-t border-slate-100 pb-20 text-center">
        <div className="space-y-6">
          <h3 className="font-black text-6xl md:text-7xl text-slate-900 tracking-tighter uppercase opacity-90">
            Toffy <span className="text-red-600">Boutique</span>
          </h3>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-12 bg-slate-200" />
             <p className="text-slate-400 font-black tracking-[0.6em] text-[11px] uppercase">
                {dict.footer_slogan_alt}
             </p>
             <div className="h-px w-12 bg-slate-200" />
          </div>
        </div>
      </footer>
    </div>
  );
}