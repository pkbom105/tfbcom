"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  ChevronsDown, 
  Home, 
  Shirt, 
  Palette, 
  PhoneCall, 
  Languages,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

// UI Components
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"TH" | "EN">("TH");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavUnderline = () => (
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-[600ms] origin-center group-hover:scale-x-100" />
  );

  // ปรับความสูง h-[44px] เพื่อให้พื้นที่คลิกและตำแหน่งตัวอักษรเท่ากันทุกเมนู
  const commonStyles = "text-lg cursor-pointer relative group transition-colors duration-300 hover:text-red-600 font-normal flex items-center justify-center h-[44px]";
  
  const menubarTriggerStyles = cn(
    commonStyles, 
    "min-w-[100px] px-4 bg-transparent border-none shadow-none gap-1 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-red-600"
  );

  const subMenuItemStyles = "text-base py-3 px-4 relative cursor-pointer transition-colors duration-300 hover:text-red-600 hover:underline underline-offset-[6px] decoration-2 hover:bg-transparent focus:bg-transparent focus:text-red-600 data-[highlighted]:bg-transparent data-[highlighted]:text-red-600 font-normal";

  const dropdownContentStyles = "bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 animate-in fade-in slide-in-from-top-1 z-[110] before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:block";

  return (
    <header className={cn(
      "w-full border-b sticky top-0 bg-white z-[100] transition-all duration-300",
      isScrolled ? "shadow-md py-1" : "shadow-sm py-2"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
          <Image 
            src="/picture/toffyboutique-logo.png"
            alt="Toffy Boutique Logo"
            width={160} height={80}
            className={cn("transition-all duration-300 object-contain", isScrolled ? "h-9" : "h-10")}
          />
        </Link>

        {/* Desktop Menu - ใช้ Menubar ทั้งหมดเพื่อความเท่ากัน */}
        <div className="hidden min-[980px]:flex items-center gap-0" onMouseLeave={() => setActiveMenu(null)}>
          
          <Menubar value={activeMenu || ""} onValueChange={setActiveMenu} className="border-none bg-transparent shadow-none p-0 h-auto flex gap-0">
            
            {/* หน้าแรก - เปลี่ยนมาใช้ MenubarTrigger แทน Link/NavigationMenu */}
            <MenubarMenu value="home">
              <MenubarTrigger 
                className={menubarTriggerStyles} 
                onClick={() => router.push("/")}
                onMouseEnter={() => setActiveMenu("home")}
              >
                หน้าแรก
                <NavUnderline />
              </MenubarTrigger>
            </MenubarMenu>

            {/* สั่งผลิต */}
            <MenubarMenu value="order">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("order")}>
                สั่งผลิต <ChevronsDown className="w-4 h-4" />
                <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={8} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/order")}>ขั้นตอนการผลิต</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/fabric")}>เนื้อผ้า</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/colour")}>สีผ้า</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/sizespec")}>ไซต์เสื้อ</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/ready-to-wear")}>สินค้าสำเร็จรูป</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* แบบเสื้อ */}
            <MenubarMenu value="collection">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("collection")}>
                แบบเสื้อ <ChevronsDown className="w-4 h-4" />
                <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={8} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/t-shirt")}>คอกลม</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/polo")}>โปโล</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/shirt")}>เสื้อเชิ้ต</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/mechanic")}>เสื้อช็อป</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/pants")}>กางเกง</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/arpon")}>ผ้ากันเปื้อน</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* ตัวอย่างสินค้า */}
            <MenubarMenu value="sample">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("sample")}>
                ตัวอย่างสินค้า <ChevronsDown className="w-4 h-4" />
                <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={8} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/past-collection")}>ผลงานที่ผ่านมา</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/work-sample")}>ตัวอย่างงานปัก/พิมพ์</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/customer-review")}>รีวิวจากลูกค้า</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* ตอบคำถาม */}
            <MenubarMenu value="faq">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("faq")}>
                ตอบคำถาม <ChevronsDown className="w-4 h-4" />
                <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={8} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/faq")}>คำถามที่พบบ่อย</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/quotation")}>การประเมินราคา</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/payment")}>การจ่ายเงิน</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* ติดต่อเรา */}
            <MenubarMenu value="contact">
              <MenubarTrigger 
                className={menubarTriggerStyles} 
                onClick={() => router.push("/pages/contact")}
                onMouseEnter={() => setActiveMenu("contact")}
              >
                ติดต่อเรา
                <NavUnderline />
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>

          {/* Language Switcher */}
          <div className="flex items-center ml-4 border-l pl-4 gap-2 text-base h-[20px]">
            <button onClick={() => setLang("TH")} className={cn("transition-colors", lang === "TH" ? "text-red-500 font-bold" : "text-slate-400 hover:text-slate-600")}>TH</button>
            <span className="text-slate-300">|</span>
            <button onClick={() => setLang("EN")} className={cn("transition-colors", lang === "EN" ? "text-red-500 font-bold" : "text-slate-400 hover:text-slate-600")}>EN</button>
          </div>
        </div>

        {/* Mobile Menu Section (เหมือนเดิม) */}
        <div className="min-[980px]:hidden flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-slate-100 rounded-lg outline-none transition-colors">
                <Menu size={26} strokeWidth={2} className="text-slate-800" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white p-0 border-l shadow-2xl overflow-y-auto">
              {/* ... โค้ดส่วน Mobile เหมือนเดิม ... */}
              <SheetHeader className="p-4 text-left border-b sticky top-0 bg-white z-10">
                <SheetTitle className="text-lg font-bold flex items-center gap-2">
                  <div className="w-1 h-5 bg-red-500 rounded-full" />
                  เมนูหลัก
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full pb-20">
                <div className="flex items-center justify-between p-4 bg-slate-50 border-b">
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                    <Languages size={16} /> LANGUAGE
                  </div>
                  <div className="flex bg-white rounded-full border p-1">
                    <button onClick={() => setLang("TH")} className={cn("px-3 py-1 rounded-full text-[10px] font-bold", lang === "TH" ? "bg-red-500 text-white" : "text-slate-500")}>TH</button>
                    <button onClick={() => setLang("EN")} className={cn("px-3 py-1 rounded-full text-[10px] font-bold", lang === "EN" ? "bg-red-500 text-white" : "text-slate-500")}>EN</button>
                  </div>
                </div>
                
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-base font-bold p-4 hover:bg-red-50 hover:text-red-600 border-b group">
                  <Home className="w-4 h-4 text-slate-400 group-hover:text-red-500" /> หน้าแรก
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="order" className="border-b">
                    <AccordionTrigger className="text-base px-4 py-4 font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3"><Shirt className="w-4 h-4 text-slate-400" /> สั่งผลิต</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50">
                      <button onClick={() => { router.push("/pages/order"); setOpen(false); }} className="text-sm py-3 px-11 text-left border-b border-white hover:text-red-500 font-medium">ขั้นตอนการผลิต</button>
                      <button onClick={() => { router.push("/pages/fabric"); setOpen(false); }} className="text-sm py-3 px-11 text-left border-b border-white hover:text-red-500 font-medium">เนื้อผ้า</button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link href="/pages/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 text-base font-bold p-4 hover:bg-red-50 hover:text-red-600 border-b group">
                  <PhoneCall className="w-4 h-4 text-slate-400 group-hover:text-red-500" /> ติดต่อเรา
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}