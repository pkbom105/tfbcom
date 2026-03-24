"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// --- Data Configuration ---
const SIZE_CATEGORIES = [
  { id: 1, name: "เสื้อยืด T-shirt", link: "#" },
  { id: 2, name: "เสื้อเชิ้ตช่าง Workshop shirt", link: "#" },
  { id: 3, name: "เสื้อแม่บ้าน House Maid Uniform", link: "#" },
  { id: 4, name: "กางเกง Pant", link: "#" },
  { id: 5, name: "เสื้อโปโล Polo", link: "#" },
  { id: 6, name: "เสื้อช็อป Engineer Jacket", link: "#" },
  { id: 7, name: "เสื้อเชฟ Chef Uniform", link: "#" },
  { id: 8, name: "เสื้อกั๊ก Vest", link: "#" },
  { id: 9, name: "เสื้อเชิ้ต Shirt", link: "#" },
  { id: 10, name: "เสื้อแจ็คเก็ต Jacket", link: "#" },
  { id: 11, name: "เสื้อรปภ. Security Uniform", link: "#" },
  { id: 12, name: "ผ้ากันเปื้อน Apron", link: "#" },
];

export default function SizeSpec() {
  return (
    <section className="py-15 bg-[#F2F2F2] overflow-hidden font-noto">
      <div className="max-w-6xl mx-auto  border-0 pt-16">
        
        {/* --- Part 1: Header (30/70 Split) --- */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-5 mb-10 items-center">
          
          {/* Title (30% Area) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 flex flex-col justify-center lg:ml-10"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter italic uppercase">
              Size spec <br />
              template
            </h2>
            {/* เส้นขีดแดงใต้หัวข้อ */}
            <div className="w-20 h-2 bg-red-600 mt-6" />
          </motion.div>

          {/* Spacer (10% Area) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Image (60% Area) - Transparent PNG */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 flex justify-center items-center"
          >
            <div className="w-full h-[280px] md:h-[380px] relative">
              <Image 
                src="/hp/20.png" 
                alt="Size Spec Template Preview" 
                fill
                className="object-contain" 
              />
            </div>
          </motion.div>
        </div>

        {/* --- Part 2: Categories Grid (4 Columns) --- */}
        <div className="max-w-6xl mx-auto border-t border-slate-300 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-12">
            {SIZE_CATEGORIES.map((category, index) => (
              <motion.a
                key={category.id}
                href={category.link}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group relative inline-flex items-center self-start text-slate-700 hover:text-red-600 transition-colors duration-300 pb-2 w-fit"
              >
                {/* Text + Arrow Container */}
                <span className="text-[15px] font-medium tracking-tight relative flex items-center gap-2">
                  {category.name}
                  
                  {/* Arrow Indicator */}
                  <span className="text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 text-md">
                    →
                  </span>

                  {/* Nav-style Underline Effect */}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}