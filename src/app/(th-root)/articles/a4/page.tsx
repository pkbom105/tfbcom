import React from 'react';
import Link from 'next/link';
import { Shirt, Palette, MousePointer2, Users, ChevronRight } from 'lucide-react';

const ArticlePage = () => {
  const sections = [
    {
      id: 1,
      title: "1. การเลือกเนื้อผ้า: หัวใจของความสบาย",
      content: (
        <div className="space-y-3">
          <p>เนื้อผ้าคือปัจจัยสำคัญที่สุดที่ตัดสินว่าพนักงานจะ "อยากใส่" หรือ "อยากถอด" โดยเฉพาะในสภาพอากาศเมืองไทยที่ร้อนชื้น เนื้อผ้าที่นิยมมีหลักๆ ดังนี้:</p>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li><strong>TK (Polyester 100%):</strong> ราคาประหยัด สีสันสดใสไม่ซีดจาง ไม่ค่อยยับ เหมาะกับงานในห้องแอร์</li>
            <li><strong>TC (Cotton ผสม Polyester):</strong> ระบายอากาศปานกลาง อยู่ทรงสวย ไม่ยับง่ายเหมือน Cotton แท้</li>
            <li><strong>CVC (Cotton สูง):</strong> สัมผัสนุ่ม ซับเหงื่อและระบายความร้อนดีเยี่ยม เหมาะกับงานกลางแจ้ง</li>
            <li><strong>Micro Fiber / Dry Tech:</strong> เทคโนโลยีใหม่ ระบายอากาศแบบรูพรุน แห้งไว ไม่ต้องรีด</li>
          </ul>
        </div>
      ),
      link: "/pages/fabric",
      icon: <Shirt className="w-6 h-6 text-red-500" />
    },
    {
      id: 2,
      title: "2. ดีไซน์ที่ทันสมัย: ลบภาพจำชุดฟอร์มแบบเดิมๆ",
      content: (
        <div className="space-y-3">
          <p>เพื่อให้พนักงานรู้สึกมั่นใจ ดีไซน์ควรมีความร่วมสมัยและสามารถใส่ไปเดินห้างหลังเลิกงานได้โดยไม่เขินอาย:</p>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li><strong>ทรงเสื้อ (Fitting):</strong> มีให้เลือกทั้งทรงตรงสำหรับผู้ชายและทรงเข้ารูปสำหรับผู้หญิง</li>
            <li><strong>ปกเสื้อและปลายแขน:</strong> ใช้ "ผ้าทอขลิบสี" (Tipping) เพิ่มมิติให้ดูไม่เรียบเกินไป</li>
            <li><strong>สาบเสื้อ (Placket):</strong> เลือกสาบซ่อนกระดุม หรือสาบสีตัด เพื่อลุคที่เป็นแฟชั่นมากขึ้น</li>
          </ul>
        </div>
      ),
      link: "/pages/collection/polo",
      icon: <Palette className="w-6 h-6 text-purple-500" />
    },
    {
      id: 3,
      title: "3. โลโก้และการวางตำแหน่ง: น้อยแต่มาก (Less is More)",
      content: (
        <div className="space-y-3">
          <p>การมีโลโก้บริษัทขนาดใหญ่เกินไปอาจทำให้พนักงานรู้สึกเหมือนเป็น "ป้ายโฆษณาเคลื่อนที่":</p>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li><strong>งานปัก:</strong> ให้ความรู้สึกหรูหราและทนทาน เหมาะกับโลโก้มาตรฐาน</li>
            <li><strong>งานสกรีน/รีดเฟล็กซ์:</strong> เหมาะกับดีไซน์ที่มีรายละเอียดเยอะหรือต้องการความเรียบเนียน</li>
            <li><strong>ตำแหน่ง:</strong> นอกจากหน้าอก ลองวางที่แขนเสื้อหรือต้นคอด้านหลัง จะดูพรีเมียมกว่า</li>
          </ul>
        </div>
      ),
      link: "/pages/work-sample",
      icon: <MousePointer2 className="w-6 h-6 text-emerald-500" />
    },
    {
      id: 4,
      title: "4. สรุป: การสร้างความมีส่วนร่วม",
      content: (
        <p className="text-gray-700 leading-relaxed">
          เคล็ดลับสุดท้ายคือ "การลองสวมใส่" ก่อนสั่งผลิตจริง ควรขอตัวอย่างเนื้อผ้าและไซส์ (Size Chart) 
          มาให้พนักงานได้ลองสัมผัสและวัดขนาดที่แท้จริง เพราะไซส์ของแต่ละโรงงานอาจไม่เท่ากัน
        </p>
      ),
      link: "/pages/contact",
      icon: <Users className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto pt-16 pb-8 px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          คู่มือสั่งทำเสื้อฟอร์มพนักงานโปโล <span className="text-red-600">เลือกเนื้อผ้าและดีไซน์อย่างไรให้พนักงานอยากใส่</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          การสั่งทำชุดยูนิฟอร์มพนักงาน ไม่ใช่แค่การเลือกเสื้อที่มีโลโก้บริษัทแล้วจบไป 
          แต่คือการสร้างความภาคภูมิใจและภาพลักษณ์ที่ดีให้กับองค์กร
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.id} className="group border-b border-gray-100 pb-12 last:border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
              </div>
              
              <div className="text-lg text-gray-600 mb-6 ml-2 md:ml-14">
                {section.content}
              </div>

              <div className="ml-2 md:ml-14">
                <Link 
                  href={section.link}
                  className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
                >
                  อ่านรายละเอียดเพิ่มเติม <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Ending Quote */}
        <div className="mt-10 p-8 bg-slate-900 rounded-3xl text-white">
          <p className="text-lg mb-6 opacity-90">
            การลงทุนกับเสื้อฟอร์มคุณภาพดีคือการลงทุนกับความสุขของคนในองค์กร เมื่อพนักงานรู้สึกสบายและดูดี 
            ประสิทธิภาพในการทำงานและการเป็นตัวแทนแบรนด์ก็จะดียิ่งขึ้นตามไปด้วยครับ
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/pages/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-xl font-bold transition-colors"
            >
              ขอใบเสนอราคา
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;