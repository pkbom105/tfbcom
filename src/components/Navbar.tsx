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
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import thDict from "@/dictionaries/th.json";
import enDict from "@/dictionaries/en.json";

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

export default function Navbar({ lang: initialLang }: { lang: string }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<string>(initialLang?.toUpperCase() || "TH");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  const dict = (lang === "EN" ? enDict : thDict).navbar;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavUnderline = () => (
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-[600ms] origin-center group-hover:scale-x-100" />
  );

  const menubarTriggerStyles = cn(
    "text-sm xl:text-base cursor-pointer relative group transition-colors duration-300 hover:text-red-600 font-normal flex items-center justify-center h-[50px]",
    "min-w-[90px] xl:min-w-[120px] px-3 xl:px-5 bg-transparent border-none shadow-none gap-1 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-red-600"
  );

  const subMenuItemStyles = "text-sm py-3 px-5 relative cursor-pointer transition-colors duration-300 hover:text-red-600 hover:underline underline-offset-[6px] decoration-2 hover:bg-transparent focus:bg-transparent focus:text-red-600 data-[highlighted]:bg-transparent data-[highlighted]:text-red-600 font-normal";

  const dropdownContentStyles = "bg-white shadow-xl rounded-lg border border-slate-100 min-w-[200px] p-2 animate-in fade-in slide-in-from-top-1 z-[110] before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:block";

  const navigateTo = (path: string) => {
    let finalPath = path;
    if (lang === "EN") {
      if (path === "/") finalPath = "/en";
      else if (!path.startsWith("/en/") && !path.startsWith("/en")) finalPath = `/en${path}`;
    }
    router.push(finalPath);
    setOpen(false);
  };

  return (
    <header className={cn(
      "w-full sticky top-0 bg-white z-[100] transition-all duration-300",
      isScrolled ? "shadow-md py-2" : "py-4"
    )}>
      <div className="max-w-[1250px] mx-auto flex items-center justify-between px-6 xl:px-10">
        
        {/* LOGO */}
        <Link href={lang === "EN" ? "/en" : "/"} className="flex items-center hover:opacity-80 transition-opacity shrink-0">
          <Image 
            src="/picture/toffy_logo_2.png"
            alt="Toffy Boutique Logo"
            width={180} 
            height={90}
            className={cn("transition-all duration-300 object-contain", isScrolled ? "h-10" : "h-16")}
          />
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden min-[980px]:flex items-center gap-2" onMouseLeave={() => setActiveMenu(null)}>
          <Menubar value={activeMenu || ""} onValueChange={setActiveMenu} className="border-none bg-transparent shadow-none p-0 h-auto flex gap-1 xl:gap-2 font-noto">
            
            <MenubarMenu value="home">
              <MenubarTrigger className={menubarTriggerStyles} onClick={() => navigateTo("/")} onMouseEnter={() => setActiveMenu("home")}>
                {dict.home} <NavUnderline />
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu value="order">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("order")}>
                {dict.order.title} <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/process")}>{dict.order.items.process}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/order")}>{dict.order.items.how_to_order}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/fabric")}>{dict.order.items.fabric}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/sizespec")}>{dict.order.items.size_spec}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/ready-to-wear")}>{dict.order.items.ready_to_wear}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu value="collection">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("collection")}>
                {dict.collections.title} <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/collection/t-shirt")}>{dict.collections.items.tshirt}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/collection/polo")}>{dict.collections.items.polo}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/collection/shirt")}>{dict.collections.items.shirt}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/collection/mechanic")}>{dict.collections.items.mechanic}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/collection/workshop")}>{dict.collections.items.workshop}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/collection/pants")}>{dict.collections.items.pants}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/collection/arpon")}>{dict.collections.items.arpon}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu value="sample">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("sample")}>
                {dict.samples.title} <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/past-collection")}>{dict.samples.items.past_works}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/work-sample")}>{dict.samples.items.embroidery}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/customer-review")}>{dict.samples.items.reviews}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/ready-to-wear")}>{dict.samples.items.ready_to_wear}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu value="faq">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("faq")}>
                {dict.faq.title} <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/faq")}>{dict.faq.items.faq}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/quotation")}>{dict.faq.items.quotation}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/payment")}>{dict.faq.items.payment}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu value="contact">
              <MenubarTrigger className={menubarTriggerStyles} onMouseEnter={() => setActiveMenu("contact")}>
                {dict.contact.title} <ChevronsDown className="w-4 h-4 text-red-500" /> <NavUnderline />
              </MenubarTrigger>
              <MenubarContent sideOffset={12} className={dropdownContentStyles}>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/contact")}>{dict.contact.items.contact_us}</MenubarItem>
                <MenubarItem className={subMenuItemStyles} onClick={() => navigateTo("/pages/aboutus")}>{dict.contact.items.about_us}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <div className="flex items-center ml-4 xl:ml-6 border-l pl-4 xl:pl-6 gap-3 text-sm h-[20px] font-noto">
            <button 
              onClick={() => {
                setLang("TH");
                const newPath = window.location.pathname.replace(/^\/en/, "");
                router.push(newPath || "/");
              }} 
              className={cn("transition-colors", lang === "TH" ? "text-red-500 font-bold underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}
            >TH</button>
            <span className="text-slate-300">|</span>
            <button 
              onClick={() => {
                setLang("EN");
                const newPath = window.location.pathname.startsWith("/en") ? window.location.pathname : `/en${window.location.pathname}`;
                router.push(newPath);
              }} 
              className={cn("transition-colors", lang === "EN" ? "text-red-500 font-bold underline underline-offset-4" : "text-slate-400 hover:text-slate-600")}
            >EN</button>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
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
                  {dict.mobile.menu}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full bg-white font-noto pb-10">
                <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b">
                  <div className="flex items-center gap-2 text-slate-500 font-black text-[10px] tracking-widest">
                    <Languages size={16} className="text-red-500" /> {dict.mobile.language}
                  </div>
                  <div className="flex bg-white rounded-full border p-1 shadow-sm">
                    <button onClick={() => setLang("TH")} className={cn("px-3 py-1 rounded-full text-[10px] font-black transition-all", lang === "TH" ? "bg-red-600 text-white" : "text-slate-400")}>TH</button>
                    <button onClick={() => setLang("EN")} className={cn("px-3 py-1 rounded-full text-[10px] font-black transition-all", lang === "EN" ? "bg-red-600 text-white" : "text-slate-400")}>EN</button>
                  </div>
                </div>
                
                <button onClick={() => navigateTo("/")} className="flex items-center gap-4 text-md font-bold p-5 hover:bg-red-50 hover:text-red-600 border-b transition-colors group">
                  <Home className="w-5 h-5 text-slate-400 group-hover:text-red-500" /> {dict.home}
                </button>

                <Accordion type="single" collapsible className="w-full">
                  {/* หมวดสั่งผลิต */}
                  <AccordionItem value="order" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><Shirt className="w-5 h-5 text-slate-400" /> {dict.order.title}</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: dict.order.items.process, path: "/pages/process" },
                        { label: dict.order.items.how_to_order, path: "/pages/order" },
                        { label: dict.order.items.fabric, path: "/pages/fabric" },
                        { label: dict.order.items.size_spec, path: "/pages/sizespec" },
                        { label: dict.order.items.ready_to_wear, path: "/pages/ready-to-wear" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  {/* หมวดแบบเสื้อ */}
                  <AccordionItem value="collection" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><Palette className="w-5 h-5 text-slate-400" /> {dict.collections.title}</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: dict.collections.items.tshirt, path: "/pages/collection/t-shirt" },
                        { label: dict.collections.items.polo, path: "/pages/collection/polo" },
                        { label: dict.collections.items.shirt, path: "/pages/collection/shirt" },
                        { label: dict.collections.items.mechanic, path: "/pages/collection/mechanic" },
                        { label: dict.collections.items.workshop, path: "/pages/collection/workshop" },
                        { label: dict.collections.items.pants, path: "/pages/collection/pants" },
                        { label: dict.collections.items.arpon, path: "/pages/collection/arpon" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  {/* หมวดตัวอย่างสินค้า */}
                  <AccordionItem value="sample" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><Scissors className="w-5 h-5 text-slate-400" /> {dict.samples.title}</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: dict.samples.items.past_works, path: "/pages/past-collection" },
                        { label: dict.samples.items.embroidery, path: "/pages/work-sample" },
                        { label: dict.samples.items.reviews, path: "/pages/customer-review" },
                        { label: dict.samples.items.ready_to_wear, path: "/pages/ready-to-wear" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  {/* หมวดตอบคำถาม */}
                  <AccordionItem value="faq" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><HelpCircle className="w-5 h-5 text-slate-400" /> {dict.faq.title}</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: dict.faq.items.faq, path: "/pages/faq" },
                        { label: dict.faq.items.quotation, path: "/pages/quotation" },
                        { label: dict.faq.items.payment, path: "/pages/payment" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  {/* หมวดติดต่อเรา (ปรับใหม่ให้เหมือน Desktop) */}
                  <AccordionItem value="contact" className="border-b">
                    <AccordionTrigger className="text-md px-5 py-5 font-bold hover:bg-slate-50 hover:no-underline">
                      <div className="flex items-center gap-4"><Users className="w-5 h-5 text-slate-400" /> {dict.contact.title}</div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-slate-50/80">
                      {[
                        { label: dict.contact.items.contact_us, path: "/pages/contact" },
                        { label: dict.contact.items.about_us, path: "/pages/aboutus" },
                      ].map((item) => (
                        <button key={item.path} onClick={() => navigateTo(item.path)} className="text-md py-4 pl-14 text-left border-b border-white/50 hover:text-red-600 font-medium">
                          {item.label}
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
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