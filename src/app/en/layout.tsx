// @ts-nocheck
import OriginalComponent from "@/app/(th-root)/layout";

export default function EnglishWrapper({ children }: { children: any }) {
  return <OriginalComponent lang="en">{children}</OriginalComponent>
}
