"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, UserCheck, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CustomerReviewPage({ lang = "th" }: { lang?: string }) {
  const isEn = lang === "en";
  // สร้างอาเรย์สำหรับรูปภาพ 21 รูป โดยปรับฟอร์แมตชื่อเป็น review01, review02...
  const reviews = Array.from({ length: 30 }, (_, i) => {
    const fileNumber = (i + 1).toString().padStart(2, '0'); // แปลง 1 เป็น "01", 2 เป็น "02"
    return {
      id: i + 1,
      src: `/customer_review/review${fileNumber}.jpg`,
      alt: `รีวิวลูกค้า ทอฟฟี่ บูติก ชุดที่ ${fileNumber}`,
    };
  });

  return (
    <main className="min-h-screen font-kanit bg-white pb-20">
      {/* --- Intro Section --- */}
      <section className="bg-slate-50 py-16 px-6 border-b">
        <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"> 
                Customer Reviews | <span className="text-red-600">{isEn ? "Client Review Photos" : "รูปรีวิวจากลูกค้า"}</span>
            </h1> 
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-red-600 font-bold"
          >
            <Heart size={20} fill="currentColor" />
            <span className="uppercase tracking-widest text-sm text-slate-500">Customer Satisfaction</span>
          </motion.div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-slate-800 leading-relaxed">
              {isEn ? "Customer review photos — employee uniforms and polo shirts from our clients." : "รูปรีวิวยูนิฟอร์มพนักงาน เสื้อโปโลพนักงาน ชุดฟอร์มพนักงานโรงงานจากลูกค้าของเรา"}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {isEn
                ? <>Thank you to all our clients who trust <strong className="text-red-600 ml-1">Toffy Boutique</strong> for every garment.</>
                : <>ทอฟฟี่ บูติก โรงงานผลิตเสื้อโปโล รวบรวมผลงาน รีวิว ยูนิฟอร์มพนักงาน เสื้อฟอร์มพนักงาน เสื้อโปโลพนักงาน จากลูกค้าของทางร้าน <strong className="text-red-600 ml-1">ขอขอบคุณลูกค้าทุกคนที่ไว้วางใจ Toffy Boutique ผลิตเสื้อทุกตัว</strong></>
              }
            </p>
          </div>
        </div>
      </section>

      {/* --- Photo Gallery Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-1.5 bg-red-600 rounded-full" />
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Portfolio Gallery</h2>
        </div>

        {/* Grid: Mobile 2 col, LG 3 col */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-xl bg-white p-2 hover:bg-red-50">
                <CardContent className="p-0 relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* --- Call to Action --- */}
        <div className="mt-24 text-center">
          <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full font-bold hover:bg-red-600 transition-all duration-300 group shadow-xl hover:-translate-y-1">
            <span className="uppercase tracking-widest text-sm font-bold text-slate-900">
              {isEn ? "Interested in ordering a uniform like those in the reviews?" : "สนใจสั่งผลิตเสื้อแบบในรีวิว"}
            </span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-slate-400 text-sm italic tracking-wide">
            * รูปภาพจริงถ่ายจากผลงานการส่งมอบให้ลูกค้า Toffy Boutique
          </p>
        </div>
      </section>
    </main>
  );
}