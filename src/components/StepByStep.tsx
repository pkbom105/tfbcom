"use client";

import React from "react";

// 1. กำหนด Interface เพื่อป้องกัน Type Error
interface StepItem {
  id: number;
  items: string[];
}

interface StepImage {
  src: string;
  label: string;
  border?: boolean; // เครื่องหมาย ? หมายถึงจะมีหรือไม่มีก็ได้
}

export default function StepByStep({ lang, dict }: { lang: string; dict?: any }) {
  // 2. ข้อมูลขั้นตอน (1-8)
  const steps: StepItem[] = [
    { id: 1, items: [dict?.step1 || "1. มีแบบเสื้อที่ต้องการ", dict?.step2 || "2. เลือกเนื้อผ้า"] },
    { id: 2, items: [dict?.step3 || "3. ระบุจำนวน", dict?.step4 || "4. ประเมินราคา"] },
    { id: 3, items: [dict?.step5 || "5. ขึ้นเสื้อตัวอย่าง", dict?.step6 || "6. อนุมัติเสื้อตัวอย่าง"] },
    { id: 4, items: [dict?.step7 || "7. ลงผลิต", dict?.step8 || "8. จัดส่ง"] },
  ];

  // 3. ข้อมูลรูปภาพ (4 รูปด้านล่าง)
  const images: StepImage[] = [
    { src: "/hp/z1.png", label: dict?.img1_label || "แบบเสื้อ" },
    { src: "/hp/z2.png", label: dict?.img2_label || "เนื้อผ้าและชาร์ทสี",  },
    { src: "/hp/z3.png", label: dict?.img3_label || "ตัวอย่างงานผลิต" },
    { src: "/hp/z4.png", label: dict?.img4_label || "ขั้นตอนการผลิต" },
  ];
  return (
    <section className="py-24 px-6 bg-white font-noto overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* --- Title Section --- */}
        <h2 className="text-5xl md:text-7xl font-light italic text-gray-900 mb-16 tracking-tighter">
          {dict?.title || "Step-by-Step Process"}
        </h2>

        {/* --- Steps Text Grid (1-8) --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center justify-between">
              <div className="space-y-3">
                {step.items.map((item) => (
                  <p key={item} className="text-gray-800 text-lg md:text-xl font-medium">
                    {item}
                  </p>
                ))}
              </div>
              
              {/* ลูกศรคั่นระหว่างกลุ่ม (แสดงเฉพาะบน Desktop และไม่ใช่คอลัมน์สุดท้าย) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block text-3xl text-gray-300 font-light ml-auto pr-4">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- Images Grid (4 Images) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative aspect-[3/5] overflow-hidden shadow-xl group transition-all duration-500 ${
                img.border ? " rounded-sm" : "rounded-sm"
              }`}
            >
              {/* Image with Zoom Effect on Hover */}
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay with Textกึ่งกลาง */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-500 group-hover:bg-black/20">
                <span className="text-white text-xl md:text-2xl font-black tracking-tight drop-shadow-2xl text-center px-4 uppercase italic">
                  {img.label}
                </span>
              </div>

              {/* ตกแต่งเพิ่มเติม: เส้นขอบขาวจางๆ ด้านใน */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}