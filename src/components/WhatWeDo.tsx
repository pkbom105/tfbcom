"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // นำเข้า Link
import { MoveRight } from "lucide-react";

// --- รายการสินค้าสำหรับรูปภาพ ---
const PRODUCT_IMAGES = [
  { id: 1, img: "/hp/5.png" }, { id: 2, img: "/hp/6.png" },
  { id: 3, img: "/hp/7.png" }, { id: 4, img: "/hp/8.png" },
  { id: 5, img: "/hp/9.png" }, { id: 6, img: "/hp/10.png" },
  { id: 7, img: "/hp/11.png" }, { id: 8, img: "/hp/12.png" },
  { id: 9, img: "/hp/13.png" }, { id: 10, img: "/hp/14.png" },
  { id: 11, img: "/hp/58.png" }, { id: 12, img: "/hp/51.png" },
  { id: 13, img: "/hp/52.png" }, { id: 14, img: "/hp/57.png" },
];

// --- รายการสำหรับปุ่มกด (เพิ่ม slug สำหรับทำ Link) ---
const PRODUCT_BUTTONS = [
  { name: "เสื้อยืด T-shirt", nameEn: "T-Shirt", slug: "t-shirt" },
  { name: "เสื้อโปโล Polo", nameEn: "Polo Shirt", slug: "polo" },
  { name: "เสื้อเชิ้ต Shirt", nameEn: "Dress Shirt", slug: "shirt" },
  { name: "เสื้อเชิ้ตช่าง Workshop shirt", nameEn: "Workshop Shirt", slug: "workshop" },
  { name: "เสื้อช็อป Engineer Jacket", nameEn: "Engineer Jacket", slug: "mechanic" },
  { name: "เสื้อแจ็คเก็ต Jacket", nameEn: "Jacket", slug: "jacket" },
  { name: "เสื้อแม่บ้าน House Maid Uniform", nameEn: "House Maid Uniform", slug: "maid-uniform" },
  { name: "เสื้อเชฟ Chef Uniform", nameEn: "Chef Uniform", slug: "chef-uniform" },
  { name: "เสื้อรปภ. Security Uniform", nameEn: "Security Uniform", slug: "security-uniform" },
  { name: "กางเกง Pant", nameEn: "Pants", slug: "pants" },
  { name: "เสื้อกั๊ก Vest", nameEn: "Vest", slug: "vest" },
  { name: "เสื้อฮู้ด Hoodie", nameEn: "Hoodie", slug: "hoodie" },
  { name: "ผ้ากันเปื้อน Apron", nameEn: "Apron", slug: "apron" },
  { name: "ยูนิฟอร์มอื่นๆ Uniform", nameEn: "Other Uniforms", slug: "others" },
];

export default function WhatWeDo({ lang, dict }: { lang: string; dict?: any }) {
  return (
    <section className="py-24 bg-white overflow-hidden font-noto">
      <div className="container mx-auto px-6 text-center">
        
        {/* --- Header --- */}
        <div className="space-y-4 mb-20">
          <h2 className="text-7xl md:text-[100px] font-black text-slate-900 leading-tight tracking-tighter italic">
            {dict?.title1 || "What"} <span className="font-light">{dict?.title2 || "we do"}</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium">
            {dict?.subtitle || "ยูนิฟอร์มหลากหลายรูปแบบ"}
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
                  alt="ตัวอย่างผลงานชุดยูนิฟอร์ม - Toffy Boutique"
                  fill
                  className="object-contain grayscale-[20%] hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Buttons Grid --- */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {PRODUCT_BUTTONS.map((button) => (
            <Button key={button.slug} item={button} lang={lang} />
          ))}
        </div>

      </div>
    </section>
  );
}

// --- Reusable Button Component ---
function Button({ item, lang }: { item: { name: string; nameEn: string; slug: string }; lang: string }) {
  const href = lang === "en" ? `/en/pages/collection/${item.slug}` : `/pages/collection/${item.slug}`;
  const displayName = lang === "en" ? item.nameEn : item.name;
  return (
    <Link href={href} className="block">
      <motion.button
        whileHover={{ scale: 1.03, borderColor: "#ef4444" }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center gap-3 border border-slate-300 rounded-full px-6 py-3 md:px-10 md:py-4 text-sm md:text-lg font-medium text-slate-700 bg-white hover:text-red-600 transition-all duration-300 shadow-sm"
      >
        {displayName}
        <MoveRight size={18} className="text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
      </motion.button>
    </Link>
  );
}