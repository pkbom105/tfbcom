/**
 * Dynamic catalog data from filesystem.
 * Reads 05catalog folder structure at build time to generate data.json and code.json.
 * This script is the single source of truth - JSON files are generated from this logic.
 */

import fs from "fs";
import path from "path";

// Public directory root
const PUBLIC_DIR = path.join(process.cwd(), "public");
const CATALOG_DIR = path.join(PUBLIC_DIR, "05catalog");

// Product code to directory mapping (matches actual folder names in /05catalog/)
const CODE_TO_DIR: Record<string, string> = {
  "11": "1tshirt",
  "12": "2polo",
  "13": "3shirt",
  "14": "4workshop",
  "15": "5jacket-1-woven",
  "16": "6jacket-2-knit",
  "17": "10trouser",
  "18": "8chef",
  "19": "9maid",
  "20": "7security",
  "21": "11arpon",
};

const DIR_TO_CODE: Record<string, string> = {};
for (const [code, dir] of Object.entries(CODE_TO_DIR)) {
  DIR_TO_CODE[dir] = code;
}

// Product names
const PRODUCT_NAMES: Record<string, string> = {
  "11": "เสื้อคอกลม",
  "12": "เสื้อโปโล",
  "13": "เสื้อเชิ้ต",
  "14": "เสื้อช็อป",
  "15": "เสื้อแจ็คเก็ต",
  "16": "เสื้อแจ็คเก็ตผ้ายืด",
  "17": "กางเกง",
  "18": "เสื้อเชฟ",
  "19": "เสื้อแม่บ้าน",
  "20": "เสื้อรปภ",
  "21": "ผ้ากันเปื้อน",
};

// Supplier short code to full name mapping
const SUPPLIER_FULL_NAMES: Record<string, string> = {
  "jsm": "JSM เจียมสมาน",
  "vst": "VST วีศิลป์เท็กไทล์",
  "dfn": "DFN ดีไฟน์เนส",
  "kmp": "KMP",
  "spn": "SPN ซิงค์ พาณิชย์",
  "sps": "SPS สมประสงค์",
  "tct": "TCT ทีคัลเจอร์",
  "smc": "SMC สมชาย",
  "ntp": "NTP",
  "knt": "KNT",
  "fuji": "Fuji",
  "jng": "Jng",
  "kvv": "KVV",
  "phl": "PHL ปังหัว",
  "pkp": "PKP พรค้าผ้า",
  "prs": "PRS ปารีสค้าผ้า",
  "glf": "GLF จี.แอล.เอฟ",
  "sgt": "SGT สหกรุ๊ป เท็กซ์ไทล์",
  "vry": "VRY วิริยะ",
  "tsk": "TSK ts.knitting",
  "avc": "AVC อัลวาเซ่ Alvaasce",
  "jfm": "JFM หจก. เจ เอฟ เอ็ม",
  "mks": "MKS มงกุฎสิงห์",
  "mtt": "MTT มนตรา เทรดดิ้ง",
  "let": "LET เลิศอาภร",
  "kch": "KCH กอบชัย",
  "tgt": "TGT ไทยกรุ๊ปเท็กไทล์",
  "tfm": "TFM ทีเอฟมาลีเท็กซ์",
  "npt": "NPT",
  "fab": "Fab Fabrica",
  "fabrica": "Fabrica",
  "sml": "SML",
};

// Types matching the page interfaces
export interface SupplierWithPicture {
  supplier_name: string;
  has_picture: boolean;
}

export interface FabricWithSuppliers {
  name: string;
  suppliers: string[];
  url_pictures: Record<string, string[]>;
}

export interface Product {
  name: string;
  code: string;
  url_file_picture: string;
  fabrics: FabricWithSuppliers[];
}

export interface FabricDetail {
  name: string;
  type: string;
  gsm_or_weight: string;
  description: string;
  usage: string;
  suitable_for: string;
}

export interface ProductCatalog {
  code: string;
  category: string;
  key_features: { focus: string[]; context: string };
  groups: {
    group_name: string;
    fabrics: FabricDetail[];
  }[];
}

export interface CatalogData {
  products: Product[];
  catalogDetails: ProductCatalog[];
}

// Get supplier code from directory name
function getSupplierCode(dirName: string): string {
  const lower = dirName.toLowerCase();
  for (const [code, fullName] of Object.entries(SUPPLIER_FULL_NAMES)) {
    if (lower === code) return code;
    const firstWord = fullName.split(" ")[0].toLowerCase();
    if (lower === firstWord.toLowerCase()) return code;
  }
  return lower;
}

// Get full supplier name from directory name
function getSupplierFullName(dirName: string): string {
  const code = getSupplierCode(dirName);
  return SUPPLIER_FULL_NAMES[code] || dirName;
}

