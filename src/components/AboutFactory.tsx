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
              <Image src="/picture/factory-main.jpg" alt="Factory Environment" fill className="object-cover" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-video rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src="/picture/factory-sewing.jpg" alt="Sewing Line" fill className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">{ABOUT_TEXT.intention}</h3>
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
                <Image src="/picture/office-building.jpg" alt="Office" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-0 lg:mt-12">
              <Image src="/picture/fabric-samples.jpg" alt="Fabric Samples" fill className="object-cover" />
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">Wardrobe Wear <br /> Digital Series</h2>
                <div className="inline-block px-6 py-2 rounded-full border border-slate-300 text-sm font-bold uppercase text-slate-500">Video Production</div>
              </div>
              <div className="space-y-12">
                <div className="flex gap-8 items-start">
                  <span className="text-4xl font-black text-slate-900">01</span>
                  <div className="space-y-2">
                    <h6 className="text-2xl font-bold">Background</h6>
                    <p className="text-slate-500 font-medium max-w-sm">Give a brief overview of your project here.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <span className="text-4xl font-black text-slate-900">02</span>
                  <div className="space-y-2">
                    <h6 className="text-2xl font-bold">Solution</h6>
                    <p className="text-slate-500 font-medium max-w-sm">Talk about your idea here.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute top-0 right-0 w-4/5 aspect-video rounded-lg overflow-hidden shadow-2xl border-8 border-white">
                <Image src="/picture/video-thumb-1.jpg" alt="Video 1" fill className="object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute bottom-0 left-0 w-4/5 aspect-video rounded-lg overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image src="/picture/video-thumb-2.jpg" alt="Video 2" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}