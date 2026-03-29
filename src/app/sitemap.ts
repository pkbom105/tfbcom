import { MetadataRoute } from 'next';
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tfb.co.th';
  const lastModified = new Date();

  const pages = [
    '',
    '/pages/aboutus',
    '/pages/contact',
    '/pages/customer-review',
    '/pages/fabric',
    '/pages/faq',
    '/pages/order',
    '/pages/payment',
    '/pages/past-collection',
    '/pages/process',
    '/pages/ready-to-wear',
    '/pages/service',
    '/pages/sizespec',
    '/pages/work-sample',
    '/pages/quotation',
    '/pages/collection/t-shirt',
    '/pages/collection/polo',
    '/pages/collection/shirt',
    '/pages/collection/mechanic',
    '/pages/collection/workshop',
    '/pages/collection/pants',
    '/pages/collection/arpon',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
