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
  Languages // ไอคอนสำหรับเปลี่ยนภาษา
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
  const [lang, setLang] = useState<"TH" | "EN">("TH"); // State สำหรับภาษา
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            alt="Logo"
            width={190} height={120}
            className={cn("transition-all duration-300 object-contain", isScrolled ? "h-8" : "h-11")}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden min-[980px]:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1 border-none">
              <NavigationMenuItem>
                <Link href="/" className={navItemStyles}>หน้าแรก</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Menus: สั่งผลิต, แบบเสื้อ, ตัวอย่างสินค้า, ตอบคำถาม */}
          {[
            { label: "สั่งผลิต", items: [{l: "ขั้นตอนการผลิต", p: "/order"}, {l: "เนื้อผ้า", p: "/fabric"}] },
            { label: "แบบเสื้อ", items: [{l: "คอกลม", p: "/faq"}, {l: "โปโล", p: "/quotation"}] },
            { label: "ตัวอย่างสินค้า", items: [{l: "สินค้าสำเร็จรูป", p: "/faq"}] },
            { label: "ตอบคำถาม", items: [{l: "คำถามที่พบบ่อย", p: "/faq"}, {l: "การชำระเงิน", p: "/payment"}] }
          ].map((menu) => (
            <Menubar key={menu.label} className="border-none bg-transparent shadow-none p-0 h-auto">
              <MenubarMenu>
                <MenubarTrigger className={menubarTriggerStyles}>
                  {menu.label} <ChevronsDown className="w-4 h-4" />
                </MenubarTrigger>
                <MenubarContent className="bg-white shadow-xl rounded-lg p-1 font-kanit font-bold">
                  {menu.items.map((i) => (
                    <MenubarItem key={i.l} className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md" onClick={() => router.push(i.p)}>{i.l}</MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ))}

          <Link href="/pages/contact" className={navItemStyles}>ติดต่อเรา</Link>

          {/* --- Language Switcher (Desktop) --- */}
          <div className="flex items-center ml-4 border-l pl-4 gap-2 text-lg font-bold">
            <button 
              onClick={() => setLang("TH")}
              className={cn("transition-colors", lang === "TH" ? "text-red-500 underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}
            >
              TH
            </button>
            <span className="text-slate-300 font-normal">|</span>
            <button 
              onClick={() => setLang("EN")}
              className={cn("transition-colors", lang === "EN" ? "text-red-500 underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="min-[980px]:hidden flex items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-slate-100 rounded-lg outline-none">
                <Menu size={32} className="text-slate-800" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] xs:w-[300px] font-kanit bg-white p-0 shadow-2xl">
              <SheetHeader className="p-4 text-left border-b bg-slate-50/50">
                <SheetTitle className="text-xl font-bold flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-red-500 rounded-full" /> เมนูหลัก
                  </div>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full overflow-y-auto pb-20">
                {/* --- Language Switcher (Mobile) --- */}
                <div className="flex items-center justify-between p-4 bg-slate-50 border-b">
                  <div className="flex items-center gap-2 text-slate-600 font-bold">
                    <Languages size={20} /> ภาษา / Language
                  </div>
                  <div className="flex bg-white rounded-full border p-1 shadow-sm">
                    <button 
                      onClick={() => setLang("TH")}
                      className={cn("px-4 py-1 rounded-full text-sm font-bold transition-all", lang === "TH" ? "bg-red-500 text-white" : "text-slate-500")}
                    >TH</button>
                    <button 
                      onClick={() => setLang("EN")}
                      className={cn("px-4 py-1 rounded-full text-sm font-bold transition-all", lang === "EN" ? "bg-red-500 text-white" : "text-slate-500")}
                    >EN</button>
                  </div>
                </div>

                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-bold p-4 border-b"><Home size={20}/> หน้าแรก</Link>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="order" className="border-b">
                    <AccordionTrigger className="text-lg px-4 py-4 font-bold hover:no-underline"><div className="flex gap-3"><Shirt size={20}/> สั่งผลิต</div></AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50">
                      <button onClick={() => {router.push("/pages/order"); setOpen(false)}} className="text-base py-3 px-10 text-left border-b border-white font-bold">ขั้นตอนการผลิต</button>
                    </AccordionContent>
                  </AccordionItem>
                  {/* ... Accordion อื่นๆ สามารถใส่เพิ่มได้ตามตัวอย่างก่อนหน้า ... */}
                </Accordion>

                <Link href="/pages/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-bold p-4 border-b"><PhoneCall size={20}/> ติดต่อเรา</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}