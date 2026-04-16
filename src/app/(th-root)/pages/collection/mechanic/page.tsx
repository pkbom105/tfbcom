"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import thDict from "@/dictionaries/th.json";
import enDict from "@/dictionaries/en.json";

// --- 1. Gallery Component ---
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
                src={`${path}/${num}.jpg`}
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

export default function ReadyToWearV232({ lang = "th" }: { lang?: string }) {
  const dict = (lang === "en" ? enDict : thDict).collections;

  const subTabsA = [
    { value: "color1", label: `${dict.color_set} 1`, start: 1, end: 12, path: "/01collection/mach-1" },
    { value: "color2", label: `${dict.color_set} 2`, start: 13, end: 24, path: "/01collection/mach-1" },
    { value: "color3", label: `${dict.color_set} 3`, start: 25, end: 36, path: "/01collection/mach-1" },
  ];

  const tabItems = [
    { value: "eng-a", label: dict.tabs.mechanic, title: "Mechanic Shirt", prefix: "ESA", subColorTabs: subTabsA },
  ];

  return (
    <div className="w-full scroll-smooth font-noto bg-white">
      {/* Header Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">
          Machanic Collection | <span className="text-red-600">{dict.titles.mechanic}</span>
        </h1>
        <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-6 py-2 rounded-full border border-red-100 mb-6">
          <Sparkles size={16} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">{dict.badge}</span>
        </div>
      </section>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-12 pb-24">
        <Tabs defaultValue="eng-a" className="w-full flex flex-col items-center">

          {/* Main Tabs (Centered Pill) */}
          <div className="w-full flex justify-center mb-16">
            <TabsList className="flex h-auto p-1.5 bg-slate-100/60 rounded-full border border-slate-200/50 shadow-inner w-fit">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-full px-10 py-3 text-sm md:text-base font-bold transition-all duration-300
                             data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-lg text-slate-500 hover:text-slate-800"
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
                  <h2 className="text-4xl font-black text-slate-900 italic uppercase tracking-tighter">{mainTab.title}</h2>
                  <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full" />
                </div>

                <Tabs defaultValue="color1" className="w-full flex flex-col items-center">
                  {/* Sub Tabs (Centered Pill) */}
                  <div className="w-full flex justify-center mb-10">
                    <TabsList className="flex flex-wrap h-auto p-1.5 bg-slate-50 rounded-full border border-slate-100 shadow-sm w-fit justify-center">
                      {mainTab.subColorTabs.map((sub: any) => (
                        <TabsTrigger
                          key={sub.value}
                          value={sub.value}
                          className="rounded-full px-6 py-2.5 text-xs md:text-sm font-bold transition-all duration-300
                                     data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-md text-slate-400"
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
      </div>

      <footer className="py-20 border-t border-slate-50 text-center">
        <h3 className="font-black text-5xl text-slate-900 tracking-tighter uppercase">
          Toffy <span className="text-red-600">Boutique</span>
        </h3>
        <p className="text-slate-400 font-bold tracking-widest text-[10px] uppercase mt-4">{dict.footer_slogan}</p>
      </footer>
    </div>
  );
}