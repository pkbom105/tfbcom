"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const stepsData = {
  th: [
    { id: 1, title: "ระบุแบบเสื้อ", description: "ส่งรูปพร้อมรายละเอียดแบบเสื้อที่คุณต้องการ หากยังไม่มีแบบ สามารถเลือกดูแบบเสื้อยอดนิยมจากเราได้", icon: "/hp/icon/1.png" },
    { id: 2, title: "ระบุเนื้อผ้า", description: "เลือกลักษณะเนื้อผ้าที่ต้องการ โดยทางเรามีบริการจัดส่งชิ้นตัวอย่างผ้าให้พิจารณาก่อนตัดสินใจโดยไม่มีค่าใช้จ่าย", icon: "/hp/icon/2.png" },
    { id: 3, title: "ระบุจำนวน", description: "แจ้งจำนวนที่ต้องการผลิต (ขั้นต่ำ 50 ตัวต่อแบบต่อสี) สามารถคละไซซ์ได้", icon: "/hp/icon/3.png" },
    { id: 4, title: "แจ้งประเมินราคา", description: "เมื่อได้รับรายละเอียดครบถ้วน ทางโรงงานจะทำการประเมินราคาและจัดทำใบเสนอราคา", icon: "/hp/icon/4.png" },
    { id: 5, title: "ส่งใบเสนอราคา", description: "โรงงานส่งใบเสนอราคาที่รายละเอียดให้ลูกค้าพิจารณา พร้อมเงื่อนไขการสั่งซื้อ", icon: "/hp/icon/6.png" },
    { id: 6, title: "อนุมัติการสั่งซื้อ", description: "ลูกค้าอนุมัติใบเสนอราคา และชำระมัดจำการสั่งสินค้า 40% เพื่อเริ่มขั้นตอนถัดไป", icon: "/hp/icon/7.png" },
    { id: 7, title: "ขึ้นสินค้าตัวอย่าง", description: "โรงงานเริ่มขึ้นตัวอย่างเสื้อจริงตามแบบและสเปกที่กำหนด", icon: "/hp/icon/8.png" },
    { id: 8, title: "ผลิตสินค้าตัวอย่าง", description: "ภายใน 7 วันทำการ โรงงานจะผลิตเสื้อตัวอย่างเสร็จสิ้นและพร้อมส่งให้ลูกค้าตรวจสอบ", icon: "/hp/icon/9.png" },
    { id: 9, title: "จัดส่งตัวอย่างอนุมัติ", description: "โรงงานจัดส่งเสื้อตัวอย่างให้ลูกค้าเพื่อตรวจสอบคุณภาพและความถูกต้องตามแบบที่ตกลงกัน", icon: "/hp/icon/10.png" },
    { id: 10, title: "แจ้งปรับแก้ และอนุมัติ", description: "ลูกค้าตรวจสอบเสื้อตัวอย่าง และแจ้งปรับแก้ได้ตามต้องการ หากแก้ไขเล็กน้อยไม่มีค่าใช้จ่ายเพิ่มเติม", icon: "/hp/icon/11.png" },
    { id: 11, title: "ยืนยันเสื้อนำผลิต", description: "เมื่อลูกค้าพอใจ ให้ยืนยันการปล่อยลงงานผลิตจำนวนเต็มตามใบสั่งซื้อ", icon: "/hp/icon/12.png" },
    { id: 12, title: "ลงงานผลิต", description: "เมื่อได้การยืนยัน โรงงานจะเริ่มกระบวนการผลิตเต็มรูปแบบตามจำนวนที่สั่ง", icon: "/hp/icon/13.png" },
    { id: 13, title: "สินค้าเสร็จพร้อมจัดส่ง", description: "สินค้าจะเสร็จสมบูรณ์ภายใน 30 วัน พร้อมทำการตรวจสอบคุณภาพก่อนจัดส่ง", icon: "/hp/icon/14.png" },
    { id: 14, title: "จัดส่งสินค้า", description: "ลูกค้าชำระส่วนที่เหลือ 60% และโรงงานจัดส่งสินค้าไปยังที่ที่ลูกค้ากำหนด", icon: "/hp/icon/15.png" },
  ],
  en: [
    { id: 1, title: "Specify Design", description: "Send us your design reference with details. If you don't have one, browse our popular styles.", icon: "/hp/icon/1.png" },
    { id: 2, title: "Choose Fabric", description: "Select the fabric type you prefer. We offer free fabric samples delivered to you before you decide.", icon: "/hp/icon/2.png" },
    { id: 3, title: "Specify Quantity", description: "Inform us the quantity needed (minimum 50 pcs per style per color). Mixed sizes are allowed.", icon: "/hp/icon/3.png" },
    { id: 4, title: "Request Quotation", description: "Once we receive complete details, our factory will quickly prepare a detailed price quotation.", icon: "/hp/icon/4.png" },
    { id: 5, title: "Send Quotation", description: "Factory sends you the quotation with detailed specifications and payment terms.", icon: "/hp/icon/6.png" },
    { id: 6, title: "Confirm Order", description: "Customer approves the quotation and pays 40% deposit to begin production.", icon: "/hp/icon/7.png" },
    { id: 7, title: "Create Sample", description: "Factory begins creating a real sample garment according to your specifications.", icon: "/hp/icon/8.png" },
    { id: 8, title: "Sample Production", description: "Within 7 business days, the factory completes the sample garment and prepares for shipment.", icon: "/hp/icon/9.png" },
    { id: 9, title: "Send Sample", description: "Factory ships the sample garment to you for inspection and quality approval.", icon: "/hp/icon/10.png" },
    { id: 10, title: "Review & Approve", description: "Customer inspects the sample and requests any revisions. Minor changes are complimentary.", icon: "/hp/icon/11.png" },
    { id: 11, title: "Confirm for Production", description: "Once satisfied with the sample, customer confirms to proceed with full production.", icon: "/hp/icon/12.png" },
    { id: 12, title: "Full Production", description: "Factory begins full-scale production of the confirmed order with complete specifications.", icon: "/hp/icon/13.png" },
    { id: 13, title: "Products Ready", description: "Products are completed and fully quality checked within 30 days, ready for shipment.", icon: "/hp/icon/14.png" },
    { id: 14, title: "Delivery", description: "Customer pays the remaining 60% balance. Factory delivers products to your specified location.", icon: "/hp/icon/15.png" },
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
                      <div className="flex-shrink-0 w-40 h-40 rounded-3xl bg-slate-50 flex items-center justify-center shadow-inner relative">
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-2xl md:text-3xl font-medium text-red-600  tracking-tight">
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