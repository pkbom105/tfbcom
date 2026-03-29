"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Process({ lang, dict }: { lang: string; dict?: any }) {
  const PROCESS_STEPS = [
    { id: 1, title: dict?.step1 || "เย็บ", img: "/hp/1.png" },
    { id: 2, title: dict?.step2 || "ตัด", img: "/hp/2.png" },
    { id: 3, title: dict?.step3 || "แพทเทิร์น", img: "/hp/3.png" },
    { id: 4, title: dict?.step4 || "แพคกิ้ง", img: "/hp/4.png" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* เพิ่ม max-w-[1250px] และ mx-auto เพื่อให้คอนเทนต์อยู่กึ่งกลาง
         และจำกัดความกว้างตามที่ต้องการ 
      */}
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h5 className="text-xl font-black text-slate-700 leading-[0.9] tracking-tighter">
              Toffy <br /> 
              Boutique 
            </h5>            
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
              We Make <br /> 
              every kind <br /> 
              of uniform
            </h2>
          </div>
          
          {/* ปุ่ม Contact us */}
          <div className="flex items-center gap-8 lg:gap-12 lg:mt-4">
            <div className="hidden md:block">
              <svg width="100" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20H110M110 20L95 5M110 20L95 35" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <button className="group flex items-center gap-4 border-2 border-slate-900 rounded-full px-8 py-4 text-lg font-black uppercase hover:bg-red-600 hover:text-white transition-all duration-500 shadow-xl shadow-slate-100 whitespace-nowrap">
              {dict?.contact || "Contact us"}
            </button>
          </div>
        </div>

        {/* Grid Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="space-y-6 group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-700 group-hover:-translate-y-4">
                <Image 
                  src={step.img} 
                  alt={`${step.title} - ขั้นตอนการผลิตยูนิฟอร์ม Toffy Boutique`} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-slate-600 tracking-widest uppercase transition-colors duration-300 group-hover:text-red-600">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}