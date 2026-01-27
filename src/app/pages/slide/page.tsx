"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070", 
    fg: "/picture/tfb2.png",
    title: "PREMIUM POLO",
    sub: "Comfortable and Stylish design for professional look.",
    accent: "text-red-500",
    btnHover: "hover:bg-red-600"
  },
  {
    id: 2,
    bg: "/picture/back2.png",
    fg: "/picture/tfb3.png",
    title: "WORKWEAR ELITE",
    sub: "Durable fabrics engineered for every heavy-duty profession.",
    accent: "text-blue-500",
    btnHover: "hover:bg-blue-600"
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    fg: "/picture/tfb4.png",
    title: "CUSTOM UNIFORM",
    sub: "Identity through quality. We build uniforms that build teams.",
    accent: "text-emerald-500",
    btnHover: "hover:bg-emerald-600"
  },
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-full bg-slate-900" />;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{ 
            delay: 7000, 
            disableOnInteraction: false 
        }}
        pagination={{ 
            clickable: true,
            el: '.custom-pagination' 
        }}
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="w-full h-full"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center">
                
                {/* --- 1. Background Layer (4000ms) --- */}
                <div className="absolute inset-0 z-0">
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                    transition={{ duration: 4, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={slide.bg}
                      alt="Background"
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* --- 3. Left: Text Content (Delay 1000ms) --- */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isActive ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ 
                      delay: 1, 
                      duration: 1, 
                      ease: "easeOut" 
                    }}
                    className="text-white space-y-6"
                    style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.6))" }}
                  >
                    <span className={`inline-block px-4 py-1 border border-current ${slide.accent} text-xs font-bold tracking-widest uppercase bg-black/30 backdrop-blur-sm`}>
                      New Collection
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black leading-tight uppercase">
                      {slide.title}
                    </h2>
                    <p className="text-lg text-gray-100 max-w-md font-medium">
                      {slide.sub}
                    </p>
                    <button className={`bg-white text-black px-8 py-4 font-bold uppercase shadow-xl transition-all duration-300 ${slide.btnHover} hover:text-white`}>
                      Shop Now
                    </button>
                  </motion.div>

                  {/* --- 2. Right: Foreground Image (3500ms) --- */}
                  {/* ปรับให้ x เริ่มจาก 200 (ขวา) และกลับไปที่ 200 เมื่อไม่ active */}
                  <motion.div
                    initial={{ x: 200, opacity: 0 }} 
                    animate={isActive ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                    transition={{ 
                      duration: 3.5, // 3500ms ตามที่ต้องการ
                      ease: [0.16, 1, 0.3, 1] // ใช้ cubic-bezier เพื่อให้การวิ่งดูพรีเมียม (เร็วแล้วค่อยๆ แตะเบรก)
                    }}
                    className="relative w-full aspect-square max-w-[500px] mx-auto"
                  >
                    {/* Floating Animation - วนลูปขึ้นลงอิสระ */}
                    <motion.div
                        animate={{ y: [0, -25, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full relative"
                    >
                        <Image
                        src={slide.fg}
                        alt="Product"
                        fill
                        className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                        />
                    </motion.div>
                  </motion.div>

                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        
        <div className="custom-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-2" />
      </Swiper>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
          width: 10px;
          height: 10px;
          box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}