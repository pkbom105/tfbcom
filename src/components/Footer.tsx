"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,  
  Facebook, 
  MessageCircle, 
  ArrowRightCircle,
  ExternalLink 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 font-noto border-t border-gray-200 w-full">
      {/* ปรับ max-w เป็น 1720px เพื่อรองรับจอ 1800px ได้สวยงามพอดี */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        
        {/* ปรับ Gap ให้กว้างขึ้นในจอใหญ่ (xl:gap-20) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-20">
          
          {/* Column 1: Logo & Hours */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image 
                src="/picture/toffy_logo_3.png" 
                alt="Toffy Boutique Logo" 
                width={180} // เพิ่มขนาดโลโก้เล็กน้อยสำหรับจอใหญ่
                height={60}
                className="object-contain"
              />
            </Link>
            <div className="space-y-4">
              <h4 className="text-black font-bold flex items-center gap-2 text-lg">
                <Clock size={20} className="text-red-600" /> เวลาทำการ
              </h4>
              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                จันทร์ - ศุกร์<br />
                <span className="text-black text-xl font-black">08.00 - 18.00 น.</span>
              </p>
            </div>
          </div>

          {/* Column 2: Address & Phone */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-xl border-l-4 border-red-600 pl-4">ติดต่อเรา</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 text-gray-800 group font-medium">
                <MapPin size={26} className="text-red-600 shrink-0 mt-1" />                
                <a 
                  href="https://maps.google.com" // แนะนำให้ใส่ URL เต็ม
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base lg:text-lg leading-relaxed hover:text-red-600 transition-colors flex flex-col gap-2"
                >
                  258 ถนนพุทธบูชา บางมด จอมทอง กรุงเทพฯ 10150
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-bold">
                    <ExternalLink size={14} /> ดูแผนที่ Google Maps
                  </span>
                </a>        
              </div>             
            
              <div className="space-y-2 pt-2">
              <h5 className="text-black font-bold flex items-center gap-2 text-lg">
                <Phone size={20} className="text-red-600" /> Office
              </h5>               
                <p className="text-base lg:text-md text-gray-700">
                02-428-2591 <a href="tel:0840993799" className="text-black text-md font-black hover:text-red-600">084-099-3799</a>
                </p>
                <p className="text-base lg:text-md text-gray-700">
                02-428-2591 <a href="tel:0956396142" className="text-black text-md font-black hover:text-red-600">095-639-6142</a>
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="text-black font-bold flex items-center gap-2 text-lg">
                  <Phone size={20} className="text-red-600" /> Sale
                </h5>
                <p className="text-base lg:text-md text-gray-700">
                  คุณอ๊อบ: <a href="tel:0840993799" className="text-black font-black hover:text-red-600">084-099-3799</a>
                </p>
                <p className="text-base lg:text-md text-gray-700">
                  คุณก้อย: <a href="tel:0956396142" className="text-black font-black hover:text-red-600">095-639-6142</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Social & Email */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-xl border-l-4 border-red-600 pl-4">ติดตามเรา</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 text-gray-700 hover:text-green-600 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-md">
                  <MessageCircle size={20} />
                </div>
                <span className="text-md font-semibold">Line ID: @toffyboutique</span>
              </a>
              
              <a href="mailto:sales@toffyboutique.com" className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center  group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                  <Mail size={20} />
                </div>
                <span className="text-md font-semibold">sales@toffyboutique.com</span>
              </a>

              <a href="#" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                  <Facebook size={20} />
                </div>
                <span className="text-md font-semibold">toffyboutique</span>
              </a>             
            </div>
          </div>

          {/* Column 4: More Detail */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-xl border-l-4 border-red-600 pl-4">More Detail</h4>
            <p className="text-lg leading-relaxed italic text-gray-800 font-medium">
              "เราคือผู้เชี่ยวชาญด้านการผลิตชุดยูนิฟอร์ม 
              ที่ได้รับความไว้วางใจจากองค์กรชั้นนำ 
              ด้วยประสบการณ์กว่า 35 ปี มั่นใจได้ในคุณภาพและบริการ"
            </p>
            <div className="pt-4">
              <Link href="/pages/order" className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-3 text-base font-bold hover:bg-black transition-all shadow-lg">
                เริ่มต้นสั่งผลิตสินค้า <ArrowRightCircle size={20} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-bold text-gray-500 uppercase tracking-[0.25em]">
          <p>© {new Date().getFullYear()} TOFFY BOUTIQUE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/articles" className="hover:text-red-600 transition-colors">บทความ</Link>
            <Link href="/pages/faq#333" className="hover:text-red-600 transition-colors">FAQ</Link>
            <Link href="/pages/payment#111" className="hover:text-red-600 transition-colors">Payment</Link>
            <Link href="/pages/contact#222" className="hover:text-red-600 transition-colors">Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}