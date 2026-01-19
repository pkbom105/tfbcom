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
  ChevronRight 
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
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/faq")}>สินค้าสำเร็จรูป</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/work-sample")}>ตัวอย่างงานปัก/พิมพ์</MenubarItem>
                <MenubarItem className="text-lg py-3 hover:bg-red-500 hover:text-white rounded-md cursor-pointer" onClick={() => router.push("/pages/customer-review")}>รีวิวจากลูกค้า</MenubarItem>
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
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-1 border-none">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/contact" className={navItemStyles}>ติดต่อเรา</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div className="min-[980px]:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-slate-100 rounded-lg outline-none transition-colors">
                <Menu size={32} strokeWidth={2} className="text-slate-800" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] font-kanit bg-white p-0 border-l shadow-2xl">
              {/* Mobile Header */}
              <SheetHeader className="p-6 text-left border-b bg-slate-50/50">
                <SheetTitle className="text-2xl font-bold flex items-center gap-2">
                  <div className="w-2 h-8 bg-red-500 rounded-full" />
                  เมนูหลัก
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full overflow-y-auto pb-20">
                {/* ลิงก์หน้าแรก */}
                <Link 
                  href="/" 
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-xl font-bold p-6 hover:bg-red-50 hover:text-red-600 transition-all border-b group"
                >
                  <Home className="w-6 h-6 text-slate-500 group-hover:text-red-500" />
                  หน้าแรก
                </Link>
                
                <Accordion type="single" collapsible className="w-full">
                  {/* สั่งผลิต */}
                  <AccordionItem value="order" className="border-b">
                    <AccordionTrigger className="text-xl px-6 py-5 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3 font-bold">
                        <Shirt className="w-6 h-6 text-slate-500" /> สั่งผลิต
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50">
                      {[
                        { label: "ขั้นตอนการผลิต", path: "/pages/order" },
                        { label: "เนื้อผ้า", path: "/pages/fabric" },
                        { label: "สีผ้า", path: "/pages/colour" },
                        { label: "ไซต์เสื้อ", path: "/pages/sizespec" },
                      ].map((item) => (
                        <button 
                          key={item.label}
                          onClick={() => { router.push(item.path); setOpen(false); }} 
                          className="text-lg py-4 px-14 text-left border-b border-white hover:text-red-500 flex items-center justify-between font-bold"
                        >
                          {item.label} <ChevronRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  {/* แบบเสื้อ */}
                  <AccordionItem value="types" className="border-b">
                    <AccordionTrigger className="text-xl px-6 py-5 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3 font-bold">
                        <Layers className="w-6 h-6 text-slate-500" /> แบบเสื้อ
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50">
                      {[
                        { label: "คอกลม", path: "/pages/faq" },
                        { label: "โปโล", path: "/pages/quotation" },
                        { label: "เสื้อเชิ้ต", path: "/pages/payment" },
                      ].map((item) => (
                        <button 
                          key={item.label}
                          onClick={() => { router.push(item.path); setOpen(false); }} 
                          className="text-lg py-4 px-14 text-left border-b border-white hover:text-red-500 font-bold"
                        >
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  {/* ตัวอย่างสินค้า */}
                  <AccordionItem value="samples" className="border-b">
                    <AccordionTrigger className="text-xl px-6 py-5 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3 font-bold">
                        <Palette className="w-6 h-6 text-slate-500" /> ตัวอย่างสินค้า
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50">
                      <button onClick={() => { router.push("/pages/faq"); setOpen(false); }} className="text-lg py-4 px-14 text-left border-b border-white hover:text-red-500 font-bold">สินค้าสำเร็จรูป</button>
                      <button onClick={() => { router.push("/pages/work-sample"); setOpen(false); }} className="text-lg py-4 px-14 text-left border-b border-white hover:text-red-500 font-bold">งานปัก/พิมพ์</button>
                      <button onClick={() => { router.push("/pages/customer-review"); setOpen(false); }} className="text-lg py-4 px-14 text-left border-b border-white hover:text-red-500 font-bold">รีวิวจากลูกค้า</button>
                    </AccordionContent>
                  </AccordionItem>

                  {/* ตอบคำถาม */}
                  <AccordionItem value="faq" className="border-b">
                    <AccordionTrigger className="text-xl px-6 py-5 hover:no-underline font-bold hover:bg-slate-50">
                      <div className="flex items-center gap-3 font-bold">
                        <HelpCircle className="w-6 h-6 text-slate-500" /> ตอบคำถาม
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/50">
                      <button onClick={() => { router.push("/pages/faq"); setOpen(false); }} className="text-lg py-4 px-14 text-left border-b border-white hover:text-red-500 font-bold">คำถามที่พบบ่อย</button>
                      <button onClick={() => { router.push("/pages/quotation"); setOpen(false); }} className="text-lg py-4 px-14 text-left border-b border-white hover:text-red-500 font-bold">การประเมินราคา</button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* ลิงก์ติดต่อเรา */}
                <Link 
                  href="/pages/contact" 
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-xl font-bold p-6 hover:bg-red-50 hover:text-red-600 transition-all border-b group"
                >
                  <PhoneCall className="w-6 h-6 text-slate-500 group-hover:text-red-500" />
                  ติดต่อเรา
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}