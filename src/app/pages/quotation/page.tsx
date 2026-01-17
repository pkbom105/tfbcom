"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Palette, 
  Users, 
  Maximize, 
  Sticker, 
  Calculator,
  ArrowRight
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function QuotationPage() {
  const factors = [
    {
      id: 1,
      icon: <Layers className="w-8 h-8 text-red-600" />,
      title: "ชนิดของเนื้อผ้า",
      description: "คุณสมบัติของเนื้อผ้าแต่ละชนิดมีข้อดี-ข้อเสียต่างกัน ขึ้นอยู่กับการใช้งานและงบประมาณ มีให้เลือกตั้งแต่ Cotton, CVC, TC และ TK",
      link: "/pages/fabric",
      linkText: "อ่านรายละเอียดเนื้อผ้า"
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8 text-red-600" />,
      title: "แบบเสื้อยูนิฟอร์ม",
      description: "ความยากง่ายและจำนวนขั้นตอนในการผลิตตามงานดีไซน์ของลูกค้า เป็นปัจจัยสำคัญในการประเมินราคา เรามีแบบมาตรฐานกว่า 80 แบบ",
      link: "/pages/products",
      linkText: "ดูแบบเสื้อทั้งหมด"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "จำนวนการผลิต",
      description: "เนื่องจากมีต้นทุนในการติดตั้งเครื่องมือ (Setup cost) หากสั่งผลิตจำนวนมากต่อแบบ จะช่วยให้ต้นทุนเฉลี่ยต่อตัวลดลงอย่างมาก",
    },
    {
      id: 4,
      icon: <Maximize className="w-8 h-8 text-red-600" />,
      title: "ขนาดเสื้อ (Size)",
      description: "ปริมาณการใช้วัตถุดิบต่างกันตามขนาดและทรงเสื้อ เช่น เสื้อแขนยาวหรือชุดเดรสจะใช้ผ้ามากกว่าเสื้อแขนสั้น ราคาจึงปรับตามปริมาณผ้า",
    },
    {
      id: 5,
      icon: <Sticker className="w-8 h-8 text-red-600" />,
      title: "แบบลายพิมพ์ ลายปัก",
      description: "งานพิมพ์คิดตามจำนวนสีและบล็อกสกรีน ส่วนงานปักคิดตามจำนวนฝีเข็ม (ยิ่งลายใหญ่จำนวนไหมที่ใช้จะมากขึ้น)",
    }
  ];

  return (
    <main className="min-h-screen font-kanit bg-slate-50/50 pb-20">
      {/* Header Section */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <div className="bg-red-100 p-3 rounded-2xl">
              <Calculator className="w-10 h-10 text-red-600" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Quotation | <span className="text-red-600">การประเมินราคา</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            หลักการประเมินราคางานรับผลิตเสื้อยูนิฟอร์มและชุดฟอร์มพนักงานโรงงาน 
            เพื่อให้คุณได้รับความคุ้มค่าและคุณภาพสูงสุด
          </p>
        </div>
      </section>

      {/* Factors Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {factors.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-red-50 transition-colors">
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold flex items-baseline gap-3">
                    <span className="text-red-200 text-4xl italic">0{item.id}</span>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link 
                      href={item.link} 
                      className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline"
                    >
                      {item.linkText} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Info Section */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
            ทำไมต้องเลือก ทอฟฟี่ บูติก?
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              เรา คือ โรงงานรับผลิตเสื้อที่ดำเนินงานมากว่า 35 ปี ที่พร้อมให้บริการลูกค้าในทุกอุตสาหกรรมด้วยบริการที่ครอบคลุม 
              มุ่งมั่นจัดหาวัตถุดิบที่ได้คุณภาพมาตรฐาน ตลอดจนการเลือกใช้วิธีการปักงานเอง 
              และระบบงานพิมพ์ที่ทันสมัย เพื่อเพิ่มความทนทานและยืดอายุการใช้งานให้กับยูนิฟอร์มของคุณ
            </p>
            <p className="font-medium bg-red-50 p-4 rounded-xl text-red-800 border-l-4 border-red-500">
              การประเมินราคาเป็นเพียงแนวทางเบื้องต้น 
              เพื่อให้ได้ราคาที่ชัดเจนที่สุดสำหรับโปรเจกต์ของคุณ 
              กรุณาติดต่อฝ่ายขายเพื่อขอรับคำปรึกษาและใบเสนอราคาโดยตรง
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link 
              href="/pages/contact"
              className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-red-700 transition-all hover:scale-105"
            >
              ติดต่อขอใบเสนอราคา
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}