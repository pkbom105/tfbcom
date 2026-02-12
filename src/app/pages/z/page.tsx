"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";

// --- 1. Gallery Component (1 Image per Row / Ratio 3:2) ---
const ColorRangeGalleryV2 = ({ path, start, end }: { path: string; start: number; end: number }) => {
  const images = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="flex flex-col gap-10 mt-10">
      {images.map((num) => (
        <div key={num} className="w-full">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#F8FAFC] border border-slate-100">
            <Image
              src={`${path}/${num}.png`}
              alt={`Product Item ${num}`}
              fill
              className="object-contain p-6 transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 75vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default function NestedCollectionPage() {
  // --- 2. ข้อมูล 9 หมวดหมู่หลัก พร้อมเมนูย่อยที่เปลี่ยนชื่อได้อิสระ ---
  const collectionData = [
    { 
      id: "1", name: "เสื้อยืด", img: "/hp/5.png", path: "/02colour/tshirt",
      subOptions: [
        { 
            id: "s1-1", 
            label: "CM 20", 
            title: "CM 20 Single Jersey", 
            desc: (
              <ul className="list-disc ml-5 space-y-1">
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
            <ul className="list-disc ml-5 space-y-1">
            <li><strong>ประเภทผ้า:</strong> SC 32 Single Jersey (100% Cotton)</li>
            <li><strong>น้ำหนักผ้า:</strong> 150 gsm (เนื้อผ้าบาง ใส่ไม่ร้อน)</li>
            <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อเรียบ ละเอียด ไม่ระคายผิว</li>
            <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี สวมใส่สบายตัว</li>
            <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม ราคาไม่สูง</li>
          </ul>
        ),        
        start: 4, end: 6 },
        { id: "s1-3", label: "Drytech", title: "Drytech", 
            desc: (
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>ประเภทผ้า:</strong> DRYTECH 201 (55% Cotton - 45% Polyester)</li>
                  <li><strong>น้ำหนักผ้า:</strong> 175 gsm</li>
                  <li><strong>สัมผัส:</strong> เส้นใยผสมระหว่าง Cotton กับ Polyester รูปทรงคงทน ไม่หด ไม่ย้วย</li>
                  <li><strong>การใช้งาน:</strong> ซึมซับเหงื่อได้ทันทีด้วยโครงสร้างแบบตาข่าย (Mesh Back) แห้งสบาย ระบายอากาศดีมาก</li>
                  <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล ยับยาก รีดง่าย</li>
                </ul>
              ), 
        start: 3, end: 3 },
        { id: "s1-4", label: "ไมโครเรียบ", title: "ไมโครเรียบ (100% Polyester)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ไมโครเรียบ (100% Polyester)</li>
              <li><strong>คุณสมบัติ:</strong> ผลิตจากเส้นใย Polyester 100% ไม่หด ไม่ย้วย</li>
              <li><strong>ข้อควรระวัง:</strong> มีโอกาสเป็นขุยเมื่อใช้ไประยะหนึ่ง ระบายอากาศไม่ค่อยดี</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล</li>
            </ul>
          ),
        start: 4, end: 6 },
        { id: "s1-5", label: "SUPERSOFF 20", title: "SUPERSOFF 20 ทอปดาย (100% Cotton)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> SUPERSOFF 20 ทอปดาย (100% Cotton)</li>
              <li><strong>น้ำหนักผ้า:</strong> 190 gsm</li>
              <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อผ้าหนาเล็กน้อย มีผิวสัมผัสฟูนุ่ม ไม่ระคายผิว</li>
              <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี เนื้อผ้าบาง ใส่ไม่ร้อน สวมใส่สบายตัว</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลมเกรดพรีเมียม</li>
            </ul>
          ),
        start: 4, end: 6 },
      ]
    },
    { 
      id: "2", name: "เสื้อโปโล", img: "/hp/6.png", path: "/02colour/tshirt",
      subOptions: [
        { 
            id: "s2-1", 
            label: "CM 20", 
            title: "CM 20 Single Jersey", 
            desc: (
              <ul className="list-disc ml-5 space-y-1">
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
        { id: "s2-2", label: "SC 32", 
        title: " SC 32 Single Jersey", 
        desc: (
            <ul className="list-disc ml-5 space-y-1">
            <li><strong>ประเภทผ้า:</strong> SC 32 Single Jersey (100% Cotton)</li>
            <li><strong>น้ำหนักผ้า:</strong> 150 gsm (เนื้อผ้าบาง ใส่ไม่ร้อน)</li>
            <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อเรียบ ละเอียด ไม่ระคายผิว</li>
            <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี สวมใส่สบายตัว</li>
            <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม ราคาไม่สูง</li>
          </ul>
        ),        
        start: 4, end: 6 },
        { id: "s2-3", label: "Drytech", title: "Drytech", 
            desc: (
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>ประเภทผ้า:</strong> DRYTECH 201 (55% Cotton - 45% Polyester)</li>
                  <li><strong>น้ำหนักผ้า:</strong> 175 gsm</li>
                  <li><strong>สัมผัส:</strong> เส้นใยผสมระหว่าง Cotton กับ Polyester รูปทรงคงทน ไม่หด ไม่ย้วย</li>
                  <li><strong>การใช้งาน:</strong> ซึมซับเหงื่อได้ทันทีด้วยโครงสร้างแบบตาข่าย (Mesh Back) แห้งสบาย ระบายอากาศดีมาก</li>
                  <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล ยับยาก รีดง่าย</li>
                </ul>
              ), 
        start: 3, end: 3 },
        { id: "s2-4", label: "ไมโครเรียบ", title: "ไมโครเรียบ (100% Polyester)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ไมโครเรียบ (100% Polyester)</li>
              <li><strong>คุณสมบัติ:</strong> ผลิตจากเส้นใย Polyester 100% ไม่หด ไม่ย้วย</li>
              <li><strong>ข้อควรระวัง:</strong> มีโอกาสเป็นขุยเมื่อใช้ไประยะหนึ่ง ระบายอากาศไม่ค่อยดี</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล</li>
            </ul>
          ),
        start: 4, end: 6 },
        { id: "s2-5", label: "SUPERSOFF 20", title: "SUPERSOFF 20 ทอปดาย (100% Cotton)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> SUPERSOFF 20 ทอปดาย (100% Cotton)</li>
              <li><strong>น้ำหนักผ้า:</strong> 190 gsm</li>
              <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อผ้าหนาเล็กน้อย มีผิวสัมผัสฟูนุ่ม ไม่ระคายผิว</li>
              <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี เนื้อผ้าบาง ใส่ไม่ร้อน สวมใส่สบายตัว</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลมเกรดพรีเมียม</li>
            </ul>
          ),
        start: 4, end: 6 },
      ]
    },
    { 
      id: "3", name: "เสื้อเชิ้ต", img: "/hp/7.png", path: "/02colour/shirt",
      subOptions: [
        { id: "s3-1", label: "ผ้าคอมทวิว ", title: " ผ้าคอมทวิว (55% Cotton / 45% Polyester)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าคอมทวิว (55% Cotton / 45% Polyester)</li>
              <li><strong>น้ำหนักผ้า:</strong> Twill Weave 210g./y</li>
              <li><strong>สัมผัส:</strong> ผ้าทอลายสอง เนื้อผ้าไม่นิ่มและไม่กระด้างจนเกินไป</li>
              <li><strong>คุณสมบัติ:</strong> มีความทนทาน เป็นผ้าพื้นฐานที่ใช้กันอย่างแพร่หลาย</li>
              <li><strong>การใช้งาน:</strong> ระบายอากาศได้ดี สีสดใส เนื้อผิวเรียบ มีสีให้เลือกมากมาย</li>
              <li><strong>เหมาะสำหรับ:</strong> ผลิตเสื้อผ้าได้ทั่วไป นิยมนำมาทำเป็นเสื้อเชิ้ต</li>
            </ul>
          ), 
        start: 1, end: 5 },
      ]
    },
    { 
      id: "4", name: "เสื้อเชิ้ตช่าง", img: "/hp/8.png", path: "/01collection/workshop",
      subOptions: [
        { id: "s4-1", label: "Comb Twill", title: "Heavy Duty", desc: "ผ้าคอมทวิล แข็งแรง ทนต่องานหนัก", start: 1, end: 3 },
      ]
    },
    { 
      id: "5", name: "เสื้อช็อป", img: "/hp/9.png", path: "/01collection/engineer",
      subOptions: [
        { id: "s5-1", label: "Safety First", title: "Engineer Jacket", desc: "เน้นความปลอดภัยและกระเป๋าอเนกประสงค์", start: 1, end: 3 },
      ]
    },
    { 
      id: "6", name: "เสื้อแจ็คเก็ต", img: "/hp/10.png", path: "/01collection/jacket",
      subOptions: [
        { id: "s6-1", label: "Micro Fiber", title: "Windbreaker", desc: "กันลม กันหนาว น้ำหนักเบา", start: 1, end: 3 },
      ]
    },
    { 
      id: "7", name: "เสื้อแม่บ้าน", img: "/hp/11.png", path: "/01collection/maid",
      subOptions: [
        { id: "s7-1", label: "Maid Uniform", title: "Hospitality Series", desc: "ดีไซน์สุภาพ ทำความสะอาดง่าย", start: 1, end: 3 },
      ]
    },
    { 
      id: "8", name: "เสื้อเชฟ", img: "/hp/12.png", path: "/01collection/chef",
      subOptions: [
        { id: "s8-1", label: "Chef Master", title: "Professional Kitchen", desc: "ผ้าทนความร้อน ระบายอากาศดี", start: 1, end: 3 },
      ]
    },
    { 
      id: "9", name: "ผ้ากันเปื้อน", img: "/hp/13.png", path: "/01collection/apron",
      subOptions: [
        { id: "s9-1", label: "Canvas Apron", title: "Barista Style", desc: "ผ้าแคนวาส ตกแต่งด้วยหนังแท้", start: 1, end: 3 },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 lg:px-12 py-16 font-noto">
      
      {/* --- Header --- */}
      <header className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full border border-red-100">
          <Sparkles size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Toffy Boutique Selection</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
          Fabric <span className="text-red-600">Catalog</span>
        </h1>
      </header>

      {/* --- LEVEL 1: Main Tabs (Horizontal Icon Tabs - 9 Menus) --- */}
      <Tabs defaultValue="1" className="w-full">
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <TabsList className="flex h-auto p-2 bg-slate-50 rounded-[2.5rem] border border-slate-200 gap-4 min-w-max">
            {collectionData.map((main) => (
              <TabsTrigger
                key={main.id}
                value={main.id}
                className="flex flex-col items-center gap-3 px-6 py-4 rounded-[2rem] transition-all data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-red-600"
              >
                <div className="relative w-12 h-12">
                  <Image src={main.img} alt={main.name} fill className="object-contain" />
                </div>
                <span className="text-[15px] font-black uppercase leading-none tracking-tight whitespace-nowrap">
                  {main.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* --- LEVEL 2: Nested Content Layout --- */}
        {collectionData.map((main) => (
          <TabsContent key={main.id} value={main.id} className="focus-visible:outline-none">
            
            <Tabs defaultValue={main.subOptions[0].id} className="w-full">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                
                {/* LEFT: Vertical Sub-Menu (25%) */}
                <aside className="w-full lg:w-1/4 lg:sticky lg:top-24">
                  <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-2">
                      {main.name} Type
                    </p>
                    <TabsList className="flex flex-col h-auto w-full bg-transparent gap-2">
                      {main.subOptions.map((sub) => (
                        <TabsTrigger
                          key={sub.id}
                          value={sub.id}
                          className="w-full justify-start px-6 py-4 rounded-xl font-bold text-sm transition-all 
                                     data-[state=active]:bg-red-600 data-[state=active]:text-white 
                                     text-slate-600 hover:bg-red-50"
                        >
                          {sub.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </aside>

                {/* RIGHT: Content Display (75%) */}
                <main className="w-full lg:w-3/4">
                  {main.subOptions.map((sub) => (
                    <TabsContent key={sub.id} value={sub.id} className="m-0 focus-visible:outline-none">
                      {/* Text Block */}
                      <div className="mb-10 space-y-4 border-l-4 border-red-600 pl-8">
                        <h2 className="text-4xl font-black text-slate-900 uppercase">
                          {main.name} / <span className="text-red-600">{sub.title}</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                          {sub.desc}
                        </p>
                      </div>

                      {/* Picture Block (Gallery 3:2) */}
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
      <footer className="mt-32 pt-16 border-t border-slate-100 flex flex-col items-center">
        <h3 className="font-black text-4xl text-slate-900 tracking-tighter uppercase opacity-30">
          Toffy <span className="text-red-600">Boutique</span>
        </h3>
      </footer>
    </div>
  );
}