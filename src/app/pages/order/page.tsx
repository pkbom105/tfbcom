"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  CheckCircle2, 
  Settings2, 
  ClipboardCheck, 
  Truck, 
  Shirt, 
  FileSearch,
  Users,
  Factory,
  PenTool
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MakeToOrderPage() {
  const steps = [
    {
      id: 1,
      title: "ระบุแบบเสื้อ",
      description: "ส่งรูปพร้อมรายละเอียดแบบเสื้อที่คุณต้องการเพื่อประเมินราคา หากยังไม่มีแบบ สามารถเลือกดูแบบเสื้อยอดนิยมจากเราได้",
      icon: <Shirt className="w-8 h-8 text-red-600" />,
      color: "bg-red-50"
    },
    {
      id: 2,
      title: "ระบุเนื้อผ้า",
      description: "เลือกลักษณะเนื้อผ้าที่ต้องการ โดยทางเรามีบริการจัดส่งชิ้นตัวอย่างผ้าให้พิจารณาก่อนตัดสินใจโดยไม่มีค่าใช้จ่าย",
      icon: <FileSearch className="w-8 h-8 text-red-600" />,
      color: "bg-purple-50"
    },
    {
      id: 3,
      title: "ระบุจำนวน",
      description: "แจ้งจำนวนที่ต้องการผลิต (ขั้นต่ำ 100 ตัวต่อแบบต่อสี) การผลิตจำนวนมากจะช่วยลดต้นทุนต่อหน่วยได้ สามารถคละไซซ์ได้",
      icon: <Users className="w-8 h-8 text-red-600" />,
      color: "bg-blue-50"
    },
    {
      id: 4,
      title: "แจ้งประเมินราคา",
      description: "เมื่อได้รับรายละเอียดครบถ้วน ทางโรงงานจะรีบทำการประเมินราคาและจัดทำใบเสนอราคาให้ทันที",
      icon: <Settings2 className="w-8 h-8 text-red-600" />,
      color: "bg-cyan-50"
    },
    {
      id: 5,
      title: "ยืนยันการสั่งซื้อ",
      description: "ลูกค้าเซ็นตอบรับใบเสนอราคา พร้อมชำระมัดจำการสั่งสินค้า 40% เพื่อเริ่มขั้นตอนถัดไป",
      icon: <ClipboardCheck className="w-8 h-8 text-red-600" />,
      color: "bg-emerald-50"
    },
    {
      id: 6,
      title: "เสื้อตัวอย่าง",
      description: "หลังจากอนุมัติแบบ ทางโรงงานจะขึ้นเสื้อตัวอย่างจริงเพื่อยืนยันความถูกต้อง โดยใช้เวลาประมาณ 7 วันทำการ",
      icon: <Shirt className="w-8 h-8 text-red-600" />,
      color: "bg-lime-50"
    },
    {
      id: 7,
      title: "ปรับแก้ และอนุมัติ",
      description: "ลูกค้าตรวจสอบเสื้อตัวอย่างและแจ้งปรับแก้ได้ตามต้องการ หากแก้ไขเล็กน้อยจะไม่มีค่าใช้จ่ายเพิ่มเติม",
      icon: <PenTool className="w-8 h-8 text-red-600" />,
      color: "bg-yellow-50"
    },
    {
      id: 8,
      title: "ลงงานผลิต",
      description: "เมื่อยืนยันเสื้อตัวอย่างแล้ว จะเริ่มกระบวนการผลิตเต็มรูปแบบ ซึ่งจะใช้เวลาดำเนินการภายใน 30 วัน",
      icon: <Factory className="w-8 h-8 text-red-600" />,
      color: "bg-orange-50"
    },
    {
      id: 9,
      title: "รอรับสินค้า",
      description: "สินค้าจะเสร็จสมบูรณ์ภายใน 30 วันหรือเร็วกว่า ลูกค้าชำระส่วนที่เหลือก่อนจัดส่งหรือในวันที่ส่งสินค้า",
      icon: <Truck className="w-8 h-8 text-red-600" />,
      color: "bg-pink-50"
    }
  ];

  return (
    <main className="min-h-screen font-kanit bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 px-6 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Make to Order | <span className="text-red-600">ขั้นตอนการสั่งทำ</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ขั้นตอนสั่งทำเสื้อฟอร์มพนักงาน ชุดยูนิฟอร์มพนักงาน และเสื้อโปโลพนักงานออฟฟิศ 
            พร้อมงานปักครบวงจรเพื่อภาพลักษณ์ระดับมืออาชีพ
          </p>
        </div>
      </section>

      {/* Intro Description */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 leading-relaxed text-lg text-gray-700">
          <p className="mb-6">
            การสั่งผลิตชุดยูนิฟอร์มพนักงานจำเป็นต้องให้ข้อมูลที่ชัดเจน เพื่อให้ได้สินค้าที่ตรงกับความต้องการ ทั้งในด้านดีไซน์ สี ขนาด และคุณภาพของเนื้อผ้า 
            การเตรียมข้อมูลเหล่านี้อย่างครบถ้วนจะช่วยให้ได้ยูนิฟอร์มที่ตรงตามมาตรฐานและช่วยเสริมภาพลักษณ์ขององค์กร
          </p>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 z-0"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
                    <CardContent className="p-6">
                      <div className={`inline-flex p-3 rounded-2xl ${step.color} mb-4`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                  {step.id}
                </div>

                {/* Empty Space for Desktop Alignment */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-red-600 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">พร้อมเริ่มต้นผลิตยูนิฟอร์มกับเราหรือยัง?</h2>
            <p className="text-xl opacity-90 mb-8">
              ทีมงาน ทอฟฟี่ บูติก พร้อมให้คำปรึกษาและประเมินราคาให้คุณทันที
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/pages/contact" 
                className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-slate-100 transition-colors shadow-lg"
              >
                ติดต่อเราได้เลยวันนี้
              </a>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-500 rounded-full opacity-20"></div>
        </div>
      </section>
    </main>
  );
}