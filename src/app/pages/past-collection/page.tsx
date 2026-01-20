"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PastCollectionPage() {
  const tabItems = [
    { value: "shirt", label: "เสื้อเชิ้ต", title: "ตัวอย่างงานผลิตเสื้อเชิ้ต", count: 9, folder: "shirt-sample", startNumber: 1, ext: "png" },
    { value: "polo", label: "เสื้อโปโล", title: "ตัวอย่างงานผลิตเสื้อโปโล", count: 12, folder: "polo-sample", startNumber: 104, ext: "png" },
    { value: "tshirt", label: "เสื้อคอกลม", title: "ตัวอย่างงานผลิตเสื้อคอกลม", count: 12, folder: "tshirt-sample", startNumber: 1, ext: "png" },
    { value: "shop", label: "เสื้อช็อป", title: "ตัวอย่างงานผลิตเสื้อช็อป", count: 6, folder: "shop-sample", startNumber: 1, ext: "png" },
    { value: "jacket", label: "แจ็กเก็ต", title: "ตัวอย่างงานผลิตแจ็กเก็ต", count: 6, folder: "jacket-sample", startNumber: 1, ext: "png" },
    { value: "chef", label: "เสื้อเชฟ", title: "ตัวอย่างงานผลิตเสื้อเชฟ", count: 6, folder: "chef-sample", startNumber: 1, ext: "png" },
    { value: "apron", label: "ผ้ากันเปื้อน", title: "ตัวอย่างงานผลิตผ้ากันเปื้อน", count: 6, folder: "apron-sample", startNumber: 1, ext: "png" },
    { value: "pants", label: "กระโปรง/กางเกง", title: "ตัวอย่างงานผลิตกระโปรงและกางเกง", count: 6, folder: "pants-sample", startNumber: 1, ext: "png" },
    { value: "others", label: "อื่นๆ", title: "ผลงานผลิตอื่นๆ", count: 6, folder: "others-sample", startNumber: 1, ext: "png" },
  ];

  return (
    <main className="min-h-screen bg-white font-kanit pb-20">
      {/* --- Intro Section --- */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Sample Product <span className="text-red-500">|</span> ตัวอย่างงานผลิตคุณภาพ
          </h1>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            <p className="font-semibold text-slate-800 text-xl">
              ยูนิฟอร์มคุณภาพสูง จากความไว้วางใจของลูกค้าทั่วประเทศประสบการณ์กว่า 35 ปี
            </p>
            <p>
              ขอบคุณลูกค้าผู้มีอุปการะคุณที่ไว้วางใจให้ <span className="text-red-600 font-bold">Toffy Boutique</span> ดูแลงานผลิต
            </p>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery-section" className="pt-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-red-500 pl-4 text-slate-900">
          แคตตาล็อกผลงานผลิต
        </h2>
        
        <Tabs defaultValue="shirt" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 bg-slate-100/80 p-2 rounded-2xl md:rounded-[2rem] h-auto w-full max-w-6xl border border-slate-200 shadow-inner gap-1">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className={cn(
                    "rounded-xl transition-all font-bold text-slate-800 py-3",
                    "text-xs md:text-sm lg:text-base px-1", 
                    "data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-md"
                  )}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {tabItems.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0 focus-visible:outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-slate-800 mb-3">{tab.title}</h3>
                    <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {Array.from({ length: tab.count }).map((_, index) => {
                      const imageNumber = tab.startNumber + index;
                      const imagePath = `/02catalog/${tab.folder}/${imageNumber}.${tab.ext}`;
                      
                      return (
                        <div key={index} className="flex flex-col gap-3">
                          <div 
                            className={cn(
                              "relative aspect-square overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-500",
                              "hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)] hover:border-red-200 hover:-translate-y-2"
                            )}
                          >
                            <Image
                              src={imagePath}
                              alt={`${tab.label} ${imageNumber}`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 hover:scale-105"
                              priority={index < 6}
                            />
                          </div>
                          {/* รหัสงานย้ายมาไว้ด้านล่างรูป แทนการทับบนรูป */}
                          <div className="px-2">
                             <p className="font-bold text-slate-800 text-sm">รหัสงาน: {imageNumber}</p>
                             <p className="text-xs text-slate-400">หมวดหมู่: {tab.label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </section>
    </main>
  );
}