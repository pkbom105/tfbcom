"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, UserCheck, Calendar, ChevronRight, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function OurCustomerPage() {
  // สร้างอาเรย์สำหรับโลโก้ลูกค้า 57 รูป (customer01.svg - customer57.svg)
  const customers = Array.from({ length: 57 }, (_, i) => {
    const fileNumber = (i + 1).toString().padStart(2, '0'); // แปลง 1 เป็น "01"
    return {
      id: i + 1,
      src: `/customer_logo/customer${fileNumber}.svg`,
      alt: `โลโก้ลูกค้า ทอฟฟี่ บูติก ลำดับที่ ${fileNumber}`,
    };
  });

  return (
    <main className="min-h-screen font-kanit bg-white pb-20">
      {/* --- Intro Section --- */}
      <section className="bg-slate-50 py-16 px-6 border-b">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-red-600 font-bold"
          >
            <Award size={20} className="text-red-600" />
            <span className="uppercase tracking-widest text-sm text-slate-500">Trusted by Organizations</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            ลูกค้าที่ไว้วางใจเรา
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <UserCheck size={16} className="text-red-500" /> by admin
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1 text-center">
              <Calendar size={16} className="text-red-500" /> Updated: 2026
            </span>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4 max-w-3xl mx-auto text-center">
            <p className="text-xl font-bold text-slate-800 leading-relaxed">
              ความภูมิใจของเราที่ได้เป็นส่วนหนึ่งในการสร้างสรรค์ภาพลักษณ์ให้องค์กรชั้นนำ
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              ทอฟฟี่ บูติก ขอขอบพระคุณบริษัท ห้างร้าน และหน่วยงานราชการต่างๆ ที่ไว้วางใจให้เราดูแลการผลิต 
              <strong className="text-red-600 px-1">ยูนิฟอร์มพนักงานและเสื้อโปโลคุณภาพ</strong> 
              เรามุ่งมั่นรักษามาตรฐานการผลิตเพื่อให้ลูกค้าได้รับสินค้าที่ดีที่สุดเสมอมา
            </p>
          </div>
        </div>
      </section>

      {/* --- Logo Gallery Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-1.5 bg-red-600 rounded-full" />
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Our Distinguished Clients</h2>
        </div>

        {/* Grid: Mobile 2 col, Tablet 3 col, LG 4 col | Ratio 1:1 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {customers.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (idx % 4) * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl bg-white p-6 hover:bg-slate-50 hover:border-red-100">
                <CardContent className="p-0 relative aspect-square overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110 p-2"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* --- Call to Action --- */}
        <div className="mt-24 text-center">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">ร่วมเป็นส่วนหนึ่งของลูกค้าคนสำคัญของเรา</h3>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
              ไม่ว่าจะเป็นองค์กรขนาดเล็กหรือใหญ่ ทอฟฟี่ บูติก พร้อมดูแลการผลิตชุดฟอร์มพนักงานให้ตอบโจทย์ทุกความต้องการของคุณ
            </p>
            
            <button className="inline-flex items-center gap-3 bg-red-600 text-white px-12 py-5 rounded-full font-bold hover:bg-red-700 transition-all duration-300 group shadow-xl hover:-translate-y-1 relative z-10">
              เริ่มสั่งผลิตกับเราวันนี้ 
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}