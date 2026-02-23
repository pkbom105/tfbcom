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
  ArrowRightCircle 
} from "lucide-react";

export default function Footer() {
  return (
    // bg-gray-50 คือสีเทาประมาณ 5% และ text-gray-900 คือสีดำเกือบสนิทเพื่อให้ดูพรีเมียม
    <footer className="bg-gray-50 text-gray-900 font-noto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Hours */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/picture/toffy_logo_2.png" 
                alt="Toffy Boutique Logo" 
                width={180} 
                height={60}
                className="object-contain"
              />
            </Link>
            <div className="space-y-3">
              <h4 className="text-black font-bold flex items-center gap-2">
                <Clock size={18} className="text-red-600" /> เวลาทำการ
              </h4>
              <p className="text-ml leading-relaxed text-gray-700">
                จันทร์ - ศุกร์<br />
                <span className="text-black text-lg font-bold">08.00 - 18.00 น.</span>
              </p>
            </div>
          </div>

          {/* Column 2: Address & Phone */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-lg border-l-4 border-red-600 pl-3">ติดต่อเรา</h4>
            <div className="space-y-4">
              <div className="flex gap-3 mt-2">
                <MapPin size={24} className="text-red-600 shrink-0" />
                <p className="text-ml leading-relaxed text-gray-800">
                  258 ถนนพุทธบูชา บางมด จอมทอง กรุงเทพฯ 10150
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs font-black text-gray-700 uppercase tracking-wider">Office :</p>
                <div className="flex items-center gap-2 text-gray-800 hover:text-red-600 transition-colors font-medium">
                  <Phone size={14} className="text-red-600" />
                  <a href="tel:024282591">02-428-2591</a>, <a href="tel:028740205">02-874-0205</a>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-black text-gray-700 uppercase tracking-wider">Sale :</p>
                <p className="text-ml text-gray-700">
                  คุณอ๊อบ: <a href="tel:0840993799" className="text-black font-bold hover:text-red-600">084-099-3799</a>
                </p>
                <p className="text-ml text-gray-700">
                  คุณก้อย: <a href="tel:0956396142" className="text-black font-bold hover:text-red-600">095-639-6142</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Social & Email */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-lg border-l-4 border-red-600 pl-3">ติดตามเรา</h4>
            <div className="space-y-4">
              <a href="mailto:sales@toffyboutique.com" className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                  <Mail size={16} />
                </div>
                <span className="text-ml font-medium">sales@toffyboutique.com</span>
              </a>

              <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Facebook size={16} />
                </div>
                <span className="text-ml font-medium">toffyboutique</span>
              </a>

              <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                  <MessageCircle size={16} />
                </div>
                <span className="text-ml font-medium">Line ID: @toffyboutique</span>
              </a>
            </div>
          </div>

          {/* Column 4: More Detail */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-lg border-l-4 border-red-600 pl-3">More Detail</h4>
            <p className="text-ml leading-relaxed italic text-gray-800">
              "เราคือผู้เชี่ยวชาญด้านการผลิตชุดยูนิฟอร์ม 
              ที่ได้รับความไว้วางใจจากองค์กรชั้นนำ 
              ด้วยประสบการณ์กว่า 35 ปี มั่นใจได้ในคุณภาพและบริการ"
            </p>
            <div className="pt-2">
              <Link href="/pages/order" className="text-red-600 flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all">
                เริ่มต้นสั่งผลิตสินค้า <ArrowRightCircle size={18} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} TOFFY BOUTIQUE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/pages/faq#333" className="hover:text-red-600 transition-colors">FAQ</Link>
            <Link href="/pages/payment#111" className="hover:text-red-600 transition-colors">Payment</Link>
            <Link href="/pages/contact#222" className="hover:text-red-600 transition-colors">Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}