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
  PhoneCall, 
  ChevronRight,
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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // เส้นใต้เมนูหลัก (600ms, Expand from center)
  const NavUnderline = () => (
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-[600ms] origin-center group-hover:scale-x-100" />
  );

  const commonStyles = "py-2 px-4 text-xl cursor-pointer relative group transition-colors duration-300 hover:text-red-600 font-kanit font-normal";
  
  const navItemStyles = cn(
    navigationMenuTriggerStyle(), 
    commonStyles, 
    "bg-transparent h-auto border-none shadow-none focus:bg-transparent active:bg-transparent hover:bg-transparent"
  );

  const menubarTriggerStyles = cn(
    commonStyles, 
    "min-w-[130px] bg-transparent border-none shadow-none flex justify-center items-center gap-1 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-red-600"
  );

  // สไตล์เมนูย่อย: เปลี่ยนสีแดงเมื่อ Hover, ไม่มี Background
  const subMenuItemStyles = "text-lg py-3 px-4 relative rounded-md cursor-pointer transition-colors duration-300 hover:text-red-600 hover:bg-transparent focus:bg-transparent focus:text-red-600 data-[highlighted]:bg-transparent data-[highlighted]:text-red-600 font-kanit font-normal";

  // คลาสสำหรับถมช่องว่าง (Invisible Bridge) เพื่อป้องกันเมาส์หลุด
  const dropdownContentStyles = "bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 animate-in fade-in slide-in-from-top-1 z-[110] before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:block";

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

        {/* Desktop Menu */}
        <div className="hidden min-[980px]:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1 border-none">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navItemStyles}>
                    หน้าแรก
                    <NavUnderline />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Wrapper ที่คุม Mouseleave ให้กว้างขึ้นเล็กน้อยเพื่อความเสถียร */}
          <div className="flex items-center gap-1 h-full" onMouseLeave={() => setActiveMenu(null)}>
            
            {/* สั่งผลิต */}
            <Menubar value={activeMenu || ""} onValueChange={setActiveMenu} className="border-none bg-transparent shadow-none p-0 h-auto">
              <MenubarMenu value="order">
                <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("order")}>
                  สั่งผลิต <ChevronsDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  <NavUnderline />
                </MenubarTrigger>
                <MenubarContent sideOffset={5} className={dropdownContentStyles}>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/order")}>ขั้นตอนการผลิต</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/fabric")}>เนื้อผ้า</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/colour")}>สีผ้า</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/sizespec")}>ไซต์เสื้อ</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/ready-to-wear")}>สินค้าสำเร็จรูป</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {/* แบบเสื้อ */}
            <Menubar value={activeMenu || ""} onValueChange={setActiveMenu} className="border-none bg-transparent shadow-none p-0 h-auto">
              <MenubarMenu value="collection">
                <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("collection")}>
                  แบบเสื้อ <ChevronsDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  <NavUnderline />
                </MenubarTrigger>
                <MenubarContent sideOffset={5} className={dropdownContentStyles}>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/t-shirt")}>คอกลม</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/polo")}>โปโล</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/shirt")}>เสื้อเชิ้ต</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/mechanic")}>เสื้อช็อป</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/apron")}>ผ้ากันเปื้อน</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/pants")}>กางเกง</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {/* ตัวอย่างสินค้า */}
            <Menubar value={activeMenu || ""} onValueChange={setActiveMenu} className="border-none bg-transparent shadow-none p-0 h-auto">
              <MenubarMenu value="sample">
                <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("sample")}>
                  ตัวอย่างสินค้า <ChevronsDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  <NavUnderline />
                </MenubarTrigger>
                <MenubarContent sideOffset={5} className={dropdownContentStyles}>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/past-collection")}>ผลงานที่ผ่านมา</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/work-sample")}>ตัวอย่างงานปัก/พิมพ์</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/customer-review")}>รีวิวจากลูกค้า</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/our-customer")}>ลูกค้าที่ไว้ใจเรา</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {/* ตอบคำถาม */}
            <Menubar value={activeMenu || ""} onValueChange={setActiveMenu} className="border-none bg-transparent shadow-none p-0 h-auto">
              <MenubarMenu value="faq">
                <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("faq")}>
                  ตอบคำถาม <ChevronsDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  <NavUnderline />
                </MenubarTrigger>
                <MenubarContent sideOffset={5} className={dropdownContentStyles}>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/faq")}>คำถามที่พบบ่อย</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/quotation")}>การประเมินราคา</MenubarItem>
                  <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/payment")}>การชำระเงิน</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <Link href="/pages/contact" className={navItemStyles}>
            ติดต่อเรา
            <NavUnderline />
          </Link>

          {/* Language Switcher */}
          <div className="flex items-center ml-2 border-l pl-4 gap-2 text-lg">
            <button onClick={() => setLang("TH")} className={cn("transition-colors", lang === "TH" ? "text-red-500 underline underline-offset-4 font-bold" : "text-slate-400 hover:text-slate-600")}>TH</button>
            <span className="text-slate-300 font-normal">|</span>
            <button onClick={() => setLang("EN")} className={cn("transition-colors", lang === "EN" ? "text-red-500 underline underline-offset-4 font-bold" : "text-slate-400 hover:text-slate-600")}>EN</button>
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
                <div className="flex items-center justify-between p-4 bg-slate-50 border-b">
                  <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                    <Languages size={18} /> ภาษา / Language
                  </div>
                  <div className="flex bg-white rounded-full border p-1 shadow-sm">
                    <button onClick={() => setLang("TH")} className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", lang === "TH" ? "bg-red-500 text-white" : "text-slate-500")}>TH</button>
                    <button onClick={() => setLang("EN")} className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", lang === "EN" ? "bg-red-500 text-white" : "text-slate-500")}>EN</button>
                  </div>
                </div>
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-bold p-4 hover:bg-red-50 hover:text-red-600 border-b group transition-all">
                  <Home className="w-5 h-5 text-slate-500 group-hover:text-red-500" /> หน้าแรก
                </Link>
                <Accordion type="single" collapsible className="w-full font-bold">
                  <AccordionItem value="order" className="border-b">
                    <AccordionTrigger className="text-lg px-4 py-4 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3"><Shirt className="w-5 h-5 text-slate-500" /> สั่งผลิต</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50">
                      <button onClick={() => { router.push("/pages/order"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500">ขั้นตอนการผลิต</button>
                      <button onClick={() => { router.push("/pages/fabric"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500">เนื้อผ้า</button>
                      <button onClick={() => { router.push("/pages/colour"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500">สีผ้า</button>
                      <button onClick={() => { router.push("/pages/sizespec"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500">ไซต์เสื้อ</button>
                      <button onClick={() => { router.push("/pages/ready-to-wear"); setOpen(false); }} className="text-base py-3 px-10 text-left border-b border-white hover:text-red-500">สินค้าสำเร็จรูป</button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/pages/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-bold p-4 hover:bg-red-50 hover:text-red-600 border-b group transition-all">
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