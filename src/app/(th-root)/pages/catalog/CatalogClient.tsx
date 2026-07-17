"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Product, CatalogData } from "@/lib/catalog-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

// Product images mapping for top icons (matches /05catalog/ folder order)
const PRODUCT_IMAGES: Record<string, string> = {
  "11": "/png-1/2.png",
  "12": "/png-1/6.png",
  "13": "/png-1/12.png",
  "14": "/png-1/22.png",
  "15": "/png-1/30.png",
  "16": "/png-1/55.png",
  "20": "/png-1/24.png",
  "18": "/png-1/35.png",
  "19": "/png-1/43.png",
  "17": "/png-1/53.png",
  "21": "/png-1/47.png",
};

// English product names for top icon labels (matches /05catalog/ folder names)
const PRODUCT_NAMES_EN: Record<string, string> = {
  "11": "T-Shirt",
  "12": "Polo",
  "13": "Shirt",
  "14": "Workshop",
  "15": "Jacket Woven",
  "16": "Jacket Knit",
  "20": "Security",
  "18": "Chef",
  "19": "Maid",
  "17": "Trouser",
  "21": "Apron",
};

// Reverse map: supplier full name → short code
const SUPPLIER_SHORT_CODES: Record<string, string> = {
  "jsm": "jsm", "vst": "vst", "dfn": "dfn", "kmp": "kmp",
  "spn": "spn", "sps": "sps", "tct": "tct", "smc": "smc",
  "ntp": "ntp", "knt": "knt", "fuji": "fuji", "jng": "jng",
  "kvv": "kvv", "phl": "phl", "pkp": "pkp", "prs": "prs",
  "glf": "glf", "sgt": "sgt", "vry": "vry", "tsk": "tsk",
  "avc": "avc", "jfm": "jfm", "mks": "mks", "mtt": "mtt",
  "let": "let", "kch": "kch", "tgt": "tgt", "tfm": "tfm",
  "npt": "npt", "fab": "fab", "fabrica": "fabrica", "sml": "sml",
};

const SUPPLIER_FULL_TO_SHORT: Record<string, string> = {
  "JSM เจียมสมาน": "jsm",
  "VST วีศิลป์เท็กไทล์": "vst",
  "DFN ดีไฟน์เนส": "dfn",
  "KMP": "kmp",
  "SPN ซิงค์ พาณิชย์": "spn",
  "SPS สมประสงค์": "sps",
  "TCT ทีคัลเจอร์": "tct",
  "SMC สมชาย": "smc",
  "NTP": "ntp",
  "KNT": "knt",
  "Fuji": "fuji",
  "Jng": "jng",
  "KVV": "kvv",
  "PHL ปังหัว": "phl",
  "PKP พรค้าผ้า": "pkp",
  "PRS ปารีสค้าผ้า": "prs",
  "GLF จี.แอล.เอฟ": "glf",
  "SGT สหกรุ๊ป เท็กซ์ไทล์": "sgt",
  "VRY วิริยะ": "vry",
  "TSK ts.knitting": "tsk",
  "AVC อัลวาเซ่ Alvaasce": "avc",
  "JFM หจก. เจ เอฟ เอ็ม": "jfm",
  "MKS มงกุฎสิงห์": "mks",
  "MTT มนตรา เทรดดิ้ง": "mtt",
  "LET เลิศอาภร": "let",
  "KCH กอบชัย": "kch",
  "TGT ไทยกรุ๊ปเท็กไทล์": "tgt",
  "TFM ทีเอฟมาลีเท็กซ์": "tfm",
  "NPT": "npt",
  "Fab Fabrica": "fab",
  "Fabrica": "fabrica",
  "SML": "sml",
};

function getSupplierShortCode(fullName: string): string {
  return SUPPLIER_FULL_TO_SHORT[fullName] || fullName.split(' ')[0].toLowerCase();
}

// Reverse map: supplier short code → full name (built from SUPPLIER_FULL_TO_SHORT)
const SUPPLIER_SHORT_TO_FULL: Record<string, string> = {};
for (const [full, short] of Object.entries(SUPPLIER_FULL_TO_SHORT)) {
  SUPPLIER_SHORT_TO_FULL[short] = full;
}

