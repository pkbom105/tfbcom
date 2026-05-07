"use client";

import React, { Suspense } from "react";
import SizeSpecContent from "./SizeSpecContent";

export default function SizeSpecPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SizeSpecContent />
    </Suspense>
  );
}
