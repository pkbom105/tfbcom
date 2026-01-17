"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, CreditCard, ShieldCheck, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function PaymentPage() {
  const bankAccounts = [
    {
      bankName: "ธนาคารกสิกรไทย",
      accountName: "บริษัท ทอฟฟี่ บูติก จำกัด",
      accountNumber: "012-3-45678-9",
      branch: "สาขาพุทธบูชา",
      color: "bg-green-600",
    },
    {
      bankName: "ธนาคารไทยพาณิชย์",
      accountName: "บริษัท ทอฟฟี่ บูติก จำกัด",
      accountNumber: "987-6-54321-0",
      branch: "สาขาเซ็นทรัล พระราม 2",
      color: "bg-purple-700",
    },
  ];

  const copyToClipboard = (num: string) => {
    navigator.clipboard.writeText(num);
    alert("คัดลอกเลขบัญชีแล้ว: " + num);
  };

  return (
    <main className="min-h-screen font-kanit bg-white pb-20">
      {/* --- Header --- */}
      <section className="bg-slate-50 py-16 px-6 border-b text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Payment <span className="text-red-600">| การชำระเงิน</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          ตรวจสอบรายละเอียดเลขที่บัญชีธนาคารเพื่อดำเนินการชำระเงินมัดจำค่าสินค้า
        </p>
      </section>

      {/* --- Main Content Grid: 35% / 65% --- */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-start">
        
        {/* คอลัมน์ซ้าย (35%): ข้อมูลบัญชีธนาคาร */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="text-red-600 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900">ช่องทางการโอนเงิน</h2>
          </div>
          
          {bankAccounts.map((acc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border border-slate-100 shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden">
                <div className={cn("h-1.5 w-full", acc.color)} />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{acc.bankName}</h3>
                      <p className="text-xs text-slate-500">{acc.branch}</p>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-full">
                      <ShieldCheck className="text-blue-600 w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="bg-slate-900 p-5 rounded-xl text-white relative group">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Account Number</p>
                    <p className="text-2xl font-mono font-bold">{acc.accountNumber}</p>
                    <button 
                      onClick={() => copyToClipboard(acc.accountNumber)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors"
                      title="Copy Number"
                    >
                      <Copy size={18} className="text-slate-400 group-hover:text-white" />
                    </button>
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Account Name</p>
                    <p className="font-bold text-slate-800 text-sm">{acc.accountName}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* เงื่อนไขการชำระเงิน (ด้านล่างคอลัมน์ซ้าย) */}
          <div className="bg-blue-50/50 border-l-4 border-blue-500 p-5 rounded-r-xl mt-10">
            <h4 className="text-blue-900 font-bold text-sm mb-2 flex items-center gap-2">
              <ExternalLink size={16} /> เงื่อนไขการชำระเงิน
            </h4>
            <ul className="text-xs text-blue-700 space-y-2 list-disc pl-4 leading-relaxed">
              <li>ชำระเงินมัดจำ 50% เพื่อยืนยันการผลิต</li>
              <li>ชำระส่วนที่เหลือ 50% ก่อนจัดส่งสินค้า</li>
              <li>กรุณาแจ้งสลิปทันทีหลังโอนเงินเสร็จสิ้น</li>
            </ul>
          </div>
        </div>

        {/* คอลัมน์ขวา (65%): รูปภาพสรุป/QR Code (Ratio 36:25) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
             <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
               <Download className="text-red-600 w-6 h-6" /> ภาพสรุปเลขบัญชี
             </h2>
             <a 
               href="/picture/payment-tfb.jpg" 
               download="Payment-Details-Toffy-Boutique.jpg"
               className="text-sm font-bold text-red-600 hover:underline flex items-center gap-1"
             >
               Download JPG <Download size={14} />
             </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* กรอบรูปดีไซน์พรีเมียม */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-slate-200 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <Card className="relative border-none shadow-2xl overflow-hidden rounded-[1.5rem] bg-white">
              <CardContent className="p-0">
                {/* Ratio 36:25 
                   การคำนวณ: (25 / 36) * 100 = 69.44%
                */}
                <div className="relative w-full aspect-[36/25] overflow-hidden bg-slate-100">
                  <Image
                    src="/picture/payment-tfb.jpg"
                    alt="เลขที่บัญชีและช่องทางการชำระเงิน บริษัท ทอฟฟี่ บูติก จำกัด"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <p className="text-center text-slate-400 text-xs italic">
            * ท่านสามารถบันทึกภาพหน้าจอนี้เพื่อใช้เป็นข้อมูลในการชำระเงิน
          </p>
        </div>
      </section>
    </main>
  );
}