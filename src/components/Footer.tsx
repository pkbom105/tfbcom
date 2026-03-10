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
      {/* Container หลักปรับให้กว้างขึ้นเพื่อจอขนาดใหญ่ */}
      <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-20">
          
          {/* Column 1: Logo & Hours */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image 
                src="/picture/toffy_logo_3.png" 
                alt="Toffy Boutique Logo" 
                width={180} 
                height={60}
                className="object-contain"
              />
            </Link>
            <div className="space-y-4">
              {/* Header บน Desktop ใช้ sm (14px) / Mobile ใช้ md (16px) */}
              <h4 className="text-black font-bold flex items-center gap-2 text-md md:text-sm">
                <Clock size={20} className="text-red-600" /> เวลาทำการ
              </h4>
              <p className="text-md md:text-sm leading-relaxed text-gray-700">
                จันทร์ - ศุกร์<br />
                {/* ตัวเลขเวลาปรับให้เด่นชัดขึ้น */}
                <span className="text-black text-md md:text-md font-black">08.00 - 18.00 น.</span>
              </p>
            </div>
          </div>

          {/* Column 2: Address & Phone */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-lg md:text-sm border-l-4 border-red-600 pl-4 uppercase">ติดต่อเรา</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 text-gray-800 group font-medium">
                <MapPin size={24} className="text-red-600 shrink-0 mt-1" />                
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md md:text-sm leading-relaxed hover:text-red-600 transition-colors flex flex-col gap-2"
                >
                  258 ถนนพุทธบูชา บางมด จอมทอง กรุงเทพฯ 10150
                  <span className="text-[11px] text-gray-400 flex items-center gap-1 font-bold">
                    <ExternalLink size={12} /> ดูแผนที่ Google Maps
                  </span>
                </a>         
              </div>             
            
              <div className="space-y-2 pt-2">
                <h5 className="text-black font-bold flex items-center gap-2 text-md md:text-sm">
                  <Phone size={18} className="text-red-600" /> สำนักงาน
                </h5>                
                <p className="text-md md:text-sm text-gray-700">
                  02-428-2591 <a href="tel:0840993799" className="text-black font-black hover:text-red-600">084-099-3799</a>
                </p>
                <p className="text-md md:text-sm text-gray-700">
                  02-428-2591 <a href="tel:0956396142" className="text-black font-black hover:text-red-600">095-639-6142</a>
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="text-black font-bold flex items-center gap-2 text-md md:text-sm">
                  <Phone size={18} className="text-red-600" /> ฝ่ายขาย
                </h5>
                <p className="text-md md:text-sm text-gray-700">
                  คุณอ๊อบ: <a href="tel:0840993799" className="text-black font-black hover:text-red-600">084-099-3799</a>
                </p>
                <p className="text-md md:text-sm text-gray-700">
                  คุณก้อย: <a href="tel:0956396142" className="text-black font-black hover:text-red-600">095-639-6142</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Social & Email */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-lg md:text-sm border-l-4 border-red-600 pl-4 uppercase">ติดตามเรา</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 text-gray-700 hover:text-green-600 transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                  <MessageCircle size={18} />
                </div>
                <span className="text-md md:text-sm font-semibold">Line ID: @toffyboutique</span>
              </a>
              
              <a href="mailto:sales@toffyboutique.com" className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                  <Mail size={18} />
                </div>
                <span className="text-md md:text-sm font-semibold">sales@toffyboutique.com</span>
              </a>

              <a href="#" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Facebook size={18} />
                </div>
                <span className="text-md md:text-sm font-semibold">toffyboutique</span>
              </a>               
            </div>
          </div>

          {/* Column 4: About & CTA */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-lg md:text-sm border-l-4 border-red-600 pl-4 uppercase">เกี่ยวกับเรา</h4>
            <p className="text-md md:text-sm leading-relaxed italic text-gray-800 font-medium">
              "เราคือผู้เชี่ยวชาญด้านการผลิตชุดยูนิฟอร์ม 
              ที่ได้รับความไว้วางใจจากองค์กรชั้นนำ 
              ด้วยประสบการณ์กว่า 35 ปี มั่นใจได้ในคุณภาพและบริการ"
            </p>
            <div className="pt-4">
              <Link href="/pages/order" className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-3 text-md md:text-sm font-bold hover:bg-black transition-all shadow-lg">
                สั่งผลิตสินค้า <ArrowRightCircle size={18} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar - ปรับขนาดเป็นตัวเล็กพิเศษเพื่อให้ดู Clean */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} TOFFY BOUTIQUE. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/articles" className="hover:text-red-600 transition-colors">บทความ</Link>
            <Link href="/pages/faq" className="hover:text-red-600 transition-colors">FAQ</Link>
            <Link href="/pages/payment" className="hover:text-red-600 transition-colors">การชำระเงิน</Link>
            <Link href="/pages/contact" className="hover:text-red-600 transition-colors">แผนที่</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}