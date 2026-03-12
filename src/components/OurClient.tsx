"use client";

import React from "react";
import { motion } from "framer-motion";

const OurClient = () => {
  // สร้าง Array ชื่อไฟล์ customer01.svg ถึง customer57.svg
  const clientLogos = Array.from({ length: 57 }, (_, i) => {
    const cardNumber = (i + 1).toString().padStart(2, '0');
    return `/customer_logo/customer${cardNumber}.svg`;
  });

  // แบ่งเป็น 3 แถว แถวละ 19 รูป
  const row1 = clientLogos.slice(0, 19);
  const row2 = clientLogos.slice(19, 38);
  const row3 = clientLogos.slice(38, 57);

  // ปรับความเร็วและทิศทาง
  const marqueeVariants = (direction: "left" | "right") => ({
    animate: {
      x: direction === "left" ? [0, -1000] : [-1000, 0], // ปรับระยะตามความกว้างแถว
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 35, 
          ease: "linear",
        },
      },
    },
  });

  return (
    <>
      {/* --- SECTION 1: OUR CLIENTS MARQUEE --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
            Our Trusted Clients
          </h2>
        </div>

        <div className="flex flex-col gap-4"> {/* ลดช่องว่างระหว่างแถว */}
          {[row1, row2, row3].map((row, index) => (
            <div key={index} className="relative flex whitespace-nowrap overflow-hidden">
              <motion.div
                className="flex gap-4 pr-4" // ลดช่องว่างระหว่างรูป
                variants={marqueeVariants(index === 1 ? "right" : "left")}
                animate="animate"
              >
                {/* Render 2 รอบเพื่อความต่อเนื่อง */}
                {[...row, ...row].map((src, idx) => (
                  <div
                    key={`${idx}`}
                    className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 flex items-center justify-center p-2 transition-transform duration-300"
                  >
                    <img
                      src={src}
                      alt="Customer Logo"
                      className="w-full h-full object-contain" // แสดงสีจริง ไม่มี filter
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: CONTENT & IMAGE --- */}
      <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* ฝั่งซ้าย: Title + Text + Button */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-3xl font-black text-slate-900 leading-tight">
                Why Us |  ทำไมต้องเลือกเรา
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                ทำไมต้องสั่งผลิตเสื้อกับ Toffy Boutique เราคือผู้เชี่ยวชาญด้านการผลิตเครื่องแต่งกายที่ได้รับความไว้วางใจจากองค์กรชั้นนำทั่วประเทศ 
                ด้วยประสบการณ์ที่ยาวนานและกระบวนการผลิตที่ทันสมัย เราเปลี่ยนไอเดียของคุณให้เป็นเสื้อผ้าคุณภาพดีที่ใส่ได้จริงและเสริมภาพลักษณ์องค์กร

                </p>
              </div>
              
              <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-black transition-all transform  shadow-lg">
                สอบถามเพิ่มเติม
              </button>
            </div>

            {/* ฝั่งขวา: รูปภาพเดียวขนาด 1:1 */}
            <div className="order-1 lg:order-2">
              <div className="aspect-square w-full rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="/hp/h1.png" // อย่าลืมเปลี่ยนเป็น path รูปของคุณจริง
                  alt="Feature Illustration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* ตกแต่งเพิ่มเติมด้วยกรอบบางๆ หรือ Overlay ถ้าต้องการ */}
                <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none rounded-3xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
{/* --- SECTION 3: TESTIMONIALS --- */}
    <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">What Clients Say</h2>
              <div className="w-16 h-1 bg-slate-900 mx-auto mt-4"></div>
            </div>
        
            {/* Grid 5 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300">
                <span className="absolute top-4 left-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">“</span>
                <span className="absolute top-4 right-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">”</span>
                <div className="pt-6">
                  <p className="text-slate-800 leading-relaxed italic mb-8">
                    "เสื้อบริษัทงานดีมากครับ ขอบคุณมาก โอกาสหน้าจะใช้บริการอีกครับ จะแนะนำต่อด้วย"
                  </p>
                </div>
                <div className="border-t border-slate-50 pt-4">
                  <p className="text-slate-800 text-md font-black leading-tight">HR Manager, </p> 
                  <p className="text-md text-slate-600">โรงงานอุตสาหกรรม</p>
                </div>
              </div>
        
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300">
                <span className="absolute top-4 left-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">“</span>
                <span className="absolute top-4 right-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">”</span>
                <div className="pt-6">
                  <p className="text-slate-900 leading-relaxed italic mb-8">
                    "ได้รับเสื้อแล้วนะคะ พนักงานชอบกันมากเลยค่ะ"
                  </p>
                </div>
                <div className="border-t border-slate-50 pt-4">
                  <p className="text-slate-900 font-black text-md leading-tight">ฝ่ายจัดซื้อ,</p>
                  <p className="text-md text-slate-600">บริษัทอสังหาริมทรัพย์ชั้นนำ</p>
                </div>
              </div>
        
              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300">
                <span className="absolute top-4 left-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">“</span>
                <span className="absolute top-4 right-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">”</span>
                <div className="pt-6">
                  <p className="text-slate-900 leading-relaxed italic mb-8">
                    "เสื้อลอทนี้พนักงานชมกันด้วยค่ะ ว่าเนื้อผ้าใส่สบายดี สีก็สวย"
                  </p>
                </div>
                <div className="border-t border-slate-50 pt-4">
                  <p className="text-slate-900 font-black text-lg leading-tight">ฝ่ายจัดซื้อ, </p>
                  <p className="text-md text-slate-600">โรงงาน</p>
                </div>
              </div>
        
              {/* Card 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300">
                <span className="absolute top-4 left-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">“</span>
                <span className="absolute top-4 right-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">”</span>
                <div className="pt-6">
                  <p className="text-slate-900 leading-relaxed italic mb-8">
                    "ได้เสื้อสวย พนักงานดีใจกันมากเลยคะ"
                  </p>
                </div>
                <div className="border-t border-slate-50 pt-4">
                  <p className="text-slate-900 font-black text-lg leading-tight">HR Manager, </p>
                  <p className="text-md text-slate-600">บริษัทไอที</p>
                </div>
              </div>
        
              {/* Card 5 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300">
                <span className="absolute top-4 left-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">“</span>
                <span className="absolute top-4 right-4 text-4xl text-slate-200 font-serif leading-none group-hover:text-red-600 transition-colors">”</span>
                <div className="pt-6">
                  <p className="text-slate-900 leading-relaxed italic mb-8">
                    "เรื่องเสื้อคราวที่แล้ว นักศึกษาชอบมากค่ะ เจ้าหน้าที่ก็ถูกใจกันมากค่ะ"
                  </p>
                </div>
                <div className="border-t border-slate-50 pt-4">
                  <p className="text-slate-900 font-black text-lg leading-tight">จัดซื้อกลาง,</p>
                  <p className="text-sm text-slate-400">หน่วยงานราชการ</p>
                </div>
              </div>
        
            </div>
          </div>
        </section>
    </>
  );
};

export default OurClient;