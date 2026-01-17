"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ruler, CheckCircle2, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SizeRow {
  size: string;
  chest: string;
  length: string;
  shoulder: string;
}

interface ButtonData {
  id: string;
  label: string;
  image: string;
  image2?: string;
  image3?: string;
  data: SizeRow[];
}

export default function SizeSpecPage() {
  const buttonGroups: ButtonData[] = [
    {
      id: "polo-standard",
      label: "เสื้อคอกลม แขนสั้น",
      image: "/picture/spec1.jpg",
      image2: "/picture/spec1.jpg",
      data: [
        { size: "XXS", chest: "36", length: "25", shoulder: "8" },
        { size: "XS", chest: "38", length: "26", shoulder: "8.5" },
        { size: "S", chest: "40", length: "27", shoulder: "9" },
        { size: "M", chest: "42", length: "28", shoulder: "9.5" },
        { size: "L", chest: "44", length: "29", shoulder: "10" },
        { size: "XL", chest: "46", length: "30", shoulder: "10.5" },
        { size: "XXL", chest: "48", length: "31", shoulder: "11" },
        { size: "3XL", chest: "50", length: "32", shoulder: "11.5" },
      ]
    },
    {
      id: "polo-women",
      label: "โปโลหญิง",
      image: "/picture/tfb_Order_process-01.jpg",
      image2: "/picture/spec1.jpg",
      data: [
        { size: "S", chest: "34", length: "23", shoulder: "14" },
        { size: "M", chest: "36", length: "24", shoulder: "14.5" },
        { size: "L", chest: "38", length: "25", shoulder: "15" },
        { size: "XL", chest: "40", length: "26", shoulder: "15.5" },
      ]
    },
    {
      id: "shirt-work",
      label: "เสื้อเชิ้ต",
      image: "/picture/tfb_Order_process-02.jpg",
      data: [
        { size: "S", chest: "39", length: "27", shoulder: "16.5" },
        { size: "M", chest: "41", length: "28", shoulder: "17.5" },
        { size: "L", chest: "43", length: "29", shoulder: "18.5" },
      ]
    },
    {
      id: "jacket",
      label: "แจ็คเก็ต",
      image: "/picture/tfb_Order_process-06.jpg",
      data: [
        { size: "M", chest: "44", length: "26", shoulder: "18" },
        { size: "L", chest: "46", length: "27", shoulder: "19" },
        { size: "XL", chest: "48", length: "28", shoulder: "20" },
      ]
    },
    {
      id: "shop-factory",
      label: "เสื้อช็อป",
      image: "/picture/tfb_Order_process-08.jpg",
      data: [
        { size: "M", chest: "42", length: "27", shoulder: "18" },
        { size: "L", chest: "44", length: "28", shoulder: "19" },
      ]
    },
    {
      id: "t-shirt",
      label: "เสื้อยืด",
      image: "/picture/spec2.jpg",
      data: [
        { size: "S", chest: "32", length: "25", shoulder: "14" },
        { size: "M", chest: "36", length: "26", shoulder: "15" },
        { size: "L", chest: "40", length: "27", shoulder: "16" },
      ]
    },
    { id: "custom-1", label: "สั่งตัดพิเศษ", image: "/picture/tfb_Order_process-07.jpg", data: [{ size: "Custom", chest: "ตามระบุ", length: "ตามระบุ", shoulder: "ตามระบุ" }] },
    { id: "sport", label: "ชุดกีฬา", image: "/picture/spec2.jpg", data: [{ size: "L", chest: "42", length: "28", shoulder: "17" }] },
    { id: "uniform", label: "ยูนิฟอร์ม", image: "/picture/spec2.jpg", data: [{ size: "M", chest: "40", length: "27", shoulder: "17" }] },
    { id: "overcoat", label: "เสื้อกาวน์", image: "/picture/spec2.jpg", data: [{ size: "L", chest: "44", length: "35", shoulder: "18" }] },
    {
      id: "apron",
      label: "ผ้ากันเปื้อน",
      image: "/picture/tfb_Order_process-01.jpg",
      image2: "/picture/spec1.jpg",
      image3: "/picture/spec1.jpg",
      data: [
        { size: "เต็มตัว", chest: "10.25", length: "32", shoulder: "24" },
        { size: "ครึ่งตัวแบบยาว", chest: "26.5", length: "23", shoulder: "-" },
        { size: "ครึ่งตัวแบบสั้น", chest: "26.5", length: "18", shoulder: "-" },
      ]
    },
  ];

  const [activeTabId, setActiveTabId] = useState(buttonGroups[0].id);
  const activeGroup = buttonGroups.find(b => b.id === activeTabId) || buttonGroups[0];

  const getButtonClass = (index: number, total: number, id: string) => {
    return cn(
      "h-auto py-3 px-4 text-base md:text-lg font-bold transition-all relative",
      "border-slate-200 hover:bg-red-50 hover:text-red-600 z-10",
      activeTabId === id && "bg-red-600 text-white border-red-600 hover:bg-red-700 hover:text-white z-20",
      index === 0 ? "rounded-l-xl rounded-r-none" :
        index === total - 1 ? "rounded-r-xl rounded-l-none border-l-0" :
          "rounded-none border-l-0"
    );
  };

  return (
    <main className="min-h-screen font-kanit bg-white pb-20">
      <section className="bg-slate-50 py-12 px-6 border-b text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Size Spec | <span className="text-red-600">ไซส์เสื้อยูนิฟอร์มมาตรฐาน</span>
        </h1>
      </section>

      {/* Button Groups */}
      <section className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col items-center gap-4">
        <div className="inline-flex shadow-sm flex-wrap justify-center">
          {buttonGroups.slice(0, 5).map((btn, idx) => (
            <Button key={btn.id} variant="outline" onClick={() => setActiveTabId(btn.id)} className={getButtonClass(idx, 5, btn.id)}>
              {btn.label}
            </Button>
          ))}
        </div>
        <div className="inline-flex shadow-sm flex-wrap justify-center">
          {buttonGroups.slice(5, 11).map((btn, idx) => (
            <Button key={btn.id} variant="outline" onClick={() => setActiveTabId(btn.id)} className={getButtonClass(idx, 6, btn.id)}>
              {btn.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Main 3-Column Layout */}
      <section className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* คอลัมน์ที่ 1: Picture Area (Left) */}
        <div className="lg:col-span-3 space-y-4 lg:mt-20">
          <motion.div
            key={`img1-${activeTabId}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 p-4 shadow-sm"
          >
            <Image src={activeGroup.image} alt={activeGroup.label} fill className="object-contain p-2" priority />
          </motion.div>

          {activeGroup.image2 && (
            <motion.div
              key={`img2-${activeTabId}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 p-4 shadow-sm"
            >
              <Image src={activeGroup.image2} alt={activeGroup.label} fill className="object-contain p-2" />
            </motion.div>
          )}

          {activeGroup.image3 && (
            <motion.div
              key={`img3-${activeTabId}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 p-4 shadow-sm"
            >
              <Image src={activeGroup.image3} alt={activeGroup.label} fill className="object-contain p-2" />
            </motion.div>
          )}
        </div>

        {/* คอลัมน์ที่ 2: Table (Center) */}
        <motion.div
          key={`table-${activeTabId}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-6 space-y-6"
        >
          <Card className="border-none shadow-xl overflow-hidden bg-white">
            <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
              <h3 className="text-md font-bold flex items-center gap-2">
                <Ruler size={20} className="text-red-500" />
                ตารางไซส์: {activeGroup.label}
              </h3>
              <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Unit: Inch
              </span>
            </div>
            <CardContent className="p-0">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr className="text-slate-500 font-bold uppercase text-xs">
                    <th className="px-6 py-4 text-center">Size</th>
                    <th className="px-6 py-4 text-center">A รอบอก</th>
                    <th className="px-6 py-4 text-center">B ความยาวเสื้อ</th>
                    <th className="px-6 py-4 text-center">C ความยาวแขน/ไหล่</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-center">
                  {activeGroup.data.map((row, idx) => (
                    <tr key={idx} className="hover:bg-red-50/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-red-600 text-lg">{row.size}</td>
                      <td className="px-6 py-4 font-medium text-slate-700">{row.chest}"</td>
                      <td className="px-6 py-4 font-medium text-slate-700">{row.length}"</td>
                      <td className="px-6 py-4 font-medium text-slate-700">{row.shoulder}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl flex gap-3">
            <Info className="shrink-0 text-blue-600 w-5 h-5" />
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              <strong>หมายเหตุ:</strong> ขนาดเสื้ออาจมีความคลาดเคลื่อนได้ประมาณ +/- 0.5 นิ้ว ตามธรรมชาติของกระบวนการตัดเย็บ
            </p>
          </div>
        </motion.div>

        {/* คอลัมน์ที่ 3: Text (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-3 space-y-6 lg:mt-20"
        >
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              จุดเด่นงานผลิต
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span>ออกแบบมาเพื่อสรีระคนไทยโดยเฉพาะ ใส่สบาย ไม่รั้ง</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span>บริการปรับทรงผู้หญิงเข้ารูป หรือไซส์พิเศษ (3XL ขึ้นไป)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <span>เนื้อผ้าคัดเกรดพรีเมียม คงรูปสวยงามแม้ผ่านการซักหลายครั้ง</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl">
            <h4 className="font-bold mb-2">ต้องการขนาดพิเศษ?</h4>
            <p className="text-xs text-slate-400 mb-4">เราสามารถปรับสเปคตามความต้องการขององค์กรคุณได้</p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold border-none h-10 text-sm shadow-lg">
              ปรึกษาฝ่ายขาย
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}