"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductPageV238() {
  // ข้อมูลหมวดหมู่สินค้าแบบบรรทัดเดียว
  const tabItems = [
    { value: "tshirt-men", label: "เสื้อคอกลม", title: "สินค้าคอกลม", count: 12, path: "/02catalog/tshirt-sample", startNumber: 1 },
    { value: "polo", label: "เสื้อโปโล", title: "สินค้าเสื้อโปโล", count: 12, path: "/02catalog/polo-sample", startNumber: 104 },
    { value: "shirt-men", label: "เสื้อเชิ้ตชาย", title: "สินค้าเสื้อเชิ้ตชาย", count: 9, path: "/02catalog/shirt-sample", startNumber: 1 },
    { value: "mac", label: "เสื้อช็อป", title: "สินค้าเสื้อช็อป", count: 10, path: "/02catalog/mac-sample", startNumber: 42 },
    { value: "cargo-pants", label: "กางเกงคาร์โก้", title: "สินค้ากางเกง/กระโปรง", count: 5, path: "/02catalog/pants", startNumber: 1 },
    { value: "arpon", label: "ผ้ากันเปื้อน", title: "ผ้ากันเปื้อน", count: 5, path: "/02catalog/arpon", startNumber: 6 },
  ];

  return (
    <main className="min-h-screen bg-white font-noto pb-20">
      {/* --- Intro Section --- */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Past Products Catalog | <span className="text-red-600">สินค้าที่เคยผลิต</span>
          </h1>
          <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-8 py-2.5 rounded-full border border-red-100 shadow-sm mb-8">
            <Sparkles size={18} className="animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em]">Toffy Boutique Selection</span>
          </div>
          <div className="space-y-6 text-lg text-slate-800 leading-relaxed max-w-4xl mx-auto">
            <p className="text-slate-800 text-md">ด้วยประสบการณ์อันยาวนาน
              <p >นี้คือ สินค้าตัวอย่างบางส่วน ที่เราเคยผลิตให้ลูกค้าสวมใส่ ในระยะเวลาที่ผ่านมา</p>
            </p>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="product-catalog" className="pt-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-red-500 pl-4 text-slate-900">รายการสินค้า (Catalog)</h2>

        <Tabs defaultValue="tshirt-men" className="w-full">
          <div className="flex justify-center mb-16 overflow-x-auto">
            <TabsList className="grid grid-cols-3 sm:grid-cols-6 bg-slate-100/80 p-2 rounded-2xl md:rounded-[2rem] h-auto w-full max-w-7xl border border-slate-200 shadow-inner gap-1">
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
            {tabItems.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0 focus-visible:outline-none">
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-black text-slate-800 mb-2 uppercase">{tab.title}</h3>
                    <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
                    {Array.from({ length: tab.count }).map((_, index) => {
                      const fileNumber = tab.startNumber + index;
                      const imagePath = `${tab.path}/${fileNumber}.png`;

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index % 3) * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className="group overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-xl bg-white p-2 hover:bg-red-50 cursor-pointer">
                            <CardContent className="p-0 relative aspect-square overflow-hidden rounded-lg">
                              <Image
                                src={imagePath}
                                alt={`${tab.label} catalog ${fileNumber}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority={index < 3}
                              />
                              <div className="absolute inset-x-0 bottom-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-100 text-[10px] font-black text-slate-800 uppercase tracking-widest shadow-sm">
                                  Item #{fileNumber}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
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