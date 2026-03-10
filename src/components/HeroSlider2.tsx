"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // นำเข้า AnimatePresence เพิ่มเติม
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ข้อมูล Slide สำหรับ Desktop
const DESKTOP_SLIDES = [
  { id: 1, bg: "/hp/slide/bg1.png", fg: "/hp/slide/fg11.png", fgWidth: 2000, fgHeight: 500, bgHeight: "h-[500px]" },
  { id: 2, bg: "/hp/slide/bg2.png", fg: "/hp/slide/fg2.png", fgWidth: 1800, fgHeight: 500, bgHeight: "h-[500px]" },
  { id: 3, bg: "/hp/slide/bg3.png", fg: "/hp/slide/fg3.png", fgWidth: 1800, fgHeight: 500, bgHeight: "h-[500px]" },
  { id: 4, bg: "/hp/slide/bg4.png", fg: "/hp/slide/fg4.png", fgWidth: 1800, fgHeight: 500, bgHeight: "h-[500px]" },
  { id: 5, bg: "/hp/slide/bg5.png", fg: "/hp/slide/fg5.png", fgWidth: 1800, fgHeight: 500, bgHeight: "h-[500px]" },
  { id: 6, bg: "/hp/slide/bg66.png", fg: "/hp/slide/fg6666.png", fgWidth: 1800, fgHeight: 500, bgHeight: "h-[500px]" },
];

// ข้อมูล Slide สำหรับ Mobile
const MOBILE_SLIDES = [
  { id: 1, img: "/hp/slide/m1.png" },
  { id: 2, img: "/hp/slide/m2.png" },
  { id: 3, img: "/hp/slide/m3.png" },
  { id: 4, img: "/hp/slide/m4.png" },
  { id: 5, img: "/hp/slide/m5.png" },
  { id: 6, img: "/hp/slide/m6.png" },
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-full bg-slate-100" />;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* --- 1. Desktop Slider --- */}
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
                <div className="relative w-full h-full flex items-end justify-center">
                  
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

                  {/* Foreground Image Layer */}
                  {/* ใช้ AnimatePresence เพื่อจัดการ Animation ตอนขาออก (Exit) */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={slide.id} // สำคัญมาก: ต้องมี key ที่เปลี่ยนไปตาม slide เพื่อให้ Exit Animation ทำงาน
                        
                        // 1. ขาเข้า (Initial): เริ่มต้นจากนอกจอฝั่งซ้าย (-300)
                        initial={{ x: -300, opacity: 0 }}
                        
                        // 2. แสดงผล (Animate): เลื่อนมาหยุดที่จุดกลาง (0)
                        animate={{ x: 0, opacity: 1 }}
                        
                        // 3. ขาออก (Exit): เลื่อนออกไปนอกจอฝั่งขวา (+300)
                        exit={{ x: 300, opacity: 0 }}
                        
                        transition={{ 
                          duration: 1.2, 
                          ease: [0.22, 1, 0.36, 1] // easeOut ที่สมูทและดูพรีเมียม
                        }}
                        className="relative z-10 flex items-end justify-center"
                        style={{ width: slide.fgWidth, height: slide.fgHeight }}
                      >
                        <Image
                          src={slide.fg}
                          alt="Product Highlight"
                          width={slide.fgWidth}
                          height={slide.fgHeight}
                          className="object-contain object-bottom"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- 2. Mobile Slider --- */}
      <div className="block lg:hidden h-[100vh]">
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

      <div className="custom-pagination custom-pagination-mobile absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-2" />

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #ef4444 !important;
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