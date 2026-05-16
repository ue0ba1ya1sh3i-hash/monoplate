import { createFileRoute } from "@tanstack/react-router"
import { usePageSetup } from "@/hooks/pageSetup"
import { useTranslation } from "react-i18next"
import { Book, LayoutTemplate } from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"
import { TopButtonAtomComponents } from "@/components/atom/topButton"

// Organism Components
import { HeaderOrganismComponents } from "@/components/organism/header"
import { FooterOrganismComponents } from "@/components/organism/footer"
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

      <div className="bg-background bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[4rem_4rem] flex flex-col px-4 min-h-svh justify-center items-center">
        <IconAtomComponents className="mb-2 size-10 sm:size-20 mx-auto" />
        <p className="text-center sm:mb-10 mb-7 text-2xl sm:text-6xl">{t("routes.index.title")}</p>
        <div className="flex items-center mx-auto gap-2">
          <Button size="lg"><LayoutTemplate /> テンプレートを見る</Button>
          <Button variant="outline" size="lg"><Book /> ドキュメント</Button>
        </div>
      </div>

      <TopButtonAtomComponents />
      <FooterOrganismComponents />
    </>
  )
}