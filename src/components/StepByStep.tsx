"use client";

import React from "react";

const steps = [
  { id: 1, items: ["1. มีแบบเสื้อที่ต้องการ", "2. เลือกเนื้อผ้า"] },
  { id: 2, items: ["3. ระบุจำนวน", "4. ประเมินราคา"] },
  { id: 3, items: ["5. ขึ้นเสื้อตัวอย่าง", "6. อนุมัติเสื้อตัวอย่าง"] },
  { id: 4, items: ["7. ลงผลิต", "8. จัดส่ง"] },
];

const images = [
  { src: "/hp/z1.png", label: "แบบเสื้อ" },
  { src: "/hp/z2.png", label: "ตัวอย่างงานผลิต" },
  { src: "/hp/z3.png", label: "เนื้อผ้าและชาร์ทสี",  },
  { src: "/hp/z4.png", label: "ขั้นตอนการผลิต" },
];
export default function StepByStep() {
  return (
    <section className="py-20 px-6 bg-white font-noto">
      <div className="max-w-7xl mx-auto">
        {/* --- Title Section --- */}
        <h2 className="text-5xl md:text-6xl font-light italic text-gray-900 mb-12">
          Step-by-Step Process
        </h2>

        {/* --- Steps Text Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center justify-between">
              <div className="space-y-2">
                {step.items.map((item) => (
                  <p key={item} className="text-gray-800 text-lg md:text-xl">
                    {item}
                  </p>
                ))}
              </div>
              
              {/* ลูกศรคั่นระหว่างกลุ่ม (ยกเว้นอันสุดท้าย) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block text-2xl text-gray-400 absolute" 
                     style={{ left: `${(index + 1) * 25 - 2}%` }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- Images Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative aspect-[3/5] overflow-hidden shadow-lg ${
                img.border ? "ring-4 ring-purple-500 rounded-sm" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {/* Black Overlay with Text */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg text-center px-2">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}