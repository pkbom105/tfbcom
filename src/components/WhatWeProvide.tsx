"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutFactory({ lang, dict }: { lang: string; dict?: any }) {
  return (
    <div className="font-noto">

   {/* --- SECTION  - What we provide --- */}
    <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                {/* ฝั่งซ้าย: Title + Text Grid 2x2 */}
                <div className="space-y-12">
                  
                  {/* Title Group */}
                  <div className="space-y-4">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">
                      {dict?.title || "What we provide"} <br />
                      <span className="text-slate-400">{dict?.subtitle || "สิ่งที่เรามอบให้"}</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-slate-900"></div>
                  </div>
          
                  {/* Text Grid 2x2 */}
                  <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-12">
                    
                    {/* Item 1 */}
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-slate-300">01 : Quality</span>
                      <div className="space-y-1">
                        <h6 className="text-xl font-bold text-slate-900">{dict?.item1_title || "งานคุณภาพ งานตรงปก"}</h6>
                        <p className="text-slate-600 leading-snug">{dict?.item1_desc || "นอกเหนือจากความประณีตในงานเย็บ เรายังให้ความสำคัญสูงสุดกับการสื่อสารและตีโจทย์แบบเสื้อให้แตก เพื่อให้มั่นใจว่าทุกชิ้นงานที่ส่งมอบจะสวยงามและถูกต้องตรงตามความคาดหวังของคุณ"}</p>
                      </div>
                    </div>
          
                    {/* Item 2 */}
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-slate-300">02 : Variety</span>
                      <div className="space-y-1">
                        <h6 className="text-xl font-bold text-slate-900">{dict?.item2_title || "ความหลากหลายของประเภทงาน"}</h6>
                        <p className="text-slate-600 leading-snug">{dict?.item2_desc || "มากกว่าแค่โรงงานผลิตเสื้อ แต่คือพันธมิตรที่พร้อมซัพพอร์ตทุกกลุ่มสินค้าที่คุณต้องการ ด้วยความชำนาญที่หลากหลาย เราช่วยให้งานจัดซื้อของคุณง่ายขึ้น ครบถ้วน และรวดเร็วในคราวเดียว"}</p>
                      </div>
                    </div>
          
                    {/* Item 3 */}
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-slate-300">03 : Service</span>
                      <div className="space-y-1">
                        <h6 className="text-xl font-bold text-slate-900">{dict?.item3_title || "การบริการที่ใส่ใจ"}</h6>
                        <p className="text-slate-600 leading-snug">{dict?.item3_desc || "เรารู้ดีว่ารายละเอียดที่ถูกต้องคือหัวใจของงานคุณภาพ แม้การสั่งผลิตจะมีขั้นตอนที่ซับซ้อน แต่พนักงานของเราพร้อมเป็นคู่คิดที่ช่วยดูแลและทำความเข้าใจทุกโจทย์ความต้องการของคุณอย่างใจเย็น เพื่อให้มั่นใจว่าสินค้าทุกชิ้นจะออกมาตรงใจและคุ้มค่าที่สุด"}</p>
                      </div>
                    </div>
          
                    {/* Item 4 */}
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-slate-300">04 : Warranty</span>
                      <div className="space-y-1">
                        <h6 className="text-xl font-bold text-slate-900">{dict?.item4_title || "การรับประกันสินค้า"}</h6>
                        <p className="text-slate-600 leading-snug">{dict?.item4_desc || "เราเข้าใจทุกความกังวลในการสั่งผลิตสินค้า จึงตั้งใจดูแลตั้งแต่กระบวนการผลิตไปจนถึงมือคุณ หากพบจุดที่ต้องแก้ไข เราพร้อมดูแลอย่างเต็มที่เพื่อความพึงพอใจสูงสุดของคุณ เพราะที่นี่เราดูแลคุณเหมือนพาร์ทเนอร์ระยะยาว"}</p>
                      </div>
                    </div>
          
                  </div>
                </div>
          
                {/* ฝั่งขวา: Video Layout (คงเดิม) */}
                <div className="relative h-[500px] w-full flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, x: 50, y: -20 }} 
                    whileInView={{ opacity: 1, x: 0, y: 0 }} 
                    viewport={{ once: true }} 
                    className="absolute top-0 right-0 w-[50%] aspect-square rounded-lg overflow-hidden shadow-2xl border-8 border-white"
                  >
                    <video 
                      src="/hp/vdo2.mp4" 
                      autoPlay muted loop playsInline 
                      className="w-full h-full object-cover"
                      poster="/hp/z2.png"
                    >
                      {dict?.video_fallback || "Your browser does not support the video tag."}
                    </video>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -50, y: 20 }} 
                    whileInView={{ opacity: 1, x: 0, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.3 }} 
                    className="absolute bottom-0 left-0 w-[55%] aspect-square rounded-lg overflow-hidden shadow-2xl border-8 border-white z-10"
                  >
                    <video 
                      src="/hp/vdo1.mp4" 
                      autoPlay muted loop playsInline 
                      className="w-full h-full object-cover"
                      poster="/hp/z1.png"
                    >
                      {dict?.video_fallback || "Your browser does not support the video tag."}
                    </video>
                  </motion.div>
                </div>
          
              </div>
            </div>
          </section>
    </div>
  );
}