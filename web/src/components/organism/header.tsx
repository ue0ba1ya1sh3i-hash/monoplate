import { cn } from "@/lib/shadcn/utils"
import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { IconAtomComponents } from "@/components/atom/icon"

export function HeaderOrganismComponents({ fixed, flashy }: { fixed?: boolean, flashy?: boolean }) {
  const { t } = useTranslation()

  return (
    <div className={cn(
      "w-full",
      flashy && "pt-4 px-6",
      fixed ? "fixed" : "sticky"
    )}>
      <header className={cn(
        "w-full px-4 flex gap-4 items-center text-muted-foreground",
        flashy ? "py-1 rounded-lg bg-muted/50 border" : "py-4 bg-background border-b"
      )}>
        <Link to="/" className="flex items-center gap-2">
          <IconAtomComponents className="size-10" />
          <p className="sm:text-2xl text-lg">Monoplate</p>
        </Link>

        <div className="hidden sm:flex items-center gap-4 ml-auto text-xl">
          <Link className="hover:text-foreground transition-all" to="/">{t("components.parts.header.link.home")}</Link>
          <Link className="hover:text-foreground transition-all" to="/document">{t("routes.document.title")}</Link>
        </div>
      </header>
    </div>
  )
}
