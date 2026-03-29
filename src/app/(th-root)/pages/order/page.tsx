"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
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

const stepsData = {
  th: [
    { id: 1, title: "ระบุแบบเสื้อ", description: "ส่งรูปพร้อมรายละเอียดแบบเสื้อที่คุณต้องการเพื่อประเมินราคา หากยังไม่มีแบบ สามารถเลือกดูแบบเสื้อยอดนิยมจากเราได้", icon: <Shirt className="w-9 h-9 text-red-600" />, color: "bg-red-50" },
    { id: 2, title: "ระบุเนื้อผ้า", description: "เลือกลักษณะเนื้อผ้าที่ต้องการ โดยทางเรามีบริการจัดส่งชิ้นตัวอย่างผ้าให้พิจารณาก่อนตัดสินใจโดยไม่มีค่าใช้จ่าย", icon: <FileSearch className="w-9 h-9 text-red-600" />, color: "bg-purple-50" },
    { id: 3, title: "ระบุจำนวน", description: "แจ้งจำนวนที่ต้องการผลิต (ขั้นต่ำ 100 ตัวต่อแบบต่อสี) การผลิตจำนวนมากจะช่วยลดต้นทุนต่อหน่วยได้ สามารถคละไซซ์ได้", icon: <Users className="w-9 h-9 text-red-600" />, color: "bg-blue-50" },
    { id: 4, title: "แจ้งประเมินราคา", description: "เมื่อได้รับรายละเอียดครบถ้วน ทางโรงงานจะรีบทำการประเมินราคาและจัดทำใบเสนอราคาให้ทันที", icon: <Settings2 className="w-9 h-9 text-red-600" />, color: "bg-cyan-50" },
    { id: 5, title: "ยืนยันการสั่งซื้อ", description: "ลูกค้าเซ็นตอบรับใบเสนอราคา พร้อมชำระมัดจำการสั่งสินค้า 40% เพื่อเริ่มขั้นตอนถัดไป", icon: <ClipboardCheck className="w-9 h-9 text-red-600" />, color: "bg-emerald-50" },
    { id: 6, title: "เสื้อตัวอย่าง", description: "หลังจากอนุมัติแบบ ทางโรงงานจะขึ้นเสื้อตัวอย่างจริงเพื่อยืนยันความถูกต้อง โดยใช้เวลาประมาณ 7 วันทำการ", icon: <Shirt className="w-9 h-9 text-red-600" />, color: "bg-lime-50" },
    { id: 7, title: "ปรับแก้ และอนุมัติ", description: "ลูกค้าตรวจสอบเสื้อตัวอย่างและแจ้งปรับแก้ได้ตามต้องการ หากแก้ไขเล็กน้อยจะไม่มีค่าใช้จ่ายเพิ่มเติม", icon: <PenTool className="w-9 h-9 text-red-600" />, color: "bg-yellow-50" },
    { id: 8, title: "ลงงานผลิต", description: "เมื่อยืนยันเสื้อตัวอย่างแล้ว จะเริ่มกระบวนการผลิตเต็มรูปแบบ ซึ่งจะใช้เวลาดำเนินการภายใน 30 วัน", icon: <Factory className="w-9 h-9 text-red-600" />, color: "bg-orange-50" },
    { id: 9, title: "รอรับสินค้า", description: "สินค้าจะเสร็จสมบูรณ์ภายใน 30 วันหรือเร็วกว่า ลูกค้าชำระส่วนที่เหลือก่อนจัดส่งหรือในวันที่ส่งสินค้า", icon: <Truck className="w-9 h-9 text-red-600" />, color: "bg-pink-50" },
  ],
  en: [
    { id: 1, title: "Specify Design", description: "Send us your design reference with details for a price estimate. If you don't have a design, you can browse our popular styles.", icon: <Shirt className="w-9 h-9 text-red-600" />, color: "bg-red-50" },
    { id: 2, title: "Choose Fabric", description: "Select the fabric type you prefer. We offer free fabric samples delivered to you before you decide.", icon: <FileSearch className="w-9 h-9 text-red-600" />, color: "bg-purple-50" },
    { id: 3, title: "Specify Quantity", description: "Inform us of the quantity you need (minimum 100 pcs per style per color). Larger quantities reduce unit cost. Mixed sizes are allowed.", icon: <Users className="w-9 h-9 text-red-600" />, color: "bg-blue-50" },
    { id: 4, title: "Request Quotation", description: "Once we receive complete details, our factory will quickly prepare a detailed price quotation for you.", icon: <Settings2 className="w-9 h-9 text-red-600" />, color: "bg-cyan-50" },
    { id: 5, title: "Confirm Order", description: "Customer signs the quotation and pays a 40% deposit to begin the next steps.", icon: <ClipboardCheck className="w-9 h-9 text-red-600" />, color: "bg-emerald-50" },
    { id: 6, title: "Sample Garment", description: "After design approval, the factory produces a real sample garment to confirm accuracy. This takes approximately 7 business days.", icon: <Shirt className="w-9 h-9 text-red-600" />, color: "bg-lime-50" },
    { id: 7, title: "Revise & Approve", description: "Customer inspects the sample and requests any revisions. Minor amendments are made at no extra charge.", icon: <PenTool className="w-9 h-9 text-red-600" />, color: "bg-yellow-50" },
    { id: 8, title: "Full Production", description: "Once the sample is approved, full-scale production begins. This takes within 30 days.", icon: <Factory className="w-9 h-9 text-red-600" />, color: "bg-orange-50" },
    { id: 9, title: "Receive Order", description: "Products are completed within 30 days or sooner. Customer pays the remaining balance before or upon delivery.", icon: <Truck className="w-9 h-9 text-red-600" />, color: "bg-pink-50" },
  ],
};

