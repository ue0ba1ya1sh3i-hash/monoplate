import { useDarkMode } from "usehooks-ts"
import { cn } from "@/lib/shadcn/utils"

export function RootTemplateComponents({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={cn(
      "min-h-svh bg-background text-foreground",
      isDarkMode ? "dark" : ""
    )}>
      {children}
    </div>
  )
}
