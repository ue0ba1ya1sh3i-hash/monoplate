import { createFileRoute, Link } from "@tanstack/react-router"
import { usePageSetup } from "@/hooks/pageSetup"
import { useTranslation } from "react-i18next"
import { Book, LayoutTemplate } from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"

// Organism Components
import { HeaderOrganismComponents } from "@/components/organism/header"
import { IconAtomComponents } from "@/components/atom/icon"

export const Route = createFileRoute("/")({
  component: App
})

function App() {
  const { t } = useTranslation()
  usePageSetup("routes.index.title")

  return (
    <>
      <HeaderOrganismComponents fixed flashy />

      <div className="bg-code flex flex-col px-4 min-h-svh justify-center items-center">
        <IconAtomComponents className="mb-2 size-10 sm:size-20 mx-auto" />
        <p className="text-center sm:mb-10 mb-7 text-2xl sm:text-6xl">{t("routes.index.title")}</p>
        <div className="flex items-center mx-auto gap-2">
          <Link to="/">
            <Button size="lg"><LayoutTemplate /> {t("routes.index.viewTemplates")}</Button>
          </Link>

          <Link to="/document">
            <Button variant="outline" size="lg"><Book /> {t("routes.document.title")}</Button>
          </Link>
        </div>
      </div>

      <div>

      </div>
    </>
  )
}