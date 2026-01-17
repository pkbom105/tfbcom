"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react"; // ตรวจสอบการ Import
import { motion } from "framer-motion";
import Link from "next/link"; // ใช้ Link ของ Next.js แทน <a> เพื่อความเร็ว

export default function FAQPage() {
  const faqData = [
    {
      question: "รับผลิตเสื้อยูนิฟอร์มพนักงาน เสื้อโปโลพนักงาน ขั้นต่ำกี่ตัว ?",
      answer: "กรณีเป็นผ้าในสต๊อกพร้อมผลิต รับผลิตขั้นต่ำ 100 ตัว / กรณีสั่งทอย้อมสีใหม่ตามต้องการ ขั้นต่ำ 400 ตัวต่อสี"
    },
    {
      question: "รับผลิตเสื้อยูนิฟอร์มพนักงาน เสื้อโปโลยูนิฟอร์ม ที่สั่งผลิตน้อยกว่า 100 ตัวมั้ย ?",
      answer: "รับผลิตน้อยกว่า 100 ตัว แต่ราคาก็จะสูงขึ้น เนื่องจากมีค่าใช้จ่ายเพิ่มเติมจากค่าบล็อกสกรีน หรือบล็อกปัก"
    },
    {
      question: "ระยะเวลาในการรับผลิตเสื้อกี่วัน ?",
      answer: "นับจากวันที่คอนเฟิร์มแบบผลิตจริง ใช้เวลาประมาณ 15 - 20 วัน (กรณีไม่สั่งย้อมผ้าใหม่) ถ้ามีการสั่งย้อมผ้าใหม่จะใช้เวลาประมาณ 45 - 60 วัน ขึ้นอยู่กับจำนวนการผลิตด้วย"
    },
    {
      question: "รับออกแบบโลโก้ให้หรือไม่ ?",
      answer: "ทางเราไม่ได้รับออกแบบโลโก้ ลูกค้าต้องมีไฟล์โลโก้มาให้สำหรับขึ้นตัวอย่างงาน โดยเราจะทำการจัดวางโลโก้บนแบบเสื้อให้ เพื่อยืนยันตำแหน่งกับลูกค้าอีกครั้ง"
    },
    {
      question: "จัดส่งสินค้ายูนิฟอร์มพนักงาน เสื้อฟอร์มพนักงานให้ฟรีหรือเปล่า ?",
      answer: "สั่งผลิตตั้งแต่ 100 ตัวขึ้นไป บริการส่งฟรี ทั่วกรุงเทพและในปริมณฑล กรณีต่ำกว่า 100 ตัว คิดค่าบริการขนส่งตามจริง"
    },
    {
      question: "ขึ้นเสื้อตัวอย่างให้ดูก่อนสั่งผลิตจริงได้หรือไม่ ?",
      answer: "เราจะขึ้นเสื้อตัวอย่างพร้อมโลโก้ปัก/พิมพ์ให้ดูก่อนผลิตจริงทุกครั้ง หลังจากลูกค้ายืนยันการสั่งซื้อและชำระมัดจำแล้ว หากต้องการขึ้นตัวอย่างก่อนสั่งซื้อ สามารถทำได้ แต่จะมีค่าบริการประมาณ 1,000 บาท (คืนให้เมื่อสั่งผลิตจริง)"
    },
    {
      question: "สามารถสั่งผลิตตามไซซ์ของลูกค้าเองได้หรือไม่ ?",
      answer: "ได้ ลูกค้าสามารถแจ้งสเปคเสื้อ หรือนำเสื้อตัวอย่างมาให้ทำ pattern ตามขนาดที่ต้องการได้ โดยไม่มีการคิดค่าบริการเพิ่ม"
    },
    {
      question: "ไม่มีแบบเสื้อยูนิฟอร์มพนักงาน มีแบบให้เลือกดูมั้ย ?",
      answer: "มีแบบเสื้อโปโลพนักงานที่เป็นที่นิยมและทันสมัยให้เลือกมากกว่า 70 แบบ สามารถสอบถามฝ่ายขายเพื่อขอดูแคตตาล็อกแบบเสื้อล่าสุดได้"
    },
    {
      question: "รับงานพิมพ์ หรือ งานปักเสื้อโปโลยูนิฟอร์ม อย่างเดียวมั้ย ?",
      answer: "รับทั้งงานพิมพ์และงานปัก ขั้นต่ำ 100 ชิ้นขึ้นไป"
    }
  ];

  return (
    <main className="min-h-screen font-kanit pb-20 bg-white">
      {/* Header Section */}
      <section className="bg-slate-50 py-16 px-6 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            คำถามที่พบบ่อย
          </h1>
          <p className="text-lg text-muted-foreground italic">
            รวมคำตอบเกี่ยวกับ ยูนิฟอร์มพนักงาน เสื้อฟอร์มพนักงาน เสื้อโปโลพนักงาน โดย ทอฟฟี่ บูติก
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="max-w-3xl mx-auto px-6 mt-12">
        {/* เปลี่ยน type="single" เป็น "multiple" หากต้องการให้เปิดได้หลายอันพร้อมกัน */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-xl px-4 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-red-600 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 leading-relaxed pb-5 border-t pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Support CTA */}
      <section className="max-w-3xl mx-auto px-6 mt-16 text-center bg-red-50 py-10 rounded-3xl border border-red-100">
        <MessageCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">ยังมีข้อสงสัยอื่นเพิ่มเติม?</h3>
        <p className="text-gray-600 mb-6">ฝ่ายขายของเรายินดีให้คำปรึกษาเรื่องเนื้อผ้าและแบบเสื้อทุกวัน</p>
        <Link 
          href="/pages/contact"
          className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg"
        >
          ติดต่อสอบถามเพิ่มเติม
        </Link>
      </section>
    </main>
  );
}