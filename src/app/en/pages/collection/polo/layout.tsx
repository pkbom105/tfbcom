// @ts-nocheck
import OriginalComponent from "@/app/(th-root)/pages/collection/polo/layout";

export default function EnglishWrapper({ children }: { children: any }) {
  return <OriginalComponent lang="en">{children}</OriginalComponent>
}
