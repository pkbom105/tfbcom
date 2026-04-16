"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- รายการสินค้าพร้อม Label ---
const ROW_1 = [
  { id: 1, img: "/hp/5.png", name: "T-shirt" },
  { id: 2, img: "/hp/6.png", name: "Polo" },
  { id: 3, img: "/hp/7.png", name: "Shirt" },
  { id: 4, img: "/hp/8.png", name: "Shirt" },
  { id: 5, img: "/hp/9.png", name: "Workshop" },
  { id: 6, img: "/hp/10.png", name: "Engineer" },
  { id: 7, img: "/hp/11.png", name: "Jacket" },
  { id: 8, img: "/hp/12.png", name: "Security" },
];

const ROW_2 = [
  { id: 9, img: "/hp/13.png", name: "HouseMaid" },
  { id: 10, img: "/hp/14.png", name: "Chef" },
  { id: 11, img: "/hp/58.png", name: "Vest" },
  { id: 12, img: "/hp/51.png", name: "Hoody" },
  { id: 13, img: "/hp/52.png", name: "Pant" },
  { id: 14, img: "/hp/57.png", name: "Apron" },
  { id: 15, img: "/hp/13.png", name: "Apron" },
];

const PRODUCT_BUTTONS = [
  { name: "เสื้อยืด T-shirt", slug: "t-shirt" },
  { name: "เสื้อโปโล Polo", slug: "polo" },
  { name: "เสื้อเชิ้ต Shirt", slug: "shirt" },
  { name: "เสื้อเชิ้ตช่าง Workshop shirt", slug: "workshop" },
  { name: "เสื้อช็อป Engineer Jacket", slug: "mechanic" },
  { name: "เสื้อแจ็คเก็ต Jacket", slug: "jacket" },
  { name: "เสื้อแม่บ้าน House Maid Uniform", slug: "maid-uniform" },
  { name: "เสื้อเชฟ Chef Uniform", slug: "chef-uniform" },
  { name: "เสื้อรปภ. Security Uniform", slug: "security-uniform" },
  { name: "กางเกง Pant", slug: "pants" },
  { name: "เสื้อกั๊ก Vest", slug: "vest" },
  { name: "เสื้อฮู้ด Hoody", slug: "hoody" },
  { name: "ผ้ากันเปื้อน Apron", slug: "apron" },
  { name: "ยูนิฟอร์มอื่นๆ Uniform", slug: "others" },
];

export default function WhatWeDo({ lang, dict }: { lang: string; dict?: any }) {
  return (
    <section className="py-24 bg-white overflow-hidden font-noto">
      <div className="max-w-6xl mx-auto pt-16 px-6">

        {/* --- Header --- */}
        <div className="border-0 pt-5 pb-14">
          <h2 className="text-6xl md:text-[100px] font-black text-slate-900 leading-[0.9] tracking-tighter italic uppercase">
            What <span className="font-light not-italic text-slate-800">we do</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 mt-6 font-medium tracking-wide">
            ยูนิฟอร์มหลากหลายรูปแบบ
          </p>
        </div>

        {/* --- Product Visuals (2 Rows) --- */}
        <div className="mb-32 space-y-16">
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {ROW_1.map((item, idx) => (
              <ProductIcon key={item.id} src={item.img} name={item.name} delay={idx * 0.05} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {ROW_2.map((item, idx) => (
              <ProductIcon key={item.id} src={item.img} name={item.name} delay={idx * 0.05 + 0.4} />
            ))}
          </div>
        </div>

        {/* --- Pill Buttons --- */}
        <div className="flex flex-wrap justify-center gap-4">
          {PRODUCT_BUTTONS.map((btn, idx) => (
            <motion.div
              key={btn.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              viewport={{ once: true }}
            >
              <Link 
                href={lang === "en" ? `/en/pages/collection/${btn.slug}` : `/pages/collection/${btn.slug}`}
                className="group flex items-center gap-4 border border-slate-300 rounded-full px-8 py-3.5 bg-white hover:border-red-500 hover:shadow-md transition-all duration-300"
              >
                <span className="text-[15px] md:text-[17px] font-medium text-slate-700 group-hover:text-red-600 transition-colors">
                  {btn.name}
                </span>
                <span className="text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 font-light text-xl">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sub Component: ProductIcon with Label Center & Red Shadow ---
function ProductIcon({ src, name, delay }: { src: string; name: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group flex items-center justify-center"
    >
      {/* 1. Red Shadow Background (อยู่หลังสุด) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 0.6, scale: 1.5 }}
        className="absolute w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full blur-xl z-0 pointer-events-none transition-all duration-500"
      />

      {/* 2. Text Label (อยู่ตรงกลาง z-10) */}
      <div className="absolute z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
        <span className="bg-white/90 backdrop-blur-sm border border-red-200 text-red-600 text-[9px] md:text-[11px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-tighter">
          {name}
        </span>
      </div>

      {/* 3. Image Layer (ขยาย 1.4) */}
      <motion.div
        whileHover={{ y: -5, scale: 1.4 }}
        className="relative w-20 h-20 md:w-22 md:h-22 grayscale-[15%] hover:grayscale-0 transition-all duration-500 z-[5]"
      >
        <Image 
          src={src} 
          alt={name}
          fill 
          className="object-contain" 
        />
      </motion.div>
    </motion.div>
  );
}