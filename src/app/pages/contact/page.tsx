import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, PhoneCall, Mail, Download } from "lucide-react"
import Image from "next/image";

export default function ContactPage() {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      title: "Location",
      titleTh: "ที่ตั้งโรงงาน",
      description: (
        <div className="space-y-1 text-left mt-2 italic text-sm">
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
        <div className="space-y-1 text-left mt-2 text-sm">
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
        <div className="space-y-1 text-left mt-2 text-sm">
          <p><span className="font-semibold">Email:</span> sales@toffyboutique.com</p>
          <p><span className="font-semibold">Line ID:</span> @toffyboutique</p>
          <p><span className="font-semibold">Facebook:</span> toffyboutique</p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen font-kanit bg-white">
      {/* SECTION 1: Contact Cards */}
      <section className="bg-slate-50/50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Contact Us</h1>
            <p className="text-muted-foreground">ติดต่อสอบถามข้อมูลการผลิตเสื้อโปโลและยูนิฟอร์ม</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all bg-white">
                <CardHeader>
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle className="text-xl">
                    {item.title} <span className="block text-sm font-light text-gray-400">{item.titleTh}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: About Our Factory */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                เกี่ยวกับเรา <span className="text-red-600">โรงงานผลิตเสื้อโปโล</span>
              </h2>
              <div className="w-20 h-1.5 bg-red-500 rounded-full"></div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                <span className="font-bold text-gray-900">บริษัท ทอฟฟี่ บูติก จำกัด</span> โรงงานผลิตเสื้อผ้าสำเร็จรูปประสบการณ์กว่า 35 ปี เน้นคุณภาพและความประณีตในการผลิตเสื้อโปโลพนักงานและชุดฟอร์มทุกประเภท
              </p>
              <p>
                เราคัดสรรวัตถุดิบคุณภาพมาตรฐานสากล พร้อมพนักงานที่มีทักษะสูง ครบวงจรตั้งแต่การทำแพทเทิร์น พิมพ์ ปัก และจัดส่งทั่วประเทศ
              </p>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">35+</p>
                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">Quality</p>
                <p className="text-sm text-gray-500 font-medium">Focused Detail</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-red-500 rounded-2xl z-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/picture/toffyboutque_factory.jpg"
                alt="โรงงานผลิตเสื้อโปโล"
                width={800}
                height={500}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Map & Download */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Map Location | แผนที่การเดินทาง</h2>
          
          <div className="mb-10 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/picture/toffy_boutique_map.jpg"
              alt="Toffy Boutique Map"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> คลิกที่รูปด้านล่างเพื่อดาวน์โหลดแผนที่
            </p>
            <div className="flex justify-center">
              {/* FIXED ERROR HERE: Attributes moved to Image tag */}
              <a
                href="/picture/toffy_boutique_map.jpg"
                download="Toffy-Boutique-Map.jpg"
                className="transition-transform hover:scale-105 inline-block border-4 border-red-500 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/picture/toffy_boutique_map.jpg"
                  alt="Download Map"
                  width={400}
                  height={300}
                  className="cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}