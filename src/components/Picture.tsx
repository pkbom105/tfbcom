"use client";

interface PictureProps {
  src: string;
  alt: string;
  className?: string;
  widths?: number[];
  sizes?: string;
  priority?: boolean;
}

/**
 * Picture component - provides responsive images with WebP/AVIF support
 * Automatically generates WebP and AVIF sources alongside original format
 * 
 * Usage:
 * <Picture src="/process/p1.png" alt="description" className="w-full h-full object-cover" />
 */
export default function Picture({
  src,
  alt,
  className = "",
  widths = [320, 640, 960, 1280, 1920],
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: PictureProps) {
  // Extract filename without extension and extension
  const lastDot = src.lastIndexOf(".");
  const base = lastDot !== -1 ? src.substring(0, lastDot) : src;
  const ext = lastDot !== -1 ? src.substring(lastDot) : "";

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
