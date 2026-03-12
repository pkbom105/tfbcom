"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ABOUT_TEXT = {
  history: "บริษัท ทอฟฟี่ บูติก ก่อตั้งมาตั้งแต่ปี พ.ศ. 2533 ตั้งอยู่ฝั่งธน ย่านพระราม 2 เริ่มผลิตสินค้าประเภทผ้าชิ้นเป็นหลัก เริ่มทำจำหน่ายสินค้าขายส่งในตลาดเสื้อผ้าในประเทศ ที่ประตูน้ำ โบ๊เบ๊ และส่งสินค้าต่างจังหวัด โดยเน้นผลิตสินค้าประเภทเสื้อยืด เสื้อโปโล และเสื้อแนวแฟชั่น ต่อมามีการพัฒนาการผลิตให้มีความหลากหลาย และเชี่ยวชาญมากขึ้น ปัจจุบันสามารถผลิตสินค้าได้ทั้งผ้าถักและผ้าทอ ด้วยประสบการณ์การทำงานด้านการผลิตมานาน ทำให้เราเชี่ยวชาญในเรื่องการควบคุมงานผลิต และการคัดสรรวัตถุดิบ และเนื้อผ้าที่มีมาตรฐานและคุณภาพที่สม่ำเสมอ ทำให้เราเป็นที่ไว้วางใจของลูกค้าหลากหลายวงการ ที่กลับมาสั่งผลิตสินค้ากับเรามาเป็นระยะเวลานาน",
  intention: "ความตั้งใจในการทำงานของเรา คือการได้ผลิตสินค้าที่มีคุณภาพ และทำให้ลูกค้าของเรา ได้รับความพึงพอใจ และรู้สึกคุ้มค่ากับการสั่งผลิตสินค้ากับทอฟฟี่บูติกให้ได้มากที่สุด"
};

export default function AboutFactory() {
  return (
    <div className="font-noto">
      {/* --- SECTION aa5: ABOUT THE FACTORY --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <h2 className="text-3xl font-black text-slate-300 uppercase tracking-widest">ABOUT THE FACTORY</h2>
              <p className="text-lg leading-relaxed text-slate-700 font-medium">{ABOUT_TEXT.history}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image src="/hp/s1.png"  alt="Factory Environment" fill className="object-cover" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-video rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src="/hp/s2.png"  alt="Sewing Line" fill className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <h3 className="text-lg leading-relaxed text-slate-700 font-medium">{ABOUT_TEXT.intention}</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION aa6: COMPANY PROFILE & BRIEF --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <h4 className="text-2xl font-black text-slate-900">บริษัท ทอฟฟี่ บูติก จำกัด</h4>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/hp/s5.png"  alt="Office" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-0 lg:mt-12">
              <Image src="/hp/s6.png"  alt="Fabric Samples" fill className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center space-y-12">
              <div className="space-y-4">
                <h5 className="text-xl font-black uppercase tracking-tighter">THE BRIEF</h5>
                <p className="text-slate-600 font-medium leading-relaxed">Describe client's ask for the project. Identify the challenge that needs to be solved.</p>
              </div>
              <div className="space-y-4">
                <h5 className="text-xl font-black uppercase tracking-tighter">THE EXECUTION</h5>
                <p className="text-slate-600 font-medium leading-relaxed">Talk about the idea behind the execution. Highlight the success of the project.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

   {/* --- SECTION aa7: DIGITAL SERIES --- */}
    <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                {/* ฝั่งซ้าย: Title + Text Grid 2x2 */}
                <div className="space-y-12">
                  
                  {/* Title Group */}
                  <div className="space-y-4">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">
                      What we provide <br />
                      <span className="text-slate-400">สิ่งที่เรามอบให้</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-slate-900"></div>
                  </div>
          
                  {/* Text Grid 2x2 */}
                  <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-12">
                    
                    {/* Item 1 */}
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-slate-300">01 : Quality</span>
                      <div className="space-y-1">
                        <h6 className="text-xl font-bold text-slate-900">งานคุณภาพ งานตรงปก</h6>
                        <p className="text-slate-600 leading-snug">นอกเหนือจากความประณีตในงานเย็บ 
                        เรายังให้ความสำคัญสูงสุดกับการสื่อสารและตีโจทย์แบบเสื้อให้แตก เพื่อให้มั่นใจว่าทุกชิ้นงานที่ส่งมอบจะสวยงามและถูกต้องตรงตามความคาดหวังของคุณ</p>
                      </div>
                    </div>
          
                    {/* Item 2 */}
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-slate-300">02 : Variety</span>
                      <div className="space-y-1">
                        <h6 className="text-xl font-bold text-slate-900">ความหลากหลายของประเภทงาน</h6>
                        <p className="text-slate-600 leading-snug">มากกว่าแค่โรงงานผลิตเสื้อ แต่คือพันธมิตรที่พร้อมซัพพอร์ตทุกกลุ่มสินค้าที่คุณต้องการ 
                        ด้วยความชำนาญที่หลากหลาย เราช่วยให้งานจัดซื้อของคุณง่ายขึ้น ครบถ้วน และรวดเร็วในคราวเดียว</p>
                      </div>
                    </div>
          
                    {/* Item 3 */}
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-slate-300">03 : Service</span>
                      <div className="space-y-1">
                        <h6 className="text-xl font-bold text-slate-900">การบริการที่ใส่ใจ</h6>
                        <p className="text-slate-600 leading-snug">เรารู้ดีว่ารายละเอียดที่ถูกต้องคือหัวใจของงานคุณภาพ แม้การสั่งผลิตจะมีขั้นตอนที่ซับซ้อน 
                        แต่พนักงานของเราพร้อมเป็นคู่คิดที่ช่วยดูแลและทำความเข้าใจทุกโจทย์ความต้องการของคุณอย่างใจเย็น เพื่อให้มั่นใจว่าสินค้าทุกชิ้นจะออกมาตรงใจและคุ้มค่าที่สุด</p>
                      </div>
                    </div>
          
                    {/* Item 4 */}
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-slate-300">04 : Warranty</span>
                      <div className="space-y-1">
                        <h6 className="text-xl font-bold text-slate-900">การรับประกันสินค้า</h6>
                        <p className="text-slate-600 leading-snug">เราเข้าใจทุกความกังวลในการสั่งผลิตสินค้า จึงตั้งใจดูแลตั้งแต่กระบวนการผลิตไปจนถึงมือคุณ 
                        หากพบจุดที่ต้องแก้ไข เราพร้อมดูแลอย่างเต็มที่เพื่อความพึงพอใจสูงสุดของคุณ เพราะที่นี่เราดูแลคุณเหมือนพาร์ทเนอร์ระยะยาว</p>
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
                    <video src="/hp/vdo2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -50, y: 20 }} 
                    whileInView={{ opacity: 1, x: 0, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.3 }} 
                    className="absolute bottom-0 left-0 w-[55%] aspect-square rounded-lg overflow-hidden shadow-2xl border-8 border-white z-10"
                  >
                    <video src="/hp/vdo1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  </motion.div>
                </div>
          
              </div>
            </div>
          </section>
    </div>
  );
}