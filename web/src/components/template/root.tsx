import { useDarkMode } from "usehooks-ts"
import { cn } from "@/lib/shadcn/utils"
import { TopButtonAtomComponents } from "@/components/atom/topButton"
import { FooterOrganismComponents } from "@/components/organism/footer"

export function RootTemplateComponents({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={cn(
      "min-h-svh bg-background text-foreground",
      isDarkMode ? "dark" : ""
    )}>
      {children}
      <TopButtonAtomComponents />
      <FooterOrganismComponents />
    </div>
  )
}
