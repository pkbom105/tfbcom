const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const catalogDir = path.join(__dirname, "public", "05catalog");
const dataJsonPath = path.join(__dirname, "public", "json", "data.json");
const codeJsonPath = path.join(__dirname, "public", "json", "code.json");

let timeout = null;
const DEBOUNCE_MS = 500;

console.log("👀 Watching 05catalog for changes...");

// Get initial mtimes
const mtimes = {};

function scanFiles(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanFiles(fullPath);
      } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
        const stat = fs.statSync(fullPath);
        mtimes[fullPath] = stat.mtimeMs;
      }
    }
  } catch {}
}

scanFiles(catalogDir);

function regenerate() {
  console.log("📸 Change detected, regenerating JSON...");
  const child = spawn("npx", ["tsx", "src/lib/catalog-data.ts"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
  });
  child.on("close", (code) => {
    if (code === 0) {
      console.log("✅ JSON regenerated successfully");
    } else {
      console.error("❌ JSON regeneration failed");
    }
  });
}

fs.watch(catalogDir, { recursive: true }, (eventType, filename) => {
  if (!filename) return;
  const ext = path.extname(filename).toLowerCase();
  if (!/\.(jpg|jpeg|png)$/.test(ext) && !filename.includes("/") && !filename.includes("\\")) return;

  const fullPath = path.join(catalogDir, filename);
  try {
    if (fs.existsSync(fullPath)) {
      const stat = fs.statSync(fullPath);
      if (stat.isFile() && stat.mtimeMs !== mtimes[fullPath]) {
        mtimes[fullPath] = stat.mtimeMs;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(regenerate, DEBOUNCE_MS);
      }
    } else {
      // File deleted - regenerate
      delete mtimes[fullPath];
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(regenerate, DEBOUNCE_MS);
    }
  } catch {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(regenerate, DEBOUNCE_MS);
  }
});

console.log("💡 Run this alongside your dev server: npm run dev");
console.log("   Or: node watch-catalog.js & next dev");