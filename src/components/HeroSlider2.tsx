"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Data เหมือนเดิม
const DESKTOP_SLIDES = [
  { id: 1, bg: "/hp/slide/bg1.png", fg: "/hp/slide/fg1.png" },
  { id: 2, bg: "/hp/slide/bg2.png", fg: "/hp/slide/fg2.png" },
  { id: 3, bg: "/hp/slide/bg3.png", fg: "/hp/slide/fg3.png" },
  { id: 4, bg: "/hp/slide/bg4.png", fg: "/hp/slide/fg4.png" },
  { id: 5, bg: "/hp/slide/bg5.png", fg: "/hp/slide/fg5.png" },
  { id: 6, bg: "/hp/slide/bg666.png", fg: "/hp/slide/fg6661.png" },
];

const TABLET_SLIDES = [
  { id: 1, img: "/hp/slide/t1.png" },
  { id: 2, img: "/hp/slide/t2.png" },
  { id: 3, img: "/hp/slide/t3.png" },
  { id: 4, img: "/hp/slide/t4.png" },
  { id: 5, img: "/hp/slide/t5.png" },
  { id: 6, img: "/hp/slide/t6.png" },
];

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

  if (!mounted) return <div className="h-[500px] w-full bg-slate-50" />;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* --- 1. Desktop Slider (xl: 1280px+) --- */}
      <div className="hidden xl:block">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          fadeEffect={{ crossFade: true }}
          loop={true}
          className="w-full h-[500px]"
        >
          {DESKTOP_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-[500px]">
              {({ isActive }) => (
                <div className="relative w-full h-full flex items-end justify-center">
                  <div className="absolute inset-0">
                    <Image 
                      src={slide.bg} 
                      alt="Background" 
                      fill
                      priority
                      className="object-cover object-center pointer-events-none" 
                    />
                  </div>
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={slide.id}
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 200, opacity: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none"
                      >
                        <div className="relative w-full h-full max-w-[1600px] flex items-end justify-center">
                          <Image 
                            src={slide.fg} 
                            alt="Product" 
                            width={1800} 
                            height={500}
                            className="w-auto h-full object-contain object-bottom select-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- 2. Tablet Slider (md: 768px to xl: 1279px) --- */}
      {/* ปรับให้รองรับจอที่กว้างขึ้นจนถึงเกือบ 1300px */}
      <div className="hidden md:block xl:hidden w-full aspect-[16/9] sm:aspect-video lg:h-[500px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={1000}
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          className="w-full h-full"
        >
          {TABLET_SLIDES.map((tSlide) => (
            <SwiperSlide key={tSlide.id} className="relative w-full h-full">
              <Image 
                src={tSlide.img} 
                alt="Tablet" 
                fill 
                className="object-fill object-center" // ใช้ object-fill เพื่อให้รูปแผ่เต็มขนาดไฟล์จริง
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- 3. Mobile Slider (below 768px) --- */}
      <div className="block md:hidden w-full aspect-[9/16]"> 
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={800}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          className="w-full h-full"
        >
          {MOBILE_SLIDES.map((mSlide) => (
            <SwiperSlide key={mSlide.id} className="relative w-full h-full">
              <Image 
                src={mSlide.img} 
                alt="mobile" 
                fill 
                className="object-fill object-center" // แสดงผลแบบเต็มขนาดไฟล์ (Full Size)
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Container */}
      <div className="custom-pagination absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-2" />

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #ef4444 !important;
          opacity: 0.3; width: 8px; height: 8px; transition: all 0.4s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1; width: 30px; border-radius: 10px;
        }
      `}</style>
    </section>
  );
}