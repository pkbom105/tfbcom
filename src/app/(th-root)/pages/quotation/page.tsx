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

export default function QuotationPage({ lang = "th" }: { lang?: string }) {
  const isEn = lang === "en";
  const t = (th: string, en: string) => isEn ? en : th;
  const factors = [
    {
      id: 1,
      icon: <Layers className="w-8 h-8 text-red-600" />,
      title: t("ชนิดของเนื้อผ้า", "Fabric Type"),
      description: t("คุณสมบัติของเนื้อผ้าแต่ละชนิดมีข้อดี-ข้อเสียต่างกัน ขึ้นอยู่กับการใช้งานและงบประมาณ มีให้เลือกตั้งแต่ Cotton, CVC, TC และ TK", "Each fabric type has its own pros and cons, depending on usage and budget. Options include Cotton, CVC, TC, and TK."),
      link: isEn ? "/en/pages/fabric" : "/pages/fabric",
      linkText: t("อ่านรายละเอียดเนื้อผ้า", "Read fabric details")
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8 text-red-600" />,
      title: t("แบบเสื้อยูนิฟอร์ม", "Uniform Style"),
      description: t("ความยากง่ายและจำนวนขั้นตอนในการผลิตตามงานดีไซน์ของลูกค้า เป็นปัจจัยสำคัญในการประเมินราคา เรามีแบบมาตรฐานกว่า 80 แบบ", "Design complexity and production steps based on your design are key pricing factors. We offer over 80 standard styles."),
      link: isEn ? "/en/pages/products" : "/pages/products",
      linkText: t("ดูแบบเสื้อทั้งหมด", "View all styles")
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: t("จำนวนการผลิต", "Production Quantity"),
      description: t("เนื่องจากมีต้นทุนในการติดตั้งเครื่องมือ (Setup cost) หากสั่งผลิตจำนวนมากต่อแบบ จะช่วยให้ต้นทุนเฉลี่ยต่อตัวลดลงอย่างมาก", "Due to setup costs, ordering larger quantities per style significantly reduces the average cost per unit."),
    },
    {
      id: 4,
      icon: <Maximize className="w-8 h-8 text-red-600" />,
      title: t("ขนาดเสื้อ (Size)", "Garment Size"),
      description: t("ปริมาณการใช้วัตถุดิบต่างกันตามขนาดและทรงเสื้อ เช่น เสื้อแขนยาวหรือชุดเดรสจะใช้ผ้ามากกว่าเสื้อแขนสั้น ราคาจึงปรับตามปริมาณผ้า", "Material usage varies by size and style; for example, long sleeves or dresses use more fabric than short sleeves, affecting the price."),
    },
    {
      id: 5,
      icon: <Sticker className="w-8 h-8 text-red-600" />,
      title: t("แบบลายพิมพ์ ลายปัก", "Print & Embroidery"),
      description: t("งานพิมพ์คิดตามจำนวนสีและบล็อกสกรีน ส่วนงานปักคิดตามจำนวนฝีเข็ม (ยิ่งลายใหญ่จำนวนไหมที่ใช้จะมากขึ้น)", "Printing is priced by colours and screen blocks. Embroidery is priced by stitch count (larger designs use more thread)."),
    }
  ];

  return (
    <main className="min-h-screen font-kanit bg-slate-50/50 pb-20">
      {/* Header Section */}
      <section className="bg-white py-16 border-b-0">
        <div className="max-w-4xl mx-auto px-6 text-center">          
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Quotation | <span className="text-red-600">{t("การประเมินราคา", "Pricing Evaluation")}</span>
          </h1>
          <div className="text-xl text-gray-600 leading-relaxed">
            {t("หลักการประเมินราคางานรับผลิตเสื้อยูนิฟอร์มและชุดฟอร์มพนักงานโรงงาน", "Core principles for evaluating the price of uniform and industrial workwear production.")}
            <p>{t("เพื่อให้คุณได้รับความคุ้มค่าและคุณภาพสูงสุด", "To ensure you receive the best value and highest quality.")}</p>
          </div>
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
            {t("ทำไมต้องเลือก ทอฟฟี่ บูติก?", "Why Choose Toffy Boutique?")}
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              {t("เรา คือ โรงงานรับผลิตเสื้อที่ดำเนินงานมากว่า 35 ปี ที่พร้อมให้บริการลูกค้าในทุกอุตสาหกรรมด้วยบริการที่ครอบคลุม มุ่งมั่นจัดหาวัตถุดิบที่ได้คุณภาพมาตรฐาน ตลอดจนการเลือกใช้วิธีการปักงานเอง และระบบงานพิมพ์ที่ทันสมัย เพื่อเพิ่มความทนทานและยืดอายุการใช้งานให้กับยูนิฟอร์มของคุณ", "With over 35 years of experience, we serve clients across all industries with comprehensive services. We are committed to sourcing high-quality materials, in-house embroidery, and modern printing systems to enhance durability and extend the life of your uniforms.")}
            </p>
            <p className="font-medium bg-red-50 p-4 rounded-xl text-red-800 border-l-4 border-red-500">
              {t("การประเมินราคาเป็นเพียงแนวทางเบื้องต้น เพื่อให้ได้ราคาที่ชัดเจนที่สุดสำหรับโปรเจกต์ของคุณ กรุณาติดต่อฝ่ายขายเพื่อขอรับคำปรึกษาและใบเสนอราคาโดยตรง", "Pricing evaluation provides a preliminary guide. For a precise quote tailored to your project, please contact our sales team for a direct consultation and formal quotation.")}
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link 
              href={isEn ? "/en/pages/contact" : "/pages/contact"}
              className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-red-700 transition-all hover:scale-105"
            >
              {t("ติดต่อขอใบเสนอราคา", "Request a Quotation")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}