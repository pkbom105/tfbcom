// @ts-nocheck
import OriginalComponent from "@/app/(th-root)/pages/collection/pants/layout";

export default function EnglishWrapper({ children }: { children: any }) {
  return <OriginalComponent lang="en">{children}</OriginalComponent>
}
