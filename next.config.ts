import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.pngmart.com' },
    ],
    unoptimized: true, // จำเป็น: เพราะ FTP/Static Hosting ไม่มี Node.js มาจัดการย่อรูปให้
  },
  output: 'export', // สำคัญมาก: เพื่อให้สร้างโฟลเดอร์ 'out' สำหรับ FTP
  trailingSlash: true, // แนะนำ: ช่วยให้โครงสร้างโฟลเดอร์บน FTP เข้าใจง่ายขึ้น (เช่น /about/index.html) 
};

export default nextConfig;