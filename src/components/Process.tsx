"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PROCESS_STEPS = [
  { id: 1, title: "เย็บ", img: "/picture/process1.jpg" },
  { id: 2, title: "ตัด", img: "/picture/process2.jpg" },
  { id: 3, title: "แพทเทิร์น", img: "/picture/process3.jpg" },
  { id: 4, title: "แพคกิ้ง", img: "/picture/process4.jpg" },
];

export default function Process() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
              We Make <br /> every kind <br /> of uniform
            </h2>
          </div>
          
          <div className="flex items-center gap-12">
            <div className="hidden md:block">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20H110M110 20L95 5M110 20L95 35" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <button className="group flex items-center gap-4 border-2 border-slate-900 rounded-full px-10 py-5 text-xl font-black uppercase hover:bg-slate-900 hover:text-white transition-all duration-500">
              Contact us
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
                <Image src={step.img} alt={step.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-600 tracking-widest uppercase transition-colors duration-300 group-hover:text-red-600">
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