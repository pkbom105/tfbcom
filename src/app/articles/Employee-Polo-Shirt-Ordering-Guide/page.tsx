import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shirt, Palette, MousePointer2, Users, ChevronRight, Calendar, Clock } from 'lucide-react';

/** * --- EDITABLE METADATA ---
 * ส่วนนี้ใช้สำหรับแสดงผลในหน้านี้ และให้หน้า Index ดึงข้อมูลไปแสดง
 */
const articleMeta = {
  title: "คู่มือสั่งทำเสื้อฟอร์มพนักงานโปโล เลือกเนื้อผ้าและดีไซน์อย่างไรให้พนักงานอยากใส่",
  thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200",
  date: "23 กุมภาพันธ์ 2026",
  author: "Toffy Admin",
  readTime: "5 นาที"
};

/**
 * --- SEO METADATA ---
 * กำหนดค่าสำหรับแท็บ Browser และการแชร์ลง Social Media
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: articleMeta.title,
    description: "สรุปเทคนิคการเลือกเนื้อผ้าและดีไซน์เสื้อโปโลพนักงานให้ดูพรีเมียมและสวมใส่สบาย",
    openGraph: {
      images: [articleMeta.thumbnail],
    },
  };
}

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
      {/* Article Hero Section */}
      <div className="max-w-4xl mx-auto pt-12 px-6">
        {/* Thumbnail Image */}
        <div className="w-full h-64 md:h-[450px] rounded-3xl overflow-hidden mb-10 shadow-lg relative">
          <img 
            src={articleMeta.thumbnail} 
            alt={articleMeta.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Date and Meta */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500 mb-6 font-medium">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-red-600" />
            {articleMeta.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-red-600" />
            ใช้เวลาอ่าน {articleMeta.readTime}
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-red-600" />
            โดย {articleMeta.author}
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          {articleMeta.title}
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-red-500 pl-6 py-2 bg-slate-50 rounded-r-xl">
          การสั่งทำชุดยูนิฟอร์มพนักงาน ไม่ใช่แค่การเลือกเสื้อที่มีโลโก้บริษัทแล้วจบไป 
          แต่คือการสร้างความภาคภูมิใจและภาพลักษณ์ที่ดีให้กับองค์กร
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-20 mt-12">
        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.id} className="group border-b border-gray-100 pb-12 last:border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-red-50 group-hover:scale-110 transition-all duration-300">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
              </div>
              
              <div className="text-lg text-gray-600 mb-6 ml-0 md:ml-14 leading-relaxed">
                {section.content}
              </div>

              <div className="ml-0 md:ml-14">
                <Link 
                  href={section.link}
                  className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all underline decoration-red-200 underline-offset-8"
                >
                  อ่านรายละเอียดเพิ่มเติม <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Ending Quote Card */}
        <div className="mt-16 p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-light leading-relaxed">
              "การลงทุนกับเสื้อฟอร์มคุณภาพดีคือการลงทุนกับความสุขของคนในองค์กร"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/pages/contact"
                className="bg-red-600 hover:bg-red-700 text-white text-center px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
              >
                ปรึกษาการสั่งผลิตฟรี
              </Link>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-red-600/20 rounded-full blur-[80px]"></div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;