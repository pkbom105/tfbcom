const fs = require("fs");
const path = require("path");

// Product code to directory mapping
const CODE_TO_DIR = {
  "11": "1tshirt",
  "12": "2polo",
  "13": "3shirt",
  "14": "4workshop",
  "15": "5jacket",
  "16": "6jacket2",
  "17": "7trouser",
  "18": "8chef",
  "19": "9maid",
  "20": "10security",
  "21": "11arpon",
};

const DIR_TO_CODE = {};
for (const [code, dir] of Object.entries(CODE_TO_DIR)) {
  DIR_TO_CODE[dir] = code;
}

const catalogBase = path.join(__dirname, "public", "05catalog");

// Product name mapping
const PRODUCT_NAMES = {
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
const SUPPLIER_FULL_NAMES = {
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

// Get the short supplier code from a directory name (case-insensitive)
function getSupplierCode(dirName) {
  const lower = dirName.toLowerCase();
  for (const [code, fullName] of Object.entries(SUPPLIER_FULL_NAMES)) {
    if (lower === code) return code;
    // Also check if the full name starts with the code
    const firstWord = fullName.split(" ")[0].toLowerCase();
    if (lower === firstWord.toLowerCase()) return code;
  }
  return lower;
}

// Get full supplier name from directory name
function getSupplierFullName(dirName) {
  const code = getSupplierCode(dirName);
  return SUPPLIER_FULL_NAMES[code] || dirName;
}

// Capitalize fabric folder name for display
function getFabricDisplayName(dirName) {
  // Simple capitalization: "comb twill" → "Comb Twill"
  return dirName
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Build data.json and code.json from folder structure
async function main() {
  // Read existing data.json to preserve detail info
  const oldDataPath = path.join(__dirname, "public", "json", "data.json");
  const oldData = JSON.parse(fs.readFileSync(oldDataPath, "utf-8"));
  
  const oldCodePath = path.join(__dirname, "public", "json", "code.json");
  const oldCode = JSON.parse(fs.readFileSync(oldCodePath, "utf-8"));

  // Build fabric info lookup from old data
  const oldFabricInfo = {};
  for (const product of oldData.product_catalog) {
    for (const fabric of product.fabrics) {
      oldFabricInfo[`${product.code}:${fabric.name.toLowerCase()}`] = fabric;
    }
  }

  // Build detail info from old code
  const oldDetailInfo = {};
  for (const product of oldCode.product_catalog) {
    for (const group of product.groups) {
      for (const fabric of group.fabrics) {
        const key = `${product.code}:${fabric.name.toLowerCase()}`;
        if (!oldDetailInfo[key]) oldDetailInfo[key] = [];
        oldDetailInfo[key].push({ group_name: group.group_name, fabric });
      }
    }
  }

  const newProducts = [];
  const newCatalogDetails = [];

  const dirs = fs.readdirSync(catalogBase, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  for (const productDir of dirs) {
    const code = DIR_TO_CODE[productDir];
    if (!code) {
      console.log(`⚠ No code mapping for directory: ${productDir}`);
      continue;
    }

    const productPath = path.join(catalogBase, productDir);
    const fabricDirs = fs.readdirSync(productPath, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
      .sort();

    console.log(`\n📁 ${PRODUCT_NAMES[code] || productDir} (${code}): ${fabricDirs.length} fabrics`);

    const fabrics = [];
    const fabricDetails = [];

    for (const fabricDir of fabricDirs) {
      const fabricPath = path.join(productPath, fabricDir);
      const fabricDisplayName = getFabricDisplayName(fabricDir);

      // Get supplier directories
      const supplierDirs = fs.readdirSync(fabricPath, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);

      // Get supplier names (deduplicated)
      const supplierNames = [...new Set(supplierDirs.map(sd => getSupplierFullName(sd)))];

      // Get image files for url_pictures
      const urlPictures = {};
      for (const supplierDir of supplierDirs) {
        const supplierPath = path.join(fabricPath, supplierDir);
        const imageFiles = fs.readdirSync(supplierPath)
          .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
          .sort();

        if (imageFiles.length > 0) {
          const supplierFull = getSupplierFullName(supplierDir);
          const urls = imageFiles.map(f => 
            `/05catalog/${productDir}/${fabricDir}/${supplierDir}/${f}`
          );
          urlPictures[supplierFull] = urls;
        }
      }

      fabrics.push({
        name: fabricDisplayName,
        suppliers: supplierNames,
        url_pictures: urlPictures,
      });

      // Try to preserve old details
      const oldKey = `${code}:${fabricDisplayName.toLowerCase()}`;
      const oldFab = oldFabricInfo[oldKey];

      // Find matching detail from old code
      let matchedDetail = null;
      const oldDetails = oldDetailInfo[oldKey];
      if (oldDetails && oldDetails.length > 0) {
        matchedDetail = oldDetails[0];
      }

      fabricDetails.push({
        name: fabricDisplayName,
        type: matchedDetail?.fabric?.type || "ผ้าเนื้อเรียบ",
        gsm_or_weight: matchedDetail?.fabric?.gsm_or_weight || "มาตรฐาน",
        description: matchedDetail?.fabric?.description || "เนื้อผ้าคุณภาพดี",
        usage: matchedDetail?.fabric?.usage || "ใช้งานทั่วไป",
        suitable_for: matchedDetail?.fabric?.suitable_for || "ทุกประเภท",
      });

      console.log(`   ${fabricDisplayName} → suppliers: ${supplierNames.join(", ")} (${Object.keys(urlPictures).length} have pics)`);
    }

    // Build groups for code.json
    const groups = [{
      group_name: "General",
      fabrics: fabricDetails,
    }];

    newProducts.push({
      name: PRODUCT_NAMES[code] || productDir,
      code: code,
      url_file_picture: `/05catalog/${productDir}/`,
      fabrics: fabrics,
    });

    newCatalogDetails.push({
      code: code,
      category: PRODUCT_NAMES[code] || productDir,
      key_features: { focus: ["ทนทาน", "คุณภาพดี"], context: "สำหรับการใช้งานทั่วไป" },
      groups: groups,
    });
  }

  // Write data.json
  const newData = { product_catalog: newProducts };
  fs.writeFileSync(oldDataPath, JSON.stringify(newData, null, 2) + "\n");
  console.log(`\n✅ data.json written with ${newProducts.length} products`);

  // Write code.json
  const newCode = { product_catalog: newCatalogDetails };
  fs.writeFileSync(oldCodePath, JSON.stringify(newCode, null, 2) + "\n");
  console.log(`✅ code.json written with ${newCatalogDetails.length} products`);

  // Count total images
  let total = 0;
  for (const product of newProducts) {
    for (const fabric of product.fabrics) {
      if (fabric.url_pictures) {
        for (const urls of Object.values(fabric.url_pictures)) {
          total += urls.length;
        }
      }
    }
  }
  console.log(`📊 Total image URLs: ${total}`);
}

main().catch(console.error);