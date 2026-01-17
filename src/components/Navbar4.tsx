"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
    "hover:bg-red-500 hover:text-white bg-transparent h-auto focus:bg-red-500 focus:text-white border-none shadow-none"
  );

  // ข้อมูลสำหรับ Sub Menu ของ File
  const fileSubMenus = [
    { title: "faq", href: "/pages/faq" },
    { title: "qua", href: "/pages/quotation" },
    { title: "price", href: "/pages/pricing" },
  ];

  return (
    <header className={cn(
      "w-full border-b sticky top-0 bg-white z-[100] transition-all duration-300",
      isScrolled ? "shadow-md py-1" : "shadow-sm py-3"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 font-kanit">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0 text-3xl">
          <Image 
            src="/picture/toffyboutique-logo.png"
            alt="Toffy Boutique Logo"
            width={190}
            height={120}
            className={cn("transition-all duration-300 object-contain", isScrolled ? "h-8" : "h-10")}
          />
        </Link>

        {/* Desktop Menu (980px+) */}
        <div className="hidden min-[980px]:block">
          <NavigationMenu className="relative">
            <NavigationMenuList className="flex gap-1 border-none">
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navItemStyles}>หน้าแรก</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
             
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/order" className={navItemStyles}>สั่งผลิต</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/products" className={navItemStyles}>ผลิตเสื้อโปโล</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/service" className={navItemStyles}>โรงงานผลิต</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pages/contact" className={navItemStyles}>ติดต่อเรา</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* --- NEW FILE MENU (Last Tab) --- */}
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className={cn(navItemStyles, "w-[120px] flex justify-between items-center")}>
                  file
                </NavigationMenuTrigger>
                
                <NavigationMenuContent className="absolute left-0 top-full mt-1 bg-transparent">
                  <div className="flex flex-col w-[150px] bg-white shadow-xl rounded-lg border border-slate-100 overflow-hidden">
                    {fileSubMenus.map((sub, index) => (
                      <NavigationMenuLink key={sub.href} asChild>
                        <Link
                          href={sub.href}
                          className={cn(
                            "w-full text-left py-3 px-6 text-xl font-bold transition-all duration-200 block",
                            "text-slate-700 hover:bg-red-500 hover:text-white border-none outline-none",
                            index !== fileSubMenus.length - 1 && "border-b border-slate-50"
                          )}
                        >
                          {sub.title}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
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