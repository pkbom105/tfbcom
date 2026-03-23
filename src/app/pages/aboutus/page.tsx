"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <main className="min-h-screen font-noto bg-white overflow-hidden">
      
      {/* SECTION 1: ประวัติบริษัท (ลดระยะห่างช่วงบน) */}
      <section className="max-w-[1300px] mx-auto px-6 py-12 xl:py-20">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* ฝั่งซ้าย: รูปภาพจริง (Ratio 3:4) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-red-600/20 z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/hp/c2.png"
                alt="บรรยากาศโรงงาน ทอฟฟี่ บูติก"
                width={500}
                height={800}
                priority
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>

          {/* ฝั่งขวา: ข้อความเนื้อหาเดิมครบถ้วน */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="text-5xl xl:text-4xl font-black text-gray-900 leading-tight">
                บริษัท ทอฟฟี่ บูติก จำกัด 
              </div>
              <div className="w-24 h-2 bg-red-600"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-md text-slate-600 leading-relaxed font-normal">
                ก่อตั้งมาตั้งแต่ปี พ.ศ. 2533 ตั้งอยู่ฝั่งธน ย่านพระราม 2 เริ่มผลิตสินค้าประเภทผ้ายืดเป็นหลัก 
                เริ่มทำจำหน่ายสินค้าขายส่งในตลาดเสื้อผ้าในประเทศ ที่ประตูน้ำ โบ้เบ้ และส่งสินค้าต่างจังหวัด 
                โดยเน้นผลิตสินค้าประเภทเสื้อยืด เสื้อโปโล และเสื้อแนวแฟชั่น
              </p>
              <p className="text-md text-slate-600 leading-relaxed font-normal">
                ต่อมามีการพัฒนาการผลิตให้มีความหลากหลาย และเชี่ยวชาญมากขึ้น 
                ปัจจุบันสามารถผลิตสินค้าได้ทั้งผ้ายืดและผ้าทอ
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-5 border-t border-gray-100">
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

      {/* SECTION 2: ความเชี่ยวชาญ (ชิดขอบขึ้น) */}
      <section className="max-w-[1300px] mx-auto px-6 py-10 border-t border-gray-50">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-3">
              <h3 className="text-5xl xl:text-4xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
                ความเชี่ยวชาญ <span className="text-red-600"> ที่ยาวนาน</span>
              </h3>
              <div className="w-16 h-2 bg-gray-900"></div>
            </div>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                ด้วยประสบการณ์การทำงานด้านการผลิตมานาน ทำให้เราเชี่ยวชาญในเรื่องการควบคุมงานผลิต 
                การคัดสรรวัตุดิบ เนื้อผ้าที่มีมาตรฐาน และมีคุณภาพที่สม่ำเสมอ
              </p>
              <p>
                ทำให้เราเป็นที่ไว้วางใจของลูกค้าหลากหลายวงการ 
                ที่กลับมาสั่งผลิตสินค้ากับเรามาเป็นระยะเวลานาน
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-gray-200 z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/hp/c4.png"
                alt="คุณภาพการผลิต ทอฟฟี่ บูติก"
                width={800}
                height={500}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: ความตั้งใจ (Image Bleed Left - ลด Padding ส่วนรอยต่อ) */}
      <section className="border-t border-gray-50 overflow-hidden py-10 lg:py-0">
        <div className="grid lg:grid-cols-2 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-full lg:pr-12 xl:pr-24"
          >
            <div className="relative z-10 overflow-hidden lg:rounded-r-2xl shadow-xl">
              <Image
                src="/hp/c5.png"
                alt="ความตั้งใจในการผลิต"
                width={800}
                height={500}
                className="w-full h-auto lg:h-[500px] object-cover object-center"
              />
            </div>
          </motion.div>

          <div className="max-w-[650px] px-6 py-12 lg:py-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-2xl xl:text-xl font-black text-gray-600 leading-[1.8] xl:leading-[2.0] uppercase tracking-tighter">
                ความตั้งใจในการทำงานของเรา <br />
                <span className="text-gray-600">คือ การได้ผลิตสินค้าที่มีคุณภาพ และทำให้ลูกค้าของเรา</span><br />
                <span className="text-gray-600">ได้รับความพึงพอใจ และรู้สึกคุ้มค่า</span><br />
                <span className="text-gray-600">กับการสั่งผลิตสินค้ากับทอฟฟี่บูติกให้ได้มากที่สุด</span>
              </h4>
              <div className="w-16 h-2 bg-red-600"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ขอบคุณ (ปรับระยะห่างให้ชิดรูป) */}
      <section className="pt-10 pb-20 bg-white">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full relative overflow-hidden"
          >
            <Image
              src="/hp/c6.png"
              alt="ขอบคุณลูกค้า ทอฟฟี่ บูติก"
              width={1200}
              height={500}
              priority
              className="w-full h-[400px] xl:h-[500px] object-cover object-center"
            />
          </motion.div>

          <div className="max-w-[1300px] mx-auto px-6 mt-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-md text-slate-600 leading-relaxed font-medium">
                บริษัท ทอฟฟี่ บูติก จำกัด และ พี่น้องพนักงานทุกคน <br />
                ขอขอบคุณลูกค้าทุกท่านที่ให้การสนับสนุน
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}