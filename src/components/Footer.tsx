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

export default function Footer({ lang }: { lang: string }) {
  const isEn = lang === "en";
  const t = (th: string, en: string) => isEn ? en : th;
  const l = (path: string) => isEn ? `/en${path === "/" ? "" : path}` : path;

  return (
    <footer className="bg-gray-50 text-gray-900 font-noto border-t border-gray-200 w-full">
      {/* Container หลักปรับให้กว้างขึ้นเพื่อจอขนาดใหญ่ */}
      <div className="max-w-[1250px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-20">

          {/* Column 1: Logo & Hours */}
          <div className="space-y-8">
            <Link href={l("/")} className="inline-block">
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
              <h4 className="text-black font-bold flex items-center gap-2 text-sm">
                <Clock size={20} className="text-red-600" /> {t("เวลาทำการ", "Business Hours")}
              </h4>
              <p className="text-sm leading-relaxed text-gray-700">
                {t("จันทร์ - ศุกร์", "Monday - Friday")}<br />
                {/* ตัวเลขเวลาปรับให้เด่นชัดขึ้น */}
                <span className="text-black text-sm font-black">{t("08.00 - 18.00 น.", "08:00 AM - 06:00 PM")}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Address & Phone */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-lg md:text-sm border-l-4 border-red-600 pl-4 uppercase">{t("ติดต่อเรา", "Contact Us")}</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 text-gray-800 group font-medium">
                <MapPin size={24} className="text-red-600 shrink-0 mt-1" />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md md:text-sm leading-relaxed hover:text-red-600 transition-colors flex flex-col gap-2"
                >
                  {t("258 ถนนพุทธบูชา บางมด จอมทอง กรุงเทพฯ 10150", "258 Phutthabucha Rd, Bang Mot, Chom Thong, Bangkok 10150")}
                  <span className="text-[11px] text-gray-400 flex items-center gap-1 font-bold">
                    <ExternalLink size={12} /> {t("ดูแผนที่ Google Maps", "View on Google Maps")}
                  </span>
                </a>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="text-black font-bold flex items-center gap-2 text-md md:text-sm">
                  <Phone size={18} className="text-red-600" /> {t("สำนักงาน", "Office")}
                </h5>
                <p className="text-md md:text-sm text-gray-700">
                  {t("สำนักงาน", "Office")} <a href="tel:024282591" className="text-black font-black hover:text-red-600">02-428-2591</a>
                </p>
                <p className="text-md md:text-sm text-gray-700">
                  {t("สำนักงาน", "Office")} <a href="tel:028740205" className="text-black font-black hover:text-red-600">02-874-0205</a>
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="text-black font-bold flex items-center gap-2 text-md md:text-sm">
                  <Phone size={18} className="text-red-600" /> {t("ฝ่ายขาย", "Sales")}
                </h5>
                <p className="text-md md:text-sm text-gray-700">
                  {t("คุณอ๊อบ", "Ms. Aob")}: <a href="tel:0840993799" className="text-black font-black hover:text-red-600">084-099-3799</a>
                </p>
                <p className="text-md md:text-sm text-gray-700">
                  {t("คุณก้อย", "Ms. Koi")}: <a href="tel:0956396142" className="text-black font-black hover:text-red-600">095-639-6142</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Social & Email */}
          <div className="space-y-6">
            <h4 className="text-black font-bold text-lg md:text-sm border-l-4 border-red-600 pl-4 uppercase">{t("ติดตามเรา", "Follow Us")}</h4>
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
            <h4 className="text-black font-bold text-lg md:text-sm border-l-4 border-red-600 pl-4 uppercase">{t("เกี่ยวกับเรา", "About Us")}</h4>
            <p className="text-md md:text-sm leading-relaxed italic text-gray-800 font-medium">
              {t(
                "\"เราคือผู้เชี่ยวชาญด้านการผลิตชุดยูนิฟอร์ม ที่ได้รับความไว้วางใจจากองค์กรชั้นนำ ด้วยประสบการณ์กว่า 35 ปี มั่นใจได้ในคุณภาพและบริการ\"",
                "\"We are experts in uniform production, trusted by leading organizations. With over 35 years of experience, we guarantee quality and service.\""
              )}
            </p>
            <div className="pt-4">
              <Link href={l("/pages/order")} className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-3 text-md md:text-sm font-bold hover:bg-black transition-all shadow-lg">
                {t("สั่งผลิตสินค้า", "Order Now")} <ArrowRightCircle size={18} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar - ปรับขนาดเป็นตัวเล็กพิเศษเพื่อให้ดู Clean */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} TOFFY BOUTIQUE. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href={l("/articles")} className="hover:text-red-600 transition-colors">{t("บทความ", "Articles")}</Link>
            <Link href={l("/pages/faq")} className="hover:text-red-600 transition-colors">FAQ</Link>
            <Link href={l("/pages/payment")} className="hover:text-red-600 transition-colors">{t("การชำระเงิน", "Payment")}</Link>
            <Link href={l("/pages/contact")} className="hover:text-red-600 transition-colors">{t("แผนที่", "Maps")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}