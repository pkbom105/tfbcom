"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// นำเข้า Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// นำเข้า Swiper Styles (ขีดแดงจะหายไปหลังจากสร้างไฟล์ .d.ts)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    id: 1,
    bg: "/picture/bg1.png",
    fg: "/picture/tfb2.png",
    title: "PREMIUM POLO",
    sub: "Comfortable and Stylish design for professional look.",
    accent: "text-red-500",
    btnHover: "hover:bg-red-600",
    fgSize: "max-w-[350px] md:max-w-[500px] lg:max-w-[650px]" 
  },
  {
    id: 2,
    bg: "/picture/bg2.png",
    fg: "/picture/tfb3.png",
    title: "WORKWEAR ELITE",
    sub: "Durable fabrics engineered for every heavy-duty profession.",
    accent: "text-blue-500",
    btnHover: "hover:bg-blue-600",
    fgSize: "max-w-[300px] md:max-w-[450px] lg:max-w-[550px]" 
  },
  {
    id: 3,
    bg: "/picture/bg3.png",
    fg: "/picture/tfb4.png",
    title: "CUSTOM UNIFORM",
    sub: "Identity through quality. We build uniforms that build teams.",
    accent: "text-emerald-500",
    btnHover: "hover:bg-emerald-600",
    fgSize: "max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"
  }
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="w-full h-full"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center">
                
                {/* --- 1. Background Layer (Overlay 10%) --- */}
                <div className="absolute inset-0 z-0">
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
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
                    <div className="absolute inset-0 bg-black/10" />
                  </motion.div>
                </div>

                <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                  
                  {/* --- 2. Left Content --- */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isActive ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="text-white space-y-6 order-2 lg:order-1"
                    style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.5))" }}
                  >
                    <span className={`inline-block px-4 py-1 border border-current ${slide.accent} text-[10px] font-black tracking-[0.3em] uppercase bg-black/40 backdrop-blur-sm`}>
                      New Collection
                    </span>
                    <h2 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight uppercase tracking-tighter">
                      {slide.title}
                    </h2>
                    <p className="text-lg text-gray-100 max-w-md font-medium leading-relaxed">
                      {slide.sub}
                    </p>
                    <button className={`bg-white text-black px-10 py-4 font-black text-sm uppercase shadow-2xl transition-all duration-300 ${slide.btnHover} hover:text-white transform hover:scale-105 active:scale-95`}>
                      Shop Now
                    </button>
                  </motion.div>

                  {/* --- 3. Right Content (FG) --- */}
                  <motion.div
                    initial={{ x: 100, opacity: 0, scale: 0.9 }} 
                    animate={isActive ? { x: 0, opacity: 1, scale: 1 } : { x: 100, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full flex items-center justify-center order-1 lg:order-2"
                  >
                    <div className={`relative w-full aspect-square flex items-center justify-center ${slide.fgSize}`}>
                        <Image
                          src={slide.fg}
                          alt="Product"
                          fill
                          className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.4)]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                  </motion.div>

                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        
        <div className="custom-pagination absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-3" />
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