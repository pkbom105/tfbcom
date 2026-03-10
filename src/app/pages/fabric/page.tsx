"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";

// --- 1. Gallery Component (1 Image per Row / Ratio 3:2) ---
const ColorRangeGalleryV2 = ({ path, start, end }: { path: string; start: number; end: number }) => {
  const images = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="flex flex-col gap-10 mt-10">
      {images.map((num) => (
        <div key={num} className="w-full">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#F8FAFC] border border-slate-100">
            <Image
              src={`${path}/${num}.png`}
              alt={`Product Item ${num}`}
              fill
              className="object-contain p-6 transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 75vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default function NestedCollectionPage() {
  // --- 2. ข้อมูล 9 หมวดหมู่หลัก พร้อมเมนูย่อยที่เปลี่ยนชื่อได้อิสระ ---
  const collectionData = [
    { 
      id: "1", name: "เสื้อยืด", img: "/hp/5.png", path: "/02colour/tshirt",
      subOptions: [
        { 
            id: "s1-1", 
            label: "C0M 20", 
            title: "Single Jersey Semi/Com 20", 
            desc: (
              <ul className="list-disc ml-5 space-y-1">
                <li><strong>ประเภทผ้า:</strong> CM 20 Single Jersey (100% Cotton)</li>
                <li><strong>น้ำหนักผ้า:</strong> 200 gsm (เนื้อผ้าหนาเล็กน้อย อยู่ทรงสวย)</li>
                <li><strong>สัมผัส:</strong> ผลิตจากฝ้ายธรรมชาติ 100% เนื้อเรียบเนียน ไม่ระคายผิว</li>
                <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดีเยี่ยม สวมใส่สบายตัว</li>
                <li><strong>เหมาะสำหรับ:</strong> เสื้อยืดคอกลมเกรดพรีเมียม หรือเสื้อโปโล</li>
              </ul>
            ),
            start: 1, 
            end: 2 
          },
          { id: "s1-2", label: "COM 30", 
            title: " Single Jersey Com 30", 
            desc: (
                <ul className="list-disc ml-5 space-y-1">
                <li><strong>ประเภทผ้า:</strong> SC 32 Single Jersey (100% Cotton)</li>
                <li><strong>น้ำหนักผ้า:</strong> 150 gsm (เนื้อผ้าบาง ใส่ไม่ร้อน)</li>
                <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อเรียบ ละเอียด ไม่ระคายผิว</li>
                <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี สวมใส่สบายตัว</li>
                <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม ราคาไม่สูง</li>
              </ul>
            ),        
            start: 4, end: 6 },
            { id: "s1-3", label: "COM 32", 
              title: " Single Jersey Semi/Com 32", 
              desc: (
                  <ul className="list-disc ml-5 space-y-1">
                  <li><strong>ประเภทผ้า:</strong> SC 32 Single Jersey (100% Cotton)</li>
                  <li><strong>น้ำหนักผ้า:</strong> 150 gsm (เนื้อผ้าบาง ใส่ไม่ร้อน)</li>
                  <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อเรียบ ละเอียด ไม่ระคายผิว</li>
                  <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี สวมใส่สบายตัว</li>
                  <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม ราคาไม่สูง</li>
                </ul>
              ),        
              start: 4, end: 6 },
              { id: "s1-4", label: "Micro", 
                title: " Micro", 
                desc: (
                    <ul className="list-disc ml-5 space-y-1">
                    <li><strong>ประเภทผ้า:</strong> SC 32 Single Jersey (100% Cotton)</li>
                    <li><strong>น้ำหนักผ้า:</strong> 150 gsm (เนื้อผ้าบาง ใส่ไม่ร้อน)</li>
                    <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อเรียบ ละเอียด ไม่ระคายผิว</li>
                    <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี สวมใส่สบายตัว</li>
                    <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม ราคาไม่สูง</li>
                  </ul>
                ),        
                start: 4, end: 6 },
        { id: "s1-5", label: "Supersoft 20", 
        title: "Supersoft 20", 
        desc: (
            <ul className="list-disc ml-5 space-y-1">
            <li><strong>ประเภทผ้า:</strong> SC 32 Single Jersey (100% Cotton)</li>
            <li><strong>น้ำหนักผ้า:</strong> 150 gsm (เนื้อผ้าบาง ใส่ไม่ร้อน)</li>
            <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อเรียบ ละเอียด ไม่ระคายผิว</li>
            <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี สวมใส่สบายตัว</li>
            <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม ราคาไม่สูง</li>
          </ul>
        ),        
        start: 4, end: 6 },
        { id: "s1-6", label: "Drytech", title: "Drytech", 
            desc: (
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>ประเภทผ้า:</strong> DRYTECH 201 (55% Cotton - 45% Polyester)</li>
                  <li><strong>น้ำหนักผ้า:</strong> 175 gsm</li>
                  <li><strong>สัมผัส:</strong> เส้นใยผสมระหว่าง Cotton กับ Polyester รูปทรงคงทน ไม่หด ไม่ย้วย</li>
                  <li><strong>การใช้งาน:</strong> ซึมซับเหงื่อได้ทันทีด้วยโครงสร้างแบบตาข่าย (Mesh Back) แห้งสบาย ระบายอากาศดีมาก</li>
                  <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล ยับยาก รีดง่าย</li>
                </ul>
              ), 
        start: 3, end: 3 },
        { id: "s1-7", label: "ไมโครเรียบ", title: "ไมโครเรียบ (100% Polyester)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ไมโครเรียบ (100% Polyester)</li>
              <li><strong>คุณสมบัติ:</strong> ผลิตจากเส้นใย Polyester 100% ไม่หด ไม่ย้วย</li>
              <li><strong>ข้อควรระวัง:</strong> มีโอกาสเป็นขุยเมื่อใช้ไประยะหนึ่ง ระบายอากาศไม่ค่อยดี</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล</li>
            </ul>
          ),
        start: 4, end: 6 },
        { id: "s1-8", label: "SUPERSOFF 20", title: "SUPERSOFF 20 ทอปดาย (100% Cotton)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> SUPERSOFF 20 ทอปดาย (100% Cotton)</li>
              <li><strong>น้ำหนักผ้า:</strong> 190 gsm</li>
              <li><strong>สัมผัส:</strong> ผลิตจากเส้นใยธรรมชาติ 100% (ฝ้าย) เนื้อผ้าหนาเล็กน้อย มีผิวสัมผัสฟูนุ่ม ไม่ระคายผิว</li>
              <li><strong>การใช้งาน:</strong> ซับเหงื่อได้ดี เนื้อผ้าบาง ใส่ไม่ร้อน สวมใส่สบายตัว</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลมเกรดพรีเมียม</li>
            </ul>
          ),
        start: 4, end: 6 },
        { id: "s1-9", label: "ไมโครเรียบ", title: "ไมโครเรียบ (100% Polyester)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ไมโครเรียบ (100% Polyester)</li>
              <li><strong>คุณสมบัติ:</strong> ผลิตจากเส้นใย Polyester 100% ไม่หด ไม่ย้วย</li>
              <li><strong>ข้อควรระวัง:</strong> มีโอกาสเป็นขุยเมื่อใช้ไประยะหนึ่ง ระบายอากาศไม่ค่อยดี</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล</li>
            </ul>
          ),
        start: 4, end: 6 },
        { id: "s1-10", label: "ไมโครเรียบ", title: "ไมโครเรียบ (100% Polyester)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ไมโครเรียบ (100% Polyester)</li>
              <li><strong>คุณสมบัติ:</strong> ผลิตจากเส้นใย Polyester 100% ไม่หด ไม่ย้วย</li>
              <li><strong>ข้อควรระวัง:</strong> มีโอกาสเป็นขุยเมื่อใช้ไประยะหนึ่ง ระบายอากาศไม่ค่อยดี</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล</li>
            </ul>
          ),
        start: 4, end: 6 },
        { id: "s1-11", label: "ไมโครเรียบ", title: "ไมโครเรียบ (100% Polyester)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ไมโครเรียบ (100% Polyester)</li>
              <li><strong>คุณสมบัติ:</strong> ผลิตจากเส้นใย Polyester 100% ไม่หด ไม่ย้วย</li>
              <li><strong>ข้อควรระวัง:</strong> มีโอกาสเป็นขุยเมื่อใช้ไประยะหนึ่ง ระบายอากาศไม่ค่อยดี</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล</li>
            </ul>
          ),
        start: 4, end: 6 },
        { id: "s1-12", label: "ไมโครเรียบ", title: "ไมโครเรียบ (100% Polyester)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ไมโครเรียบ (100% Polyester)</li>
              <li><strong>คุณสมบัติ:</strong> ผลิตจากเส้นใย Polyester 100% ไม่หด ไม่ย้วย</li>
              <li><strong>ข้อควรระวัง:</strong> มีโอกาสเป็นขุยเมื่อใช้ไประยะหนึ่ง ระบายอากาศไม่ค่อยดี</li>
              <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล</li>
            </ul>
          ),
        start: 4, end: 6 },
      ]
    },
    { 
      id: "2", name: "เสื้อโปโล", img: "/hp/6.png", path: "/02colour/tshirt",
      subOptions: [
        { id: "s2-1", label: "Drytech 201", title: "Drytech 201", 
          desc: (
              <ul className="list-disc ml-5 space-y-1">
                <li><strong>ประเภทผ้า:</strong> DRYTECH 201 (55% Cotton - 45% Polyester)</li>
                <li><strong>น้ำหนักผ้า:</strong> 175 gsm</li>
                <li><strong>สัมผัส:</strong> เส้นใยผสมระหว่าง Cotton กับ Polyester รูปทรงคงทน ไม่หด ไม่ย้วย</li>
                <li><strong>การใช้งาน:</strong> ซึมซับเหงื่อได้ทันทีด้วยโครงสร้างแบบตาข่าย (Mesh Back) แห้งสบาย ระบายอากาศดีมาก</li>
                <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล ยับยาก รีดง่าย</li>
              </ul>
            ), 
      start: 3, end: 3 },        
        { id: "s2-2", label: "Drytech 401", title: "Drytech 401", 
            desc: (
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>ประเภทผ้า:</strong> DRYTECH 201 (55% Cotton - 45% Polyester)</li>
                  <li><strong>น้ำหนักผ้า:</strong> 175 gsm</li>
                  <li><strong>สัมผัส:</strong> เส้นใยผสมระหว่าง Cotton กับ Polyester รูปทรงคงทน ไม่หด ไม่ย้วย</li>
                  <li><strong>การใช้งาน:</strong> ซึมซับเหงื่อได้ทันทีด้วยโครงสร้างแบบตาข่าย (Mesh Back) แห้งสบาย ระบายอากาศดีมาก</li>
                  <li><strong>เหมาะสำหรับ:</strong> ทำเสื้อยืดคอกลม โปโล ยับยาก รีดง่าย</li>
                </ul>
              ), 
        start: 3, end: 3 },
        { id: "s2-3", label: "Dry-Touch ", title: "ผ้า Dry-Touch (Super Soft)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า Dry-Touch เทคโนโลยีผ้า 5.0 โครงสร้างการทอแบบสองชั้น (Super Double-Weaving)</li>
              <li><strong>น้ำหนักผ้า:</strong> ประมาณ 160-170 GMS (เน้นความบางเบาแต่คงรูปทรง)</li>
              <li><strong>นวัตกรรม:</strong> เทคโนโลยีผ้า 5.0 โครงสร้างการทอแบบสองชั้น (Super Double-Weaving)</li>
              <li><strong>ประเภทเส้นใย:</strong> ผสมผสาน Micro-Fibered เพื่อดูดซับความชื้น และเส้นใย Cotton ธรรมชาติเพื่อคืนความแห้งสบาย</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้านุ่มพิเศษ (Super Soft) ให้ความรู้สึกพรีเมียม สบายผิวตลอดการสวมใส่</li>
              <li><strong>การจัดการเหงื่อ:</strong> ดูดซับความชื้นจากผิวสัมผัสทันทีและระเหยออกอย่างรวดเร็ว (Fast Ventilation & Evaporate)</li>
              <li><strong>การรักษารูปทรง:</strong> เนื้อผ้าคืนตัวได้ดี ไม่ย้วย ไม่หด และรักษารูปทรงเสื้อได้ยาวนาน (Long Lasting Shape)</li>
              <li><strong>การดูแลรักษา:</strong> ดูแลรักษาง่าย (Easy to Care) แม้ผ่านการซักหลายครั้งก็ยังคงความนุ่มและคุณสมบัติเดิม</li>
            </ul>
         ),
        start: 8, end: 9 },
        { id: "s2-4", label: "Dry First", title: "ผ้า Dry First", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า TK Micro (100% Polyester) ทอด้วยเส้นใยขนาดเล็กพิเศษ (Microfiber)</li>
              <li><strong>น้ำหนักผ้า:</strong> ประมาณ 160 - 170 GMS (ใกล้เคียงกับ ViralBlock VB 201)</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้าละเอียด เรียบเนียน ผิวสัมผัสนุ่มลื่นสบายผิวมากกว่าผ้า TK ทั่วไป</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ผ้าไม่ยับง่าย (Non-Iron) คืนตัวได้ดี ไม่ต้องรีดหลังซัก และไม่ย้วยง่าย</li>
              <li><strong>การระบายอากาศ:</strong> ระบายอากาศได้ดีปานกลาง แห้งไว ไม่เก็บความชื้น ทำให้รู้สึกแห้งสบายขณะสวมใส่</li>
              <li><strong>งานสกรีน:</strong> เหมาะอย่างยิ่งสำหรับงานพิมพ์ Sublimation เพราะเส้นใยโพลีเอสเตอร์ช่วยให้สีซึมลึกและสดใส</li>
              <li><strong>ความทนทาน:</strong> ทนทานต่อการซัก ไม่ขึ้นขนง่าย และรักษารูปทรงเสื้อได้ดีในระยะยาว</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อกิจกรรม, เสื้อพนักงาน, เสื้อทีมงาน และเสื้อที่ต้องการงานพิมพ์ลายเต็มตัว</li>
            </ul>
        ),
        start: 5, end: 6 },
        { id: "s2-5", label: "CVC Juti", title: "ผ้า CVC Juti", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า ViralBlock VB 201 (Antivirus Fabric) รองรับการพิมพ์ Sublimation</li>
              <li><strong>น้ำหนักผ้า:</strong> 165 GMS</li>
              <li><strong>สัมผัส:</strong> สัมผัสฟูนุ่ม ไม่ระคายผิว ไม่เป็นอันตรายต่อผิวสัมผัส และปลอดภัยจากการสวมใส่</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ยับยั้งเชื้อไวรัสได้ถึง 96.84% (มาตรฐาน ISO 18184:2019) และแบคทีเรีย 99.9% แม้ผ่านการซักมากกว่า 30 ครั้ง</li>
              <li><strong>นวัตกรรม:</strong> Anti Microbial Filament Yarn ปลอดภัยสูง ไม่มีการปล่อยสารเคมีเข้าสู่ร่างกาย</li>
              <li><strong>มาตรฐานรองรับ:</strong> ผ่านการรับรองจาก THTI (สถาบันสิ่งทอไทย) และ EPA ประเทศสหรัฐอเมริกา</li>
              <li><strong>การใช้งาน:</strong> เหมาะสำหรับผลิตชุดทำงาน, ชุดกีฬา, สินค้าอนามัย และงานอีเวนท์ที่เน้นสุขอนามัย</li>
            </ul>
         ),
        start: 4, end: 4 },
        { id: "s2-6", label: "CVC Lacoste ", title: "ผ้า CVC Lacoste", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า Dry-Touch เทคโนโลยีผ้า 5.0 โครงสร้างการทอแบบสองชั้น (Super Double-Weaving)</li>
              <li><strong>น้ำหนักผ้า:</strong> ประมาณ 160-170 GMS (เน้นความบางเบาแต่คงรูปทรง)</li>
              <li><strong>นวัตกรรม:</strong> เทคโนโลยีผ้า 5.0 โครงสร้างการทอแบบสองชั้น (Super Double-Weaving)</li>
              <li><strong>ประเภทเส้นใย:</strong> ผสมผสาน Micro-Fibered เพื่อดูดซับความชื้น และเส้นใย Cotton ธรรมชาติเพื่อคืนความแห้งสบาย</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้านุ่มพิเศษ (Super Soft) ให้ความรู้สึกพรีเมียม สบายผิวตลอดการสวมใส่</li>
              <li><strong>การจัดการเหงื่อ:</strong> ดูดซับความชื้นจากผิวสัมผัสทันทีและระเหยออกอย่างรวดเร็ว (Fast Ventilation & Evaporate)</li>
              <li><strong>การรักษารูปทรง:</strong> เนื้อผ้าคืนตัวได้ดี ไม่ย้วย ไม่หด และรักษารูปทรงเสื้อได้ยาวนาน (Long Lasting Shape)</li>
              <li><strong>การดูแลรักษา:</strong> ดูแลรักษาง่าย (Easy to Care) แม้ผ่านการซักหลายครั้งก็ยังคงความนุ่มและคุณสมบัติเดิม</li>
            </ul>
         ),
        start: 8, end: 9 },
        { id: "s2-7", label: "TC Jiti", title: "ผ้า TC Jiti", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า Micro Hybrid (การทอร่วมของเส้นใย 2 ชนิด) โครงสร้างทอจูติแบบละเอียด</li>
              <li><strong>น้ำหนักผ้า:</strong> ประมาณ 180-200 GMS (เหมาะสำหรับเสื้อโปโลยูนิฟอร์ม)</li>
              <li><strong>นวัตกรรม:</strong> การนำเทคโนโลยีเส้นใย 2 ชนิดมาทอร่วมกันเพื่อเสริมประสิทธิภาพผ้าจูติให้มีความยืดหยุ่นสูงขึ้น</li>
              <li><strong>โครงสร้างผ้า:</strong> โครงสร้างทอจูติแบบใหม่ (Micro จูติ) เนื้อผ้ามีความละเอียดและนุ่มนวลน่าสวมใส่</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> มีความยืดหยุ่นสูง (Mechanical Stretch) และรักษารูปทรงได้ดี ไม่เสียทรง (Shape Retention)</li>
              <li><strong>การจัดการความชื้น:</strong> ซึมซับเหงื่อได้ทันทีและแห้งสบาย (Moisture Transport)</li>
              <li><strong>ความปลอดภัย:</strong> ย้อมด้วยสีไร้สารกำมะถัน (Sulfur Free) ไม่ระคายเคืองผิวและเป็นมิตรต่อสิ่งแวดล้อม</li>
              <li><strong>เหมาะสำหรับ:</strong> ชุดยูนิฟอร์มและเสื้อผ้าสไตล์ Active ที่ต้องการความคล่องตัวสูง</li>
            </ul>
         ),
         start: 8, end: 9 },
         { id: "s2-8", label: "Endurance", title: "ผ้า Endurance (Technicore Technology)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า Endurance (Technicore Technology) "Cotton Feel" Polyester</li>
              <li><strong>น้ำหนักผ้า:</strong> หน้ากว้าง 74" หนัก 210 GMS</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> แห้งไว ไม่เหนียวเหนอะหนะ (Fast Dry Property) และระบายอากาศได้ดี (Breathable)</li>
              <li><strong>การจัดการกลิ่น:</strong> เสริมความมั่นใจด้วยคุณสมบัติป้องกันการเกิดกลิ่น (Anti-Odor)</li>
              <li><strong>ความทนทาน:</strong> สีสด ทนทาน สวยงาม (Color Retention) และรักษารูปทรงได้ดี</li>
              <li><strong>การดูแลรักษา:</strong> ดูแลรักษาง่าย ไม่ต้องรีด (Easy Care) ช่วยให้การทำเสื้อเป็นเรื่องง่าย</li>
            </ul>
         ),
         start: 13, end: 13 },
         { id: "s2-9", label: "TC Lacoste", title: "ผ้า TC Lacoste", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า DT Lacoste (Double Texture) ทอด้วยเทคนิคพิเศษให้มีลายรูพรุนคล้ายรังผึ้งหรือรูปข้าวหลามตัด</li>
              <li><strong>น้ำหนักผ้า:</strong> ประมาณ 170 - 180 GMS มีความหนากำลังดี ไม่บางจนเกินไป</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้ามีความหนานุ่ม อยู่ทรงสวย ให้ลุคที่ดูเป็นทางการและพรีเมียม</li>
              <li><strong>การระบายอากาศ:</strong> ระบายอากาศได้ดีเยี่ยมด้วยรูระบายอากาศขนาดเล็กจากการทอ ช่วยให้สวมใส่สบาย ไม่ร้อน</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ผ้าคืนตัวได้ดี ไม่ยับง่าย (Easy Iron) และมีอัตราการหดตัวต่ำมากหลังการซัก</li>
              <li><strong>ความทนทาน:</strong> เนื้อผ้าแข็งแรง ทนทานต่อการซัก ไม่ขึ้นขนง่าย และสีสันติดทนนาน</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อโปโลพนักงาน, เสื้อยูนิฟอร์มองค์กร, และเสื้อกอล์ฟที่ต้องการความเนี๊ยบเป็นพิเศษ</li>
            </ul>
         ),
         start: 14, end: 15 },
         { id: "s2-10", label: "TK Micro", title: "TK Micro", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า TK Micro (100% Polyester) ทอด้วยเส้นใยขนาดเล็กพิเศษ (Microfiber)</li>
              <li><strong>น้ำหนักผ้า:</strong> ประมาณ 160 - 170 GMS (ใกล้เคียงกับ ViralBlock VB 201)</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้าละเอียด เรียบเนียน ผิวสัมผัสนุ่มลื่นสบายผิวมากกว่าผ้า TK ทั่วไป</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ผ้าไม่ยับง่าย (Non-Iron) คืนตัวได้ดี ไม่ต้องรีดหลังซัก และไม่ย้วยง่าย</li>
              <li><strong>การระบายอากาศ:</strong> ระบายอากาศได้ดีปานกลาง แห้งไว ไม่เก็บความชื้น ทำให้รู้สึกแห้งสบายขณะสวมใส่</li>
              <li><strong>งานสกรีน:</strong> เหมาะอย่างยิ่งสำหรับงานพิมพ์ Sublimation เพราะเส้นใยโพลีเอสเตอร์ช่วยให้สีซึมลึกและสดใส</li>
              <li><strong>ความทนทาน:</strong> ทนทานต่อการซัก ไม่ขึ้นขนง่าย และรักษารูปทรงเสื้อได้ดีในระยะยาว</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อกิจกรรม, เสื้อพนักงาน, เสื้อทีมงาน และเสื้อที่ต้องการงานพิมพ์ลายเต็มตัว</li>
            </ul>
        ),
        start: 5, end: 6 },
        { id: "s2-11", label: "Micro", title: "Micro", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้า TK Micro (100% Polyester) ทอด้วยเส้นใยขนาดเล็กพิเศษ (Microfiber)</li>
              <li><strong>น้ำหนักผ้า:</strong> ประมาณ 160 - 170 GMS (ใกล้เคียงกับ ViralBlock VB 201)</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้าละเอียด เรียบเนียน ผิวสัมผัสนุ่มลื่นสบายผิวมากกว่าผ้า TK ทั่วไป</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ผ้าไม่ยับง่าย (Non-Iron) คืนตัวได้ดี ไม่ต้องรีดหลังซัก และไม่ย้วยง่าย</li>
              <li><strong>การระบายอากาศ:</strong> ระบายอากาศได้ดีปานกลาง แห้งไว ไม่เก็บความชื้น ทำให้รู้สึกแห้งสบายขณะสวมใส่</li>
              <li><strong>งานสกรีน:</strong> เหมาะอย่างยิ่งสำหรับงานพิมพ์ Sublimation เพราะเส้นใยโพลีเอสเตอร์ช่วยให้สีซึมลึกและสดใส</li>
              <li><strong>ความทนทาน:</strong> ทนทานต่อการซัก ไม่ขึ้นขนง่าย และรักษารูปทรงเสื้อได้ดีในระยะยาว</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อกิจกรรม, เสื้อพนักงาน, เสื้อทีมงาน และเสื้อที่ต้องการงานพิมพ์ลายเต็มตัว</li>
            </ul>
        ),
        start: 5, end: 6 },
      ]
    },
    { 
      id: "3", name: "เสื้อเชิ้ต", img: "/hp/7.png", path: "/02colour/shirt",
      subOptions: [
        { id: "s3-1", label: "TC Comb Twill", title: "ผ้าคอมทวิว (Combed Twill)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าคอมทวิว (Combed Twill) ทอแบบเฉียงที่มีความละเอียดสูง (เส้นด้าย Combed)</li>
              <li><strong>ส่วนผสม:</strong> Cotton 55% และ Polyester 45% (ผสมผสานความนุ่มและการรักษารูปทรง)</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้าเนียนนุ่ม สวมใส่สบายผิว ไม่ระคายเคือง และมีความเงางามเล็กน้อยดูภูมิฐาน</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ระบายอากาศได้ดีเยี่ยมด้วยส่วนผสมของ Cotton และไม่ยับง่ายด้วยเส้นใย Polyester</li>
              <li><strong>การใช้งาน:</strong> ผ้ามีความหนาปานกลาง แข็งแรงทนทานต่อการซักและการใช้งานหนัก ไม่เป็นขนง่าย</li>
              <li><strong>การรักษารูปทรง:</strong> คืนตัวได้ดี ไม่ค่อยหดหรือย้วยหลังซัก ช่วยให้เสื้อผ้าดูเป็นทรงสวยตลอดวัน</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อเชิ้ตพนักงาน, ชุดยูนิฟอร์มสำนักงาน, ชุดกาวน์, และกางเกงสแล็ค</li>
            </ul>
         ),
          start: 1, end: 5 },
          { id: "s3-2", label: "Oxford Chambray", title: "ผ้าอ๊อกฟอร์ดแชมเบรย์ (Oxford Chambray)", 
            desc: (
              <ul className="list-disc ml-5 space-y-1">
                <li><strong>ประเภทผ้า:</strong> ผ้าอ๊อกฟอร์ดแชมเบรย์อย่างดี รหัส No.4550 ทอด้วยเส้นด้ายสลับสีให้ลุคที่มีมิติ</li>
                <li><strong>ส่วนผสม:</strong> มีส่วนผสมของฝ้าย (Cotton) ในปริมาณมาก ทำให้ระบายอากาศได้ดีและใส่สบาย</li>
                <li><strong>ลักษณะเนื้อผ้า:</strong> เนื้อผ้ามีความหนาปานกลาง อยู่ทรงสวย มีความทนทานสูง</li>
                <li><strong>ข้อแนะนำการใช้งาน:</strong> เนื่องจากมีส่วนผสมของฝ้ายมาก ควรซัก 1-2 ครั้งก่อนตัด เพื่อดูความยืดหยุ่นและเผื่อการหดของผ้า</li>
                <li><strong>เหมาะสำหรับ:</strong> เสื้อเชิ้ตทำงาน, เสื้อยูนิฟอร์มสไตล์กึ่งลำลอง และเสื้อเชิ้ตแฟชั่น</li>
              </ul>
           ),
          start: 8, end: 10 },
          { id: "s3-3", label: "Stripe", title: "ผ้า Stripe", 
            desc: (
              <ul className="list-disc ml-5 space-y-1">
                <li><strong>ประเภทผ้า:</strong> ผ้าทวิลล์ (Twill) มีลักษณะการทอที่เห็นเป็นลายเส้นแนวเฉียง (Diagonal Weave) ที่เป็นเอกลักษณ์</li>
                <li><strong>สัมผัส:</strong> เนื้อผ้ามีความหนาแน่น นุ่มนวล และมีน้ำหนักทิ้งตัวสวย (Drape) ให้ลุคที่ดูภูมิฐาน</li>
                <li><strong>ความทนทาน:</strong> แข็งแรงทนทานต่อการเสียดสีและการใช้งานหนัก เนื่องจากโครงสร้างการทอที่แน่นหนา</li>
                <li><strong>คุณสมบัติพิเศษ:</strong> ไม่ยับง่าย คืนตัวได้ดีกว่าการทอแบบขัดปกติ และช่วยพรางคราบสกปรกได้ดีจากลายเส้นเฉียงบนเนื้อผ้า</li>
                <li><strong>การดูแลรักษา:</strong> ดูแลรักษาง่าย ซักทำความสะอาดได้บ่อยโดยที่เนื้อผ้าไม่เปื่อยยุ่ยง่าย และสีสันติดทนนาน</li>
                <li><strong>การรักษารูปทรง:</strong> คงรูปทรงได้ดีเยี่ยม ไม่หดตัวง่ายหลังการซัก ช่วยให้เสื้อผ้าดูเนี๊ยบตลอดวัน</li>
                <li><strong>เหมาะสำหรับ:</strong> เสื้อเชิ้ตทำงาน, ชุดยูนิฟอร์มพนักงาน, กางเกงสแล็ค, และเสื้อแจ็คเก็ต</li>
              </ul>
           ),
          start: 6, end: 6 },
         { id: "s3-4", label: "Orlon", title: "ผ้าออร์ลอน (Orlon)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าออร์ลอน (Orlon) เส้นใยอะคริลิกสังเคราะห์ที่มีความนุ่มและฟูเป็นพิเศษ</li>
              <li><strong>สัมผัส:</strong> ให้ความรู้สึกนุ่มนวล อบอุ่น และน้ำหนักเบา คล้ายกับขนสัตว์ธรรมชาติแต่ไม่ระคายเคืองผิว</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> มีความยืดหยุ่นสูง คืนตัวได้ดี ไม่ยับง่าย และทนทานต่อแสงแดดและสารเคมีได้ดีเยี่ยม</li>
              <li><strong>การรักษาความร้อน:</strong> เก็บกักความอบอุ่นได้ดีมาก แต่ยังสามารถระบายอากาศได้เพื่อไม่ให้อึดอัดจนเกินไป</li>
              <li><strong>ความทนทาน:</strong> ทนต่อการซัก ไม่หดตัวง่าย ทนต่อเชื้อราและแมลง (ต่างจากขนสัตว์แท้ที่แมลงมักกัดกิน)</li>
              <li><strong>การดูแลรักษา:</strong> ดูแลรักษาง่าย แห้งไว และสีสันติดทนนาน ไม่ซีดจางง่ายจากการซักหรือแสงแดด</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อกันหนาว, เสื้อไหมพรม, เสื้อแจ็คเก็ตน้ำหนักเบา, และผ้าพันคอพรีเมียม</li>
            </ul>
         ),
        start: 7, end: 7 },
        { id: "s3-5", label: "Oxford Chambray", title: "ผ้าอ๊อกฟอร์ดแชมเบรย์ (Oxford Chambray)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าอ๊อกฟอร์ดแชมเบรย์อย่างดี รหัส No.4550 ทอด้วยเส้นด้ายสลับสีให้ลุคที่มีมิติ</li>
              <li><strong>ส่วนผสม:</strong> มีส่วนผสมของฝ้าย (Cotton) ในปริมาณมาก ทำให้ระบายอากาศได้ดีและใส่สบาย</li>
              <li><strong>ลักษณะเนื้อผ้า:</strong> เนื้อผ้ามีความหนาปานกลาง อยู่ทรงสวย มีความทนทานสูง</li>
              <li><strong>ข้อแนะนำการใช้งาน:</strong> เนื่องจากมีส่วนผสมของฝ้ายมาก ควรซัก 1-2 ครั้งก่อนตัด เพื่อดูความยืดหยุ่นและเผื่อการหดของผ้า</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อเชิ้ตทำงาน, เสื้อยูนิฟอร์มสไตล์กึ่งลำลอง และเสื้อเชิ้ตแฟชั่น</li>
            </ul>
         ),
        start: 8, end: 10 },
      ]
    },
    { 
      id: "4", name: "เสื้อเชิ้ตช่าง", img: "/hp/8.png", path: "/01collection/workshop",
      subOptions: [
        { id: "s4-1", label: "TC Comb Twill", title: "ผ้าคอมทวิว (Combed Twill)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าคอมทวิว (Combed Twill) ทอแบบเฉียงที่มีความละเอียดสูง (เส้นด้าย Combed)</li>
              <li><strong>ส่วนผสม:</strong> Cotton 55% และ Polyester 45% (ผสมผสานความนุ่มและการรักษารูปทรง)</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้าเนียนนุ่ม สวมใส่สบายผิว ไม่ระคายเคือง และมีความเงางามเล็กน้อยดูภูมิฐาน</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ระบายอากาศได้ดีเยี่ยมด้วยส่วนผสมของ Cotton และไม่ยับง่ายด้วยเส้นใย Polyester</li>
              <li><strong>การใช้งาน:</strong> ผ้ามีความหนาปานกลาง แข็งแรงทนทานต่อการซักและการใช้งานหนัก ไม่เป็นขนง่าย</li>
              <li><strong>การรักษารูปทรง:</strong> คืนตัวได้ดี ไม่ค่อยหดหรือย้วยหลังซัก ช่วยให้เสื้อผ้าดูเป็นทรงสวยตลอดวัน</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อเชิ้ตพนักงาน, ชุดยูนิฟอร์มสำนักงาน, ชุดกาวน์, และกางเกงสแล็ค</li>
            </ul>
         ),
          start: 1, end: 5 },
          { id: "s4-2", label: "Oxford Chambray", title: "ผ้าอ๊อกฟอร์ดแชมเบรย์ (Oxford Chambray)", 
            desc: (
              <ul className="list-disc ml-5 space-y-1">
                <li><strong>ประเภทผ้า:</strong> ผ้าอ๊อกฟอร์ดแชมเบรย์อย่างดี รหัส No.4550 ทอด้วยเส้นด้ายสลับสีให้ลุคที่มีมิติ</li>
                <li><strong>ส่วนผสม:</strong> มีส่วนผสมของฝ้าย (Cotton) ในปริมาณมาก ทำให้ระบายอากาศได้ดีและใส่สบาย</li>
                <li><strong>ลักษณะเนื้อผ้า:</strong> เนื้อผ้ามีความหนาปานกลาง อยู่ทรงสวย มีความทนทานสูง</li>
                <li><strong>ข้อแนะนำการใช้งาน:</strong> เนื่องจากมีส่วนผสมของฝ้ายมาก ควรซัก 1-2 ครั้งก่อนตัด เพื่อดูความยืดหยุ่นและเผื่อการหดของผ้า</li>
                <li><strong>เหมาะสำหรับ:</strong> เสื้อเชิ้ตทำงาน, เสื้อยูนิฟอร์มสไตล์กึ่งลำลอง และเสื้อเชิ้ตแฟชั่น</li>
              </ul>
           ),
          start: 8, end: 10 },
          { id: "s4-3", label: "Stripe", title: "ผ้า Stripe", 
            desc: (
              <ul className="list-disc ml-5 space-y-1">
                <li><strong>ประเภทผ้า:</strong> ผ้าทวิลล์ (Twill) มีลักษณะการทอที่เห็นเป็นลายเส้นแนวเฉียง (Diagonal Weave) ที่เป็นเอกลักษณ์</li>
                <li><strong>สัมผัส:</strong> เนื้อผ้ามีความหนาแน่น นุ่มนวล และมีน้ำหนักทิ้งตัวสวย (Drape) ให้ลุคที่ดูภูมิฐาน</li>
                <li><strong>ความทนทาน:</strong> แข็งแรงทนทานต่อการเสียดสีและการใช้งานหนัก เนื่องจากโครงสร้างการทอที่แน่นหนา</li>
                <li><strong>คุณสมบัติพิเศษ:</strong> ไม่ยับง่าย คืนตัวได้ดีกว่าการทอแบบขัดปกติ และช่วยพรางคราบสกปรกได้ดีจากลายเส้นเฉียงบนเนื้อผ้า</li>
                <li><strong>การดูแลรักษา:</strong> ดูแลรักษาง่าย ซักทำความสะอาดได้บ่อยโดยที่เนื้อผ้าไม่เปื่อยยุ่ยง่าย และสีสันติดทนนาน</li>
                <li><strong>การรักษารูปทรง:</strong> คงรูปทรงได้ดีเยี่ยม ไม่หดตัวง่ายหลังการซัก ช่วยให้เสื้อผ้าดูเนี๊ยบตลอดวัน</li>
                <li><strong>เหมาะสำหรับ:</strong> เสื้อเชิ้ตทำงาน, ชุดยูนิฟอร์มพนักงาน, กางเกงสแล็ค, และเสื้อแจ็คเก็ต</li>
              </ul>
           ),
          start: 6, end: 6 },
         { id: "s4-3", label: "Orlon", title: "ผ้าออร์ลอน (Orlon)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าออร์ลอน (Orlon) เส้นใยอะคริลิกสังเคราะห์ที่มีความนุ่มและฟูเป็นพิเศษ</li>
              <li><strong>สัมผัส:</strong> ให้ความรู้สึกนุ่มนวล อบอุ่น และน้ำหนักเบา คล้ายกับขนสัตว์ธรรมชาติแต่ไม่ระคายเคืองผิว</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> มีความยืดหยุ่นสูง คืนตัวได้ดี ไม่ยับง่าย และทนทานต่อแสงแดดและสารเคมีได้ดีเยี่ยม</li>
              <li><strong>การรักษาความร้อน:</strong> เก็บกักความอบอุ่นได้ดีมาก แต่ยังสามารถระบายอากาศได้เพื่อไม่ให้อึดอัดจนเกินไป</li>
              <li><strong>ความทนทาน:</strong> ทนต่อการซัก ไม่หดตัวง่าย ทนต่อเชื้อราและแมลง (ต่างจากขนสัตว์แท้ที่แมลงมักกัดกิน)</li>
              <li><strong>การดูแลรักษา:</strong> ดูแลรักษาง่าย แห้งไว และสีสันติดทนนาน ไม่ซีดจางง่ายจากการซักหรือแสงแดด</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อกันหนาว, เสื้อไหมพรม, เสื้อแจ็คเก็ตน้ำหนักเบา, และผ้าพันคอพรีเมียม</li>
            </ul>
         ),
        start: 7, end: 7 },
        { id: "s4-4", label: "Oxford Chambray", title: "ผ้าอ๊อกฟอร์ดแชมเบรย์ (Oxford Chambray)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าอ๊อกฟอร์ดแชมเบรย์อย่างดี รหัส No.4550 ทอด้วยเส้นด้ายสลับสีให้ลุคที่มีมิติ</li>
              <li><strong>ส่วนผสม:</strong> มีส่วนผสมของฝ้าย (Cotton) ในปริมาณมาก ทำให้ระบายอากาศได้ดีและใส่สบาย</li>
              <li><strong>ลักษณะเนื้อผ้า:</strong> เนื้อผ้ามีความหนาปานกลาง อยู่ทรงสวย มีความทนทานสูง</li>
              <li><strong>ข้อแนะนำการใช้งาน:</strong> เนื่องจากมีส่วนผสมของฝ้ายมาก ควรซัก 1-2 ครั้งก่อนตัด เพื่อดูความยืดหยุ่นและเผื่อการหดของผ้า</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อเชิ้ตทำงาน, เสื้อยูนิฟอร์มสไตล์กึ่งลำลอง และเสื้อเชิ้ตแฟชั่น</li>
            </ul>
         ),
        start: 8, end: 10 },
      ]
    },
    { 
      id: "5", name: "เสื้อช็อป", img: "/hp/9.png", path: "/01collection/engineer",
      subOptions: [
        { id: "s5-1", label: "Safety First", title: "Engineer Jacket", desc: "เน้นความปลอดภัยและกระเป๋าอเนกประสงค์", start: 1, end: 3 },
      ]
    },
    { 
      id: "6", name: "เสื้อแจ็คเก็ต", img: "/hp/10.png", path: "/01collection/jacket",
      subOptions: [
        { id: "s6-1", label: "Micro Fiber", title: "Windbreaker", desc: "กันลม กันหนาว น้ำหนักเบา", start: 1, end: 3 },
      ]
    },
    { 
      id: "7", name: "เสื้อแม่บ้าน", img: "/hp/11.png", path: "/01collection/maid",
      subOptions: [
        { id: "s7-1", label: "Maid Uniform", title: "Hospitality Series", desc: "ดีไซน์สุภาพ ทำความสะอาดง่าย", start: 1, end: 3 },
      ]
    },
    { 
      id: "8", name: "เสื้อเชฟ", img: "/hp/12.png", path: "/01collection/chef",
      subOptions: [
        { id: "s8-1", label: "Chef Master", title: "Professional Kitchen", desc: "ผ้าทนความร้อน ระบายอากาศดี", start: 1, end: 3 },
      ]
    },
    { 
      id: "9", name: "ผ้ากันเปื้อน", img: "/hp/13.png", path: "/02colour/arpon",
      subOptions: [
        { id: "s9-1", label: "Solon", title: "ผ้าโซล่อน (Solon)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าโซล่อน (Solon) ผลิตจากเส้นใยโพลีเอสเตอร์ 100% ทอเป็นลายสองทั้งสองด้าน</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้ามีความหนาปานกลาง ผิวสัมผัสค่อนข้างนวลและเรียบเนียน</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ตัวผ้ามีความเงางามเล็กน้อย ดูสะอาดตา และสีสันสดใสติดทนนาน</li>
              <li><strong>การดูแลรักษา:</strong> ซักง่าย แห้งไว ไม่ค่อยยับหลังการซัก ช่วยประหยัดเวลาในการรีด</li>
              <li><strong>ความทนทาน:</strong> เนื้อผ้ามีความแข็งแรง ไม่เปื่อยง่าย ทนทานต่อการใช้งานทั่วไป</li>
              <li><strong>การใช้งาน:</strong> เหมาะอย่างยิ่งสำหรับทำผ้ากันเปื้อน, ชุดพนักงานเสิร์ฟ, ชุดคอสเพลย์ และกางเกงที่เน้นราคาประหยัด</li>
              <li><strong>ข้อควรระวัง:</strong> การระบายอากาศอาจจะไม่ดีเท่าผ้าที่มีส่วนผสมของ Cotton จึงไม่เหมาะกับงานที่ต้องอยู่กลางแจ้งเป็นเวลานาน</li>
            </ul>
         ), start: 1, end: 2 
        },
        { id: "s9-2", label: "Toray Biscop", title: "ผ้าโทเรบิสคอบ (Toray Biscop)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าโทเรบิสคอบ (Toray Biscop) เป็นผ้าเนื้อดีที่มีการทอแบบลายขัดอย่างละเอียด</li>
              <li><strong>ส่วนผสม:</strong> เส้นใยโพลีเอสเตอร์ผสมเรยอน (Rayon) ทำให้ได้เนื้อผ้าที่ทนทานแต่ยังมีความพริ้วไหว</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้าเนียนนุ่ม สัมผัสละเอียด และมีความนวลมือมากกว่าผ้าโทเรเกรดทั่วไป</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ผ้าไม่หด ไม่ย้วย และรักษารูปทรงได้ดีเยี่ยมหลังการซัก</li>
              <li><strong>การดูแลรักษา:</strong> ยับยาก รีดง่าย และสีสันติดทนนาน ไม่ซีดจางง่ายจากการซักบ่อยครั้ง</li>
              <li><strong>การระบายอากาศ:</strong> ระบายอากาศได้ดีปานกลาง สวมใส่สบาย ไม่หนาจนเกินไป เหมาะกับสภาพอากาศในไทย</li>
              <li><strong>เหมาะสำหรับ:</strong> ชุดยูนิฟอร์มพนักงาน, เสื้อกาวน์แพทย์/พยาบาล, ชุดฟอร์มสำนักงาน และกางเกงสแล็คเกรดพรีเมียม</li>
            </ul>
         ), start: 3, end: 4 
        },
        { id: "s9-3", label: "Double Westpoint", title: "ผ้าเวสปอยท์คู่ (Double Westpoint)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าเวสปอยท์คู่ (Double Westpoint) ทอด้วยเส้นด้ายคู่ (Double Yarn) ในรูปแบบลายทแยงเฉียงที่มีความแน่นหนาเป็นพิเศษ</li>
              <li><strong>ส่วนผสม:</strong> มักผลิตจาก Cotton 100% เกรดพรีเมียม ทำให้ระบายอากาศได้ดีเยี่ยมและไม่ระคายเคืองผิว</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้ามีความหนา นุ่ม และมีน้ำหนักทิ้งตัวดี ให้ความรู้สึกแข็งแรงแต่ยังคงความสบายในการสวมใส่</li>
              <li><strong>ความทนทาน:</strong> ทนทานต่อการฉีกขาดและการเสียดสีได้ดีเยี่ยม เหมาะสำหรับการใช้งานหนัก (Heavy Duty)</li>
              <li><strong>คุณสมบัติพิเศษ:</strong> ผ้าอยู่ทรงสวย ดูภูมิฐาน และยิ่งซักเนื้อผ้าจะยิ่งนุ่มขึ้นโดยที่ยังคงความแข็งแรงไว้</li>
              <li><strong>การดูแลรักษา:</strong> ซักล้างคราบสกปรกออกได้ง่าย ทนต่อการซักบ่อยครั้ง แต่เนื่องจากเป็น Cotton 100% อาจต้องรีดเพื่อให้ดูเนี๊ยบ</li>
              <li><strong>เหมาะสำหรับ:</strong> กางเกงทำงาน, ชุดช่าง (Workwear), เสื้อแจ็คเก็ตแนว Safari, และยูนิฟอร์มที่เน้นความทนทานสูง</li>
            </ul>
         ), start: 5, end: 5 
        },
        { id: "s9-4", label: "Toray Poplin", title: "ผ้าโทเรป๊อปปิ้น (Toray Poplin)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าโทเรป๊อปปิ้น (Toray Poplin) อย่างดี มีทั้งแบบเส้นเดี่ยว (รหัส 1090) และแบบเส้นคู่ (รหัส 70000)</li>
              <li><strong>ขนาดหน้าผ้า:</strong> หน้ากว้าง 58 นิ้ว</li>
              <li><strong>ลักษณะเนื้อผ้า:</strong> เป็นผ้าทอลายขัดที่มีความละเอียดและหนาแน่นสูง เนื้อผ้าเรียบเนียนและอยู่ทรงสวย</li>
              <li><strong>คุณสมบัติเด่น:</strong> เนื้อผ้ามีความทนทานสูง ไม่เปื่อยง่าย และรักษารูปทรงได้ดีเยี่ยมหลังการซัก</li>
              <li><strong>การดูแลรักษา:</strong> ยับยาก รีดง่าย และสีสันติดทนนาน</li>
              <li><strong>สัมผัส:</strong> ให้สัมผัสที่สะอาดตาและเป็นระเบียบ เหมาะสำหรับการสวมใส่ที่ต้องการความเนี้ยบ</li>
              <li><strong>เหมาะสำหรับ:</strong> ชุดยูนิฟอร์มพนักงาน, เสื้อเชิ้ตทำงาน, และชุดที่ต้องการความคงทนเป็นพิเศษ</li>
            </ul>
         ), start: 6, end: 7 
        },
        { id: "s9-4", label: "Micro", title: "ผ้าไมโคร (Micro)", 
          desc: (
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>ประเภทผ้า:</strong> ผ้าไมโคร (Microfiber) ทอด้วยเส้นใยโพลีเอสเตอร์ที่มีขนาดเล็กพิเศษ</li>
              <li><strong>น้ำหนักผ้า:</strong> ประมาณ 160 - 170 GMS ซึ่งมีความใกล้เคียงกับผ้า ViralBlock</li>
              <li><strong>สัมผัส:</strong> เนื้อผ้ามีความละเอียด เรียบเนียน และนุ่มลื่นสบายผิวมากกว่าผ้าโพลีเอสเตอร์ทั่วไป</li>
              <li><strong>คุณสมบัติเด่น:</strong> ระบายอากาศได้ดี แห้งไว ไม่เก็บความชื้น และไม่ยับง่ายหลังการซัก</li>
              <li><strong>การรักษารูปทรง:</strong> คืนตัวได้ดี ไม่ย้วยง่าย และรักษารูปทรงเสื้อได้ดีในระยะยาว</li>
              <li><strong>งานสกรีน:</strong> เหมาะอย่างยิ่งสำหรับงานพิมพ์ Sublimation เพราะเส้นใยช่วยให้สีซึมลึกและสีสันสดใส</li>
              <li><strong>เหมาะสำหรับ:</strong> เสื้อกิจกรรม, เสื้อทีมงาน, ชุดกีฬา และเสื้อที่ต้องการงานพิมพ์ลายเต็มตัว</li>
            </ul>
         ), start: 8, end: 9 
        },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 lg:px-12 py-16 font-noto">
      
      {/* --- Header --- */}
      <header className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full border border-red-100">
          <Sparkles size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Toffy Boutique Selection</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
          Fabric <span className="text-red-600">Catalog</span>
        </h1>
      </header>

      {/* --- LEVEL 1: Main Tabs (Horizontal Icon Tabs - 9 Menus) --- */}
      <Tabs defaultValue="1" className="w-full">
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <TabsList className="flex h-auto p-2 bg-slate-50 rounded-[2.5rem] border border-slate-200 gap-4 min-w-max">
            {collectionData.map((main) => (
              <TabsTrigger
                key={main.id}
                value={main.id}
                className="flex flex-col items-center gap-3 px-6 py-4 rounded-[2rem] transition-all data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-red-600"
              >
                <div className="relative w-12 h-12">
                  <Image src={main.img} alt={main.name} fill className="object-contain" />
                </div>
                <span className="text-[15px] font-black uppercase leading-none tracking-tight whitespace-nowrap">
                  {main.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* --- LEVEL 2: Nested Content Layout --- */}
        {collectionData.map((main) => (
          <TabsContent key={main.id} value={main.id} className="focus-visible:outline-none">
            
            <Tabs defaultValue={main.subOptions[0].id} className="w-full">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                
                {/* LEFT: Vertical Sub-Menu (25%) */}
                <aside className="w-full lg:w-1/4 lg:sticky lg:top-24">
                  <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-2">
                      {main.name} Type
                    </p>
                    <TabsList className="flex flex-col h-auto w-full bg-transparent gap-2">
                      {main.subOptions.map((sub) => (
                        <TabsTrigger
                          key={sub.id}
                          value={sub.id}
                          className="w-full justify-start px-6 py-4 rounded-xl font-bold text-sm transition-all 
                                     data-[state=active]:bg-red-600 data-[state=active]:text-white 
                                     text-slate-600 hover:bg-red-50"
                        >
                          {sub.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </aside>

                {/* RIGHT: Content Display (75%) */}
                <main className="w-full lg:w-3/4">
                  {main.subOptions.map((sub) => (
                    <TabsContent key={sub.id} value={sub.id} className="m-0 focus-visible:outline-none">
                      {/* Text Block */}
                      <div className="mb-10 space-y-4 border-l-4 border-red-600 pl-8">
                        <h2 className="text-4xl font-black text-slate-900 uppercase">
                          {main.name} / <span className="text-red-600">{sub.title}</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                          {sub.desc}
                        </p>
                      </div>

                      {/* Picture Block (Gallery 3:2) */}
                      <ColorRangeGalleryV2 
                        path={main.path} 
                        start={sub.start} 
                        end={sub.end} 
                      />
                    </TabsContent>
                  ))}
                </main>

              </div>
            </Tabs>

          </TabsContent>
        ))}
      </Tabs>

      {/* --- Footer Branding --- */}
      <footer className="mt-32 pt-16 border-t border-slate-100 flex flex-col items-center">
        <h3 className="font-black text-4xl text-slate-900 tracking-tighter uppercase opacity-30">
          Toffy <span className="text-red-600">Boutique</span>
        </h3>
      </footer>
    </div>
  );
}