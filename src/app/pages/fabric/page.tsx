"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Target, ShieldCheck, Palette, Banknote, Zap, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Reusable Gallery Component ---
const FabricGallery = ({ title, count, path, prefix }: { title: string; count: number; path: string; prefix: string }) => (
  <section className="max-w-7xl mx-auto py-8">
    <div className="flex items-center gap-3 mb-8">
      <div className="h-8 w-1.5 bg-red-600 rounded-full" />
      <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">{title}</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }, (_, i) => {
        const num = (i + 1).toString().padStart(2, '0');
        const fileName = `${prefix}${num}.png`;
        return (
          <motion.div
            key={fileName}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 4) * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white p-2 hover:bg-red-50">
              <CardContent className="p-0 relative aspect-[7/11] overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                <Image
                  src={`${path}/${fileName}`}
                  alt={title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-all uppercase">
                  {prefix}{num}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default function CombinedGalleryPage() {
  const selectionFactors = [
    { icon: <Target size={20} />, text: "ลักษณะการใช้งาน: ออฟฟิศ หรือ ลุยหน้างานกลางแจ้ง?" },
    { icon: <ShieldCheck size={20} />, text: "ความทนทาน: ทนต่อการซักบ่อย ไม่หด ไม่ย้วย ดูแลรักษาง่าย" },
    { icon: <Palette size={20} />, text: "ดีไซน์และภาพลักษณ์: ส่งเสริมแบบเสื้อให้ดูดี ทรงสวย สวมใส่แล้วมั่นใจ" },
    { icon: <Banknote size={20} />, text: "งบประมาณ: เลือกเนื้อผ้าที่คุ้มค่าที่สุดภายใต้โปรเจกต์การผลิต" },
    { icon: <Zap size={20} />, text: "ฟังก์ชันเสริม: การระบายอากาศ การยืดหยุ่น หรือคุณสมบัติพิเศษ" },
  ];

  const suitabilities = [
    { title: "Office & Sales", desc: "เน้นความสวยงามและระบายอากาศได้ดี เพื่อความคล่องตัว", color: "border-blue-500 bg-blue-50" },
    { title: "Factory & Outdoor", desc: "เน้นผ้า Polyester สูง เพื่อความทนทานต่อการใช้งานหนัก", color: "border-orange-500 bg-orange-50" },
    { title: "Field Work", desc: "เน้นนวัตกรรมการระบายความร้อน ลดความเหนื่อยล้าพนักงาน", color: "border-red-500 bg-red-50" }
  ];

  const tabItems = [
    { value: "tshirt", label: "เสื้อคอกลม", title: "T-Shirt Color", path: "/fabric/f1-tshirt", prefix: "c", count: 15 },
    { value: "polo", label: "เสื้อโปโล", title: "Polo Fabric", path: "/fabric/f2-polo", prefix: "d", count: 12 },
    { value: "shirt", label: "เสื้อเชิ้ต", title: "Shirt Fabric", path: "/fabric/f3-shirt", prefix: "e", count: 12 },
    { value: "shop", label: "เสื้อช็อป", title: "เนื้อผ้าเสื้อช็อป", path: "/fabric/f4", prefix: "f", count: 12 },
    { value: "jacket", label: "แจ็คเก็ต", title: "เนื้อผ้าแจ็คเก็ต", path: "/fabric/f5", prefix: "g", count: 12 },
    { value: "tech", label: "เสื้อช่าง", title: "เนื้อผ้าเสื้อช่าง", path: "/fabric/f6", prefix: "h", count: 12 },
    { value: "apron", label: "ผ้ากันเปื้อน", title: "เนื้อผ้าผ้ากันเปื้อน", path: "/fabric/f7", prefix: "i", count: 12 },
    { value: "sweater", label: "เสื้อกันหนาว", title: "เนื้อผ้าเสื้อกันหนาว", path: "/fabric/f8", prefix: "j", count: 12 },
    { value: "bottoms", label: "กางเกง/กระโปรง", title: "เนื้อผ้ากางเกง/กระโปรง", path: "/fabric/f9", prefix: "k", count: 12 },
    { value: "coverall", label: "ชุดหมี", title: "เนื้อผ้าชุดหมี", path: "/fabric/f10", prefix: "l", count: 12 },
  ];

  return (
    <div className="container mx-auto px-4 md:px-10 py-10 space-y-20 scroll-smooth font-kanit"> 
      <header id="top1" className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Fabric | เนื้อผ้า</h1>
        <p className="text-muted-foreground italic">คุณภาพเนื้อผ้าที่คุณไว้วางใจได้จาก Toffy Boutique</p>
      </header>

      {/* Intro Section */}
      <section className="py-12 px-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">เลือกเนื้อผ้าที่ใช่... <span className="text-red-600 underline decoration-red-100 underline-offset-8">หัวใจสำคัญของยูนิฟอร์ม</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800"><Info className="text-red-600" />ปัจจัยหลักในการเลือก</h3>
              <div className="space-y-3">
                {selectionFactors.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-white transition-colors">
                    <div className="text-red-600 mt-1">{f.icon}</div>
                    <span className="text-slate-700 font-medium text-sm leading-relaxed">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800"><Ruler className="text-red-600" />การเลือกผ้าตามหน้างาน</h3>
              <div className="space-y-4">
                {suitabilities.map((s, i) => (
                  <Card key={i} className={cn("border-none border-l-4 shadow-sm transition-all hover:translate-x-1", s.color)}>
                    <CardContent className="p-5">
                      <h4 className="font-bold text-slate-900">{s.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[1.5rem] p-10 text-center text-white shadow-xl">
            <p className="text-lg font-medium opacity-90 leading-relaxed max-w-2xl mx-auto">"การผลิตยูนิฟอร์มที่ดี คือการเลือก <strong className="text-red-500">เนื้อผ้าที่ใช่</strong> ให้เหมาะกับหน้าที่"</p>
            <button className="mt-8 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95 text-sm uppercase tracking-wider">เปรียบเทียบ CVC / TC / Polyester</button>
          </div>
        </div>
      </section>

      {/* Tabs Gallery Section */}
      <section id="gallery-section" className="pt-10 border-t border-slate-100">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-red-500 pl-4 text-slate-900">แคตตาล็อกเนื้อผ้า</h2>
        <Tabs defaultValue="tshirt" className="w-full">
          
          {/* ปรับปรุง TabsList: ขยาย font +1 size */}
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 sm:grid-cols-5 bg-slate-100/80 p-1.5 rounded-[2rem] h-auto w-full max-w-5xl border border-slate-200 shadow-inner gap-1">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className={cn(
                    "rounded-xl transition-all font-bold py-3 px-2",
                    // ขยายฟอนต์: มือถือเป็น text-sm (เดิม xs), Desktop เป็น text-base (เดิม sm)
                    "text-sm md:text-base", 
                    "data-[state=active]:text-red-600 data-[state=active]:bg-white data-[state=active]:shadow-sm text-slate-800"
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
                <FabricGallery 
                  title={tab.title} 
                  count={tab.count} 
                  path={tab.path} 
                  prefix={tab.prefix} 
                />
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </section>

      {/* Map Section */}
      <section id="map-section" className="pt-20 border-t border-slate-100 pb-20">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          <div className="space-y-4">
            <h3 className="font-bold text-4xl text-slate-900 tracking-tight">Toffy <span className="text-red-600">Boutique</span></h3>
            <p className="text-slate-500 font-medium tracking-widest text-sm uppercase">Open Daily 09:00 - 20:00</p>
            <Link href="#top1" className="inline-flex items-center text-red-500 hover:text-red-700 font-bold mt-4 p-4 hover:bg-red-50 rounded-2xl transition-all border border-transparent hover:border-red-100 shadow-sm">
              ↑ Back to Top
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}