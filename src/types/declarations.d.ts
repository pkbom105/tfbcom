// src/types/declarations.d.ts

// บอก TypeScript ว่าไฟล์ .css สามารถ import ได้และไม่ต้องตรวจสอบโครงสร้างภายใน
declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
  }
  
  declare module "swiper/css";
  declare module "swiper/css/pagination";
  declare module "swiper/css/effect-fade";