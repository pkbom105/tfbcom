"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";

// --- 1. Gallery Component (ปรับเป็น 2 คอลัมน์บนจอใหญ่เพื่อความสวยงาม) ---
const ColorRangeGalleryV2 = ({ path, start, end }: { path: string; start: number; end: number }) => {
  const images = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">
      {images.map((num) => (
        <div key={num} className="w-full group">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2rem] bg-[#F8FAFC] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-red-100">
            <Image
              src={`${path}/${num}.png`}
              alt={`Product Item ${num}`}
              fill
              className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default function NestedCollectionPage() {
  // --- 2. ข้อมูลหมวดหมู่ (คงเดิมตาม Logic ของคุณ) ---
  const collectionData = [
    { 
      id: "1", name: "เสื้อยืด", img: "/hp/5.png", path: "/02colour/tshirt",
      subOptions: [
        { 
            id: "s1-1", 
            label: "CM 20", 
            title: "CM 20 Single Jersey", 
            desc: (
              <ul className="list-disc ml-5 space-y-2 text-slate-600">
                <li><strong>ประเภทผ้า:</strong> CM 20 Single Jersey (100% Cotton)</li>
                <li><strong>น้ำหนักผ้า:</strong> 200 gsm (เนื้อผ้าหนาเล็กน้อย อยู่ทรงสวย)</li>
                <li><strong>สัมผัส:</strong> ผลิตจากฝ้ายธรรมชาติ 100% เนื้อเรียบเนียน ไม่ระคายผิว</li>
                <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดีเยี่ยม สวมใส่สบายตัว</li>
                <li><strong>เหมาะสำหรับ:</strong> เสื้อยืดคอกลมเกรดพรีเมียม หรือเสื้อโปโล</li>
              </ul>
            ),
            start: 1, 
            end: 2 
          },
        { id: "s1-2", label: "SC 32", 
        title: " SC 32 Single Jersey", 
        desc: (
            <ul className="list-disc ml-5 space-y-2 text-slate-600">
            <li><strong>ประเภทผ้า:</strong> SC 32 Single Jersey (100% Cotton)</li>
            <li><strong>น้ำหนักผ้า:</strong> 150 gsm (เนื้อผ้าบาง ใส่ไม่ร้อน)</li>
            <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% เนื้อเรียบ ละเอียด ไม่ระคายผิว</li>
            <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม ราคาไม่สูง</li>
          </ul>
        ),        
        start: 4, end: 6 },
        { id: "s1-3", label: "Drytech", title: "Drytech", 
            desc: (
                <ul className="list-disc ml-5 space-y-2 text-slate-600">
                  <li><strong>ประเภทผ้า:</strong> DRYTECH 201 (55% Cotton - 45% Polyester)</li>
                  <li><strong>สัมผัส:</strong> ไม่หด ไม่ย้วย ซึมซับเหงื่อได้ทันทีด้วยโครงสร้างแบบตาข่าย</li>
                  <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล ยับยาก รีดง่าย</li>
                </ul>
              ), 
        start: 3, end: 3 },
      ]
    },
    { 
      id: "2", name: "เสื้อโปโล", img: "/hp/6.png", path: "/02colour/tshirt",
      subOptions: [
        { id: "s2-1", label: "CM 20", title: "CM 20 Single Jersey", desc: "Cotton 100% เนื้อพรีเมียม", start: 1, end: 2 },
        { id: "s2-2", label: "Viral Block", title: "Viral Block", desc: "ผ้า Antivirus ยับยั้งเชื้อไวรัส 96.84%", start: 4, end: 4 },
        { id: "s2-3", label: "Dry-Touch", title: "Dry-Touch (Super Soft)", desc: "เทคโนโลยีการทอ 2 ชั้น ระบายอากาศดีเยี่ยม", start: 8, end: 9 },
      ]
    },
    // ... คุณสามารถเพิ่มหมวดหมู่ 3-9 ต่อได้ที่นี่
  ];

  return (
    <div className="w-full bg-white">
      {/* ขยาย Container เป็น max-w-[1550px] */}
      <div className="max-w-[1550px] mx-auto px-6 lg:px-12 py-16 xl:py-24 font-noto">
        
        {/* --- Header --- */}
        <header className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-6 py-2 rounded-full border border-red-100 shadow-sm">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-xs xl:text-sm font-black uppercase tracking-[0.2em]">Toffy Boutique Selection</span>
          </div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Fabric <span className="text-red-600">Catalog</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium">คัดสรรเนื้อผ้าคุณภาพสูงเพื่อตอบโจทย์ทุกการใช้งานขององค์กรคุณ</p>
        </header>

        {/* --- Main Tabs --- */}
        <Tabs defaultValue="1" className="w-full">
          <div className="flex justify-center mb-20 overflow-x-auto pb-4 scrollbar-hide">
            <TabsList className="flex h-auto p-3 bg-slate-50 rounded-[3rem] border border-slate-200 gap-2 xl:gap-4 min-w-max">
              {collectionData.map((main) => (
                <TabsTrigger
                  key={main.id}
                  value={main.id}
                  className="flex flex-col items-center gap-3 px-8 py-6 rounded-[2.5rem] transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-xl data-[state=active]:text-red-600 data-[state=active]:scale-105"
                >
                  <div className="relative w-14 h-14 xl:w-16 xl:h-16">
                    <Image src={main.img} alt={main.name} fill className="object-contain" />
                  </div>
                  <span className="text-base xl:text-lg font-black uppercase tracking-tight">
                    {main.name}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* --- Nested Content --- */}
          {collectionData.map((main) => (
            <TabsContent key={main.id} value={main.id} className="focus-visible:outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <Tabs defaultValue={main.subOptions[0].id} className="w-full">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
                  
                  {/* LEFT: Sidebar (ขยายขนาดเป็น 20% - 25%) */}
                  <aside className="w-full lg:w-[280px] xl:w-[320px] lg:sticky lg:top-32">
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50">
                      <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-8 px-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full" /> {main.name} Selection
                      </p>
                      <TabsList className="flex flex-col h-auto w-full bg-transparent gap-3">
                        {main.subOptions.map((sub) => (
                          <TabsTrigger
                            key={sub.id}
                            value={sub.id}
                            className="w-full justify-start px-6 py-5 rounded-2xl font-bold text-base transition-all duration-300 
                                       data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:translate-x-2
                                       text-slate-500 hover:bg-red-50 hover:text-red-600"
                          >
                            {sub.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>
                  </aside>

                  {/* RIGHT: Display Area */}
                  <main className="flex-1 w-full">
                    {main.subOptions.map((sub) => (
                      <TabsContent key={sub.id} value={sub.id} className="m-0 focus-visible:outline-none animate-in fade-in zoom-in-95 duration-300">
                        {/* Title & Description */}
                        <div className="mb-12 space-y-6">
                          <div className="flex items-center gap-4 text-red-600 font-black text-sm uppercase tracking-widest">
                            <span className="h-[2px] w-12 bg-red-600" /> Premium Fabric
                          </div>
                          <h2 className="text-4xl xl:text-5xl font-black text-slate-900 uppercase leading-tight">
                            {main.name} <br />
                            <span className="text-red-600">{sub.title}</span>
                          </h2>
                          <div className="text-slate-600 text-lg xl:text-xl leading-relaxed max-w-3xl">
                            {sub.desc}
                          </div>
                        </div>

                        {/* Gallery Block */}
                        <ColorRangeGalleryV2 
                          path={main.path} 
                          start={sub.start} 
                          end={sub.end} 
                        />
                      </TabsContent>
                    ))}
                  </main>

                </div>
              </Tabs>

            </TabsContent>
          ))}
        </Tabs>

        {/* --- Footer Branding --- */}
        <footer className="mt-40 pt-20 border-t border-slate-100 flex flex-col items-center">
          <div className="w-20 h-1 bg-red-600 rounded-full mb-10" />
          <h3 className="font-black text-5xl xl:text-6xl text-slate-900 tracking-tighter uppercase opacity-10 select-none">
            Toffy <span className="text-red-600">Boutique</span>
          </h3>
        </footer>
      </div>
    </div>
  );
}