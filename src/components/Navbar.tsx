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
  Layers, 
  HelpCircle, 
  PhoneCall, 
  ChevronRight,
  CreditCard,
  Languages
} from "lucide-react";
import { cn } from "@/lib/utils";

// UI Components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Styles สำหรับ Desktop
  const commonStyles = "font-bold transition-all duration-300 py-2 px-4 text-xl cursor-pointer rounded-md";
  const navItemStyles = cn(navigationMenuTriggerStyle(), commonStyles, "hover:bg-red-500 hover:text-white bg-transparent h-auto border-none shadow-none");
  const menubarTriggerStyles = cn(commonStyles, "min-w-[140px] hover:bg-red-500 hover:text-white data-[state=open]:bg-red-500 data-[state=open]:text-white bg-transparent border-none shadow-none flex justify-center items-center gap-1");

  return (
    <header className={cn(
      "w-full border-b sticky top-0 bg-white z-[100] transition-all duration-300",
      isScrolled ? "shadow-md py-1" : "shadow-sm py-3"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 font-kanit">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
          <Image 
            src="/picture/toffyboutique-logo.png"
            alt="Toffy Boutique Logo"
            width={190} height={120}
            className={cn("transition-all duration-300 object-contain", isScrolled ? "h-8" : "h-11")}
          />
        </Link>

        {/* Desktop Menu (980px+) */}
        <div className="hidden min-[980px]:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1 border-none">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navItemStyles}>หน้าแรก</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* สั่งผลิต */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                สั่งผลิต <ChevronsDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[150px] p-1 font-kanit font-bold">
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/order")}>ขั้นตอนการผลิต</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/fabric")}>เนื้อผ้า</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/colour")}>สีผ้า</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/sizespec")}>ไซต์เสื้อ</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/ready-to-wear")}>สินค้าสำเร็จรูป</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* แบบเสื้อ */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                แบบเสื้อ <ChevronsDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[180px] p-1 font-kanit font-bold">
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/faq")}>คอกลม</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/quotation")}>โปโล</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/payment")}>เสื้อเชิ้ต</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

                    {/* ตัวอย่างสินค้า */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                ตัวอย่างสินค้า <ChevronsDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 font-kanit font-bold">
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/past-collection")}>ผลงานที่ผ่านมา</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/work-sample")}>ตัวอย่างงานปัก/พิมพ์</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/customer-review")}>รีวิวจากลูกค้า</MenubarItem>
                {/* เพิ่มเมนูใหม่ตรงนี้ */}
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/our-customer")}>ลูกค้าที่ไว้ใจเรา</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* ตอบคำถาม */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                ตอบคำถาม <ChevronsDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[180px] p-1 font-kanit font-bold">
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/faq")}>คำถามที่พบบ่อย</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/quotation")}>การประเมินราคา</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/payment")}>การชำระเงิน</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Link href="/pages/contact" className={navItemStyles}>ติดต่อเรา</Link>

          {/* Language Switcher Desktop */}
          <div className="flex items-center ml-2 border-l pl-4 gap-2 text-lg font-bold">
            <button onClick={() => setLang("TH")} className={cn("transition-colors", lang === "TH" ? "text-red-500 underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}>TH</button>
            <span className="text-slate-300 font-normal">|</span>
            <button onClick={() => setLang("EN")} className={cn("transition-colors", lang === "EN" ? "text-red-500 underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}>EN</button>
          </div>
        </div>

        {/* Mobile Menu Section */}
        <div className="min-[980px]:hidden flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-slate-100 rounded-lg outline-none transition-colors">
                <Menu size={32} strokeWidth={2} className="text-slate-800" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] xs:w-[300px] font-kanit bg-white p-0 border-l shadow-2xl">
              <SheetHeader className="p-4 text-left border-b bg-slate-50/50">
                <SheetTitle className="text-xl font-bold flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-red-500 rounded-full" />
                  เมนูหลัก
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full overflow-y-auto pb-20">
                {/* Language Switcher Mobile */}
                <div className="flex items-center justify-between p-4 bg-slate-50 border-b">
                  <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                    <Languages size={18} /> ภาษา / Language
                  </div>
                  <div className="flex bg-white rounded-full border p-1 shadow-sm">
                    <button onClick={() => setLang("TH")} className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", lang === "TH" ? "bg-red-500 text-white" : "text-slate-500")}>TH</button>
                    <button onClick={() => setLang("EN")} className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", lang === "EN" ? "bg-red-500 text-white" : "text-slate-500")}>EN</button>
                  </div>
                </div>

                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-bold p-4 hover:bg-red-50 hover:text-red-600 transition-all border-b group">
                  <Home className="w-5 h-5 text-slate-500 group-hover:text-red-500" /> หน้าแรก
                </Link>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="order" className="border-b">
                    <AccordionTrigger className="text-lg px-4 py-4 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3 font-bold"><Shirt className="w-5 h-5 text-slate-500" /> สั่งผลิต</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50 font-bold">
                      <button onClick={() => { router.push("/pages/order"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 flex items-center justify-between font-bold">ขั้นตอนการผลิต <ChevronRight className="w-4 h-4 opacity-50" /></button>
                      <button onClick={() => { router.push("/pages/fabric"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">เนื้อผ้า</button>
                      <button onClick={() => { router.push("/pages/colour"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">สีผ้า</button>
                      <button onClick={() => { router.push("/pages/sizespec"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">ไซต์เสื้อ</button>
                      <button onClick={() => { router.push("/pages/ready-to-wear"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">สินค้าสำเร็จรูป</button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="types" className="border-b">
                    <AccordionTrigger className="text-lg px-4 py-4 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3 font-bold"><Layers className="w-5 h-5 text-slate-500" /> แบบเสื้อ</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50 font-bold">
                      <button onClick={() => { router.push("/pages/faq"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">คอกลม</button>
                      <button onClick={() => { router.push("/pages/quotation"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">โปโล</button>
                      <button onClick={() => { router.push("/pages/payment"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">เสื้อเชิ้ต</button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="samples" className="border-b">
                    <AccordionTrigger className="text-lg px-4 py-4 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3 font-bold"><Palette className="w-5 h-5 text-slate-500" /> ตัวอย่างสินค้า</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50 font-bold">
                      <button onClick={() => { router.push("/pages/faq"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">สินค้าสำเร็จรูป</button>
                      <button onClick={() => { router.push("/pages/work-sample"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">งานปัก/พิมพ์</button>
                      <button onClick={() => { router.push("/pages/customer-review"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">รีวิวจากลูกค้า</button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="samples" className="border-b">
                    <AccordionTrigger className="text-lg px-4 py-4 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3 font-bold"><Palette className="w-5 h-5 text-slate-500" /> ตัวอย่างสินค้า</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50 font-bold">
                      <button onClick={() => { router.push("/pages/past-collection"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">ผลงานที่ผ่านมา</button>
                      <button onClick={() => { router.push("/pages/work-sample"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">งานปัก/พิมพ์</button>
                      <button onClick={() => { router.push("/pages/customer-review"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">รีวิวจากลูกค้า</button>
                      {/* เพิ่มปุ่มใหม่ตรงนี้ */}
                      <button onClick={() => { router.push("/pages/our-customer"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500 font-bold">ลูกค้าที่ไว้ใจเรา</button>
                    </AccordionContent>
                  </AccordionItem>
                  </Accordion>

                <Link href="/pages/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-bold p-4 hover:bg-red-50 hover:text-red-600 transition-all border-b group">
                  <PhoneCall className="w-5 h-5 text-slate-500 group-hover:text-red-500" /> ติดต่อเรา
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}