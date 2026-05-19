"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FabricWithSuppliers {
  name: string;
  suppliers: string[];
}

interface Product {
  name: string;
  code: string;
  fabrics: FabricWithSuppliers[];
}

interface FabricDetail {
  name: string;
  type: string;
  gsm_or_weight: string;
  description: string;
  usage: string;
  suitable_for: string;
}

interface ProductCatalog {
  code: string;
  category: string;
  key_features: any;
  groups: {
    group_name: string;
    fabrics: FabricDetail[];
  }[];
}

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [catalogDetails, setCatalogDetails] = useState<ProductCatalog[]>([]);

  const [selectedProductCode, setSelectedProductCode] = useState<string>("14");
  const [selectedFabricName, setSelectedFabricName] = useState<string>("");
  const [selectedSupplierName, setSelectedSupplierName] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch("/json/data.json"),
          fetch("/json/code.json"),
        ]);
        const data1 = await res1.json();
        const data2 = await res2.json();

        setProducts(data1.product_catalog);
        setCatalogDetails(data2.product_catalog);

        // Init selections based on product 14 (เสื้อช็อป) as in reference image
        const initialProduct = data1.product_catalog.find((p: Product) => p.code === "14") || data1.product_catalog[0];
        if (initialProduct) {
          setSelectedProductCode(initialProduct.code);
          const initialFabric = "Super Comb twill"; // as in image
          setSelectedFabricName(initialFabric);
          
          const fabricData = initialProduct.fabrics.find((f: FabricWithSuppliers) => f.name.toLowerCase() === initialFabric.toLowerCase());
          if (fabricData && fabricData.suppliers.length > 0) {
            setSelectedSupplierName(fabricData.suppliers[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const currentProduct = products.find(p => p.code === selectedProductCode);
  
  const getSupplierDataForFabric = (product: Product | undefined, fabricName: string) => {
    if (!product || !fabricName) return undefined;
    const searchName = fabricName.toLowerCase();
    
    // 1. Exact match
    let found = product.fabrics.find(f => f.name.toLowerCase() === searchName);
    if (found) return found;
    
    // 2. Normalize known discrepancies (e.g., code 11 "Semi 20" vs "Semi/Com 20")
    const normalizedName = searchName.replace("semi 20", "semi/com 20");
    found = product.fabrics.find(f => f.name.toLowerCase() === normalizedName);
    if (found) return found;
    
    // 3. Fallback partial inclusion match
    found = product.fabrics.find(f => 
      f.name.toLowerCase().includes(searchName) || 
      searchName.includes(f.name.toLowerCase())
    );
    return found;
  };

  const currentFabricData = getSupplierDataForFabric(currentProduct, selectedFabricName);
  const currentCatalog = catalogDetails.find(c => c.code === selectedProductCode);
  
  let currentFabricDetail: FabricDetail | undefined;
  if (currentCatalog) {
    for (const group of currentCatalog.groups) {
      const found = group.fabrics.find(f => f.name.toLowerCase() === selectedFabricName.toLowerCase());
      if (found) {
        currentFabricDetail = found;
        break;
      }
    }
  }

  const handleProductSelect = (code: string) => {
    setSelectedProductCode(code);
    const cat = catalogDetails.find(c => c.code === code);
    if (cat && cat.groups.length > 0 && cat.groups[0].fabrics.length > 0) {
      handleFabricSelect(cat.groups[0].fabrics[0].name);
    }
  };

  const handleFabricSelect = (fabric: string) => {
    setSelectedFabricName(fabric);
    const fabData = getSupplierDataForFabric(currentProduct, fabric);
    if (fabData && fabData.suppliers.length > 0) {
      setSelectedSupplierName(fabData.suppliers[0]);
    } else {
      setSelectedSupplierName("");
    }
  };

  // Mock colors for catalog
  const mockColors = [
    { name: "ขาว White", code: "WHD100", color: "#FFFFFF" },
    { name: "ข้าวโพด Corn", code: "YLD110", color: "#FDE047" },
    { name: "ราชพฤกษ์ Ratchaphruek", code: "YLD215", color: "#EAB308" },
    { name: "พืช Peach", code: "ORD315", color: "#F97316" },
    { name: "เฟรนช์บลู French Blue", code: "BLD240", color: "#3B82F6" },
    { name: "แปซิฟิก Pacific Blue", code: "BLD310", color: "#2563EB" },
    { name: "ช็อกกิ้งบลู Shocking Blue", code: "BLD335", color: "#1D4ED8" },
    { name: "เนวี่ Navy Blue", code: "BLD370", color: "#1E3A8A" },
    { name: "ลูกกวาด Candy", code: "RDD220", color: "#F43F5E" },
    { name: "เชอร์รี่ Cherry", code: "RDD340", color: "#E11D48" },
    { name: "แดงเลือดนก Burgundy", code: "RDD355", color: "#9F1239" },
    { name: "ชมพู Baby Pink", code: "PKD110", color: "#FBCFE8" },
    { name: "กรมท่า Deep Navy", code: "BLD360", color: "#0F172A" },
    { name: "แอปเปิ้ลเขียว Green Apple", code: "GRD240", color: "#4ADE80" },
    { name: "เขียวเข้ม Dark Green", code: "GRD260", color: "#166534" },
    { name: "ข้าวโอ๊ต Oatmeal", code: "BRD110", color: "#E5E7EB" },
  ];

  return (
    <div className="min-h-screen bg-white p-8 font-sans text-gray-800">
      {/* Header */}
      <div className="mb-8 flex items-baseline gap-4">
        <h1 className="text-5xl font-serif text-gray-900">Fabric to choose</h1>
        <p className="text-xl text-gray-600">เลือกเนื้อผ้าที่ใช่สำหรับคุณ</p>
      </div>

      {/* Top Product Icons */}
      <div className="mb-12 flex justify-start gap-4 overflow-x-auto pb-4">
        {products.map((product) => {
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
          const imgSrc = PRODUCT_IMAGES[product.code];

          return (
            <button
              key={product.code}
              onClick={() => handleProductSelect(product.code)}
              className={`flex flex-col items-center p-6 transition-all w-24 ${
                selectedProductCode === product.code
                  ? "scale-120 opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <div className="h-20 w-20 flex items-center justify-center mb-2 relative">
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 rounded"></div>
                )}
              </div>
              <span className="text-sm font-medium whitespace-nowrap text-center">{product.name}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Fabrics */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="border border-gray-300 rounded-t-xl p-3 text-center bg-gray-50 mb-[-1px]">
            <h2 className="font-semibold text-gray-700">ประเภทเนื้อผ้า</h2>
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
          <div className="flex flex-wrap gap-2 mb-8 border border-gray-300 rounded-full p-2 items-center">
             <div className="px-4 text-gray-500 font-medium">Supplier:</div>
            {currentFabricData?.suppliers.map((supplier) => (
              <button
                key={supplier}
                onClick={() => setSelectedSupplierName(supplier)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSupplierName === supplier
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                {supplier.split(' ')[0]} {/* Show short name */}
              </button>
            ))}
          </div>

          {/* Fabric Details */}
          <div className="mb-12">
            <table className="text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">ประเภทผ้า :</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.type || "-"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">น้ำหนักผ้า :</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.gsm_or_weight || "-"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">สัมผัส :</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.description || "-"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">การใช้งาน :</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.usage || "-"}</td>
                </tr>
                <tr>
                  <th className="py-2 pr-8 font-semibold text-gray-700 whitespace-nowrap align-top">เหมาะสำหรับ :</th>
                  <td className="py-2 text-gray-600">{currentFabricDetail?.suitable_for || "-"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Color Catalog */}
          <div>
             <h3 className="text-sm text-red-500 mb-4">* Catalog colors change according to supplier</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8">
              {mockColors.map((color) => (
                <div key={color.code} className="flex flex-col items-center">
                  <div 
                    className="w-full aspect-square rounded-md shadow-sm mb-2 border border-gray-200 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: color.color }}
                  >
                    {/* Simulated shirt texture/shape */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fabric-plaid.png')]"></div>
                    <div className="w-3/4 h-3/4 bg-black/5 rounded-t-xl" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 20%)' }}></div>
                  </div>
                  <span className="text-[10px] text-gray-800 text-center font-medium leading-tight">{color.name}</span>
                  <span className="text-[10px] text-gray-500">{color.code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
