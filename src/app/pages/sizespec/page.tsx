"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ruler, CheckCircle2, Info, Layers, Star, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Interfaces (ข้อมูลคงเดิม 100%) ---
interface SizeRow {
  size?: string; chest?: string; length?: string; shoulder?: string;
  A?: string; B?: string; C?: string; D?: string;
}

interface ButtonData {
  id: string; labelB: string; label: string; label2?: string; label3?: string; label4?: string;
  image: string; image2?: string; image3?: string; image4?: string;
  data: SizeRow[]; data2?: SizeRow[]; data3?: SizeRow[]; data4?: SizeRow[];
}

export default function SizeSpecPage() {
  const buttonGroups: ButtonData[] = [
    {
      id: "tshirt-standard",
      labelB: "เสื้อคอกลม",
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
      label: "โปโลชาย แขนสั้น",
      label2: "โปโลหญิง แขนสั้น",
      label3: "โปโลชาย แขนยาว",
      label4: "โปโลหญิง แขนยาว",
      labelB: "เสื้อโปโล",
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
      label: "เสื้อเชฟ แขนสั้น",
      label2: "เสื้อเชฟ แขนยาว",
      labelB: "เสื้อเชฟ",
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
      id: "housek",
      label: "ชุดพนักงานทำความสะอาด (ชาย)",
      label2: "ชุดพนักงานทำความสะอาด (หญิง)",
      labelB: "ชุดพนักงานทำความสะอาด",
      image: "/04sizespec/26.png",
      image2: "/04sizespec/27.png",
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
      label: "กางเกงสแล็ค / กางเกงทำงาน",
      labelB: "กางเกง",
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
      label: "ผ้ากันเปื้อน เต็มตัว",
      label2: "ผ้ากันเปื้อน ครึ่งตัวยาว",
      label3: "ผ้ากันเปื้อน ครึ่งตัวสั้น",
      labelB: "ผ้ากันเปื้อน",
      image: "/04sizespec/29.png",
      image2: "/04sizespec/30.png",
      image3: "/04sizespec/31.png",
      data: [
        { size: "ฟรีไซส์", A: "10.25", B: "32", C: "24" },
      ],
      data2: [
        { size: "ฟรีไซส์", A: "26.5", B: "23", C: "-" },
      ],
      data3: [
        { size: "ฟรีไซส์", A: "26.5", B: "18", C: "-" },
      ]
    },
    {
      id: "uniform",
      label: "ยูนิฟอร์มอื่นๆ",
      labelB: "ยูนิฟอร์ม",
      image: "/picture/spec2.jpg",
      data: [{ size: "M", chest: "40", length: "27", shoulder: "17" }]
    },
  ];

  const [activeTabId, setActiveTabId] = useState(buttonGroups[0].id);
  const activeGroup = buttonGroups.find(b => b.id === activeTabId) || buttonGroups[0];

  const getButtonClass = (index: number, total: number, id: string) => {
    return cn(
      "h-auto py-3 px-4 text-xs md:text-sm font-bold transition-all border-slate-200 hover:bg-red-50 hover:text-red-600",
      activeTabId === id && "bg-red-600 text-white border-red-600 hover:bg-red-700 hover:text-white",
      index === 0 ? "rounded-l-lg" : index === total - 1 ? "rounded-r-lg" : "rounded-none border-l-0"
    );
  };

  const SizeTable = ({ title, data, colorClass = "bg-slate-900", accentColor = "text-red-600", tableIcon }: any) => {
    const isPants = activeTabId === "pants";
    // ปรับเงื่อนไข isApron ให้เช็คจาก activeTabId เป็นหลัก
    const isApron = activeTabId === "apron";

    return (
      <div className="w-full">
        <div className={`${colorClass} p-3 text-white flex justify-between items-center rounded-t-xl`}>
          <h3 className="text-xs md:text-sm font-bold flex items-center gap-2">{tableIcon} {title}</h3>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase">Unit: Inch</span>
        </div>
        <div className="border border-t-0 border-slate-100 overflow-x-auto bg-white rounded-b-xl shadow-sm">
          <table className="w-full text-center min-w-[350px]">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr className="text-slate-800 font-bold text-[10px]">
                <th className="px-3 py-2">SIZE</th>
                {isPants ? (
                  <>
                    <th className="px-3 py-2">เอว(A)</th><th className="px-3 py-2">สะโพก(B)</th>
                    <th className="px-3 py-2">ยาว(C)</th><th className="px-3 py-2">ปลายขา(D)</th>
                  </>
                ) : isApron ? (
                  <>
                    <th className="px-3 py-2">อกกว้าง(A)</th><th className="px-3 py-2">ยาวผ้า(B)</th><th className="px-3 py-2">เอว(C)</th>
                  </>
                ) : (
                  <>
                    <th className="px-3 py-2">รอบอก</th><th className="px-3 py-2">ความยาว</th><th className="px-3 py-2">แขน/ไหล่</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data.map((row: any, idx: number) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className={`px-3 py-2 font-bold ${accentColor} text-sm`}>{row.size}</td>
                  {isPants || isApron ? (
                    <>
                      <td className="px-3 py-2 text-slate-700 text-xs">{row.A}"</td>
                      <td className="px-3 py-2 text-slate-700 text-xs">{row.B}"</td>
                      <td className="px-3 py-2 text-slate-700 text-xs">{row.C}"</td>
                      {isPants && <td className="px-3 py-2 text-slate-700 text-xs">{row.D}"</td>}
                    </>
                  ) : (
                    <>
                      <td className="px-3 py-2 text-slate-700 text-xs">{row.chest}"</td>
                      <td className="px-3 py-2 text-slate-700 text-xs">{row.length}"</td>
                      <td className="px-3 py-2 text-slate-700 text-xs">{row.shoulder}"</td>
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
    <main className="min-h-screen font-kanit bg-white pb-20">
      {/* 1. BUTTON GROUP (TOP) */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md py-4 transition-all border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col items-center gap-2">
          <div className="inline-flex shadow-sm flex-wrap justify-center bg-white rounded-lg">
            {buttonGroups.slice(0, 5).map((btn, idx) => (
              <Button key={btn.id} variant="outline" onClick={() => setActiveTabId(btn.id)} className={getButtonClass(idx, 5, btn.id)}>
                {btn.labelB}
              </Button>
            ))}
          </div>
          <div className="inline-flex shadow-sm flex-wrap justify-center bg-white rounded-lg">
            {buttonGroups.slice(5).map((btn, idx) => (
              <Button key={btn.id} variant="outline" onClick={() => setActiveTabId(btn.id)} className={getButtonClass(idx, buttonGroups.length - 5, btn.id)}>
                {btn.labelB}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. HEADER */}
      <section className="bg-slate-50 py-10 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5 mb-2 uppercase">
          Size Spec | <span className="text-red-600">สเปคขนาดมาตรฐาน</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-base">ตารางขนาดเสื้อผ้าแต่ละประเภทจาก Toffy Boutique</p>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 mt-12">
        {/* 3. CONSOLIDATED INTRO CARD */}
        <Card className="border border-slate-200 shadow-sm bg-slate-50 overflow-hidden mb-16">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Star className="text-yellow-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">งานผลิตเกรดพรีเมียม</h4>
                  <p className="text-[11px] text-slate-500">เนื้อผ้าคุณภาพ ไม่ย้วย ออกแบบเพื่อคนไทย</p>
                </div>
              </div>
              <div className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">มาตรฐานการผลิต (QC)</h4>
                  <p className="text-[11px] text-slate-500">ตรวจสอบความเรียบร้อยทุกจุดก่อนส่งมอบ</p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between gap-4 bg-red-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <PhoneCall className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-900 text-sm">สั่งตัดขนาดพิเศษ</h4>
                    <p className="text-[11px] text-red-700">ปรับไซส์ตามต้องการ ปรึกษาฝ่ายขาย</p>
                  </div>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white border-none text-[10px] font-bold h-8">ติดต่อเรา</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. CONTENT GRID */}
        <div className="space-y-20">
          {[
            { data: activeGroup.data, img: activeGroup.image, label: activeGroup.label, color: "bg-slate-900", accent: "text-red-600", icon: <Ruler size={16} className="text-red-500" /> },
            { data: activeGroup.data2, img: activeGroup.image2, label: activeGroup.label2, color: "bg-slate-800", accent: "text-blue-600", icon: <Layers size={16} className="text-blue-400" /> },
            { data: activeGroup.data3, img: activeGroup.image3, label: activeGroup.label3, color: "bg-slate-700", accent: "text-emerald-600", icon: <Layers size={16} className="text-emerald-400" /> },
            { data: activeGroup.data4, img: activeGroup.image4, label: activeGroup.label4, color: "bg-slate-600", accent: "text-orange-600", icon: <Layers size={16} className="text-orange-400" /> },
          ].filter(item => item.data).map((item, idx) => (
            <motion.div 
              key={`${activeTabId}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Column: Image */}
              <div className="lg:col-span-4 h-full">
                <div className="relative w-full aspect-square bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                  <Image 
                    src={item.img!} 
                    alt={item.label || "Spec"} 
                    fill 
                    className="object-contain p-6" 
                    priority 
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-1 rounded-full border text-[10px] font-bold text-slate-400">
                    DIAGRAM {idx + 1}
                  </div>
                </div>
              </div>

              {/* Column: Table Data */}
              <div className="lg:col-span-8 h-full">
                <SizeTable 
                  title={item.label || `ตารางข้อมูลที่ ${idx + 1}`} 
                  data={item.data} 
                  colorClass={item.color} 
                  accentColor={item.accent}
                  tableIcon={item.icon}
                />
                
                {idx === 0 && (
                  <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-50 p-3 rounded-lg border border-dashed border-slate-200">
                    <Info size={14} className="shrink-0 mt-0.5" />
                    <p>สเปคนี้เป็นขนาดมาตรฐานเบื้องต้น หากต้องการปรับแก้ความยาวเสื้อหรือแขน สามารถระบุกับฝ่ายขายได้ในขั้นตอนมัดจำผลิต</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Footer Note */}
        <div className="mt-20 p-8 bg-blue-50/30 rounded-3xl border border-blue-100 text-center">
          <p className="text-sm text-slate-500 font-medium">
            <span className="text-blue-600 font-bold">PRO TIP:</span> ขนาดที่แจ้งในตารางมีความคลาดเคลื่อนได้ประมาณ +/- 0.5 นิ้ว ตามมาตรฐานงาน Handmade 
            <br />กรุณาตรวจสอบขนาดรอบอกให้ชัดเจนก่อนยืนยันการผลิต
          </p>
        </div>
      </div>
    </main>
  );
}