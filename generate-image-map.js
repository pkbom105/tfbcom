const fs = require("fs");
const path = require("path");

// Product code to directory mapping
const PRODUCT_CODE_TO_DIR = {
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

// Normalize fabric name for comparison (lowercase, remove special chars)
function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[/\\]/g, " ")
    .replace(/[^a-z0-9ก-๙\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Supplier name to directory code mapping
function supplierToDirCode(supplierName) {
  // Direct abbreviations used in directory names
  const knownCodes = [
    { regex: /\bjsm\b/i, code: "jsm" },
    { regex: /\bvst\b/i, code: "vst" },
    { regex: /\bdfn\b/i, code: "dfn" },
    { regex: /\bkmp\b/i, code: "kmp" },
    { regex: /\bspn\b/i, code: "spn" },
    { regex: /\bsps\b/i, code: "sps" },
    { regex: /\btct\b/i, code: "tct" },
    { regex: /\bsmc\b/i, code: "smc" },
    { regex: /\bntp\b/i, code: "ntp" },
    { regex: /\bknt\b/i, code: "knt" },
    { regex: /\bfuji\b/i, code: "fuji" },
    { regex: /\bjng\b/i, code: "jng" },
    { regex: /\bkvv\b/i, code: "kvv" },
    { regex: /\bphl\b/i, code: "phl" },
    { regex: /\bpkp\b/i, code: "pkp" },
    { regex: /\bprs\b/i, code: "prs" },
    { regex: /\bglf\b/i, code: "glf" },
    { regex: /\bsgt\b/i, code: "sgt" },
    { regex: /\bvry\b/i, code: "vry" },
    { regex: /\btsk\b/i, code: "tsk" },
    { regex: /\bavc\b/i, code: "avc" },
    { regex: /\bjfm\b/i, code: "jfm" },
    { regex: /\bmks\b/i, code: "mks" },
    { regex: /\bmtt\b/i, code: "mtt" },
    { regex: /\blet\b/i, code: "let" },
    { regex: /\bkch\b/i, code: "kch" },
    { regex: /\btgt\b/i, code: "tgt" },
    { regex: /\btfm\b/i, code: "tfm" },
  ];

  for (const { regex, code } of knownCodes) {
    if (regex.test(supplierName)) return code;
  }

  // Fallback: use first word of the supplier name, lowercased
  const firstWord = supplierName.split(" ")[0];
  return firstWord ? firstWord.toLowerCase() : supplierName.toLowerCase();
}

// Check if a directory name matches a supplier code
function dirMatchesSupplier(dirName, supplierCode) {
  return dirName.toLowerCase() === supplierCode ||
         dirName.toLowerCase().includes(supplierCode) ||
         supplierCode.includes(dirName.toLowerCase());
}

// Check if a fabric from data.json matches a directory name
function fabricMatchesDir(fabricName, dirName) {
  const normFabric = normalizeName(fabricName);
  const normDir = normalizeName(dirName);

  if (normFabric === normDir) return true;

  // Check if one contains the other
  if (normFabric.includes(normDir) || normDir.includes(normFabric)) return true;

  // Handle special cases: "TC Comb Twill" matches both "comb twill" and "tc comb twill"
  const fabricWords = normFabric.split(" ");
  const dirWords = normDir.split(" ");

  // If directory name words are a subset of fabric name words
  const allWordsMatch = dirWords.every(w => fabricWords.includes(w));
  if (allWordsMatch) return true;

  // Or fabric name words are a subset of directory name words
  const fabricWordsMatch = fabricWords.every(w => dirWords.includes(w));
  if (fabricWordsMatch) return true;

  return false;
}

// Load data.json
const dataJsonPath = path.join(__dirname, "public", "json", "data.json");
const data = JSON.parse(fs.readFileSync(dataJsonPath, "utf-8"));

const catalogBase = path.join(__dirname, "public", "05catalog");

let totalMapped = 0;
let totalUnmatchedSupplierDirs = 0;

for (const product of data.product_catalog) {
  const productDir = PRODUCT_CODE_TO_DIR[product.code];
  if (!productDir) {
    console.log(`  ⚠ No directory mapping for product code ${product.code} (${product.name})`);
    continue;
  }

  const productPath = path.join(catalogBase, productDir);
  if (!fs.existsSync(productPath)) {
    console.log(`  ⚠ Directory not found: ${productPath}`);
    continue;
  }

  console.log(`\n📁 Processing: ${product.name} (code: ${product.code}) → ${productDir}`);

  // Read all fabric directories
  const fabricDirs = fs.readdirSync(productPath, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`   Found ${fabricDirs.length} fabric directories`);

  for (const fabricEntry of product.fabrics) {
    const fabricName = fabricEntry.name;

    // Initialize url_pictures if empty
    if (!fabricEntry.url_pictures) {
      fabricEntry.url_pictures = {};
    }

    // Find ALL matching directories for this fabric (can be multiple)
    const matchedDirs = fabricDirs.filter(dirName => fabricMatchesDir(fabricName, dirName));

    if (matchedDirs.length === 0) {
      console.log(`   - ❌ No dir for fabric: "${fabricName}"`);
      continue;
    }

    // For each supplier, search through all matching directories
    for (const supplierName of fabricEntry.suppliers) {
      // Skip if this supplier already has images
      if (fabricEntry.url_pictures[supplierName] && fabricEntry.url_pictures[supplierName].length > 0) {
        continue;
      }

      const supplierCode = supplierToDirCode(supplierName);

      let foundImages = false;

      // Try each matching directory
      for (const matchedDir of matchedDirs) {
        const fabricPath = path.join(productPath, matchedDir);

        // Read supplier directories in this fabric directory
        let supplierDirs;
        try {
          supplierDirs = fs.readdirSync(fabricPath, { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name);
        } catch {
          continue;
        }

        // Find matching supplier directory (case-insensitive)
        const matchedSupplierDir = supplierDirs.find(sd => dirMatchesSupplier(sd, supplierCode));

        if (!matchedSupplierDir) continue;

        // Get image files
        const supplierPath = path.join(fabricPath, matchedSupplierDir);
        let imageFiles;
        try {
          imageFiles = fs.readdirSync(supplierPath)
            .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
            .sort();
        } catch {
          continue;
        }

        if (imageFiles.length === 0) continue;

        // Build URLs - use raw directory names, browser will encode spaces automatically
        const baseUrl = `/05catalog/${productDir}/${matchedDir}/${matchedSupplierDir}/`;
        const urls = imageFiles.map(f => baseUrl + f);

        fabricEntry.url_pictures[supplierName] = urls;
        totalMapped += urls.length;
        console.log(`     - ✅ ${supplierName} → ${urls.length} images (${matchedDir}/${matchedSupplierDir})`);
        foundImages = true;
        break; // Found images, stop searching other dirs
      }

      if (!foundImages) {
        console.log(`     - ⚠ No supplier dir for "${supplierName}" → code: "${supplierCode}" (checked dirs: ${matchedDirs.join(", ")})`);
      }
    }
  }
}

// Write updated data.json
fs.writeFileSync(dataJsonPath, JSON.stringify(data, null, 2) + "\n");
console.log(`\n✅ data.json updated with image mappings!`);
console.log(`📊 Total image URLs mapped: ${totalMapped}`);

// Count overall stats
let totalFabricsWithPics = 0;
for (const product of data.product_catalog) {
  for (const fabric of product.fabrics) {
    if (fabric.url_pictures) {
      const entries = Object.entries(fabric.url_pictures).filter(([_, urls]) => urls.length > 0);
      if (entries.length > 0) totalFabricsWithPics++;
    }
  }
}
console.log(`📊 Fabrics with at least one supplier with pictures: ${totalFabricsWithPics}`);