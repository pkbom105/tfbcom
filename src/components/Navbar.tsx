"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronsDown } from "lucide-react"; 
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
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const commonStyles = "font-bold transition-all duration-300 py-2 px-4 text-xl cursor-pointer rounded-md";
  
  const navItemStyles = cn(
    navigationMenuTriggerStyle(),
    commonStyles,
    "hover:bg-red-500 hover:text-white bg-transparent h-auto border-none shadow-none"
  );

  const menubarTriggerStyles = cn(
    commonStyles,
    "min-w-[140px] hover:bg-red-500 hover:text-white data-[state=open]:bg-red-500 data-[state=open]:text-white bg-transparent border-none shadow-none focus:bg-red-500 focus:text-white flex justify-center items-center gap-1"
  );

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
            width={190}
            height={120}
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
              
              {/* menu 2 */} 
          {/* Menubar อยู่ระหว่าง NavigationMenu ทั้งสองส่วน */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                สั่งผลิต <ChevronsDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[100px] p-1 font-kanit">
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/order")}
                >
                  ขั้นตอนการผลิต
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/fabric")}
                >
                  เนื้อผ้า
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/colour")}
                >
                  สีผ้า
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/sizespec")}
                >
                  ไซต์เสื้อ
                </MenubarItem>  
              </MenubarContent>             
            </MenubarMenu>
          </Menubar>
          
           {/* menu 3 */} 
          {/* Menubar อยู่ระหว่าง NavigationMenu ทั้งสองส่วน */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                แบบเสื้อ <ChevronsDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 font-kanit">
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/faq")}
                >
                  คอกลม
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/quotation")}
                >
                  โปโล
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/payment")}
                >
                  เสื้อเชิ้ต
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/faq")}
                >
                  เสื้อช่างเเขนสั้น
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/quotation")}
                >
                  เสื้อช่างเเขนยาว
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/payment")}
                >
                  เสื้อช็อปแขนสั้น
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/faq")}
                >
                  เสื้อช็อปแขนยาว
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/quotation")}
                >
                  ผ้ากันเปื้อน
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/payment")}
                >
                  กางเกง
                </MenubarItem>
              </MenubarContent>             
            </MenubarMenu>
          </Menubar>
           {/* menu 4 */} 
          {/* Menubar อยู่ระหว่าง NavigationMenu ทั้งสองส่วน */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                ตัวอย่างสินค้า <ChevronsDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 font-kanit">
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/faq")}
                >
                  สินค้าสำเร็จรูป
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/quotation")}
                >
                  ผลงานที่ผ่านมา
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/work-sample")}
                >
                  ตัวอย่างงานปัก/งานพิมพ์
                </MenubarItem>
                
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/customer-review")}
                >
                  รีวิว
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/our-customer")}
                >
                  ลูกค้าของเรา
                </MenubarItem>
              </MenubarContent>             
            </MenubarMenu>
          </Menubar>
          
          {/*           
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/products" className={navItemStyles}>ผลิตเสื้อโปโล</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/service" className={navItemStyles}>โรงงานผลิต</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>                */}
              
            </NavigationMenuList>
          </NavigationMenu>

          {/* 7 - Menubar อยู่ระหว่าง NavigationMenu ทั้งสองส่วน */}
          <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
            <MenubarMenu>
              <MenubarTrigger className={menubarTriggerStyles}>
                ตอบคำถาม <ChevronsDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-1 font-kanit">
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/faq")}
                >
                  คำถามที่พบบ่อย
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/quotation")}
                >
                  การประเมินราคา
                </MenubarItem>
                <MenubarItem 
                  className="text-lg font-bold py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors focus:bg-red-500 focus:text-white rounded-md"
                  onClick={() => router.push("/pages/payment")}
                >
                  เงื่อนไขการชำระเงิน
                </MenubarItem>
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
            <SheetTrigger className="p-2 hover:bg-slate-100 rounded-lg outline-none">
              <Menu size={28} strokeWidth={2.75} className="text-slate-800" />
            </SheetTrigger>
          </Sheet>
        </div>
      </div>
    </header>
  );
}