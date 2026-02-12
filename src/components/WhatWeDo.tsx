"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";

// --- Data Configuration ---
const PRODUCTS = [
  { id: 1, name: "เสื้อยืด T-shirt", img: "/hp/5.png" },
  { id: 2, name: "เสื้อโปโล Polo", img: "/hp/6.png" },
  { id: 3, name: "เสื้อเชิ้ต Shirt", img: "/hp/7.png" },
  { id: 4, name: "เสื้อเชิ้ตช่าง Workshop shirt", img: "/hp/8.png" },
  { id: 5, name: "เสื้อช็อป Engineer Jacket", img: "/hp/9.png" },
  { id: 6, name: "เสื้อแจ็คเก็ต Jacket", img: "/hp/10.png" },
  { id: 7, name: "เสื้อแม่บ้าน House Maid Uniform", img: "/hp/11.png" },
  { id: 8, name: "เสื้อเชฟ Chef Uniform", img: "/hp/12.png" },
  { id: 9, name: "ผ้ากันเปื้อน Apron", img: "/hp/13.png" },
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
    <section className="py-20 bg-[#F2F2F2] overflow-hidden font-noto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          
          {/* ฝั่งซ้าย: หัวข้อเลื่อนจากซ้าย + Bouncing ไม่หยุด */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                y: [0, -20, 0] 
              }}
              viewport={{ once: true }}
              transition={{
                x: { duration: 1, ease: "easeOut" },
                opacity: { duration: 1 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="lg:ml-20"
            >
              <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter italic uppercase">
                Size spec <br />
                template
              </h2>
            </motion.div>
          </div>

          {/* ฝั่งขวา: รูปภาพเลื่อนจากขวา + Bouncing ไม่หยุด */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              y: [0, 30, 0] 
            }}
            viewport={{ once: true }}
            transition={{
              x: { duration: 1, ease: "easeOut" },
              scale: { duration: 1 },
              opacity: { duration: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative aspect-square w-full max-w-[700px] mx-auto lg:mr-20"
          >
            <Image
              src="/hp/20.png"
              alt="Size Spec Template"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-12 border-t border-slate-300 pt-12">
          {SIZE_CATEGORIES.map((category, index) => (
            <motion.a
              key={category.id}
              href={category.link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-lg font-medium text-slate-600 hover:text-red-600 group hover:underline underline-offset-8 decoration-2 transition-all duration-300 flex items-center"
            >
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
        <div className="container mx-auto px-6 text-center space-y-24">
          
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight tracking-tighter italic">
              What we do
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium">
              ยูนิฟอร์มหลากหลายรูปแบบ
            </p>
          </div>

          {/* --- 9 Products with INFINITE Wavy Bouncing Motion --- */}
          <div className="flex flex-wrap justify-center items-end gap-6 md:gap-10">
            {PRODUCTS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80, scale: 0.5 }}
                whileInView={{ 
                  opacity: 1, 
                  y: [0, -25, 0], // Infinite bouncing sequence
                  scale: 1 
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  // Entrance transition (Initial fade-in)
                  opacity: { duration: 0.8, delay: index * 0.1 },
                  scale: { type: "spring", stiffness: 200, damping: 12, delay: index * 0.1 },
                  // Infinite Bouncing Transition
                  y: {
                    duration: 3 + (index % 3) * 0.5, // Subtle variance in speed per row/item
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2 // Staggered start for the wave effect
                  }
                }}
                className="relative group flex flex-col items-center"
              >
                {/* Tooltip on Hover */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
                   <span className="bg-red-600 text-white text-[10px] md:text-xs px-3 py-1.5 rounded shadow-xl font-bold uppercase tracking-wider">
                     {item.name}
                   </span>
                   <div className="w-2 h-2 bg-slate-900 rotate-45 mx-auto -mt-1" />
                </div>

                {/* Product Image */}
                <div className="relative w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain transition-all duration-500 hover:scale-125 group-hover:drop-shadow-2xl grayscale-[30%] group-hover:grayscale-0"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {PRODUCTS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-4 border border-slate-300 rounded-full px-8 py-4 text-sm md:text-lg font-bold text-slate-800 bg-white hover:bg-red-600 hover:text-white transition-all duration-500 shadow-sm"
              >
                {item.name}
                <MoveRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      
    </>
  );
}