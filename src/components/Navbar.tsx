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
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Underline Component (800ms)
   * สำหรับใช้ซ้ำทั้งเมนูหลักและเมนูย่อย
   */
  const NavUnderline = () => (
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-[800ms] origin-left group-hover:scale-x-100" />
  );

  // สไตล์สำหรับ Desktop
  const commonStyles = "font-bold py-2 px-4 text-xl cursor-pointer relative group transition-colors duration-300 hover:text-red-600";
  
  // สไตล์เมนูหลัก
  const navItemStyles = cn(
    navigationMenuTriggerStyle(), 
    commonStyles, 
    "bg-transparent h-auto border-none shadow-none focus:bg-transparent active:bg-transparent hover:bg-transparent"
  );

  // สไตล์ Trigger (ที่มี Dropdown)
  const menubarTriggerStyles = cn(
    commonStyles, 
    "min-w-[130px] bg-transparent border-none shadow-none flex justify-center items-center gap-1 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-red-600"
  );

  // สไตล์สำหรับรายการเมนูย่อย (Sub-menu items)
  const subMenuItemStyles = "text-lg py-3 px-4 relative group rounded-md cursor-pointer transition-colors duration-300 hover:text-red-600 hover:bg-transparent focus:bg-transparent focus:text-red-600";

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
                  <Link href="/" className={navItemStyles}>
                    หน้าแรก
                    <NavUnderline />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* สั่งผลิต */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                สั่งผลิต <ChevronsDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <NavUnderline />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 font-kanit font-bold">
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/order")}>ขั้นตอนการผลิต <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/fabric")}>เนื้อผ้า <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/colour")}>สีผ้า <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/sizespec")}>ไซต์เสื้อ <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/ready-to-wear")}>สินค้าสำเร็จรูป <NavUnderline /></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* แบบเสื้อ */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                แบบเสื้อ <ChevronsDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <NavUnderline />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 font-kanit font-bold">
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/t-shirt")}>คอกลม <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/polo")}>โปโล <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/shirt")}>เสื้อเชิ้ต <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/mechanic")}>เสื้อช็อป <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/apron")}>ผ้ากันเปื้อน <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/pants")}>กางเกง <NavUnderline /></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* ตัวอย่างสินค้า */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                ตัวอย่างสินค้า <ChevronsDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <NavUnderline />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 font-kanit font-bold">
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/past-collection")}>ผลงานที่ผ่านมา <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/work-sample")}>ตัวอย่างงานปัก/พิมพ์ <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/customer-review")}>รีวิวจากลูกค้า <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/our-customer")}>ลูกค้าที่ไว้ใจเรา <NavUnderline /></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* ตอบคำถาม */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                ตอบคำถาม <ChevronsDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <NavUnderline />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[180px] p-1 font-kanit font-bold">
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/faq")}>คำถามที่พบบ่อย <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/quotation")}>การประเมินราคา <NavUnderline /></MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/payment")}>การชำระเงิน <NavUnderline /></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Link href="/pages/contact" className={navItemStyles}>
            ติดต่อเรา
            <NavUnderline />
          </Link>

          {/* Language Switcher Desktop */}
          <div className="flex items-center ml-2 border-l pl-4 gap-2 text-lg font-bold">
            <button onClick={() => setLang("TH")} className={cn("transition-colors", lang === "TH" ? "text-red-500 underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}>TH</button>
            <span className="text-slate-300 font-normal">|</span>
            <button onClick={() => setLang("EN")} className={cn("transition-colors", lang === "EN" ? "text-red-500 underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}>EN</button>
          </div>
        </div>

        {/* Mobile Menu Section (เดิม) */}
        <div className="min-[980px]:hidden flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-slate-100 rounded-lg outline-none transition-colors">
                <Menu size={32} strokeWidth={2} className="text-slate-800" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] font-kanit bg-white p-0 border-l shadow-2xl overflow-y-auto">
               {/* Mobile Content (ไม่เปลี่ยนแปลงตามคำขอเดิม) */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}