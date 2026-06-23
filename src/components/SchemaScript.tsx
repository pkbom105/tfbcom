"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

interface SchemaScriptProps {
  schemas: any[];
}

/**
 * SchemaScript component - renders JSON-LD structured data
 * Used to add schema markup to any page
 */
export default function SchemaScript({ schemas }: SchemaScriptProps) {
  const pathname = usePathname();

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}