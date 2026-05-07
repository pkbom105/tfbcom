"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ICON_ITEMS = [
  {
    id: 1,
    icon: "/hp/icon/icn1.png",
    // title: "เนื้อหาที่ตัดสรรวิตยานอย่างดี",
    description: "เนื้อผ้าที่คัดสรรวัสดุมาอย่างดี ให้เหมาะสมกับงานที่สุด ในราคาที่สมเหตุสมผล"
  },
  {
    id: 2,
    icon: "/hp/icon/icn2.png",
    // title: "มีประสบการณ์งานบ่มปจ็และก้นแบง",
    description: "มีประสบการณ์งานยูนิฟอร์มมานาน ยินดีให้คำปรึกษา และพร้อมดูแลทุกขั้นตอน"
  },
  {
    id: 3,
    icon: "/hp/icon/icn3.png",
    //title: "งานเนียบ ตรงปก",
    description: "งานเนี๊ยบ ตรงปก มั่นใจในคุณภาพงานตัดเย็บ ที่เรียบร้อย ตรงตามแบบ 100%"
  },
  {
    id: 4,
    icon: "/hp/icon/icn4.png",
   // title: "สัง้าย ครบบับในเดียว",
    description: "สั่งง่าย ครบจบในที่เดียว  รองรับสินค้าหลากหลายประเภท ไม่ต้องประสานงานหลายที่ให้ยุ่งยาก"
  },
  {
    id: 5,
    icon: "/hp/icon/icn5.png",
    // title: "มาตรฐานตัดเจง ตรงเวลา",
    description: "มาตรฐานชัดเจน ตรงเวลา รักษาคุณภาพสม่ำเสมอ พร้อมส่งมอบงานตรงตามนัดหมาย"
  }
];

export default function IconSection() {
  return (
    <section className="py-24  font-noto">
      <div className="max-w-6xl mx-auto px-6">            

        {/* Icons Grid - 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {ICON_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Image  */}
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-30 h-30 md:w-32 md:h-32 mb-6 flex items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt={`Icon ${item.id}`}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Text Content */}
              <div className="space-y-3">
                <p className="text-sm md:text-base text-slate-900 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
