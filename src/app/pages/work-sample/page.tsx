"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Printer, CheckCircle2, Award } from "lucide-react";

export default function SampleWorkPage() {
  // Section 1: งานปัก (Example-1.jpg to Example-40.jpg)
  const embroideryPhotos = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    src: `/03emb/Example-${i + 1}.jpg`,
    alt: `ตัวอย่างงานปักคอมพิวเตอร์ เสื้อโปโลพนักงาน แบบที่ ${i + 1} - Toffy Boutique`,
    seoTitle: `งานปักโลโก้ละเอียดมาตรฐานญี่ปุ่น ${i + 1}`
  }));

  // Section 2: งานพิมพ์ (screen01.jpg to screen28.jpg)
  const screenPhotos = Array.from({ length: 28 }, (_, i) => {
    const fileNumber = (i + 1).toString().padStart(2, '0');
    return {
      id: i + 1,
      src: `/03screen/screen${fileNumber}.jpg`,
      alt: `ตัวอย่างงานสกรีนเสื้อฟอร์มพนักงาน Silk Screen แบบที่ ${fileNumber} - Toffy Boutique`,
      seoTitle: `งานพิมพ์สกรีนสีคมชัดไม่หลุดลอก ${fileNumber}`
    };
  });

  return (
    <main className="min-h-screen font-kanit bg-white pb-20">
      {/* --- Hero Section & SEO Text --- */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-red-600 font-bold uppercase tracking-widest text-sm"
          >
            <Award size={20} />
            <span>Premium Quality Workmanship</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Sample Work <span className="text-red-600">| ตัวอย่างผลงาน</span>
          </h1>
          {/* SEO Text Description */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            รวบรวมผลงานผลิตจริงจาก <strong>Toffy Boutique</strong> เราคือโรงงานผลิตเสื้อโปโลและยูนิฟอร์มพนักงานที่ได้รับความไว้วางใจจากองค์กรชั้นนำ 
            โดดเด่นด้วยงานปักคอมพิวเตอร์ความละเอียดสูงและงานสกรีน Silk Screen สีสดคมชัด ทนทานต่อการซัก
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <Tabs defaultValue="embroidery" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-slate-100 p-1 h-14 rounded-full border-none shadow-none">
              <TabsTrigger 
                value="embroidery" 
                className="px-8 rounded-full text-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all"
              >
                <Scissors className="mr-2 w-5 h-5" /> งานปัก (Embroidery)
              </TabsTrigger>
              <TabsTrigger 
                value="screen" 
                className="px-8 rounded-full text-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all"
              >
                <Printer className="mr-2 w-5 h-5" /> งานพิมพ์ (Screen)
              </TabsTrigger>
            </TabsList>
          </div>

          {/* --- Section 1: Embroidery --- */}
          <TabsContent value="embroidery" className="space-y-12 outline-none">
            <div className="bg-white p-8 md:p-12 border-none">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                    <CheckCircle2 className="text-red-600" />
                    งานปักพรีเมียม มาตรฐานญี่ปุ่น
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    ยกระดับภาพลักษณ์องค์กรด้วยงานปักจากเครื่อง <strong>Barudan</strong> เทคโนโลยีอันดับหนึ่งจากญี่ปุ่น 
                    ปักลวดลายโลโก้เสื้อฟอร์มพนักงานได้อย่างแม่นยำ ฝีเข็มแน่น ลายคมสวย ไม่เป็นขุย 
                    รองรับสีไหมปักได้สูงสุด 9 สีต่อหนึ่งลวดลาย พร้อมทีมช่างตีบล็อกมืออาชีพ
                  </p>
                </div>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/03emb/Example-1.jpg" 
                    alt="เทคโนโลยีเครื่องปัก Barudan จากญี่ปุ่นเพื่อเสื้อโปโลคุณภาพ" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>

            {/* Grid 4 Column - Ratio 3:2 - Border Off */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {embroideryPhotos.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (idx % 4) * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden border-none shadow-none bg-transparent">
                    <CardContent className="p-0 relative aspect-[3/2] overflow-hidden rounded-xl">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </CardContent>
                    {/* SEO Hidden Label for context */}
                    <span className="sr-only">{photo.seoTitle}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* --- Section 2: Screen Print --- */}
          <TabsContent value="screen" className="space-y-12 outline-none">
            <div className="bg-white p-8 md:p-12 border-none">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                    <CheckCircle2 className="text-red-600" />
                    งานพิมพ์ Silk Screen ความละเอียดสูง
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    รับผลิตเสื้อพร้อมงานพิมพ์สกรีนคุณภาพสูง ด้วยเทคนิค Silk Screen ที่เน้นความคงทนของสี 
                    ลายพิมพ์คมชัด ไม่แตกแตกลายงา เหมาะสำหรับเสื้อยืดคอกลมและเสื้อโปโลพนักงานทุกเนื้อผ้า 
                    เราใช้สีสกรีนเกรดพรีเมียมที่ปลอดภัยและเป็นมิตรต่อสิ่งแวดล้อม
                  </p>
                </div>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/03screen/screen01.jpg" 
                    alt="งานสกรีน Silk Screen บนเสื้อยืดและเสื้อโปโลพนักงาน" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>

            {/* Grid 4 Column - Ratio 3:2 - Border Off */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {screenPhotos.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (idx % 4) * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden border-none shadow-none bg-transparent">
                    <CardContent className="p-0 relative aspect-[3/2] overflow-hidden rounded-xl">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </CardContent>
                    <span className="sr-only">{photo.seoTitle}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* --- SEO Keyword Footer --- */}
      <section className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <p className="text-slate-400 text-sm italic">
          Toffy Boutique: เชี่ยวชาญงานผลิตเสื้อโปโลพนักงาน, ยูนิฟอร์มบริษัท, งานปักคอมพิวเตอร์ และงานสกรีนคุณภาพ
        </p>
      </section>
    </main>
  );
}