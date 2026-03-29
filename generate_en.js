const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app', '(th-root)');
const rootAppDir = path.join(__dirname, 'src', 'app');
const enAppDir = path.join(rootAppDir, 'en');

// Get all files recursively
function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
}

const allFiles = getFiles(srcAppDir);

allFiles.forEach(file => {
  if (file.includes('/[lang]/') || file.includes('/en/') || file.includes('\\[lang]\\') || file.includes('\\en\\')) return;
  
  const isPage = file.endsWith('page.tsx');
  const isLayout = file.endsWith('layout.tsx');
  
  if (!isPage && !isLayout) return;

  const relPath = path.relative(srcAppDir, file);
  // e.g. "pages/collection/polo/page.tsx" or "page.tsx" or "layout.tsx"

  let importPath = '@/app/(th-root)/' + relPath.replace(/\\/g, '/').replace(/\.tsx$/, '');

  const enFilePath = path.join(enAppDir, relPath);
  const enFileDir = path.dirname(enFilePath);

  if (!fs.existsSync(enFileDir)) {
    fs.mkdirSync(enFileDir, { recursive: true });
  }

  let content = '';
  
  if (isPage) {
    content = `// @ts-nocheck
import OriginalComponent from "${importPath}";

export default function EnglishWrapper() {
  return <OriginalComponent lang="en" />
}
`;
  } else if (isLayout) {
    content = `// @ts-nocheck
import OriginalComponent from "${importPath}";

export default function EnglishWrapper({ children }: { children: any }) {
  return <OriginalComponent lang="en">{children}</OriginalComponent>
}
`;
  }

  fs.writeFileSync(enFilePath, content);
  console.log(`Generated: ${enFilePath}`);
});

console.log('✅ English wrappers generated successfully.');
