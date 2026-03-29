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

export default function FAQPage({ lang = "th" }: { lang?: string }) {
  const isEn = lang === "en";
  const faqData = isEn ? [
    { question: "What is the minimum order quantity for employee uniforms / polo shirts?", answer: "For in-stock fabrics ready to produce: minimum 50 pcs. For custom-dyed fabrics: minimum 400 pcs per color." },
    { question: "Can you produce less than 50 pieces?", answer: "Yes, but the price will be higher due to additional screen/embroidery block fees." },
    { question: "How long does production take?", answer: "Approximately 30 working days from the confirmed design date (for standard fabrics). Custom-dyed orders take 45–60 days depending on quantity." },
    { question: "Do you provide logo design services?", answer: "We don't offer logo design. You need to provide the logo file; we will position it on the shirt layout for your approval." },
    { question: "Is delivery free?", answer: "Free delivery within Bangkok for orders of 50+ pcs. Below 50 pcs, actual shipping cost applies." },
    { question: "Can I see a sample before full production?", answer: "Yes – we always make a sample with logo embroidery/print after order confirmation and deposit. Pre-order samples are available for ~1,000 THB (refunded upon full order)." },
    { question: "Can you produce custom sizes?", answer: "Yes. You can provide your spec sheet or a reference garment for us to create a custom pattern – no extra charge." },
    { question: "Do you have pre-made design options?", answer: "We have over 70 popular polo shirt designs. Ask our sales team for the latest catalog." },
    { question: "Do you do printing or embroidery only?", answer: "Yes, we accept printing and embroidery-only orders with a minimum of 50 pieces." }
  ] : [
    {
      question: "รับผลิตเสื้อยูนิฟอร์มพนักงาน เสื้อโปโลพนักงาน ขั้นต่ำกี่ตัว ?",
      answer: "กรณีเป็นผ้าในสต๊อกพร้อมผลิต รับผลิตขั้นต่ำ 50 ตัว / กรณีสั่งทอย้อมสีใหม่ตามต้องการ ขั้นต่ำ 400 ตัวต่อสี"
    },
    {
      question: "รับผลิตเสื้อยูนิฟอร์มพนักงาน เสื้อโปโลยูนิฟอร์ม ที่สั่งผลิตน้อยกว่า 50 ตัวมั้ย ?",
      answer: "รับผลิตน้อยกว่า 50 ตัว แต่ราคาก็จะสูงขึ้น เนื่องจากมีค่าใช้จ่ายเพิ่มเติมจากค่าบล็อกสกรีน หรือบล็อกปัก"
    },
    {
    
      question: "ระยะเวลาในการรับผลิตเสื้อกี่วัน ?",
      answer: "นับจากวันที่คอนเฟิร์มแบบผลิตจริง ใช้เวลาประมาณ 30 วัน (กรณีไม่สั่งย้อมผ้าใหม่) ถ้ามีการสั่งย้อมผ้าใหม่จะใช้เวลาประมาณ 45 - 60 วัน ขึ้นอยู่กับจำนวนการผลิตด้วย"
    },
    {
      question: "รับออกแบบโลโก้ให้หรือไม่ ?",
      answer: "ทางเราไม่ได้รับออกแบบโลโก้ ลูกค้าต้องมีไฟล์โลโก้มาให้สำหรับขึ้นตัวอย่างงาน โดยเราจะทำการจัดวางโลโก้บนแบบเสื้อให้ เพื่อยืนยันตำแหน่งกับลูกค้าอีกครั้ง"
    },
    {
      question: "จัดส่งสินค้ายูนิฟอร์มพนักงาน เสื้อฟอร์มพนักงานให้ฟรีหรือเปล่า ?",
      answer: "สั่งผลิตตั้งแต่ 50 ตัวขึ้นไป บริการส่งฟรี ทั่วกรุงเทพและในปริมณฑล กรณีต่ำกว่า 50 ตัว คิดค่าบริการขนส่งตามจริง"
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
      answer: "รับทั้งงานพิมพ์และงานปัก ขั้นต่ำ 50 ชิ้นขึ้นไป"
    }
  ];

  return (
    <main className="min-h-screen font-kanit pb-20 bg-white">
        <div id="333" className="scroll-mt-40"> 
              {/* scroll-mt-24 ช่วยให้เวลาเลื่อนมาแล้วไม่โดน Navbar บัง */}
        </div>
      {/* Header Section */}
      <section className="bg-slate-50 py-16 px-6 border-b-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            FAQ | <span className="text-red-600">{isEn ? "Frequently Asked Questions" : "คำถามที่พบบ่อย"}</span>
          </h1>          
          <p className="text-lg text-muted-foreground italic">
            {isEn ? "Common questions about employee uniforms and polo shirts from Toffy Boutique." : "รวมคำตอบเกี่ยวกับ ยูนิฟอร์มพนักงาน เสื้อฟอร์มพนักงาน เสื้อโปโลพนักงาน โดย ทอฟฟี่ บูติก"}
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
              <AccordionContent className="text-lg text-gray-800 leading-relaxed pb-5 border-t pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Support CTA */}
      <section className="max-w-3xl mx-auto px-6 mt-16 text-center bg-red-50 py-10 rounded-3xl border border-red-100">
        <MessageCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{isEn ? "Still have questions?" : "ยังมีข้อสงสัยอื่นเพิ่มเติม?"}</h3>
        <p className="text-gray-600 mb-6">{isEn ? "Our sales team is ready to advise on fabrics and shirt styles every day." : "ฝ่ายขายของเรายินดีให้คำปรึกษาเรื่องเนื้อผ้าและแบบเสื้อทุกวัน"}
        </p>
        <Link 
          href={isEn ? "/en/pages/contact" : "/pages/contact"}
          className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg"
        >
          {isEn ? "Contact Us" : "ติดต่อสอบถามเพิ่มเติม"}
        </Link>
      </section>
    </main>
  );
}