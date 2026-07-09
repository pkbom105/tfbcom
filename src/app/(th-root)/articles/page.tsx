import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { Calendar, Clock, ArrowRight, Image as ImageIcon } from 'lucide-react';

async function getArticlesData() {
  const articlesDirectory = path.join(process.cwd(), 'src', 'app', 'articles');
  if (!fs.existsSync(articlesDirectory)) return [];

  const folders = fs.readdirSync(articlesDirectory);

  const articles = folders
    .filter((folder) => {
      const folderPath = path.join(articlesDirectory, folder);
      return fs.statSync(folderPath).isDirectory() && !folder.startsWith('[') && !folder.startsWith('_');
    })
    .map((folder) => {
      const filePath = path.join(articlesDirectory, folder, 'page.tsx');
      
      // ค่าเริ่มต้น (Default) กรณีหาข้อมูลในไฟล์ไม่เจอ
      const meta = {
        title: folder.replace(/-/g, ' '),
        description: "อ่านรายละเอียดบทความสาระน่ารู้จาก Toffy Boutique",
        thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
        date: "23 ก.พ. 2026",
        readTime: "5 นาที"
      };

      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // 1. ดึง Title จาก articleMeta
        const titleMatch = content.match(/title:\s*["'](.*?)["']/);
        if (titleMatch) meta.title = titleMatch[1];

        // 2. ดึง Description จาก generateMetadata
        const descMatch = content.match(/description:\s*["'](.*?)["']/);
        if (descMatch) meta.description = descMatch[1];

        // 3. ดึง Image จาก openGraph: { images: [articleMeta.thumbnail] }
        // หรือดึงตรงๆ จาก articleMeta.thumbnail
        const thumbMatch = content.match(/thumbnail:\s*["'](.*?)["']/);
        if (thumbMatch) meta.thumbnail = thumbMatch[1];

        // 4. ดึง Date และ ReadTime
        const dateMatch = content.match(/date:\s*["'](.*?)["']/);
        const readMatch = content.match(/readTime:\s*["'](.*?)["']/);
        if (dateMatch) meta.date = dateMatch[1];
        if (readMatch) meta.readTime = readMatch[1];
      }

      return {
        slug: folder,
        ...meta
      };
    });

  return articles;
}

export default async function ArticleIndexPage() {
  const articles = await getArticlesData();

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            บทความและ <span className="text-red-600">สาระน่ารู้</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            รวมเทคนิคจากผู้เชี่ยวชาญ Toffy Boutique เพื่อการเลือกยูนิฟอร์มที่ตอบโจทย์องค์กรคุณมากที่สุด
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
              <article className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-slate-100 transform hover:-translate-y-2">
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.thumbnail} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-red-600 mb-4 tracking-widest uppercase">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {article.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-sm font-black text-slate-900 flex items-center gap-2">
                      READ MORE <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}