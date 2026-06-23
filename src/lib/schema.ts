/**
 * Schema Markup Utility for Toffy Boutique
 * Generates JSON-LD structured data for all pages
 */

const BASE_URL = "https://tfb.co.th";
const COMPANY_NAME = "บริษัท ทอฟฟี่ บูติก จำกัด";
const COMPANY_NAME_EN = "Toffy Boutique Co., Ltd.";
const ADDRESS_TH = "258 ถนน พุทธบูชา แขวง บางมด เขตจอมทอง กรุงเทพฯ 10150";
const ADDRESS_EN = "258 Putthabucha Road Bangmod Jomthong Bangkok 10150";
const PHONE = "+6624282591";
const EMAIL = "sales@toffyboutique.com";

export interface SchemaContext {
  lang: "th" | "en";
  path: string;
}

function t(th: string, en: string, lang?: string) {
  return lang === "en" ? en : th;
}

/**
 * Organization schema (used on all pages as the main entity)
 */
export function organizationSchema(lang: "th" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: lang === "th" ? COMPANY_NAME : COMPANY_NAME_EN,
    alternateName: "Toffy Boutique",
    url: BASE_URL,
    logo: `${BASE_URL}/picture/toffyboutique-logo.png`,
    description: t(
      "รับผลิตเสื้อโปโลพนักงาน ยูนิฟอร์มพนักงาน ชุดฟอร์มพนักงาน ครบวงจร",
      "Manufacturer of polo shirts, employee uniforms, and corporate uniforms",
      lang
    ),
    address: {
      "@type": "PostalAddress",
      streetAddress: t("258 ถนน พุทธบูชา แขวง บางมด", "258 Putthabucha Road Bangmod"),
      addressLocality: t("เขตจอมทอง", "Jomthong"),
      addressRegion: t("กรุงเทพฯ", "Bangkok"),
      postalCode: "10150",
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "sales",
      email: EMAIL,
      availableLanguage: ["Thai", "English"],
    },
    sameAs: [
      "https://www.facebook.com/toffyboutique",
      "https://line.me/R/ti/p/@toffyboutique",
    ],
  };
}

/**
 * WebSite schema (for homepage)
 */
export function websiteSchema(lang: "th" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: lang === "th" ? "ToffyBoutique - รับผลิตเสื้อโปโล ยูนิฟอร์มพนักงาน" : "ToffyBoutique - Polo Shirt & Uniform Manufacturer",
    url: BASE_URL,
    description: t(
      "บริษัท ทอฟฟี่ บูติก จำกัด รับผลิตเสื้อโปโลพนักงาน ยูนิฟอร์มพนักงาน ชุดฟอร์มพนักงานโรงงาน คุณภาพสูง",
      "Toffy Boutique Co., Ltd. - Manufacturer of polo shirts, employee uniforms, and corporate uniforms",
      lang
    ),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * LocalBusiness schema (for contact page)
 */
export function localBusinessSchema(lang: "th" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: lang === "th" ? COMPANY_NAME : COMPANY_NAME_EN,
    image: `${BASE_URL}/picture/toffyboutique-logo.png`,
    url: BASE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: t("258 ถนน พุทธบูชา แขวง บางมด", "258 Putthabucha Road Bangmod"),
      addressLocality: t("เขตจอมทอง", "Jomthong"),
      addressRegion: t("กรุงเทพฯ", "Bangkok"),
      postalCode: "10150",
      addressCountry: "TH",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    areaServed: "TH",
    foundingDate: "1990",
    founder: {
      "@type": "Person",
      name: "Toffy Boutique",
    },
  };
}

/**
 * Product schema (for collection pages)
 */
export function productCollectionSchema(
  name: string,
  description: string,
  url: string,
  lang: "th" | "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${BASE_URL}${url}`,
    brand: {
      "@type": "Brand",
      name: "Toffy Boutique",
    },
    manufacturer: {
      "@type": "Organization",
      name: lang === "th" ? COMPANY_NAME : COMPANY_NAME_EN,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "THB",
      },
    },
  };
}

/**
 * FAQPage schema (for FAQ page)
 */
export function faqPageSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema (for all pages)
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Article schema (for article pages)
 */
export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  lang: "th" | "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: lang === "th" ? COMPANY_NAME : COMPANY_NAME_EN,
    },
    publisher: {
      "@type": "Organization",
      name: lang === "th" ? COMPANY_NAME : COMPANY_NAME_EN,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/picture/toffyboutique-logo.png`,
      },
    },
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${url}`,
    },
  };
}

/**
 * ImageGallery schema (for photo/catalog pages)
 */
export function imageGallerySchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    description,
    url: `${BASE_URL}${url}`,
  };
}

/**
 * Service schema (for service page)
 */
export function serviceSchema(
  name: string,
  description: string,
  url: string,
  lang: "th" | "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: lang === "th" ? COMPANY_NAME : COMPANY_NAME_EN,
    },
    areaServed: "TH",
  };
}

/**
 * HowTo schema (for process page)
 */
export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Combine multiple schemas into a single array for Script tag
 */
export function combineSchemas(...schemas: any[]) {
  return schemas;
}