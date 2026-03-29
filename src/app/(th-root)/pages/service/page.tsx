import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";

import { Monitor, Smartphone, Globe, MapPinned } from "lucide-react" // npm install lucide-react

  
  const features = [
     {        
      title: "Web Design",
      titleTh: "ออกแบบเว็บไซต์",
      description: "Responsive and modern websites built with Next.js.",
      icon: <MapPinned className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Mobile First",
      titleTh: "รองรับมือถือ",
      description: "Optimized for all screen sizes and mobile devices.",
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
    },
    {
      title: "SEO Friendly",
      titleTh: "รองรับ Google SEO",
      description: "Fast loading speeds to help your site rank higher.",
      icon: <Globe className="w-8 h-8 text-red-500" />,
    },
  ];
  
  export default function ContentGrid() {
    return (
      <div className="max-w-6xl mx-auto p-6 font-kanit">
      <br></br>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{item.icon}</div>
                <CardTitle className="text-xl">
                  {item.title} <span className="block text-sm font-light text-gray-500">{item.titleTh}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <br></br>
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Contact Us | ติดต่อเรา</h1>
            <p className="text-gray-600 mb-8">
                รับผลิตเสื้อ รับทําเสื้อโปโล ผลิตเสื้อโปโล ยูนิฟอร์มพนักงาน ชุดฟอร์มพนักงานโรงงาน
                <br></br>
                <br></br>
                <div className="w-full">
                    <Image
                        src="/picture/toffy_boutique_map.jpg"
                        alt="Map"
                        width={1920} // ใส่ค่าความกว้างจริงของรูป
                        height={1080} // ใส่ค่าความสูงจริงของรูป
                        className="w-full h-auto border-4 border-red-500" // w-full h-auto จะทำให้รูปกว้างเต็มและสูงตามสัดส่วน
                    />
                </div>
            </p>
      </div>
    )
}
