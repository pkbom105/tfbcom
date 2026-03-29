"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Palette, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ColorGalleryPage() {
  // --- CONFIGURATION SECTION ---
  const Section1Config = {
    title: "Collection No. 13 - 24",
    folder: "/photo1",
    prefix: "colour-",
    extension: ".svg",
    start: 13,
    end: 24
  };

  const Section2Config = {
    title: "Premium Fabric Selection",
    folder: "/photo1", 
    prefix: "fabric-", 
    extension: ".svg",
    start: 1,
    end: 12
  };

  const Section3Config = {
    title: "Featured Showcases",
    folder: "/photo1",
    files: [
      "colour-13.svg", "colour-14.svg", "colour-15.svg",
      "colour-16.svg", "colour-17.svg", "colour-18.svg", "colour-19.svg",
    ]
  };

  const generatePhotos = (config: any) => 
    Array.from({ length: config.end - config.start + 1 }, (_, i) => ({
      id: i + config.start,
      src: `${config.folder}/${config.prefix}${i + config.start}${config.extension}`,
      alt: `Gallery Item ${i + config.start}`,
    }));

  const section3Photos = Section3Config.files.map((filename, idx) => ({
    id: `s3-${idx}`,
    src: `${Section3Config.folder}/${filename}`,
    alt: filename,
  }));

  const section1Photos = generatePhotos(Section1Config);
  const section2Photos = generatePhotos(Section2Config);

  return (
    <main className="min-h-screen font-kanit bg-white pb-20">
      {/* --- Page Hero Header (เอา border-b ออก) --- */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 text-red-600 font-bold uppercase text-sm">
            <Palette size={20} />
            <span>Toffy Boutique Catalog</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Fabric & Colour Gallery
          </h1>
        </div>
      </section>

      {/* --- Gallery Sections --- */}
      <section className="max-w-6xl mx-auto px-6 pt-16">
        <div className="flex items-center gap-3 mb-10"><div className="h-8 w-1.5 bg-red-600 rounded-full" /><h2 className="text-2xl font-bold">{Section1Config.title}</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section1Photos.map((photo, idx) => <GalleryCard key={`s1-${photo.id}`} photo={photo} index={idx} />)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-24">
        <div className="flex items-center gap-3 mb-10"><div className="h-8 w-1.5 bg-slate-800 rounded-full" /><h2 className="text-2xl font-bold">{Section2Config.title}</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section2Photos.map((photo, idx) => <GalleryCard key={`s2-${photo.id}`} photo={photo} index={idx} />)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-1.5 bg-blue-600 rounded-full" />
          <h2 className="text-2xl font-bold text-slate-900">{Section3Config.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section3Photos.map((photo, idx) => (
            <GalleryCard key={photo.id} photo={photo} index={idx} />
          ))}
        </div>
      </section>

      {/* --- Call to Action --- */}
      <div className="mt-24 text-center">
        <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full font-bold hover:bg-red-600 transition-all duration-300 group shadow-xl hover:-translate-y-1">
          Request Full Catalog
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </main>
  );
}

// Reusable Gallery Card (เอา border ออกทั้งหมด)
function GalleryCard({ photo, index }: { photo: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 3) * 0.1 }}
      viewport={{ once: true }}
    >
      {/* เอา border-none ออก และเน้นใช้ Shadow แทน */}
      <Card className="group border-none shadow-none hover:shadow-2xl transition-all duration-500 rounded-2xl bg-transparent hover:bg-red-50 p-3">
        {/* เอา border-slate-100 ออกจาก Container รูปภาพ */}
        <CardContent className="p-0 relative aspect-[3/2] overflow-hidden rounded-xl bg-slate-50">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </CardContent>
        <div className="mt-4 px-2 pb-2 flex justify-between items-center">
          <p className="text-slate-400 text-xs font-mono uppercase">File: {photo.src.split('/').pop()}</p>
          <ImageIcon size={14} className="text-slate-300" />
        </div>
      </Card>
    </motion.div>
  );
}