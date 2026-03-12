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
  HelpCircle,
  Scissors,
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

export default function Navbar() {
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

  // --- Desktop Styles (text-sm: 14px) ---
  const menubarTriggerStyles = cn(
    "text-sm xl:text-base cursor-pointer relative group transition-colors duration-300 hover:text-red-600 font-normal flex items-center justify-center h-[50px]",
    "min-w-[90px] xl:min-w-[120px] px-3 xl:px-5 bg-transparent border-none shadow-none gap-1 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-red-600"
  );

  const subMenuItemStyles = "text-sm py-3 px-5 relative cursor-pointer transition-colors duration-300 hover:text-red-600 hover:underline underline-offset-[6px] decoration-2 hover:bg-transparent focus:bg-transparent focus:text-red-600 data-[highlighted]:bg-transparent data-[highlighted]:text-red-600 font-normal";

  const dropdownContentStyles = "bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-2 animate-in fade-in slide-in-from-top-1 z-[110] before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:block";

  const navigateTo = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <header className={cn(
      "w-full sticky top-0 bg-white z-[100] transition-all duration-300",
      isScrolled ? "shadow-md py-1 border-b" : "py-3 border-b-0"
    )}>
      <div className="max-w-[1250px] mx-auto flex items-center justify-between px-6 xl:px-10">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
          <Image 
            src="/picture/toffy_logo_2.png"
            alt="Toffy Boutique Logo"
            width={180} 
            height={90}
            className={cn("transition-all duration-300 object-contain", isScrolled ? "h-10" : "h-16")}
          />
        </Link>

        {/* --- Desktop Menu (text-sm) --- */}
        <div className="hidden min-[980px]:flex items-center gap-2" onMouseLeave={() => setActiveMenu(null)}>
          <Menubar value={activeMenu || ""} onValueChange={setActiveMenu} className="border-none bg-transparent shadow-none p-0 h-auto flex gap-1 xl:gap-2 font-noto">
            
            <MenubarMenu value="home">
              <MenubarTrigger className={menubarTriggerStyles} onClick={() => router.push("/")} onMouseEnter={() => setActiveMenu("home")}>
                หน้าแรก <NavUnderline />
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu value="order">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("order")}>
                สั่งผลิต <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/process")}>ขบวนการผลิต</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/order")}>ขั้นตอนการผลิต</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/fabric")}>เนื้อผ้า</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/sizespec")}>ไซต์เสื้อ</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/ready-to-wear")}>สินค้าสำเร็จรูป</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu value="collection">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("collection")}>
                แบบเสื้อ <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/t-shirt")}>คอกลม</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/polo")}>โปโล</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/shirt")}>เสื้อเชิ้ต</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/mechanic")}>เสื้อช็อป</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/pants")}>กางเกง</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/collection/arpon")}>ผ้ากันเปื้อน</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu value="sample">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("sample")}>
                ตัวอย่างสินค้า <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/past-collection")}>ผลงานที่ผ่านมา</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/work-sample")}>ตัวอย่างงานปัก/พิมพ์</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/customer-review")}>รีวิวจากลูกค้า</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/ready-to-wear")}>สินค้าสำเร็จรูป</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu value="faq">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("faq")}>
                ตอบคำถาม <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/faq")}>คำถามที่พบบ่อย</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/quotation")}>การประเมินราคา</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/payment")}> การชำระเงิน</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu value="contact">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("contact")}>
                ติดต่อเรา <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/contact")}>ติดต่อเรา</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => router.push("/pages/aboutus")}>เกี่ยวกับเรา</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* Language Switcher - text-sm */}
          <div className="flex items-center ml-4 xl:ml-6 border-l pl-4 xl:pl-6 gap-3 text-sm h-[20px] font-noto">
            <button onClick={() => setLang("TH")} className={cn("transition-colors", lang === "TH" ? "text-red-500 font-bold underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}>TH</button>
            <span className="text-slate-300">|</span>
            <button onClick={() => setLang("EN")} className={cn("transition-colors", lang === "EN" ? "text-red-500 font-bold underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}>EN</button>
          </div>
        </div>

        {/* --- Mobile Menu Section (text-md: 16px) --- */}
        <div className="min-[980px]:hidden flex items-center gap-2 font-noto">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-slate-100 rounded-lg outline-none transition-colors">
                <Menu size={28} strokeWidth={2.5} className="text-slate-800" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0 border-l shadow-2xl overflow-y-auto">
              <SheetHeader className="p-5 text-left border-b sticky top-0 bg-white z-20">
                <SheetTitle className="text-lg font-black flex items-center gap-3">
                  <div className="w-1.5 h-5 bg-red-600 rounded-full" />
                  MENU
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full bg-white font-noto pb-10">
                <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b">
                  <div className="flex items-center gap-2 text-slate-500 font-black text-[10px] tracking-widest">
                    <Languages size={16} className="text-red-500" /> LANGUAGE
                  </div>
                  <div className="flex bg-white rounded-full border p-1 shadow-sm">
                    <button onClick={() => setLang("TH")} className={cn("px-3 py-1 rounded-full text-[10px] font-black transition-all", lang === "TH" ? "bg-red-600 text-white" : "text-slate-400")}>TH</button>
                    <button onClick={() => setLang("EN")} className={cn("px-3 py-1 rounded-full text-[10px] font-black transition-all", lang === "EN" ? "bg-red-600 text-white" : "text-slate-400")}>EN</button>
                  </div>
                </div>
                
                {/* Mobile Main Links - text-md */}
                <button onClick={() => navigateTo("/")} className="flex items-center gap-4 text-md font-bold p-5 hover:bg-red-50 hover:text-red-600 border-b transition-colors group">
                  <Home className="w-5 h-5 text-slate-400 group-hover:text-red-500" /> หน้าแรก
                </button>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="order" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><Shirt className="w-5 h-5 text-slate-400" /> สั่งผลิต</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: "ขบวนการผลิต", path: "/pages/process" },
                        { label: "ขั้นตอนการผลิต", path: "/pages/order" },
                        { label: "เนื้อผ้า", path: "/pages/fabric" },
                        { label: "ไซต์เสื้อ", path: "/pages/sizespec" },
                        { label: "สินค้าสำเร็จรูป", path: "/pages/ready-to-wear" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="collection" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><Palette className="w-5 h-5 text-slate-400" /> แบบเสื้อ</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: "คอกลม", path: "/pages/collection/t-shirt" },
                        { label: "โปโล", path: "/pages/collection/polo" },
                        { label: "เสื้อเชิ้ต", path: "/pages/collection/shirt" },
                        { label: "เสื้อช็อป", path: "/pages/collection/mechanic" },
                        { label: "กางเกง", path: "/pages/collection/pants" },
                        { label: "ผ้ากันเปื้อน", path: "/pages/collection/arpon" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="sample" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><Scissors className="w-5 h-5 text-slate-400" /> ตัวอย่างสินค้า</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: "ผลงานที่ผ่านมา", path: "/pages/past-collection" },
                        { label: "ตัวอย่างงานปัก/พิมพ์", path: "/pages/work-sample" },
                        { label: "รีวิวจากลูกค้า", path: "/pages/customer-review" },
                        { label: "สินค้าสำเร็จรูป", path: "/pages/ready-to-wear" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><HelpCircle className="w-5 h-5 text-slate-400" /> ตอบคำถาม</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: "คำถามที่พบบ่อย", path: "/pages/faq" },
                        { label: "การประเมินราคา", path: "/pages/quotation" },
                        { label: " การชำระเงิน", path: "/pages/payment" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <button onClick={() => navigateTo("/pages/contact")} className="flex items-center gap-4 text-md font-bold p-5 hover:bg-red-50 hover:text-red-600 border-b transition-colors group">
                  <PhoneCall className="w-5 h-5 text-slate-400 group-hover:text-red-500" /> ติดต่อเรา
                </button>
                
                <div className="mt-auto p-5 text-center">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Toffy Boutique - Uniform Expert</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}