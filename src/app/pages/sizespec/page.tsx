"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Ruler, CheckCircle2, Info, Layers, Star, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// --- 1. INTERFACES ---
interface SizeRow {
  size?: string; chest?: string; length?: string; shoulder?: string;
  A?: string; B?: string; C?: string; D?: string;
}

interface ButtonData {
  id: string; 
  labelB: string; 
  label: string; 
  label2?: string; 
  label3?: string; 
  label4?: string;
  image: string; // รูปใหญ่ที่แสดงใน Diagram
  tabIcon: string; // รูปไอคอนเล็กๆ บนปุ่ม Tab (Custom แยกกัน)
  image2?: string; 
  image3?: string; 
  image4?: string;
  data: SizeRow[]; 
  data2?: SizeRow[]; 
  data3?: SizeRow[]; 
  data4?: SizeRow[];
}

// --- 2. DATA (เพิ่ม tabIcon แยกจาก image หลัก) ---
const buttonGroups: ButtonData[] = [
  {
    id: "tshirt-standard",
    labelB: "เสื้อคอกลม",
    tabIcon: "/hp/5.png", // ใส่ที่อยู่รูปไอคอนที่คุณต้องการ
    label: "เสื้อคอกลม แขนสั้น (ชาย)",
    label2: "เสื้อคอกลม แขนสั้น (หญิง)",
    label3: "เสื้อคอกลม แขนยาว (ชาย)",
    label4: "เสื้อคอกลม แขนยาว (หญิง)",
    image: "/04sizespec/3.png",
    image2: "/04sizespec/4.png",
    image3: "/04sizespec/5.png",
    image4: "/04sizespec/6.png",
    data: [
      { size: "XXS", chest: "36", length: "25", shoulder: "8" },
      { size: "XS", chest: "38", length: "26", shoulder: "8.5" },
      { size: "S", chest: "40", length: "27", shoulder: "9" },
      { size: "M", chest: "42", length: "28", shoulder: "9.5" },
      { size: "L", chest: "44", length: "29", shoulder: "10" },
      { size: "XL", chest: "46", length: "30", shoulder: "10.5" },
      { size: "XXL", chest: "48", length: "31", shoulder: "11" },
      { size: "3XL", chest: "50", length: "32", shoulder: "11.5" },
    ],
    data2: [
      { size: "XS", chest: "32", length: "22", shoulder: "6" },
      { size: "S", chest: "34", length: "23", shoulder: "6.5" },
      { size: "M", chest: "36", length: "24", shoulder: "7" },
      { size: "L", chest: "38", length: "25", shoulder: "7.5" },
      { size: "XL", chest: "40", length: "26", shoulder: "8" },
      { size: "XXL", chest: "42", length: "27", shoulder: "8.5" },
      { size: "3XL", chest: "44", length: "28", shoulder: "9" },
    ],
    data3: [
      { size: "XXS", chest: "36", length: "25", shoulder: "23" },
      { size: "XS", chest: "38", length: "26", shoulder: "23.5" },
      { size: "S", chest: "40", length: "27", shoulder: "24" },
      { size: "M", chest: "42", length: "28", shoulder: "24.5" },
      { size: "L", chest: "44", length: "29", shoulder: "25" },
      { size: "XL", chest: "46", length: "30", shoulder: "25.5" },
      { size: "XXL", chest: "48", length: "31", shoulder: "26" },
      { size: "3XL", chest: "50", length: "32", shoulder: "26.5" },
    ],
    data4: [
      { size: "XS", chest: "32", length: "22", shoulder: "22" },
      { size: "S", chest: "34", length: "23", shoulder: "22.5" },
      { size: "M", chest: "36", length: "24", shoulder: "23" },
      { size: "L", chest: "38", length: "25", shoulder: "23.5" },
      { size: "XL", chest: "40", length: "26", shoulder: "24" },
      { size: "XXL", chest: "42", length: "27", shoulder: "24.5" },
      { size: "3XL", chest: "44", length: "28", shoulder: "25" },
    ]
  },
  {
    id: "polo",
    labelB: "เสื้อโปโล",
    tabIcon: "/hp/6.png", // Custom Icon แยก
    label: "โปโลชาย แขนสั้น",
    label2: "โปโลหญิง แขนสั้น",
    label3: "โปโลชาย แขนยาว",
    label4: "โปโลหญิง แขนยาว",
    image: "/04sizespec/11.png",
    image2: "/04sizespec/12.png",
    image3: "/04sizespec/9.png",
    image4: "/04sizespec/10.png",
    data: [
      { size: "XXS", chest: "36", length: "25", shoulder: "8" },
      { size: "XS", chest: "38", length: "26", shoulder: "8.5" },
      { size: "S", chest: "40", length: "27", shoulder: "9" },
      { size: "M", chest: "42", length: "28", shoulder: "9.5" },
      { size: "L", chest: "44", length: "29", shoulder: "10" },
      { size: "XL", chest: "46", length: "30", shoulder: "10.5" },
      { size: "XXL", chest: "48", length: "31", shoulder: "11" },
      { size: "3XL", chest: "50", length: "32", shoulder: "11.5" },
    ],
    data2: [
      { size: "XS", chest: "32", length: "22", shoulder: "6" },
      { size: "S", chest: "34", length: "23", shoulder: "6.5" },
      { size: "M", chest: "36", length: "24", shoulder: "7" },
      { size: "L", chest: "38", length: "25", shoulder: "7.5" },
      { size: "XL", chest: "40", length: "26", shoulder: "8" },
      { size: "XXL", chest: "42", length: "27", shoulder: "8.5" },
      { size: "3XL", chest: "44", length: "28", shoulder: "9" },
    ],
    data3: [
      { size: "XXS", chest: "36", length: "25", shoulder: "23" },
      { size: "XS", chest: "38", length: "26", shoulder: "23.5" },
      { size: "S", chest: "40", length: "27", shoulder: "24" },
      { size: "M", chest: "42", length: "28", shoulder: "24.5" },
      { size: "L", chest: "44", length: "29", shoulder: "25" },
      { size: "XL", chest: "46", length: "30", shoulder: "25.5" },
      { size: "XXL", chest: "48", length: "31", shoulder: "26" },
      { size: "3XL", chest: "50", length: "32", shoulder: "26.5" },
    ],
    data4: [
      { size: "XS", chest: "32", length: "22", shoulder: "22" },
      { size: "S", chest: "34", length: "23", shoulder: "22.5" },
      { size: "M", chest: "36", length: "24", shoulder: "23" },
      { size: "L", chest: "38", length: "25", shoulder: "23.5" },
      { size: "XL", chest: "40", length: "26", shoulder: "24" },
      { size: "XXL", chest: "42", length: "27", shoulder: "24.5" },
      { size: "3XL", chest: "44", length: "28", shoulder: "25" },
    ]
  },
  {
    id: "shirt",
    labelB: "เสื้อเชิ้ต",
    tabIcon: "/hp/7.png", // Custom Icon แยก
    label: "เชิ้ตชาย แขนสั้น",
    label2: "เชิ้ตหญิง แขนสั้น",
    label3: "เชิ้ตชาย แขนยาว",
    label4: "เชิ้ตหญิง แขนยาว",
    image: "/04sizespec/17.png",
    image2: "/04sizespec/18.png",
    image3: "/04sizespec/15.png",
    image4: "/04sizespec/16.png",
    data: [
      { size: "XXS", chest: "36", length: "25", shoulder: "8" },
      { size: "XS", chest: "37", length: "27", shoulder: "8.5" },
      { size: "S", chest: "39", length: "28", shoulder: "9" },
      { size: "M", chest: "41", length: "29", shoulder: "9.5" },
      { size: "L", chest: "43", length: "30", shoulder: "10" },
      { size: "XL", chest: "45", length: "31", shoulder: "10.5" },
      { size: "XXL", chest: "47", length: "32", shoulder: "11" },
      { size: "3XL", chest: "49", length: "32", shoulder: "11.5" },
    ],
    data2: [
      { size: "XS", chest: "32", length: "23", shoulder: "6.5" },
      { size: "S", chest: "34", length: "23.75", shoulder: "7" },
      { size: "M", chest: "36", length: "24.5", shoulder: "7.5" },
      { size: "L", chest: "38", length: "25.25", shoulder: "8" },
      { size: "XL", chest: "40", length: "26", shoulder: "8.5" },
      { size: "XXL", chest: "42", length: "26.5", shoulder: "9" },
      { size: "3XL", chest: "44", length: "27", shoulder: "9.5" },
    ],
    data3: [
      { size: "XXS", chest: "36", length: "25", shoulder: "23.5" },
      { size: "XS", chest: "37", length: "27", shoulder: "24" },
      { size: "S", chest: "39", length: "28", shoulder: "24.5" },
      { size: "M", chest: "41", length: "29", shoulder: "25" },
      { size: "L", chest: "43", length: "30", shoulder: "25.5" },
      { size: "XL", chest: "45", length: "31", shoulder: "26" },
      { size: "XXL", chest: "47", length: "32", shoulder: "26" },
      { size: "3XL", chest: "49", length: "32", shoulder: "26" },
    ],
    data4: [
      { size: "XS", chest: "32", length: "23", shoulder: "22" },
      { size: "S", chest: "34", length: "23.75", shoulder: "22.5" },
      { size: "M", chest: "36", length: "24.5", shoulder: "23" },
      { size: "L", chest: "38", length: "25.25", shoulder: "23.5" },
      { size: "XL", chest: "40", length: "26", shoulder: "24" },
      { size: "XXL", chest: "42", length: "26.5", shoulder: "24.5" },
      { size: "3XL", chest: "44", length: "27", shoulder: "25" },
    ],
  },
  {
    id: "engi",
    labelB: "เสื้อช็อป",
    tabIcon: "/hp/9.png", // Custom Icon แยก
    label: "เสื้อช็อป แขนสั้น",
    label2: "เสื้อช็อป แขนยาว",
    image: "/04sizespec/19.png",
    image2: "/04sizespec/20.png",
    data: [
      { size: "XS", chest: "38", length: "26", shoulder: "8.5" },
      { size: "S", chest: "40", length: "27", shoulder: "9" },
      { size: "M", chest: "42", length: "28", shoulder: "9.5" },
      { size: "L", chest: "44", length: "29", shoulder: "10" },
      { size: "XL", chest: "46", length: "30", shoulder: "10.5" },
      { size: "XXL", chest: "48", length: "31", shoulder: "11" },
      { size: "3XL", chest: "50", length: "32", shoulder: "11.5" },
    ],
    data2: [
      { size: "XS", chest: "38", length: "26", shoulder: "23" },
      { size: "S", chest: "40", length: "27", shoulder: "23.5" },
      { size: "M", chest: "42", length: "28", shoulder: "24" },
      { size: "L", chest: "44", length: "29", shoulder: "24.5" },
      { size: "XL", chest: "46", length: "30", shoulder: "25" },
      { size: "XXL", chest: "48", length: "31", shoulder: "25.5" },
      { size: "3XL", chest: "50", length: "32", shoulder: "26" },
    ],
  },
  {
    id: "jacket",
    labelB: "แจ็คเก็ต",
    tabIcon: "/hp/10.png", // Custom Icon แยก
    label: "แจ็คเก็ต แขนสั้น",
    label2: "แจ็คเก็ต แขนยาว",
    image: "/04sizespec/22.png",
    image2: "/04sizespec/23.png",
    image3: "/04sizespec/21.png",
    data: [
      { size: "XS", chest: "40", length: "25.5", shoulder: "23.5" },
      { size: "S", chest: "42", length: "26.5", shoulder: "24" },
      { size: "M", chest: "44", length: "27.5", shoulder: "24.5" },
      { size: "L", chest: "46", length: "28.5", shoulder: "25" },
      { size: "XL", chest: "48", length: "29.5", shoulder: "25.5" },
      { size: "XXL", chest: "50", length: "30.5", shoulder: "26" },
    ],
    data2: [
      { size: "XS", chest: "38", length: "24", shoulder: "22" },
      { size: "S", chest: "40", length: "25", shoulder: "22.5" },
      { size: "M", chest: "42", length: "26", shoulder: "23" },
      { size: "L", chest: "44", length: "27", shoulder: "23.5" },
      { size: "XL", chest: "46", length: "28", shoulder: "24" },
      { size: "XXL", chest: "48", length: "29", shoulder: "24.5" },
    ],
    data3: [
      { size: "XS", chest: "38", length: "26", shoulder: "23" },
      { size: "S", chest: "40", length: "27", shoulder: "23.5" },
      { size: "M", chest: "42", length: "28", shoulder: "24" },
      { size: "L", chest: "44", length: "29", shoulder: "24.5" },
      { size: "XL", chest: "46", length: "30", shoulder: "25" },
      { size: "XXL", chest: "48", length: "31", shoulder: "25.5" },
      { size: "3XL", chest: "50", length: "32", shoulder: "26" },
    ],
  },
  {
    id: "chef",
    labelB: "เสื้อเชฟ",
    tabIcon: "/hp/10.png", // Custom Icon แยก
    label: "เสื้อเชฟ แขนสั้น",
    label2: "เสื้อเชฟ แขนยาว",
    image: "/04sizespec/24.png",
    image2: "/04sizespec/25.png",
    
    data: [
      { size: "XS", chest: "36", length: "26", shoulder: "8" },
      { size: "S", chest: "38", length: "27", shoulder: "8.5" },
      { size: "M", chest: "40", length: "28", shoulder: "9" },
      { size: "L", chest: "42", length: "29", shoulder: "9.5" },
      { size: "XL", chest: "44", length: "30", shoulder: "10" },
      { size: "XXL", chest: "46", length: "31", shoulder: "10.5" },
    ],
    data2: [
      { size: "XS", chest: "36", length: "26", shoulder: "22.5" },
      { size: "S", chest: "38", length: "27", shoulder: "23" },
      { size: "M", chest: "40", length: "28", shoulder: "23.5" },
      { size: "L", chest: "42", length: "29", shoulder: "24" },
      { size: "XL", chest: "44", length: "30", shoulder: "24.5" },
      { size: "XXL", chest: "46", length: "31", shoulder: "25" },
    ],    
  },
  {
    id: "maid",
    labelB: "ทำความสะอาด",
    tabIcon: "/hp/11.png", // Custom Icon แยก
    label: "ทำความสะอาด ชาย",
    label2: "แม่บ้าน หญิง",
    image: "/04sizespec/24.png",
    image2: "/04sizespec/25.png",
    
    data: [
      { size: "XS", chest: "38", length: "26", shoulder: "8.5" },
      { size: "S", chest: "40", length: "27", shoulder: "9" },
      { size: "M", chest: "42", length: "28", shoulder: "9.5" },
      { size: "L", chest: "44", length: "29", shoulder: "10" },
      { size: "XL", chest: "46", length: "30", shoulder: "10.5" },
      { size: "XXL", chest: "48", length: "31", shoulder: "11" },
    ],
    data2: [
      { size: "XS", chest: "34", length: "24.5", shoulder: "7" },
      { size: "S", chest: "36", length: "25.25", shoulder: "7.5" },
      { size: "M", chest: "38", length: "26", shoulder: "8" },
      { size: "L", chest: "40", length: "26.75", shoulder: "8.5" },
      { size: "XL", chest: "42", length: "27.5", shoulder: "9" },
      { size: "XXL", chest: "44", length: "28.25", shoulder: "9.5" },
    ],    
  },
  {
    id: "pants",
    labelB: "กางเกง",
    tabIcon: "/04sizespec/28.png", // Custom Icon แยก
    label: "กางเกงสแล็ค / กางเกงทำงาน",
    image: "/04sizespec/28.png",
    data: [
      { size: "26", A: "26", B: "38", C: "38", D: "14" },
      { size: "28", A: "28", B: "40", C: "39", D: "14.5" },
      { size: "30", A: "30", B: "42", C: "40", D: "15" },
      { size: "32", A: "32", B: "44", C: "41", D: "15.5" },
      { size: "34", A: "34", B: "46", C: "42", D: "16" },
      { size: "36", A: "36", B: "48", C: "42", D: "16.5" },
      { size: "38", A: "38", B: "50", C: "42", D: "17" },
      { size: "40", A: "40", B: "52", C: "42", D: "17.5" },
    ],
  },
  {
    id: "apron",
    labelB: "ผ้ากันเปื้อน",
    tabIcon: "/hp/13.png", // Custom Icon แยก
    label: "ผ้ากันเปื้อน เต็มตัว",
    label2: "ผ้ากันเปื้อน ครึ่งตัวแบบยาว",
    label3: "ผ้ากันเปื้อน ครึ่งตัวแบบสั้น",
    image: "/04sizespec/29.png",
    image2: "/04sizespec/30.png",
    image3: "/04sizespec/31.png",
    data: [
    { size: "Free Size", A: "10.25", B: "32", C: "24" }, // A อกกว้าง B ความยาวผ้า  C ความยาวเอว
     ],
    data2: [
      { size: "Free Size", A: "26.5", B: "23", C: "-" },
    ],
    data3: [
      { size: "Free Size", A: "26.5", B: "18", C: "-" },
    ],
  },
];
export default function SizeSpecPage() {
  const [activeTab, setActiveTab] = useState(buttonGroups[0].id);

  const activeGroup = useMemo(() => 
    buttonGroups.find(b => b.id === activeTab) || buttonGroups[0]
  , [activeTab]);

  const SizeTable = ({ title, data, colorClass, accentColor, tableIcon }: any) => {
    const isPants = activeTab === "pants";
    const isApron = activeTab === "apron";

    return (
      <div className="w-full">
        <div className={cn(colorClass, "p-4 text-white flex justify-between items-center rounded-t-[1.5rem]")}>
          <h3 className="text-sm md:text-base font-bold flex items-center gap-3">{tableIcon} {title}</h3>
          <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Unit: Inch</span>
        </div>
        <div className="border border-t-0 border-slate-100 overflow-x-auto bg-white rounded-b-[1.5rem] shadow-sm">
          <table className="w-full text-center min-w-[400px]">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr className="text-slate-800 font-black text-[11px] md:text-xs uppercase tracking-wider">
                <th className="px-4 py-4">SIZE</th>
                {isPants ? (
                  <>
                    <th className="px-4 py-4">เอว(A)</th><th className="px-4 py-4">สะโพก(B)</th>
                    <th className="px-4 py-4">ยาว(C)</th><th className="px-4 py-4">ปลายขา(D)</th>
                  </>
                ) : isApron ? (
                  <>
                    <th className="px-4 py-4">อกกว้าง(A)</th><th className="px-4 py-4">ยาวผ้า(B)</th><th className="px-4 py-4">เอว(C)</th>
                  </>
                ) : (
                  <>
                    <th className="px-4 py-4">รอบอก</th><th className="px-4 py-4">ความยาว</th><th className="px-4 py-4">แขน/ไหล่</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-medium text-slate-600">
              {data.map((row: any, idx: number) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className={cn("px-4 py-4 font-black text-sm", accentColor)}>{row.size}</td>
                  {isPants ? (
                    <>
                      <td className="px-4 py-4">{row.A}"</td>
                      <td className="px-4 py-4">{row.B}"</td>
                      <td className="px-4 py-4">{row.C}"</td>
                      <td className="px-4 py-4">{row.D}"</td>
                    </>
                  ) : isApron ? (
                    <>
                      <td className="px-4 py-4">{row.A}"</td>
                      <td className="px-4 py-4">{row.B}"</td>
                      <td className="px-4 py-4">{row.C}"</td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-4">{row.chest}"</td>
                      <td className="px-4 py-4">{row.length}"</td>
                      <td className="px-4 py-4">{row.shoulder}"</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen font-kanit bg-white pb-32">
      <section className="bg-slate-50 py-20 px-6 text-center border-b border-slate-100">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter"
        >
          Size Spec | <span className="text-red-600">มาตรฐานไซส์</span>
        </motion.h1>
        <p className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto font-medium">ตารางขนาดมาตรฐานจาก Toffy Boutique</p>
      </section>

      <section className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl py-6 border-b border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-fit mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex h-auto p-2 bg-slate-50 rounded-[2.5rem] border border-slate-200 gap-2 md:gap-4 min-w-max">
              {buttonGroups.map((group) => (
                <TabsTrigger
                  key={group.id}
                  value={group.id}
                  className="flex flex-col items-center gap-3 px-6 py-4 rounded-[2rem] transition-all data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-red-600 group"
                >
                  <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform group-data-[state=active]:scale-110">
                    <Image src={group.tabIcon} alt={group.labelB} fill className="object-contain" />
                  </div>
                  <span className="text-[13px] md:text-[15px] font-black uppercase leading-none tracking-tight whitespace-nowrap">
                    {group.labelB}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 mt-16">
        <div className="space-y-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {[
                { data: activeGroup.data, img: activeGroup.image, label: activeGroup.label, color: "bg-slate-900", accent: "text-red-600", icon: <Ruler size={20} className="text-red-500" /> },
                { data: activeGroup.data2, img: activeGroup.image2, label: activeGroup.label2, color: "bg-red-600", accent: "text-red-600", icon: <Layers size={20} className="text-white" /> },
                { data: activeGroup.data3, img: activeGroup.image3, label: activeGroup.label3, color: "bg-slate-700", accent: "text-red-600", icon: <Layers size={20} className="text-red-400" /> },
                { data: activeGroup.data4, img: activeGroup.image4, label: activeGroup.label4, color: "bg-slate-600", accent: "text-red-600", icon: <Layers size={20} className="text-red-300" /> },
              ].filter(item => item.data).map((item, idx) => (
                <div key={`${activeTab}-${idx}`} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 last:mb-0">
                  <div className="lg:col-span-5 relative aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 p-12 flex items-center justify-center shadow-inner group overflow-hidden">
                    <Image src={item.img!} alt={item.label || "Spec"} fill className="object-contain p-12 group-hover:scale-105 transition-transform duration-700" priority />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full border border-slate-200 text-[11px] font-black text-slate-400 tracking-widest uppercase">Diagram {idx + 1}</div>
                  </div>

                  <div className="lg:col-span-7">
                    <SizeTable title={item.label || "Spec"} data={item.data} colorClass={item.color} accentColor={item.accent} tableIcon={item.icon} />
                    <div className="mt-8 flex items-start gap-4 text-sm text-slate-400 bg-slate-50 p-6 rounded-[1.5rem] border border-dashed border-slate-200">
                      <Info size={22} className="shrink-0 text-red-500" />
                      <p>สเปคนี้เป็นขนาดมาตรฐานเบื้องต้น หากต้องการปรับแก้ความยาวเสื้อหรือแขน สามารถระบุกับฝ่ายขายได้ในขั้นตอนมัดจำผลิต</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-32 p-12 bg-slate-900 rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10 text-lg md:text-2xl font-light leading-relaxed">
              ขนาดในตารางมีความคลาดเคลื่อนได้ประมาณ <span className="text-red-500 font-black underline underline-offset-8">+/- 0.5 นิ้ว</span> <br />
              ตามมาตรฐานงาน Handmade คุณภาพสูง กรุณาตรวจสอบสเปคก่อนสั่งผลิต
          </div>
        </div>
      </div>
    </main>
  );
}