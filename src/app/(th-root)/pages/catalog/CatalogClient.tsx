"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import type { Product, CatalogData } from "@/lib/catalog-data";

// Product images mapping for top icons
const PRODUCT_IMAGES: Record<string, string> = {
  "11": "/png-1/2.png",
  "12": "/png-1/6.png",
  "13": "/png-1/12.png",
  "14": "/png-1/22.png",
  "15": "/png-1/30.png",
  "16": "/png-1/55.png",
  "17": "/png-1/53.png",
  "18": "/png-1/35.png",
  "19": "/png-1/43.png",
  "20": "/png-1/24.png",
  "21": "/png-1/47.png",
};

// English product names for top icon labels
const PRODUCT_NAMES_EN: Record<string, string> = {
  "11": "T-Shirt",
  "12": "Polo",
  "13": "Shirt",
  "14": "Workshop",
  "15": "Jacket",
  "16": "Stretch Jacket",
  "17": "Trouser",
  "18": "Chef",
  "19": "Maid",
  "20": "Security",
  "21": "Apron",
};

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

  const [selectedProductCode, setSelectedProductCode] = useState<string>("14");
  const [selectedFabricName, setSelectedFabricName] = useState<string>("");
  const [selectedSupplierName, setSelectedSupplierName] = useState<string>("");

  // Initialize selections on mount
  useEffect(() => {
    const initialProduct = products.find((p: Product) => p.code === "14") || products[0];
    if (initialProduct && initialProduct.fabrics.length > 0) {
      setSelectedProductCode(initialProduct.code);
      const firstFabric = initialProduct.fabrics[0].name;
      setSelectedFabricName(firstFabric);
      if (initialProduct.fabrics[0].suppliers.length > 0) {
        setSelectedSupplierName(initialProduct.fabrics[0].suppliers[0]);
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
      <div className="mb-12 flex justify-start gap-2 overflow-x-auto pb-4">
        {[...products].sort((a, b) => Number(a.code) - Number(b.code)).map((product) => {
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
            <div className="flex flex-wrap gap-2 mb-8 border border-gray-300 rounded-full p-2 items-center">
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
                <div className="flex flex-col gap-8">
                  {currentProductImages.map((imgUrl, index) => {
                    const isPng = imgUrl.toLowerCase().endsWith('.png');
                    return (
                      <div key={index} className="mb-2">
                        <div className="relative w-full bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden" style={{ minHeight: '800px', maxHeight: '900px' }}>
                          <Image
                            src={imgUrl}
                            alt={`${currentProduct?.name} - ${selectedSupplierName?.split(' ')[0] || 'Supplier'} ${index + 1}`}
                            fill
                            className={`rounded-lg shadow-md object-contain ${isPng ? 'p-6' : 'p-2'}`}
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            priority={index === 0}
                          />
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-2">
                          {currentProduct?.name} - {selectedSupplierName?.split(' ')[0] || 'Unknown'} ({index + 1}/{currentProductImages.length})
                        </p>
                      </div>
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
    </div>
  );
}