function getSupplierFullFromShort(shortCode: string): string | undefined {
  return SUPPLIER_SHORT_TO_FULL[shortCode.toLowerCase()];
}

function slugifyFabric(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function unslugifyFabric(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// English fabric detail translations (keyed by lowercase fabric name)
type FabricEnDetail = { type: string; gsm_or_weight: string; description: string; usage: string; suitable_for: string };
const FABRIC_DETAILS_EN: Record<string, FabricEnDetail> = {
  "single jersey": { type: "Single Jersey Knit", gsm_or_weight: "Standard", description: "Soft, breathable cotton fabric", usage: "T-shirts, casual wear", suitable_for: "Daily wear, uniforms" },
  "viral block": { type: "Viral Block Fabric", gsm_or_weight: "Standard", description: "Anti-viral treated fabric", usage: "Uniforms, hospital wear", suitable_for: "Medical, hygiene-conscious environments" },
  "cotton comb": { type: "Combed Cotton", gsm_or_weight: "Standard", description: "Smooth, premium quality cotton", usage: "T-shirts, polo shirts", suitable_for: "Premium everyday wear" },
  "micro": { type: "Polyester Microfiber", gsm_or_weight: "130-150", description: "Smooth, quick-dry fabric", usage: "Sportswear, activewear", suitable_for: "Outdoor activities, sportswear" },
  "dtlacoste": { type: "Lacoste Knit", gsm_or_weight: "Standard", description: "Classic pique knit fabric", usage: "Polo shirts", suitable_for: "Corporate uniforms, casual wear" },
  "drytech": { type: "Dry-Tech Fabric", gsm_or_weight: "Standard", description: "Moisture-wicking, quick-dry", usage: "Sports uniforms, activewear", suitable_for: "Sports, outdoor activities" },
  "drytouch": { type: "Dry-Touch Fabric", gsm_or_weight: "Standard", description: "Soft, moisture-wicking performance fabric", usage: "Polo shirts, activewear", suitable_for: "Corporate, sports" },
  "endurance": { type: "Endurance Fabric", gsm_or_weight: "Standard", description: "High-durability performance fabric", usage: "Work uniforms, heavy-duty", suitable_for: "Industrial work, heavy use" },
  "singlejersey": { type: "Single Jersey Knit", gsm_or_weight: "Standard", description: "Classic single knit cotton", usage: "T-shirts, polo shirts", suitable_for: "Casual uniforms" },
  "viralblock": { type: "Viral Block Fabric", gsm_or_weight: "Standard", description: "Anti-viral treated technology fabric", usage: "Medical, safety wear", suitable_for: "Hospitals, high-traffic environments" },
  "basic": { type: "Basic Weave", gsm_or_weight: "Standard", description: "Classic plain weave fabric", usage: "Shirts, formal wear", suitable_for: "Office wear, school uniforms" },
  "com twill": { type: "Combed Twill", gsm_or_weight: "Standard", description: "Combed cotton twill weave", usage: "Shirts, uniform shirts", suitable_for: "Corporate uniforms, school" },
  "cvc oxford": { type: "Cotton + Polyester", gsm_or_weight: "130-150", description: "Oxford-like, easy iron, wrinkle resistant", usage: "Office button-down shirts", suitable_for: "Those who like Oxford look but hate ironing" },
  "micro peach": { type: "Micro Peach Fabric", gsm_or_weight: "Standard", description: "Peach-skin soft microfiber", usage: "Shirts, blouses", suitable_for: "Smooth, soft uniform shirts" },
  "orlon": { type: "Orlon Fabric", gsm_or_weight: "Standard", description: "Soft, wrinkle-resistant fabric", usage: "Shirts, work shirts", suitable_for: "Office uniforms" },
  "oxford": { type: "Cotton 100%", gsm_or_weight: "130-150", description: "Soft with texture, breathable", usage: "Casual button-down shirts", suitable_for: "Leisure wear, smart casual" },
  "texture": { type: "Textured Weave", gsm_or_weight: "Standard", description: "Fabric with textured finish", usage: "Fashion shirts", suitable_for: "Stylish uniform shirts" },
  "toray": { type: "Toray Fabric", gsm_or_weight: "Standard", description: "High-quality Japanese Toray fabric", usage: "Uniforms, jackets", suitable_for: "Premium corporate uniforms" },
  "toray oxford": { type: "Toray Oxford", gsm_or_weight: "Standard", description: "Toray fabric in Oxford weave", usage: "Premium shirts", suitable_for: "Executive uniforms" },
  "twill": { type: "Twill Weave", gsm_or_weight: "Standard", description: "Classic twill weave fabric", usage: "Uniforms, workwear", suitable_for: "Corporate uniforms" },
  "kmp": { type: "KMP Fabric", gsm_or_weight: "Standard", description: "Standard workwear fabric", usage: "Workshop coats, workwear", suitable_for: "General work uniforms" },
  "comb twill": { type: "Cotton 100%", gsm_or_weight: "Medium weight", description: "Softer than TC, better breathability", usage: "Student workshop shirts, engineer coats", suitable_for: "Indoor work or warm environments needing durability" },
  "garbardine": { type: "Gabardine Weave", gsm_or_weight: "Standard", description: "Durable, tightly woven fabric", usage: "Work pants, uniforms", suitable_for: "Workwear, uniforms" },
  "polyester": { type: "Polyester Fabric", gsm_or_weight: "Standard", description: "Durable, wrinkle-resistant fabric", usage: "Work uniforms, jackets", suitable_for: "Heavy-duty wear" },
  "serge velentino": { type: "Serge Valentino", gsm_or_weight: "Standard", description: "Premium serge weave fabric", usage: "Jackets, chef coats", suitable_for: "Premium uniforms" },
  "solon": { type: "Solon Fabric", gsm_or_weight: "Standard", description: "Durable, comfortable fabric", usage: "Chef coats, work jackets", suitable_for: "Kitchen, industrial wear" },
  "spendex": { type: "Spandex Blend", gsm_or_weight: "Standard", description: "Stretch fabric for flexibility", usage: "Activewear, work pants", suitable_for: "Jobs requiring movement" },
  "super comb twill": { type: "Premium TC (Fine Yarn)", gsm_or_weight: "200-220 GSM", description: "Extra smooth surface, minimal pilling", usage: "Premium workshop shirts, supervisor uniforms", suitable_for: "Those wanting smart, non-stiff workwear" },
  "tc comb twill": { type: "Cotton-Polyester Blend", gsm_or_weight: "190-210 GSM", description: "Firm, shape-retaining, wrinkle resistant", usage: "Employee workshop shirts, factory uniforms", suitable_for: "General work needing neatness and durability" },
  "toray biscop": { type: "Premium TC Blend", gsm_or_weight: "Heavy weight", description: "Very durable, colorfast, perfect shape retention", usage: "Corporate jackets, premium uniforms", suitable_for: "Organizations needing sharp, long-lasting uniforms" },
  "westpoint": { type: "Cotton 100% Tight Weave", gsm_or_weight: "240-280 GSM", description: "Thick, very durable, softer with each wash", usage: "Heavy-duty workshop shirts, fire-safe workwear", suitable_for: "Field engineers, mechanics, heavy work" },
  "french terry": { type: "French Terry Knit", gsm_or_weight: "Standard", description: "Soft, looped interior fabric", usage: "Hoodies, casual jackets", suitable_for: "Casual, sporty wear" },
  "polar fleece": { type: "Polar Fleece", gsm_or_weight: "Standard", description: "Warm, soft fleece fabric", usage: "Jackets, outerwear", suitable_for: "Cold weather, outdoor" },
  "hanako": { type: "Hanako Fabric", gsm_or_weight: "Standard", description: "Standard trouser fabric", usage: "Pants, trousers", suitable_for: "Work pants, uniforms" },
};

interface CatalogClientProps {
  catalogData: CatalogData;
  lang?: string;
}

export default function CatalogClient({ catalogData, lang = "th" }: CatalogClientProps) {
  const { products, catalogDetails } = catalogData;
  const isEn = lang === "en";

  const [selectedProductCode, setSelectedProductCode] = useState<string>("11");
  const [selectedFabricName, setSelectedFabricName] = useState<string>("");
  const [selectedSupplierName, setSelectedSupplierName] = useState<string>("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxApi, setLightboxApi] = useState<CarouselApi | null>(null);
  const [copiedSupplier, setCopiedSupplier] = useState<string>("");
  const [baseUrl, setBaseUrl] = useState<string>("");

  // Get base URL on mount and read URL params
  useEffect(() => {
    const url = new URL(window.location.href);
    setBaseUrl(url.origin + url.pathname);

    const pParam = url.searchParams.get("p");   // product code
    const fParam = url.searchParams.get("f");   // fabric slug
    const sParam = url.searchParams.get("s");   // supplier short code

    if (pParam || fParam || sParam) {
      // URL params exist - use them to select tabs
      const targetProductCode = pParam || "14";
      const targetProduct = products.find((pr: Product) => pr.code === targetProductCode) || products[0];
      if (targetProduct) {
        setSelectedProductCode(targetProduct.code);

        // Find fabric by slug
        let targetFabricName = "";
        if (fParam) {
          const slug = fParam.toLowerCase();
          for (const fabric of targetProduct.fabrics) {
            if (slugifyFabric(fabric.name) === slug) {
              targetFabricName = fabric.name;
              break;
            }
          }
        }
        if (!targetFabricName && targetProduct.fabrics.length > 0) {
          targetFabricName = targetProduct.fabrics[0].name;
        }
        setSelectedFabricName(targetFabricName);

        // Find supplier by short code
        if (sParam && targetFabricName) {
          const fabData = targetProduct.fabrics.find(
            (f: { name: string }) => f.name === targetFabricName
          );
          if (fabData) {
            const supplierFull = getSupplierFullFromShort(sParam);
            if (supplierFull && fabData.suppliers.includes(supplierFull)) {
              setSelectedSupplierName(supplierFull);
            } else {
              // Fallback: match by first word
              const matched = fabData.suppliers.find((s: string) =>
                s.split(' ')[0].toLowerCase() === sParam.toLowerCase()
              );
              setSelectedSupplierName(matched || fabData.suppliers[0] || "");
            }
          }
        } else if (targetFabricName) {
          const fabData = targetProduct.fabrics.find(
            (f: { name: string }) => f.name === targetFabricName
          );
          if (fabData?.suppliers.length) {
            setSelectedSupplierName(fabData.suppliers[0]);
          }
        }
      }
    } else {
      // No URL params - use default: p=11&f=cvc-single-jersey-30&s=tsk
      const targetProduct = products.find((p: Product) => p.code === "11") || products[0];
      if (targetProduct) {
        setSelectedProductCode(targetProduct.code);

        // Find fabric "CVC Single Jersey 30"
        let targetFabricName = "";
        for (const fabric of targetProduct.fabrics) {
          if (slugifyFabric(fabric.name) === "cvc-single-jersey-30") {
            targetFabricName = fabric.name;
            break;
          }
        }
        if (!targetFabricName && targetProduct.fabrics.length > 0) {
          targetFabricName = targetProduct.fabrics[0].name;
        }
        setSelectedFabricName(targetFabricName);

        // Find supplier "TSK ts.knitting" (short code: tsk)
        if (targetFabricName) {
          const fabData = targetProduct.fabrics.find(
            (f: { name: string }) => f.name === targetFabricName
          );
          if (fabData) {
            const supplierFull = getSupplierFullFromShort("tsk");
            if (supplierFull && fabData.suppliers.includes(supplierFull)) {
              setSelectedSupplierName(supplierFull);
            } else {
              setSelectedSupplierName(fabData.suppliers[0] || "");
            }
          }
        }
      }
    }
  }, [products]);

  // Memoized values
  const currentProduct = useMemo(
    () => products.find(p => p.code === selectedProductCode),
    [products, selectedProductCode]
  );

  const currentCatalog = useMemo(
    () => catalogDetails.find(c => c.code === selectedProductCode),
    [catalogDetails, selectedProductCode]
  );

  const getSupplierDataForFabric = useCallback((product: Product | undefined, fabricName: string) => {
    if (!product || !fabricName) return undefined;

    const searchName = fabricName.toLowerCase();

    const normalizeMap: Record<string, string> = {
      "semi 20": "semi/com 20",
      "semi-20": "semi/com 20",
    };

    const normalizedSearch = normalizeMap[searchName] || searchName;

    let found = product.fabrics.find(f => f.name.toLowerCase() === searchName);
    if (found) return found;

    found = product.fabrics.find(f => f.name.toLowerCase() === normalizedSearch);
    if (found) return found;

    found = product.fabrics.find(f =>
      f.name.toLowerCase().includes(searchName) ||
      searchName.includes(f.name.toLowerCase())
    );

    return found;
  }, []);

  const currentFabricData = useMemo(
    () => getSupplierDataForFabric(currentProduct, selectedFabricName),
    [currentProduct, selectedFabricName, getSupplierDataForFabric]
  );

  const currentFabricDetail = useMemo(() => {
    if (!currentCatalog) return undefined;
    // Use English translations when lang is "en"
    if (isEn && selectedFabricName) {
      const searchKey = selectedFabricName.toLowerCase().trim();
      const enDetail = FABRIC_DETAILS_EN[searchKey];
      if (enDetail) {
        return {
          name: selectedFabricName,
          type: enDetail.type,
          gsm_or_weight: enDetail.gsm_or_weight,
          description: enDetail.description,
          usage: enDetail.usage,
          suitable_for: enDetail.suitable_for,
        };
      }
    }
    for (const group of currentCatalog.groups) {
      const found = group.fabrics.find(f =>
        f.name.toLowerCase() === selectedFabricName.toLowerCase()
      );
      if (found) return found;
    }
    return undefined;
  }, [currentCatalog, selectedFabricName, isEn]);

  const currentProductImages = useMemo(() => {
    if (!currentFabricData?.url_pictures || !selectedSupplierName) return [];
    const pictures = currentFabricData.url_pictures[selectedSupplierName];
    return pictures || [];
  }, [currentFabricData, selectedSupplierName]);

  const suppliersWithPicture = useMemo(() => {
    if (!currentFabricData?.suppliers) return [];
    return currentFabricData.suppliers.filter(supplier => {
      const pics = currentFabricData.url_pictures?.[supplier];
      return pics && pics.length > 0;
    });
  }, [currentFabricData]);

  const handleProductSelect = useCallback((code: string) => {
    setSelectedProductCode(code);
    const newProduct = products.find(p => p.code === code);
    if (newProduct?.fabrics.length) {
      const firstFabric = newProduct.fabrics[0].name;
      setSelectedFabricName(firstFabric);
      if (newProduct.fabrics[0].suppliers.length) {
        setSelectedSupplierName(newProduct.fabrics[0].suppliers[0]);
      } else {
        setSelectedSupplierName("");
      }
    }
  }, [products]);

  const handleFabricSelect = useCallback((fabric: string) => {
    setSelectedFabricName(fabric);
    const fabData = getSupplierDataForFabric(currentProduct, fabric);
    if (fabData?.suppliers.length) {
      setSelectedSupplierName(fabData.suppliers[0]);
    } else {
      setSelectedSupplierName("");
    }
  }, [currentProduct, getSupplierDataForFabric]);

  return (
    <div className="max-w-[1200px] mx-auto px-6 text-gray-800">
      {/* Header */}
      <div className="my-8 flex items-baseline gap-4">
        <h1 className="text-5xl text-gray-900">{isEn ? "Fabric to choose" : "Fabric to choose"}</h1>
        <p className="text-xl text-gray-600">{isEn ? "Find the perfect fabric for your needs" : "เลือกเนื้อผ้าที่ใช่สำหรับคุณ"}</p>
      </div>

      {/* Top Product Icons */}
      <div className="mb-12 flex mx-auto gap-2 overflow-x-auto pb-4">
        {[...products].sort((a, b) => {
          // Order matching /05catalog/ folder structure
          const order: Record<string, number> = {
            "11": 1,  // 1tshirt
            "12": 2,  // 2polo
            "13": 3,  // 3shirt
            "14": 4,  // 4workshop
            "15": 5,  // 5jacket-1-woven
            "16": 6,  // 6jacket-2-knit
            "20": 7,  // 7security
            "18": 8,  // 8chef
            "19": 9,  // 9maid
            "17": 10, // 10trouser
            "21": 11, // 11arpon
          };
          return (order[a.code] || 99) - (order[b.code] || 99);
        }).map((product) => {
          const imgSrc = PRODUCT_IMAGES[product.code];
          const displayName = isEn ? (PRODUCT_NAMES_EN[product.code] || product.name) : product.name;

          return (
            <button
              key={product.code}
              onClick={() => handleProductSelect(product.code)}
              className={`flex flex-col items-center p-6 transition-all w-24 ${
                selectedProductCode === product.code
                  ? "scale-110 opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`Select ${displayName}`}
            >
              <div className="h-20 w-20 flex items-center justify-center mb-2 relative">
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={displayName}
                    fill
                    className="object-contain drop-shadow-md"
                    sizes="80px"
                    priority={product.code === "14"}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 rounded-full" />
                )}
              </div>
              <span className="text-sm font-medium whitespace-nowrap text-center">
                {displayName}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Fabrics */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="border border-gray-300 rounded-t-xl p-3 text-center bg-gray-50 mb-[-1px]">
            <h2 className="font-semibold text-gray-700">{isEn ? "Fabric Type" : "ประเภทเนื้อผ้า"}</h2>
          </div>
          <div className="border border-gray-300 rounded-b-xl p-4 flex flex-col gap-3 min-h-[300px]">
            {currentCatalog?.groups.flatMap(g => g.fabrics).map((fabricDetail) => (
              <button
                key={fabricDetail.name}
                onClick={() => handleFabricSelect(fabricDetail.name)}
                className={`text-left text-lg transition-colors ${
                  selectedFabricName === fabricDetail.name
                    ? "text-red-600 font-bold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {fabricDetail.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Supplier Button Group */}
          {suppliersWithPicture.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 border border-gray-300 rounded-full p-2 items-center">
              <div className="px-4 text-gray-500 font-medium">Supplier:</div>
              {suppliersWithPicture.map((supplier) => (
                <button
                  key={supplier}
                  onClick={() => setSelectedSupplierName(supplier)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSupplierName === supplier
                      ? "bg-gray-800 text-white"
                      : "bg-transparent text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {supplier.split(' ')[0]}
                </button>
              ))}
            </div>
          )}

          {/* URL ซัพพลายเออร์ - name + copy button only */}
          {selectedSupplierName && selectedFabricName && (
            <div className="mb-8 border border-gray-300 rounded-xl p-4">
              <div className="flex items-baseline gap-2 mb-3 px-2">
                <span className="text-gray-500 font-medium text-sm">{isEn ? "Supplier URL" : "URL ซัพพลายเออร์"}:</span>
              </div>
              <div className="flex flex-col gap-2">
                {(() => {
                  const productId = selectedProductCode;
                  const fabricId = slugifyFabric(selectedFabricName);
                  const supplierId = getSupplierShortCode(selectedSupplierName);
                  const fullUrl = `${baseUrl}?p=${productId}&f=${fabricId}&s=${supplierId}`;
                  const isCopied = copiedSupplier === selectedSupplierName;

                  const handleCopyUrl = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(fullUrl).then(() => {
                      setCopiedSupplier(selectedSupplierName);
                      setTimeout(() => setCopiedSupplier(""), 2000);
                    });
                  };

                  return (
                    <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 rounded-lg bg-gray-50">
                      <span className="font-medium text-sm text-gray-700">
                        {currentProduct?.name.split(' ')[0] || selectedProductCode} / {selectedFabricName} / {selectedSupplierName.split(' ')[0]}
                      </span>
                      <button
                        onClick={handleCopyUrl}
                        className={`text-xs px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                          isCopied
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 hover:bg-gray-300 text-gray-600"
                        }`}
                        title="Copy URL"
                      >
                        {isCopied ? (isEn ? "Copied!" : "คัดลอกแล้ว") : (isEn ? "Copy URL" : "คัดลอก URL")}
                      </button>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Fabric Details */}
          <div className="mb-12">
            <table className="text-left border-collapse w-full">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top w-32">{isEn ? "Type :" : "ประเภทผ้า :"}</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.type || "-"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">{isEn ? "Weight :" : "น้ำหนักผ้า :"}</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.gsm_or_weight || "-"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">{isEn ? "Feel :" : "สัมผัส :"}</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.description || "-"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">{isEn ? "Usage :" : "การใช้งาน :"}</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.usage || "-"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">{isEn ? "Suitable for :" : "เหมาะสำหรับ :"}</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.suitable_for || "-"}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p className="text-xl text-gray-600 mb-6">{isEn ? "Find the perfect fabric for your needs" : "เลือกเนื้อผ้าที่ใช่สำหรับคุณ"}</p>

            {/* Product Images */}
            <div>
              <h3 className="text-sm text-red-500 mb-4">
                {isEn ? "* Images vary by supplier:" : "* รูปภาพเปลี่ยนตามซัพพลายเออร์:"} {selectedSupplierName?.split(' ')[0] || (isEn ? 'Not selected' : 'ยังไม่ได้เลือก')}
              </h3>

              {currentProductImages.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {currentProductImages.map((imgUrl, index) => {
                    const isPng = imgUrl.toLowerCase().endsWith('.png');
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setLightboxOpen(true);
                          setTimeout(() => lightboxApi?.scrollTo(index), 50);
                        }}
                        className="group text-left"
                      >
                        <div className="relative w-full bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer" style={{ aspectRatio: '4/5', maxHeight: '300px' }}>
                          <Image
                            src={imgUrl}
                            alt={`${currentProduct?.name} - ${selectedSupplierName?.split(' ')[0] || 'Supplier'} ${index + 1}`}
                            fill
                            className={`rounded-lg shadow-md object-contain transition-transform duration-300 group-hover:scale-105 ${isPng ? 'p-4' : 'p-1'}`}
                            sizes="(max-width: 768px) 50vw, 400px"
                          />
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-1 truncate">
                          {index + 1}/{currentProductImages.length}
                        </p>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="mb-8">
                  <div className="relative w-full bg-gray-100 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                    <p className="text-gray-400">{isEn ? "No image available for this supplier" : "ไม่มีรูปภาพสำหรับซัพพลายเออร์นี้"}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Lightbox Carousel Overlay */}
      {lightboxOpen && currentProductImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <Carousel setApi={setLightboxApi} opts={{ loop: true }}>
              <CarouselContent>
                {currentProductImages.map((imgUrl, index) => {
                  const isPng = imgUrl.toLowerCase().endsWith('.png');
                  return (
                    <CarouselItem key={index}>
                      <div className="relative w-full" style={{ aspectRatio: '4/5', maxHeight: '80vh' }}>
                        <Image
                          src={imgUrl}
                          alt={`${currentProduct?.name} - ${index + 1}`}
                          fill
                          className={`object-contain ${isPng ? 'p-8' : 'p-2'}`}
                          sizes="90vw"
                          priority
                        />
                      </div>
                      <p className="text-center text-white/60 text-sm mt-3">
                        {index + 1} / {currentProductImages.length}
                      </p>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white/30 hover:bg-white/20 hover:text-white left-2" />
              <CarouselNext className="text-white border-white/30 hover:bg-white/20 hover:text-white right-2" />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
