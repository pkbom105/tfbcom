"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <main className="min-h-screen font-noto bg-white overflow-hidden">
      
      {/* SECTION 1: About Our Factory (Image Left, Text Right) */}
      <section className="max-w-[1300px] mx-auto px-6 py-24 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* ฝั่งซ้าย: รูปภาพจริง (Ratio 3:4) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* กรอบหลังเพื่อความมีมิติเล็กน้อย (ปรับลดความเข้มลงเพื่อให้รูปจริงเด่น) */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-red-600/20 z-0"></div>
            
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/picture/toffyboutque_factory.jpg"
                alt="บรรยากาศโรงงาน ทอฟฟี่ บูติก"
                width={900}
                height={1200}
                priority
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* ฝั่งขวา: ข้อความเนื้อหา */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-block bg-red-600 text-white text-xs font-black px-4 py-1 uppercase tracking-widest rounded-sm">
                Since  2533
              </div>
              <h2 className="text-5xl xl:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase">
                Expert in <br />
                <span className="text-red-600">Uniform</span>
              </h2>
              <div className="w-24 h-2 bg-red-600"></div>
            </div>
            
            <div className="space-y-8">
              <div className="text-2xl xl:text-md font-black text-gray-900 leading-tight">
                บริษัท ทอฟฟี่ บูติก จำกัด
                <p className="text-md font-medium text-slate-500 mt-2">
                  โรงงานผลิตเสื้อผ้าสำเร็จรูปประสบการณ์กว่า 35 ปี ย่านพุทธบูชา-พระราม 2
                </p>
              </div>
              
              <p className="text-md  text-slate-600 leading-relaxed font-normal">
              ก่อตั้งมาตั้งแต่ปี พ.ศ. 2533 ตั้งอยู่ฝั่งธน 
              ย่านพระราม 2 เริ่มผลิตสินค้าประเภทผ้ายืดเป็นหลัก เริ่มทำจำหน่ายสินค้าขายส่งในตลาดเสื้อผ้าในประเทศ ที่ประตูน้ำ โบ้เบ้ และส่งสินค้าต่างจังหวัด  
              โดยเน้นผลิตสินค้าประเภทเสื้อยืด เสื้อโปโล และเสื้อแนวแฟชั่น ต่อมามีการพัฒนาการผลิตให้มีความหลากหลาย และเชี่ยวชาญมากขึ้น ปัจจุบันสามารถผลิตสินค้าได้ทั้งผ้ายืดและผ้าทอ 
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
              <div>
                <p className="text-5xl xl:text-6xl font-black text-gray-900 tracking-tighter">
                  35<span className="text-red-600">+</span>
                </p>
                <p className="text-xs xl:text-sm text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-5xl xl:text-6xl font-black text-gray-900 tracking-tighter">PRM</p>
                <p className="text-xs xl:text-sm text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">
                  Quality Control
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}