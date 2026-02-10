"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

// --- ข้อมูล Fabric: ใช้ ID และ Path ให้ตรงกับ Folder ในเครื่องคุณ ---
const KNIT_FABRICS = [
  { id: "cottoncomb20", label: "Cotton Comb 20", path: "/02colour/knit/cottoncomb20", count: 2 },
  { id: "drytech", label: "DryTech", path: "/02colour/knit/drytech", count: 2 },
  { id: "drytouch", label: "Dry-touch", path: "/02colour/knit/drytouch", count: 3 },
  { id: "dtlacoste", label: "DT Lacoste", path: "/02colour/knit/dtlacoste", count: 2 },
  { id: "endurance", label: "Endurance", path: "/02colour/knit/endurance", count: 2 },
  { id: "microhybrid", label: "Micro Hybrid", path: "/02colour/knit/microhybrid", count: 2 },
  { id: "microsmooth", label: "Micro เรียบ", path: "/02colour/knit/microsmooth", count: 1 },
  { id: "singlejersey", label: "Single Jersey C32", path: "/02colour/knit/singlejersey", count: 3 },
  { id: "tcmicrocvc20", label: "TC Micro - CVC20", path: "/02colour/knit/tcmicrocvc20", count: 2 },  
  { id: "tkmicro", label: "TK micro", path: "/02colour/knit/tkmicro", count: 2 },
];

const WOVEN_FABRICS = [
//   { id: "antistatic", label: "Anti-static กันไฟฟ้าสถิต", path: "/02colour/woven/antistatic", count: 6 },
  { id: "comtwill", label: "Com Twill", path: "/02colour/woven/comtwill", count: 5 },
  { id: "twill", label: "Twill", path: "/02colour/woven/twill", count: 1 },
  { id: "kmp", label: "KMP 2000", path: "/02colour/woven/kmp200", count: 2 },
  { id: "micro1", label: "Hanako", path: "/02colour/woven/micro1", count: 2 },
  { id: "orlon", label: "Orlon", path: "/02colour/woven/orlon", count: 1 },
  { id: "oxford", label: "Oxford", path: "/02colour/woven/oxford", count: 3 },
  { id: "dy4711", label: "DY 4711", path: "/02colour/woven/dy4711", count: 2 },
  { id: "solon", label: "Solon", path: "/02colour/woven/solon", count: 2 },
  { id: "supercomtwill", label: "SuperCom Twill", path: "/02colour/woven/supercomtwill", count: 3 },
  { id: "drytouch1", label: "SuperSoft DryTouch", path: "/02colour/woven/drytouch1", count: 3 },
  { id: "toraybiscop", label: "Toray Biscop", path: "/02colour/woven/toraybiscop", count: 2 },
  { id: "toraypoppin", label: "Toray Poppin", path: "/02colour/woven/toraypoppin", count: 2 },
  { id: "Viral Block", label: "Viral Block", path: "/02colour/woven/viralblock", count: 2 },
  { id: "Westpoint", label: "West Point", path: "/02colour/woven/westpoint", count: 2 },
];

export default function FabricCatalogPage() {
  const [activeKnit, setActiveKnit] = useState(KNIT_FABRICS[0]);
  const [activeWoven, setActiveWoven] = useState(WOVEN_FABRICS[0]);

  return (
    <div className="container mx-auto px-4 md:px-10 py-10 space-y-16 scroll-smooth font-kanit bg-white text-slate-900">
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
          Fabric <span className="text-red-600">Catalog</span>
        </h1>
        <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full" />
        <p className="text-slate-500 font-medium text-lg italic">Toffy Boutique | เฉดสีเนื้อผ้ามาตรฐาน</p>
      </header>

      {/* Main Tabs */}
      <Tabs defaultValue="knit" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-slate-100 p-1.5 rounded-2xl h-auto border border-slate-200">
            <TabsTrigger value="knit" className="px-10 py-4 rounded-xl font-bold text-lg data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-sm">
              ผ้า KNIT (ผ้าถัก)
            </TabsTrigger>
            <TabsTrigger value="woven" className="px-10 py-4 rounded-xl font-bold text-lg data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-sm">
              ผ้า WOVEN (ผ้าทอ)
            </TabsTrigger>
          </TabsList>
        </div>

        {/* --- KNIT TAB --- */}
        <TabsContent value="knit" className="m-0 outline-none">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Menu */}
            <aside className="w-full lg:w-80 shrink-0">
              <div className="sticky top-10 space-y-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2 flex items-center gap-2">
                  <Zap size={14} className="text-blue-500" /> Knit Selection
                </h3>
                <div className="flex flex-col gap-1">
                  {KNIT_FABRICS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setActiveKnit(f)}
                      className={cn(
                        "w-full flex items-center justify-between p-4 rounded-xl text-left transition-all border",
                        activeKnit.id === f.id 
                          ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-100" 
                          : "bg-white text-slate-600 border-transparent hover:bg-slate-50 hover:border-slate-100"
                      )}
                    >
                      <span className="font-bold tracking-tight">{f.label}</span>
                      <ChevronRight size={18} className={cn("transition-transform", activeKnit.id === f.id ? "translate-x-1" : "opacity-0")} />
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Gallery: 1 Image per Row / Ratio 3:2 / No Labels / No Animation */}
            <div className="flex-1 space-y-12">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-3xl font-black uppercase text-slate-900 leading-none">{activeKnit.label}</h2>
              </div>
              
              <div className="space-y-6">
                {Array.from({ length: activeKnit.count }, (_, i) => {
                  const fileNum = i + 1;
                  const fileName = `${fileNum}.png`;
                  const fullSrc = `${activeKnit.path}/${fileName}`;
                  
                  return (
                    <div key={`${activeKnit.id}-${fileNum}`} className="w-full">
                      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm">
                        <Image 
                          src={fullSrc} 
                          alt={`${activeKnit.label} ${fileNum}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1200px) 100vw, 80vw"
                          priority={i < 2}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* --- WOVEN TAB --- */}
        <TabsContent value="woven" className="m-0 outline-none">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="w-full lg:w-80 shrink-0">
              <div className="sticky top-10 space-y-4">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-2 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-orange-500" /> Woven Selection
                </h3>
                <div className="flex flex-col gap-1">
                  {WOVEN_FABRICS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setActiveWoven(f)}
                      className={cn(
                        "w-full flex items-center justify-between p-4 rounded-xl text-left transition-all border",
                        activeWoven.id === f.id 
                          ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-100" 
                          : "bg-white text-slate-600 border-transparent hover:bg-slate-50 hover:border-slate-100"
                      )}
                    >
                      <span className="font-bold tracking-tight">{f.label}</span>
                      <ChevronRight size={18} className={cn("transition-transform", activeWoven.id === f.id ? "translate-x-1" : "opacity-0")} />
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="flex-1 space-y-12">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-3xl font-black uppercase text-slate-900 leading-none">{activeWoven.label}</h2>
              </div>
              
              <div className="space-y-6">
                {Array.from({ length: activeWoven.count }, (_, i) => {
                  const fileNum = i + 1;
                  const fileName = `${fileNum}.png`;
                  const fullSrc = `${activeWoven.path}/${fileName}`;

                  return (
                    <div key={`${activeWoven.id}-${fileNum}`} className="w-full">
                      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm">
                        <Image 
                          src={fullSrc} 
                          alt={`${activeWoven.label} ${fileNum}`}
                          fill
                          className="object-full"
                          sizes="(max-width: 1200px) 100vw, 80vw"
                          priority={i < 2}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}