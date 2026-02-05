"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";

// --- Data Configuration ---
const PRODUCTS = [
  { id: 1, name: "เสื้อยืด T-shirt", img: "/picture/product1.png" },
  { id: 2, name: "เสื้อโปโล Polo", img: "/picture/product2.png" },
  { id: 3, name: "เสื้อเชิ้ต Shirt", img: "/picture/product3.png" },
  { id: 4, name: "เสื้อเชิ้ตช่าง Workshop shirt", img: "/picture/product4.png" },
  { id: 5, name: "เสื้อช็อป Engineer Jacket", img: "/picture/product5.png" },
  { id: 6, name: "เสื้อแจ็คเก็ต Jacket", img: "/picture/product6.png" },
  { id: 7, name: "เสื้อแม่บ้าน House Maid Uniform", img: "/picture/product7.png" },
  { id: 8, name: "เสื้อเชฟ Chef Uniform", img: "/picture/product8.png" },
  { id: 9, name: "เสื้อรปภ. Security Uniform", img: "/picture/product9.png" },
  { id: 10, name: "กางเกง กระโปรง Buttom", img: "/picture/product10.png" },
  { id: 11, name: "ผ้ากันเปื้อน Apron", img: "/picture/product11.png" },
];

const SIZE_CATEGORIES = [
  { id: 1, name: "T-Shirt", link: "#" },
  { id: 2, name: "Polo Shirt", link: "#" },
  { id: 3, name: "Shirt", link: "#" },
  { id: 4, name: "Workshop Shirt", link: "#" },
  { id: 5, name: "Engineer Jacket", link: "#" },
  { id: 6, name: "Shirt Jacket", link: "#" },
  { id: 7, name: "Bomber Jacket", link: "#" },
  { id: 8, name: "House Maid Uniform", link: "#" },
  { id: 9, name: "Security Officer Uniform", link: "#" },
  { id: 10, name: "Apron", link: "#" },
  { id: 11, name: "Chef Uniform", link: "#" },
  { id: 12, name: "Pant/ Trouser", link: "#" },
];

// --- Sub-Component: SizeSpec (Section 4) ---
export function SizeSpec() {
  return (
    <section className="py-32 bg-[#F2F2F2] overflow-hidden font-noto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ฝั่งซ้าย: หัวข้อ */}
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter italic uppercase"
            >
              Size spec <br />
              template
            </motion.h2>
          </div>

          {/* ฝั่งขวา: รูปภาพสินค้าตัวอย่าง */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square w-full max-w-[500px] mx-auto"
          >
            <Image
              src="/picture/product2.png" 
              alt="Size Spec Template"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* รายการ Link สำหรับดาวน์โหลดหรือดู Size Spec */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-12 border-t border-slate-300 pt-12">
          {SIZE_CATEGORIES.map((category, index) => (
            <motion.a
              key={category.id}
              href={category.link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-lg font-medium text-slate-600 hover:text-red-600 transition-colors duration-300 flex items-center group"
            >
              <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-red-600 font-bold">
                •
              </span>
              {category.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Main Component: WhatWeDo (Section 3) ---
export default function WhatWeDo() {
  return (
    <>
      <section className="py-24 bg-white overflow-hidden font-noto">
        <div className="container mx-auto px-6 text-center space-y-16">
          
          {/* --- Header Section --- */}
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight tracking-tighter italic">
              What we do
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium">
              ยูนิฟอร์มหลากหลายรูปแบบ
            </p>
          </div>

          {/* --- Product Image Row (Visual Showcase) --- */}
          <div className="flex flex-wrap justify-center items-end gap-2 md:gap-4 opacity-80">
            {PRODUCTS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative w-12 h-12 md:w-24 md:h-24 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* --- Category Buttons Grid --- */}
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {PRODUCTS.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-4 border border-slate-300 rounded-full px-8 py-4 text-sm md:text-lg font-bold text-slate-800 bg-white hover:bg-slate-50 hover:border-slate-900 transition-all duration-300 shadow-sm"
              >
                {item.name}
                <MoveRight size={18} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>      
    </>
  );
}