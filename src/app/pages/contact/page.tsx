"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, PhoneCall, Mail, Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  const features = [
    {
      icon: <MapPin className="w-10 h-10 text-red-500" />,
      title: "Location",
      titleTh: "ที่ตั้งโรงงาน",
      description: (
        <div className="space-y-2 text-left mt-3 italic text-lg xl:text-xl">
          <p>258 ถนน พุทธบูชา แขวง บางมด เขตจอมทอง กรุงเทพฯ 10150</p>
          <p className="text-slate-400">258 Putthabucha Road Bangmod Jomthong Bangkok 10150</p>
        </div>
      ),
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-red-500" />,
      title: "Call Us",
      titleTh: "เบอร์โทรศัพท์",
      description: (
        <div className="space-y-2 text-left mt-3 text-lg xl:text-xl font-medium">
          <p><span className="font-bold text-gray-900">Office:</span> 02-428-2591, 02-874-0205</p>
          <p><span className="font-bold text-gray-900">คุณอ๊อบ:</span> 084-099-3799</p>
          <p><span className="font-bold text-gray-900">คุณก้อย:</span> 095-639-6142</p>
        </div>
      ),
    },
    {
      icon: <Mail className="w-10 h-10 text-red-500" />,
      title: "Social Media",
      titleTh: "ช่องทางติดต่ออื่นๆ",
      description: (
        <div className="space-y-2 text-left mt-3 text-lg xl:text-xl">
          <p>
            <span className="font-bold text-gray-900">Email:</span>{" "}
            <a href="mailto:sales@toffyboutique.com" className="hover:text-red-600 transition-colors underline decoration-red-100 underline-offset-4">
              sales@toffyboutique.com
            </a>
          </p>
          <p>
            <span className="font-bold text-gray-900">Facebook:</span>{" "}
            <a href="https://www.facebook.com/toffyboutique" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors underline decoration-red-100 underline-offset-4">
              toffyboutique
            </a>
          </p>
          <p>
            <span className="font-bold text-gray-900">Line ID:</span>{" "}
            <a href="https://line.me/R/ti/p/@toffyboutique" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors underline decoration-red-100 underline-offset-4">
              @toffyboutique
            </a>
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-6">
            <div className="flex-1">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Scan to Add Line</p>
                <p className="text-xs text-slate-400">สะดวกและรวดเร็วที่สุด</p>
            </div>
            <div className="relative group w-24 h-24 xl:w-28 xl:h-28 bg-white p-2 rounded-2xl shadow-lg border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <Image 
                src="/picture/loa_toffyboutique.png" 
                alt="Line QR Code Toffy Boutique"
                fill
                className="object-contain p-1"
              />
              <div className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen font-noto bg-white">
      {/* SECTION 1: Contact Cards */}
      <section className="bg-slate-50/50 py-20 xl:py-32 px-6">
        {/* ขยาย Container เป็น 1550px */}
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-start mb-16"
          >
            <div className="flex items-center gap-3 text-red-600 mb-4">
                <div className="h-1 w-12 bg-red-600 rounded-full" />
                <span className="text-sm font-black uppercase tracking-[0.3em]">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-none">
                Contact <span className="text-red-600">Us</span>
            </h1>
            <p className="text-slate-500 text-xl xl:text-2xl font-medium max-w-3xl">
                ติดต่อสอบถามข้อมูลการผลิตเสื้อโปโลและยูนิฟอร์มครบวงจร <br />
                เรายินดีให้คำปรึกษาแก่ทุกองค์กร
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white h-full rounded-[2.5rem] overflow-hidden group">
                  <CardHeader className="p-8 xl:p-10 pb-4">
                    <div className="mb-6 bg-red-50 w-20 h-20 flex items-center justify-center rounded-[2rem] group-hover:bg-red-600 transition-colors duration-500">
                      <div className="group-hover:text-white transition-colors duration-500">
                        {item.icon}
                      </div>
                    </div>
                    <CardTitle className="text-3xl xl:text-4xl font-black text-gray-900 tracking-tight">
                      {item.title} 
                      <span className="block text-sm font-bold text-red-600 mt-2 uppercase tracking-[0.2em]">{item.titleTh}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 xl:p-10 pt-0">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: About Our Factory */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 xl:py-40">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-block bg-red-600 text-white text-xs font-black px-4 py-1 uppercase tracking-widest rounded-sm">
                Since 1989
              </div>
              <h2 className="text-5xl xl:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase">
                Expert in <br />
                <span className="text-red-600">Uniform</span>
              </h2>
              <div className="w-24 h-3 bg-red-600 rounded-full"></div>
            </div>
            
            <div className="space-y-8 text-slate-600 leading-relaxed text-xl xl:text-2xl font-medium italic">
              <p>
                <span className="font-black text-gray-900 not-italic">บริษัท ทอฟฟี่ บูติก จำกัด</span> เราคือโรงงานผลิตเสื้อผ้าสำเร็จรูปที่มีประสบการณ์ยาวนานกว่า 35 ปี ย่านพุทธบูชา-พระราม 2
              </p>
              <p className="not-italic text-lg xl:text-xl text-slate-500 font-normal">
                เราเชี่ยวชาญการผลิตเสื้อโปโลพนักงาน ชุดยูนิฟอร์มองค์กร และสินค้าพรีเมียม โดยเน้นความประณีตในการตัดเย็บและการเลือกสรรเนื้อผ้าที่ดีที่สุด เพื่อส่งมอบความคุ้มค่าให้แก่ลูกค้าของเรา
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-gray-100">
              <div>
                <p className="text-5xl xl:text-7xl font-black text-gray-900 tracking-tighter">35<span className="text-red-600">+</span></p>
                <p className="text-xs xl:text-sm text-slate-400 font-black uppercase tracking-[0.2em] mt-2">Years Experience</p>
              </div>
              <div>
                <p className="text-5xl xl:text-7xl font-black text-gray-900 tracking-tighter">PRM</p>
                <p className="text-xs xl:text-sm text-slate-400 font-black uppercase tracking-[0.2em] mt-2">Quality Control</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -bottom-10 -right-10 w-full h-full border-[12px] border-slate-100 rounded-[3rem] z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl group">
              <Image
                src="/picture/toffyboutque_factory.jpg"
                alt="โรงงานผลิตเสื้อโปโล"
                width={1000}
                height={800}
                className="w-full h-[550px] xl:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <p className="text-white text-xl font-bold italic">Toffy Boutique Factory Environment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Map & Download Button */}
      <section id="222" className="bg-slate-50 py-32 xl:py-48 px-6 text-black overflow-hidden scroll-mt-20">
        <div className="max-w-[1200px] mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl xl:text-6xl font-black tracking-tighter uppercase">Map Location</h2>
            <div className="h-1.5 w-20 bg-red-600 mx-auto rounded-full" />
            <p className="text-slate-500 text-xl xl:text-2xl font-medium max-w-2xl mx-auto">
              โรงงานตั้งอยู่บนถนนพุทธบูชา เข้าออกได้สะดวกจากทางด่วนพระราม 9 หรือถนนกาญจนาภิเษก
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden border-[16px] border-white shadow-[0_30px_100px_rgba(0,0,0,0.1)] bg-white group cursor-zoom-in"
          >
            <Image
              src="/picture/toffy_boutique_map.jpg"
              alt="Toffy Boutique Map"
              width={1400}
              height={1000}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <a
              href="/picture/toffy_boutique_map.jpg"
              download="Toffy-Boutique-Map.jpg"
              className="group flex items-center gap-4 bg-red-600 hover:bg-black text-white px-12 py-6 rounded-full font-black text-lg xl:text-xl shadow-2xl shadow-red-200 transition-all hover:-translate-y-2 active:scale-95 w-full sm:w-auto justify-center uppercase tracking-widest"
            >
              <Download className="w-6 h-6 animate-bounce group-hover:animate-none" />
              Download Map
            </a>

            <a
              href="https://maps.app.goo.gl/hcY1o5tJ64cFzwop6" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white hover:bg-slate-100 text-slate-900 px-12 py-6 rounded-full font-black text-lg xl:text-xl border-2 border-slate-200 transition-all hover:-translate-y-2 w-full sm:w-auto justify-center uppercase tracking-widest"
            >
              <ExternalLink className="w-6 h-6 text-red-600" />
              Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}