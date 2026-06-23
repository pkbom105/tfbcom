import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of supported locales
const locales = ["th", "en"];
const defaultLocale = "th";

// Pages that exist in the app (for 404 prevention)
const validPaths = [
  "",
  "/",
  "/pages/aboutus",
  "/pages/catalog",
  "/pages/contact",
  "/pages/customer-review",
  "/pages/faq",
  "/pages/order",
  "/pages/our-customer",
  "/pages/past-collection",
  "/pages/payment",
  "/pages/process",
  "/pages/products1",
  "/pages/quotation",
  "/pages/ready-to-wear",
  "/pages/service",
  "/pages/sizespec",
  "/pages/work-sample",
  "/pages/collection/t-shirt",
  "/pages/collection/polo",
  "/pages/collection/shirt",
  "/pages/collection/mechanic",
  "/pages/collection/workshop",
  "/pages/collection/pants",
  "/pages/collection/arpon",
  "/articles",
  "/articles/a2",
  "/articles/a3",
  "/articles/a4",
  "/articles/Employee-Polo-Shirt-Ordering-Guide",
];

// Static asset extensions that should not be redirected
const staticExtensions = [
  ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".avif",
  ".mp4", ".webm", ".ogg",
  ".css", ".js", ".json", ".xml", ".txt",
  ".ico", ".woff", ".woff2", ".ttf", ".eot",
];

/**
 * Middleware for Toffy Boutique (tfb.co.th)
 * 
 * Handles:
 * 1. Language prefix routing (TH → /, EN → /en)
 * 2. Redirects /en to /en/ homepage
 * 3. Preserves static assets
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets (images, videos, fonts, etc.)
  const ext = pathname.toLowerCase().match(/\.[a-z0-9]+$/)?.[0];
  if (ext && staticExtensions.includes(ext)) {
    return NextResponse.next();
  }

  // Skip API routes, Next.js internal routes
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/draft/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Check if path already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If it's /en exactly, redirect to /en/ for consistency
    if (pathname === "/en") {
      return NextResponse.redirect(new URL("/en/", request.url));
    }
    return NextResponse.next();
  }

  // Handle root path - use default locale (TH)
  if (pathname === "/" || pathname === "") {
    return NextResponse.next();
  }

  // All other paths - pass through as TH locale
  return NextResponse.next();
}

/**
 * Configure which paths the middleware runs on
 */
export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};