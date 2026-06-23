"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { organizationSchema } from "@/lib/schema";

export default function AboutSection({ lang = "th" }: { lang?: string }) {
  const isEn = lang === "en";
  const langCode = lang as "th" | "en";
  const schemas = [organizationSchema(langCode)];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="min-h-screen font-noto bg-white overflow-hidden">
      
      {/* SECTION 1: ประวัติบริษัท */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 xl:py-20">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* ฝั่งซ้าย: รูปภาพ */}
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
                alt={isEn ? "Toffy Boutique Factory Atmosphere" : "บรรยากาศโรงงาน ทอฟฟี่ บูติก"}
                width={500}
                height={800}
                priority
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>

          {/* ฝั่งขวา: ข้อความ */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-gray-900 leading-tight uppercase tracking-tight">
                {isEn ? "Toffy Boutique Co., Ltd." : "บริษัท ทอฟฟี่ บูติก จำกัด"}
              </h2>
              <div className="w-20 h-1.5 bg-red-600"></div>
            </div>
            
            {/* เพิ่ม leading-[1.5] */}
            <div className="space-y-6">
              <p className="text-md text-slate-600 leading-[1.5] font-normal">
                {isEn
                  ? "Founded in 1990, located on the Thon Buri side near Rama 2 Road. We started with knit fabric products and wholesaled apparel at Pratunam, Bobae, and provincial markets. Our core lines are T-shirts, polo shirts, and fashion tops."
                  : "ก่อตั้งมาตั้งแต่ปี พ.ศ. 2533 ตั้งอยู่ฝั่งธน ย่านพระรามา 2 เริ่มผลิตสินค้าประเภทผ้ายืดเป็นหลัก เริ่มทำจำหน่ายสินค้าขายส่งในตลาดเสื้อผ้าในประเทศ ที่ประตูน้ำ โบ้เบ้ และส่งสินค้าต่างจังหวัด โดยเน้นผลิตสินค้าประเภทเสื้อยืด เสื้อโปโล และเสื้อแนวแฟชั่น"}
              </p>
              <p className="text-md text-slate-600 leading-[1.5] font-normal">
                {isEn
                  ? "Over time, we diversified and refined our production expertise, and today we manufacture both knit and woven fabrics."
                  : "ต่อมามีการพัฒนาการผลิตให้มีความหลากหลาย และเชี่ยวชาญมากขึ้น ปัจจุบันสามารถผลิตสินค้าได้ทั้งผ้ายืดและผ้าทอ"}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-5 border-t border-gray-100">
              <div>
                <p className="text-4xl font-black text-gray-900 tracking-tighter">
                  35<span className="text-red-600">+</span>
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-gray-900 tracking-tighter">PRM</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">
                  Quality Control
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ความเชี่ยวชาญ */}
      <section className="max-w-[1200px] mx-auto px-6 py-10 border-t border-gray-50">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-3">
              <h3 className="text-4xl font-black text-gray-900 leading-tight uppercase tracking-tight">
                {isEn ? <>“Long-standing” <span className="text-red-600">Expertise</span></> : <>ความเชี่ยวชาญ <span className="text-red-600"> ที่ยาวนาน</span></>}
              </h3>
              <div className="w-16 h-1.5 bg-gray-900"></div>
            </div>
            
            {/* เพิ่ม leading-[1.5] */}
            <div className="space-y-4">
              <p className="text-md text-slate-600 leading-[1.5]">
                {isEn 
                  ? "With years of manufacturing experience, we are experts in production control, selecting standard raw materials, and ensuring consistent fabric quality."
                  : "ด้วยประสบการณ์การทำงานด้านการผลิตมานาน ทำให้เราเชี่ยวชาญในเรื่องการควบคุมงานผลิต การคัดสรรวัตุดิบ เนื้อผ้าที่มีมาตรฐาน และมีคุณภาพที่สม่ำเสมอ"}
              </p>
              <p className="text-md text-slate-600 leading-[1.5]">
                {isEn
                  ? "This has earned the trust of customers across various industries who have continued to order from us for a long time."
                  : "ทำให้เราเป็นที่ไว้วางใจของลูกค้าหลากหลายวงการ ที่กลับมาสั่งผลิตสินค้ากับเรามาเป็นระยะเวลานาน"}
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
                alt={isEn ? "Toffy Boutique Production Quality" : "คุณภาพการผลิต ทอฟฟี่ บูติก"}
                width={800}
                height={500}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: ความตั้งใจ */}
      <section className="bg-white py-20 lg:py-24 overflow-hidden border-t border-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl group">
                <Image
                  src="/hp/c5.png"
                  alt={isEn ? "Commitment to Production" : "ความตั้งใจในการผลิต"}
                  width={800}
                  height={600}
                  className="w-full h-auto aspect-[4/3] lg:aspect-square object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-50 rounded-full -z-10 blur-2xl opacity-60"></div>
            </motion.div>

            <div className="flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Our Commitment</span>
                  <h3 className="text-3xl font-black text-gray-900 uppercase leading-[1.6] tracking-tight">
                    {isEn ? <>Our Commitment is to Produce <br /> <span className="text-red-600">High-Quality Products</span></> : <>ความตั้งใจในการทำงานของเรา <br /> คือ การได้ผลิตสินค้าที่มีคุณภาพ</>}
                  </h3>
                  <p className="text-md text-gray-500 font-medium leading-[1.8]">
                    {isEn
                      ? "And to ensure our customers are fully satisfied and feel they received great value from ordering with Toffy Boutique."
                      : "และทำให้ลูกค้าของเราได้รับความพึงพอใจ และรู้สึกคุ้มค่ากับการสั่งผลิตสินค้ากับทอฟฟี่บูติกให้ได้มากที่สุด"}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1.5 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-1.5 bg-red-200 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ขอบคุณ */}
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
              alt={isEn ? "Thank you Toffy Boutique customers" : "ขอบคุณลูกค้า ทอฟฟี่ บูติก"}
              width={1200}
              height={500}
              priority
              className="w-full h-[350px] xl:h-[450px] object-cover object-center"
            />
          </motion.div>

          <div className="max-w-[1200px] mx-auto px-6 mt-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {/* เพิ่ม leading-[1.5] */}
              <p className="text-md text-slate-600 leading-[1.8] font-bold">
                {isEn
                  ? <>{"Toffy Boutique Co., Ltd. and all our staff"} <br /> {"sincerely thank every customer for your continued support."}</>
                  : <>บริษัท ทอฟฟี่ บูติก จำกัด และ พี่น้องพนักงานทุกคน <br /> ขอขอบคุณลูกค้าทุกท่านที่ให้การสนับสนุน</> }
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