export default function MakeToOrderPage({ lang = "th" }: { lang?: string }) {
  const isEn = lang === "en";
  const steps = stepsData[isEn ? "en" : "th"];

  return (
    <main className="min-h-screen bg-white font-noto pb-20">
      {/* --- Intro Section --- */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"> 
            {isEn ? "Ordering Process" : "Ordering Process"} | <span className="text-red-600">{isEn ? "How to Order" : "การสั่งผลิต"}</span>
          </h1> 
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {isEn
              ? "Our standard ordering process ensures you receive premium-quality uniforms, tailored to your specs, delivered on time."
              : "ขั้นตอนการสั่งผลิตมาตรฐานที่ช่วยให้คุณได้ยูนิฟอร์มคุณภาพเยี่ยม ตรงตามสเปก และส่งมอบตรงเวลา"}
          </p>
        </div>
      </section>

      {/* --- Timeline Section --- */}
      <section className="max-w-5xl mx-auto px-6 relative mt-20">
        {/* Vertical Line */}
        <div className="absolute left-[34px] top-0 h-full w-1 bg-slate-100 z-0 rounded-full"></div>

        <div className="space-y-12 relative z-10">
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-start gap-8 md:gap-12 group"
            >
              {/* 1. ตัวเลขสลับสี: ปกติแดง / Hover ดำ */}
              <div className="relative flex-shrink-0 mt-2">
                <div 
                  className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black text-xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-900 shadow-red-100 group-hover:shadow-slate-200"
                >
                  {step.id}
                </div>
              </div>

              {/* 2. Card เนื้อหา */}
              <div className="flex-1 pb-4">
                <Card className="border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(220,38,38,0.12)] transition-all duration-500 rounded-[2rem] bg-white overflow-hidden hover:translate-x-2">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                      <div className={`flex-shrink-0 w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center shadow-inner`}>
                        {step.icon}
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Call to Action (ปรับเป็น Grey-100) --- */}
      <section className="max-w-5xl mx-auto px-6 mt-32">
        <div className="bg-gray-200 p-12 md:p-20 rounded-[3.5rem] text-center relative overflow-hidden border border-gray-200">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Ready to Build Your Brand?</h2>
            <p className="text-xl text-slate-600 max-w-xl mx-auto font-medium">
              {isEn
                ? "Let Toffy Boutique be part of your success story through the most premium uniforms."
                : "ให้ ทอฟฟี่ บูติก เป็นส่วนหนึ่งในการสร้างความสำเร็จผ่านยูนิฟอร์มที่พรีเมียมที่สุด"}
            </p>
            <div className="flex justify-center">
              <a 
                href="/pages/contact" 
                className="bg-red-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-slate-900 transition-all duration-500 shadow-2xl hover:shadow-slate-300"
              >
                {isEn ? "Start Consulting" : "เริ่มปรึกษาผู้เชี่ยวชาญ"}
              </a>
            </div>
          </div>
          {/* Subtle Decorative Circle */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
    </main>
  );
}