"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// นำเข้า Swiper Components และ Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// นำเข้า Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    id: 1,
    bg: "/picture/bg1.png",
    fgLeft: "/hp/fg66.png",
    fgRight: "/hp/fg2.png",
    fgSizeLeft: "max-w-[900px]", // ขยายขนาดให้เต็มที่
    fgSizeRight: "max-w-[800px]"
  },
  {
    id: 2,
    bg: "/picture/bg2.png",
    fgLeft: "/hp/fg77.png",
    fgRight: "/hp/fg3.png",
    fgSizeLeft: "max-w-[900px]",
    fgSizeRight: "max-w-[800px]"
  },
  {
    id: 3,
    bg: "/picture/bg3.png",
    fgLeft: "/hp/fg8.png",
    fgRight: "/hp/fg4.png",
    fgSizeLeft: "max-w-[900px]",
    fgSizeRight: "max-w-[800px]"
  },
  {
    id: 4,
    bg: "/picture/bg4.png",
    fgLeft: "/hp/fg9.png",
    fgRight: "/hp/fg5.png",
    fgSizeLeft: "max-w-[900px]",
    fgSizeRight: "max-w-[800px]"
  }
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-full bg-slate-900" />;

  return (
    <section className="relative w-full  h-screen overflow-hidden bg-white">
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
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="relative max-w-[100vw] mx-auto h-full">
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center">
                
                {/* --- 1. Background Layer --- */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.bg}
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>

                {/* --- 2. Content Grid (Gap-0 เพื่อให้ชิดกัน) --- */}
                <div className="relative z-20 w-full h-full grid grid-cols-1 lg:grid-cols-10 items-center gap-0">
                  
                  {/* --- Left Picture (30%) - ดันรูปไปทางขวา (Right) --- */}
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={isActive ? { 
                      x: 0, 
                      opacity: 1,
                      y: [0, -15, 0] 
                    } : { x: -80, opacity: 0 }}
                    transition={{ 
                      x: { delay: 0.5, duration: 1.2 },
                      opacity: { delay: 0.5, duration: 1 },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                    }}
                    className="relative w-full h-full flex lg:justify-end justify-center lg:col-span-4 overflow-visible"
                  >
                    <div className={`relative w-full h-full ${slide.fgSizeLeft}`}>
                      <Image
                        src={slide.fgLeft}
                        alt="Product Left"
                        fill
                        className="object-contain drop-shadow-2xl object-right" 
                      />
                    </div>
                  </motion.div>

                  {/* --- Right Picture (70%) - ดันรูปไปทางซ้าย (Left) --- */}
                  <motion.div
                    initial={{ x: 80, opacity: 0, scale: 0.95 }} 
                    animate={isActive ? { 
                      x: 0, 
                      opacity: 1, 
                      scale: 1,
                      y: [0, 15, 0] 
                    } : { x: 80, opacity: 0, scale: 0.95 }}
                    transition={{ 
                      x: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                      scale: { duration: 1.5 },
                      opacity: { duration: 1.5 },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                    }}
                    className="relative w-full h-full flex lg:justify-start justify-center lg:col-span-6"
                  >
                    <div className={`relative w-full h-full flex items-center lg:justify-start justify-center ${slide.fgSizeRight}`}>
                        <Image
                          src={slide.fgRight}
                          alt="Product Right"
                          fill
                          className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.3)] object-left" 
                        />
                    </div>
                  </motion.div>

                </div>
              </div>
            )}
          </SwiperSlide>
        ))}   
        
        {/* Custom Pagination Dots */}
        <div className="custom-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-3" />
      </Swiper>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          transition: all 0.4s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 35px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}