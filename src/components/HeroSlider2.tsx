"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ข้อมูล Slide สำหรับ Desktop (4 รูป พร้อมตั้งค่าขนาด)
const DESKTOP_SLIDES = [
  {
    id: 1,
    bg: "/hp/slide/bg1.png",
    fg: "/hp/slide/fg1.png",
    fgWidth: 1200, // ตั้งค่าความกว้าง
    fgHeight: 400, // ตั้งค่าความสูง
    bgHeight: "h-[400px]", // ตั้งค่าความสูงของ BG (เช่น h-[600px] หรือ h-screen)
  },
  {
    id: 2,
    bg: "/hp/slide/bg2.png",
    fg: "/hp/slide/fg2.png",
    fgWidth: 1200,
    fgHeight: 400,
    bgHeight: "h-[400px]",
  },
  { id: 3, 
    bg: "/hp/slide/bg3.png",
    fg: "/hp/slide/fg3.png", 
    fgWidth: 1200, 
    fgHeight: 400, 
    bgHeight: "h-[400px]" },
  { id: 4, 
    bg: "/hp/slide/bg4.png", 
    fg: "/hp/slide/fg4.png",
    fgWidth: 1200, 
    fgHeight: 400, 
    bgHeight: "h-[400px]" },
  { id: 5, 
    bg: "/hp/slide/bg5.png", 
    fg: "/hp/slide/fg5.png", 
    fgWidth: 1200, 
    fgHeight: 400, 
    bgHeight: "h-[400px]" },
  { id: 6, 
    bg: "/hp/slide/bg6.png", 
    fg: "/hp/slide/fg6.png", 
    fgWidth: 1200, 
    fgHeight: 400, 
    bgHeight: "h-[400px]" },
];

// ข้อมูล Slide สำหรับ Mobile (6 รูป - แสดงแบบนิ่ง)
const MOBILE_SLIDES = [
  { id: 1, img: "/hp/slide/m1.png",  },
  { id: 2, img: "/hp/slide/m2.png", },
  { id: 3, img: "/hp/slide/m3.png", },
  { id: 4, img: "/hp/slide/m4.png", },
  { id: 5, img: "/hp/slide/m5.png", },
  { id: 6, img: "/hp/slide/m6.png", },
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-full bg-slate-100" />;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* --- 1. Desktop Slider (Hidden on Mobile) --- */}
      <div className="hidden lg:block">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          fadeEffect={{ crossFade: true }}
          loop={true}
          className="w-full h-full"
        >
          {DESKTOP_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id} className={`relative w-full ${slide.bgHeight}`}>
              {({ isActive }) => (
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Background Layer */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={slide.bg}
                      alt="Background"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Foreground Image (Single Picture with Animation) */}
                  <motion.div
                    initial={{ y: 20, opacity: 0, scale: 0.98 }}
                    animate={isActive ? { 
                      y: [0, -20, 0], 
                      opacity: 1, 
                      scale: 1 
                    } : { opacity: 0 }}
                    transition={{ 
                      opacity: { duration: 1 },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 1.5 }
                    }}
                    className="relative z-10 flex items-center justify-center"
                    style={{ width: slide.fgWidth, height: slide.fgHeight }}
                  >
                    <Image
                      src={slide.fg}
                      alt="Product Highlight"
                      width={slide.fgWidth}
                      height={slide.fgHeight}
                      className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.2)]"
                    />
                  </motion.div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- 2. Mobile Slider (Hidden on Desktop) --- */}
      <div className="block lg:hidden h-[100vh]"> {/* ปรับความสูงจอ Mobile ที่นี่ */}
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={800}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true, el: '.custom-pagination-mobile' }}
          loop={true}
          className="w-full h-full"
        >
          {MOBILE_SLIDES.map((mSlide) => (
            <SwiperSlide key={mSlide.id} className="w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={mSlide.img}
                  alt={`Mobile Slide ${mSlide.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Container */}
      <div className="custom-pagination custom-pagination-mobile absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-2" />

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #ef4444 !important; /* เปลี่ยนเป็นสีแดงตาม Brand */
          opacity: 0.3;
          width: 8px;
          height: 8px;
          transition: all 0.4s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}