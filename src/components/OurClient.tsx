"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const OurClient = () => {
  // 1. เตรียมข้อมูลโลโก้ (customer01.svg - customer57.svg)
  const clientLogos = Array.from({ length: 57 }, (_, i) => {
    const cardNumber = (i + 1).toString().padStart(2, '0');
    return `/customer_logo/customer${cardNumber}.svg`;
  });

  // 2. แบ่งกลุ่มโลโก้ออกเป็น 3 แถว
  const row1 = clientLogos.slice(0, 17);
  const row2 = clientLogos.slice(19, 38);
  const row3 = clientLogos.slice(38, 57);

  // 3. ตั้งค่า Animation ให้วนลูปแบบต่อเนื่อง (Seamless Loop)
  const marqueeVariants = (direction: "left" | "right"): Variants => ({
    animate: {
      // ใช้เปอร์เซ็นต์เพื่อให้คำนวณความกว้างอัตโนมัติ ไม่ว่าจะกี่รูปก็ต่อกันสนิท
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 60, // ความเร็วในการเลื่อน (ยิ่งเลขมากยิ่งช้า)
          ease: "linear" as const,
        },
      },
    },
  });

  return (
    <main className="font-noto overflow-hidden">
      {/* --- SECTION 1: OUR CLIENTS MARQUEE --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
            Our Trusted Clients
          </h2>
          <p className="text-slate-500 mt-2 font-medium">ความไว้วางใจจากองค์กรชั้นนำทั่วประเทศ</p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* ส่วนของการเลื่อนโลโก้ */}
        <div className="flex flex-col gap-6 md:gap-8">
          {[row1, row2, row3].map((row, rowIndex) => (
            <div key={rowIndex} className="relative flex whitespace-nowrap overflow-hidden">
              <motion.div
                className="flex gap-6 md:gap-8"
                variants={marqueeVariants(rowIndex === 1 ? "right" : "left")}
                animate="animate"
              >
                {/* Render โลโก้ 2 ชุดซ้อนกัน ([...row, ...row]) เพื่อให้เชื่อมต่อกันตอนจบ Loop */}
                {[...row, ...row].map((src, idx) => (
                  <div
                    key={`${rowIndex}-${idx}`}
                    className="w-28 h-28 md:w-40 md:h-40 flex-shrink-0 flex items-center justify-center p-3  rounded-2xl transition-all duration-300 "
                  >
                    <img
                      src={src}
                      alt="Customer Logo"
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: WHY US --- */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
                  Why Us | <span className="text-red-600 italic">ทำไมต้องเลือกเรา</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  ทำไมต้องสั่งผลิตเสื้อกับ <span className="font-bold text-slate-900">Toffy Boutique</span> เราคือผู้เชี่ยวชาญด้านการผลิตเครื่องแต่งกายที่ได้รับความไว้วางใจจากองค์กรชั้นนำทั่วประเทศ ด้วยประสบการณ์ที่ยาวนานและกระบวนการผลิตที่ทันสมัย
                </p>
              </div>
              <button className="px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-slate-900 transition-all transform hover:scale-105 shadow-xl">
                สอบถามข้อมูลการผลิต
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-square w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="/hp/h1.png" 
                  alt="Quality Manufacturing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">What Clients Say</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { text: "เสื้อบริษัทงานดีมากครับ ขอบคุณมาก โอกาสหน้าจะใช้บริการอีกครับ จะแนะนำต่อด้วย", pos: "HR Manager,", company: "โรงงานอุตสาหกรรม" },
              { text: "ได้รับเสื้อแล้วนะคะ พนักงานชอบกันมากเลยค่ะ คุณภาพผ้าดีมาก", pos: "ฝ่ายจัดซื้อ,", company: "บริษัทอสังหาริมทรัพย์" },
              { text: "เสื้อลอทนี้พนักงานชมกันด้วยค่ะ ว่าเนื้อผ้าใส่สบายดี สีก็สวยตรงตามสเปก", pos: "ฝ่ายจัดซื้อ,", company: "โรงงานอุตสาหกรรมขนาดใหญ่" },
              { text: "ได้เสื้อสวย พนักงานดีใจกันมากเลยค่ะ งานเรียบร้อยทันเวลาพอดี", pos: "HR Manager,", company: "บริษัทเทคโนโลยี" },
              { text: "เรื่องเสื้อคราวที่แล้ว นักศึกษาชอบมากค่ะ เจ้าหน้าที่ก็ถูกใจกันมากค่ะ", pos: "จัดซื้อกลาง,", company: "หน่วยงานราชการ" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative group hover:bg-white hover:shadow-xl transition-all duration-500">
                <span className="absolute top-4 left-4 text-6xl text-slate-200 font-serif leading-none group-hover:text-red-200 transition-colors">“</span>
                <div className="pt-6 relative z-10">
                  <p className="text-slate-700 leading-relaxed italic mb-8">"{item.text}"</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-slate-900 text-sm font-black leading-tight">{item.pos}</p> 
                  <p className="text-xs text-red-600 font-medium">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurClient;