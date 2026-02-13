"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, PhoneCall, Mail, Download, ExternalLink } from "lucide-react"
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      title: "Location",
      titleTh: "ที่ตั้งโรงงาน",
      description: (
        <div className="space-y-1 text-left mt-2 italic text-lg">
          <p>258 ถนน พุทธบูชา แขวง บางมด เขตจอมทอง กรุงเทพฯ 10150</p>
          <p>258 Putthabucha Road Bangmod Jomthong Bangkok 10150</p>
        </div>
      ),
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-red-500" />,
      title: "Call Us",
      titleTh: "เบอร์โทรศัพท์",
      description: (
        <div className="space-y-1 text-left mt-2 text-lg">
          <p><span className="font-semibold">Office:</span> 02-428-2591, 02-874-0205</p>
          <p><span className="font-semibold">คุณอ๊อบ:</span> 084-099-3799</p>
          <p><span className="font-semibold">คุณก้อย:</span> 095-639-6142</p>
        </div>
      ),
    },
    {
      icon: <Mail className="w-8 h-8 text-red-500" />,
      title: "Social Media",
      titleTh: "ช่องทางติดต่ออื่นๆ",
      description: (
        <div className="space-y-1 text-left mt-2 text-lg">
  <p>
    <span className="font-semibold">Email:</span>{" "}
    <a href="mailto:sales@toffyboutique.com" className="hover:text-red-600 transition-colors">
      sales@toffyboutique.com
    </a>
  </p>
  <p>
    <span className="font-semibold">Facebook:</span>{" "}
    <a 
      href="https://www.facebook.com/toffyboutique" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-red-600 transition-colors"
    >
      toffyboutique
    </a>
  </p>
    <p>
      <span className="font-semibold">Line ID:</span>{" "}
      <a 
        href="https://line.me/R/ti/p/@toffyboutique" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-red-600 transition-colors"
      >
        @toffyboutique
      </a>
  </p>

  {/* --- Line QR Code Section --- */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
          Scan to Add Line
        </p>
            <div className="relative group w-32 h-32 bg-white p-2 rounded-2xl shadow-md border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <Image 
                src="/picture/loa_toffyboutique.png" // เปลี่ยน path เป็นไฟล์รูป QR Code จริงของคุณ
                alt="Line QR Code Toffy Boutique"
                fill
                className="object-contain p-1"
              />
              {/* ตกแต่งมุมเพิ่มความพรีเมียม */}
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
    <main className="min-h-screen font-kanit bg-white">
      {/* SECTION 1: Contact Cards */}
      <section className="bg-slate-50/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-start mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Contact Us</h1>
            <p className="text-muted-foreground text-lg">ติดต่อสอบถามข้อมูลการผลิตเสื้อโปโลและยูนิฟอร์มครบวงจร</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full">
                  <CardHeader>
                    <div className="mb-4 bg-red-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                      {item.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {item.title} 
                      <span className="block text-sm font-medium text-red-500 mt-1 uppercase tracking-wider">{item.titleTh}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                เกี่ยวกับเรา <br />
                <span className="text-red-600">โรงงานผลิตเสื้อโปโลมาตรฐาน</span>
              </h2>
              <div className="w-24 h-2 bg-red-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
              <p>
                <span className="font-bold text-gray-900">บริษัท ทอฟฟี่ บูติก จำกัด</span> เราคือโรงงานผลิตเสื้อผ้าสำเร็จรูปที่มีประสบการณ์ยาวนานกว่า 35 ปี ย่านพุทธบูชา-พระราม 2
              </p>
              <p>
                เราเชี่ยวชาญการผลิตเสื้อโปโลพนักงาน ชุดยูนิฟอร์มองค์กร และสินค้าพรีเมียม โดยเน้นความประณีตในการตัดเย็บและการเลือกสรรเนื้อผ้าที่ดีที่สุด เพื่อส่งมอบความคุ้มค่าให้แก่ลูกค้าของเรา
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-gray-100">
              <div>
                <p className="text-4xl font-black text-gray-900">35+</p>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-black text-gray-900">Premium</p>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Quality Control</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-slate-200 rounded-3xl z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/picture/toffyboutque_factory.jpg"
                alt="โรงงานผลิตเสื้อโปโล"
                width={800}
                height={600}
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-medium italic">Toffy Boutique Factory Environment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Map & Download Button */}
      <section className="bg-gray-100 py-24 px-6 text-black overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Map Location | แผนที่การเดินทาง</h2>
            <p className="text-slate-800 max-w-2xl mx-auto">
              โรงงานตั้งอยู่บนถนนพุทธบูชา เข้าออกได้สะดวกจากทางด่วนพระราม 9 หรือถนนกาญจนาภิเษก
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border-8 border-slate-500 shadow-2xl bg-white"
          >
            <Image
              src="/picture/toffy_boutique_map.jpg"
              alt="Toffy Boutique Map"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
            {/* Download Button */}
            <a
              href="/picture/toffy_boutique_map.jpg"
              download="Toffy-Boutique-Map.jpg"
              className="group relative flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-red-900/20 transition-all hover:-translate-y-1 active:scale-95 w-full md:w-auto justify-center"
            >
              <Download className="w-6 h-6 animate-bounce group-hover:animate-none" />
              Download Map (JPG)
            </a>

            {/* Google Maps External Link Button */}
            <a
              href="https://maps.app.goo.gl/hcY1o5tJ64cFzwop6" // เปลี่ยนเป็นลิ้งค์จริงของคุณ
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-600 hover:bg-slate-700 text-white px-10 py-5 rounded-full font-bold text-lg border border-slate-700 transition-all hover:-translate-y-1 w-full md:w-auto justify-center"
            >
              <ExternalLink className="w-6 h-6 text-slate-400" />
              Open in Google Maps
            </a>
          </div>
          
          <p className="text-slate-500 text-sm italic">
            
          </p>
        </div>
      </section>
    </main>
  );
}