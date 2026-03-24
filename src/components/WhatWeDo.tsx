"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";

// --- รายการสินค้าสำหรับรูปภาพ (แถวบนและล่าง) ---
const PRODUCT_IMAGES = [
  { id: 1, img: "/hp/5.png" }, { id: 2, img: "/hp/6.png" },
  { id: 3, img: "/hp/7.png" }, { id: 4, img: "/hp/8.png" },
  { id: 5, img: "/hp/9.png" }, { id: 6, img: "/hp/10.png" },
  { id: 7, img: "/hp/11.png" }, { id: 8, img: "/hp/12.png" },
  { id: 9, img: "/hp/13.png" }, { id: 10, img: "/hp/14.png" },
  { id: 11, img: "/hp/15.png" }, { id: 12, img: "/hp/16.png" },
  { id: 13, img: "/hp/17.png" }, { id: 14, img: "/hp/18.png" },
];

// --- รายการสำหรับปุ่มกด (จัดเรียงตามลำดับในรูป) ---
const PRODUCT_BUTTONS = [
  { name: "เสื้อยืด T-shirt" }, { name: "เสื้อโปโล Polo" }, { name: "เสื้อเชิ้ต Shirt" },
  { name: "เสื้อเชิ้ตช่าง Workshop shirt" }, { name: "เสื้อช็อป Engineer Jacket" }, { name: "เสื้อแจ็คเก็ต Jacket" }, { name: "เสื้อแม่บ้าน House Maid Uniform" },
  { name: "เสื้อเชฟ Chef Uniform" }, { name: "เสื้อรปภ. Security Uniform" }, { name: "กางเกง Pant" },
  { name: "เสื้อกั๊ก Vest" }, { name: "เสื้อฮู้ด Hoodie" }, { name: "ผ้ากันเปื้อน Apron" }, { name: "ยูนิฟอร์มอื่นๆ Uniform" },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white overflow-hidden font-noto">
      <div className="container mx-auto px-6 text-center">
        
        {/* --- Header --- */}
        <div className="space-y-4 mb-20">
          <h2 className="text-7xl md:text-[100px] font-black text-slate-900 leading-tight tracking-tighter italic">
            What <span className="font-light">we do</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium">
            ยูนิฟอร์มหลากหลายรูปแบบ
          </p>
        </div>

        {/* --- Product Icons Grid --- */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {PRODUCT_IMAGES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.1 }}
                transition={{ delay: index * 0.05 }}
                className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
              >
                <Image
                  src={item.img}
                  alt="Uniform product"
                  fill
                  className="object-contain grayscale-[20%] hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Buttons Grid (จัดเรียงแบบในรูป) --- */}
        <div className="flex flex-col items-center gap-4">
          {/* แถวที่ 1 */}
          <div className="flex flex-wrap justify-center gap-3">
             <Button item={PRODUCT_BUTTONS[0]} />
             <Button item={PRODUCT_BUTTONS[1]} />
             <Button item={PRODUCT_BUTTONS[2]} />
          </div>
          {/* แถวที่ 2 */}
          <div className="flex flex-wrap justify-center gap-3">
             <Button item={PRODUCT_BUTTONS[3]} />
             <Button item={PRODUCT_BUTTONS[4]} />
             <Button item={PRODUCT_BUTTONS[5]} />
             <Button item={PRODUCT_BUTTONS[6]} />
          </div>
          {/* แถวที่ 3 */}
          <div className="flex flex-wrap justify-center gap-3">
             <Button item={PRODUCT_BUTTONS[7]} />
             <Button item={PRODUCT_BUTTONS[8]} />
             <Button item={PRODUCT_BUTTONS[9]} />
          </div>
          {/* แถวที่ 4 */}
          <div className="flex flex-wrap justify-center gap-3">
             <Button item={PRODUCT_BUTTONS[10]} />
             <Button item={PRODUCT_BUTTONS[11]} />
             <Button item={PRODUCT_BUTTONS[12]} />
             <Button item={PRODUCT_BUTTONS[13]} />
          </div>
        </div>

      </div>
    </section>
  );
}

// --- Reusable Button Component ---
function Button({ item }: { item: { name: string } }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, borderColor: "#ef4444" }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-3 border border-slate-300 rounded-full px-6 py-3 md:px-10 md:py-4 text-sm md:text-lg font-medium text-slate-700 bg-white hover:text-red-600 transition-all duration-300 shadow-sm"
    >
      {item.name}
      <MoveRight size={18} className="text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
    </motion.button>
  );
}