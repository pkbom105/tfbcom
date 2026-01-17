import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',      // ดึงไฟล์ออกมาเป็น Static HTML
  
  // 1. ใส่ชื่อโฟลเดอร์ที่คุณอัปโหลดขึ้นไป (เช่น pannavith.com/tfb/)
  // ถ้าคุณอัปโหลดไว้ที่ Root (หน้าแรกสุด) ให้ลบบรรทัด basePath นี้ออก
  basePath: '/tfb',  
  assetPrefix: '/tfb', // เพิ่มบรรทัดนี้ครับ

  // 2. ปิดระบบบีบอัดรูปภาพของ Next.js เพราะการทำ Static Export ไม่รองรับฟีเจอร์นี้บน Server ทั่วไป
  images: {
    unoptimized: true,
  },
};

export default nextConfig;