// Capitalize folder name for display
function getFabricDisplayName(dirName: string): string {
  return dirName
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Read image files from a directory
function getImageFiles(dirPath: string): string[] {
  try {
    return fs.readdirSync(dirPath).filter(f => /\.(jpg|jpeg|png)$/i.test(f)).sort();
  } catch {
    return [];
  }
}

// Main function to read catalog from filesystem
export function getCatalogData(): CatalogData {
  const products: Product[] = [];
  const catalogDetails: ProductCatalog[] = [];

  if (!fs.existsSync(CATALOG_DIR)) {
    return { products: [], catalogDetails: [] };
  }

  const productDirs = fs.readdirSync(CATALOG_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort((a, b) => {
      const codeA = DIR_TO_CODE[a] || "99";
      const codeB = DIR_TO_CODE[b] || "99";
      return Number(codeA) - Number(codeB);
    });

  const detailCache = loadDetailCache();

  for (const productDir of productDirs) {
    const code = DIR_TO_CODE[productDir];
    if (!code) continue;

    const productPath = path.join(CATALOG_DIR, productDir);
    const fabricDirs = fs.readdirSync(productPath, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
      .sort();

    const fabrics: FabricWithSuppliers[] = [];
    const fabricDetails: FabricDetail[] = [];

    for (const fabricDir of fabricDirs) {
      const fabricPath = path.join(productPath, fabricDir);
      const fabricDisplayName = getFabricDisplayName(fabricDir);

      // Get supplier directories
      const supplierDirs = fs.readdirSync(fabricPath, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);

      // Also check if there are image files directly in the fabric folder (no supplier subdirs)
      const directImages = getImageFiles(fabricPath);

      // Deduplicate supplier names
      const supplierNames = [...new Set(supplierDirs.map(sd => getSupplierFullName(sd)))];

      // Build url_pictures from filesystem
      const urlPictures: Record<string, string[]> = {};

      // Handle images directly in fabric folder (e.g., cotton comb without supplier subdirs)
      if (directImages.length > 0) {
        urlPictures[fabricDisplayName] = directImages.map(f =>
          `/05catalog/${productDir}/${fabricDir}/${f}`
        );
        // Add fabric name as virtual supplier
        if (!supplierNames.includes(fabricDisplayName)) {
          supplierNames.push(fabricDisplayName);
        }
      }

      // Handle images in supplier subdirectories
      for (const supplierDir of supplierDirs) {
        const imageFiles = getImageFiles(path.join(fabricPath, supplierDir));
        if (imageFiles.length > 0) {
          const supplierFull = getSupplierFullName(supplierDir);
          urlPictures[supplierFull] = imageFiles.map(f =>
            `/05catalog/${productDir}/${fabricDir}/${supplierDir}/${f}`
          );
        }
      }

      fabrics.push({
        name: fabricDisplayName,
        suppliers: [...new Set(supplierNames)],
        url_pictures: urlPictures,
      });

      // Load or generate detail info
      const cached = detailCache[code]?.[fabricDisplayName.toLowerCase()];
      fabricDetails.push(cached || {
        name: fabricDisplayName,
        type: "ผ้าเนื้อเรียบ",
        gsm_or_weight: "มาตรฐาน",
        description: "เนื้อผ้าคุณภาพดี",
        usage: "ใช้งานทั่วไป",
        suitable_for: "ทุกประเภท",
      });
    }

    products.push({
      name: PRODUCT_NAMES[code] || productDir,
      code,
      url_file_picture: `/05catalog/${productDir}/`,
      fabrics,
    });

    catalogDetails.push({
      code,
      category: PRODUCT_NAMES[code] || productDir,
      key_features: { focus: ["ทนทาน", "คุณภาพดี"], context: "สำหรับการใช้งานทั่วไป" },
      groups: [{ group_name: "General", fabrics: fabricDetails }],
    });
  }

  return { products, catalogDetails };
}

// Load existing detail cache from code.json to preserve descriptions
function loadDetailCache(): Record<string, Record<string, FabricDetail>> {
  try {
    const codePath = path.join(PUBLIC_DIR, "json", "code.json");
    const raw = fs.readFileSync(codePath, "utf-8");
    const data = JSON.parse(raw);
    const cache: Record<string, Record<string, FabricDetail>> = {};
    for (const product of data.product_catalog) {
      for (const group of product.groups) {
        for (const fabric of group.fabrics) {
          if (!cache[product.code]) cache[product.code] = {};
          cache[product.code][fabric.name.toLowerCase()] = fabric;
        }
      }
    }
    return cache;
  } catch {
    return {};
  }
}

// Write JSON files to public/json/
export function writeCatalogJson() {
  const data = getCatalogData();

  const outputDir = path.join(PUBLIC_DIR, "json");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const dataJson = { product_catalog: data.products };
  fs.writeFileSync(
    path.join(outputDir, "data.json"),
    JSON.stringify(dataJson, null, 2) + "\n"
  );

  const codeJson = { product_catalog: data.catalogDetails };
  fs.writeFileSync(
    path.join(outputDir, "code.json"),
    JSON.stringify(codeJson, null, 2) + "\n"
  );

  const totalImages = data.products.reduce((sum, p) =>
    sum + p.fabrics.reduce((s, f) =>
      s + Object.values(f.url_pictures).reduce((ss, urls) => ss + urls.length, 0), 0
    ), 0
  );

  console.log(`✅ data.json: ${data.products.length} products, ${data.products.reduce((s, p) => s + p.fabrics.length, 0)} fabrics`);
  console.log(`✅ code.json written`);
  console.log(`📊 Total images: ${totalImages}`);

  return totalImages;
}

// Run directly: npx tsx src/lib/catalog-data.ts
if (require.main === module) {
  const total = writeCatalogJson();
  console.log(`📊 ${total} image URLs generated`);
}