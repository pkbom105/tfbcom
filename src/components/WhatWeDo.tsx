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
];

const ROW_2 = [
  { id: 6, img: "/hp/54.png", name: "Engineer" },
  { id: 7, img: "/hp/10.png", name: "Jacket" },
  { id: 8, img: "/hp/53.png", name: "Security" },
  { id: 9, img: "/hp/11.png", name: "HouseMaid" },
  { id: 10, img: "/hp/12.png", name: "Chef" },
];

const ROW_3 = [
  { id: 11, img: "/hp/58.png", name: "Vest" },
  { id: 12, img: "/hp/51.png", name: "Hoody" },
  { id: 13, img: "/hp/59.png", name: "Pant" },
  { id: 14, img: "/hp/56.png", name: "Apron" },
  { id: 15, img: "/hp/45.png", name: "Apron" },
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
    <section className="py-20 bg-white overflow-hidden font-noto">
      <div className="max-w-6xl mx-auto pt-16 px-6">

        {/* --- Header --- */}
        <div className="border-0 pt-5 pb-14">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[100px] font-black text-slate-900 leading-[0.9] tracking-tighter italic uppercase"
          >
            What <span className="font-light not-italic text-slate-800 ">we do</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-500 mt-8 font-medium tracking-wide">
            ยูนิฟอร์มหลากหลายรูปแบบ สั่งตัดตามสเปคคุณภาพ
          </p>
        </div>

        {/* --- Product Visuals (3 Rows) --- */}
        <div className="mb-24 space-y-20">
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {ROW_1.map((item, idx) => (
              <ProductIcon key={item.id} src={item.img} name={item.name} delay={idx * 0.05} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {ROW_2.map((item, idx) => (
              <ProductIcon key={item.id} src={item.img} name={item.name} delay={idx * 0.05 + 0.25} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {ROW_3.map((item, idx) => (
              <ProductIcon key={item.id} src={item.img} name={item.name} delay={idx * 0.05 + 0.5} />
            ))}
          </div>
        </div>

        {/* --- Pill Buttons (Collections) --- */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {PRODUCT_BUTTONS.map((btn, idx) => (
            <motion.div
              key={btn.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={lang === "en" ? `/en/pages/collection/${btn.slug}` : `/pages/collection/${btn.slug}`}
                className="group flex items-center gap-3 border border-slate-200 rounded-full px-6 py-3 bg-white hover:border-red-500 hover:shadow-[0_10px_20px_-10px_rgba(239,68,68,0.3)] transition-all duration-500"
              >
                <span className="text-[14px] md:text-[16px] font-bold text-slate-600 group-hover:text-red-600 transition-colors duration-300">
                  {btn.name}
                </span>
                <span className="text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-500 font-light text-lg">
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

// --- Sub Component: ProductIcon with Interactive Glow ---
function ProductIcon({ src, name, delay }: { src: string; name: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, delay }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="relative flex items-center justify-center">
        {/* 1. Glow Effect (Behind) */}
        <motion.div
          whileHover={{ opacity: 0.7, scale: 1.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute w-12 h-12 bg-red-100 rounded-full blur-2xl opacity-0 pointer-events-none"
        />

        {/* 2. Image Layer */}
        <motion.div
          whileHover={{ y: -8, scale: 1.35 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-40 h-40 grayscale-[20%] group-hover:grayscale-0 transition-all duration-100 z-10"
        >
          <Image
            src={src}
            alt={name}
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* 3. Text Label (Fade in on hover) */}
      <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-xl">
          {name}
        </span>
      </div>
    </motion.div>
  );
}