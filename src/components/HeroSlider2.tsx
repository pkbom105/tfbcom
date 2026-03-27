"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// --- Data Configuration ---
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
      <div className="hidden xl:block relative">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          navigation={{
            prevEl: '.prev-slide',
            nextEl: '.next-slide',
          }}
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

        <div className="absolute bottom-12 right-[20%] z-[10] flex gap-4">
          <button className="prev-slide w-10 h-10 flex items-center justify-center rounded-full bg-white/90 border border-slate-200 shadow-xl hover:bg-red-600 hover:text-white transition-all duration-300">
            <ChevronLeft size={20} />
          </button>
          <button className="next-slide w-10 h-10 flex items-center justify-center rounded-full bg-white/90 border border-slate-200 shadow-xl hover:bg-red-600 hover:text-white transition-all duration-300">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* --- 2. Tablet Slider (Ratio ตามต้นฉบับ) --- */}
      <div className="hidden md:block xl:hidden w-full h-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={1000}
          autoHeight={true} // ปรับความสูงตามรูปอัตโนมัติ
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          className="w-full h-full"
        >
          {TABLET_SLIDES.map((tSlide) => (
            <SwiperSlide key={tSlide.id} className="relative w-full">
              {/* ใช้ Relative และวาง Image แบบ Responsive เพื่อคง Ratio */}
              <div className="w-full h-full">
                <img 
                  src={tSlide.img} 
                  alt="Tablet Content" 
                  className="w-full h-auto object-contain" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- 3. Mobile Slider (Ratio ตามต้นฉบับ) --- */}
      <div className="block md:hidden w-full h-auto"> 
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={800}
          autoHeight={true} // ปรับความสูงตามรูปอัตโนมัติ
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          className="w-full h-full"
        >
          {MOBILE_SLIDES.map((mSlide) => (
            <SwiperSlide key={mSlide.id} className="relative w-full">
              <div className="w-full h-full">
                <img 
                  src={mSlide.img} 
                  alt="Mobile Content" 
                  className="w-full h-auto object-contain" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-pagination absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-2" />

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #ef4444 !important;
          opacity: 0.3; width: 3px; height: 3px; transition: all 0.4s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1; width: 10px; border-radius: 10px;
        }
        .swiper-button-next, .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}