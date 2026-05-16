import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { usePageSetup } from "@/hooks/pageSetup"

// Template Components
import { RootTemplateComponents } from "@/components/template/root"
import { FooterOrganismComponents } from "@/components/organism/footer"

export function NotFoundTemplateComponents() {
  const { t } = useTranslation()
  usePageSetup("components.page.notFound.title")

  return (
    <RootTemplateComponents>
      <div className="px-4 h-svh w-full flex flex-col justify-center items-center">
        <div className="flex flex-col md:gap-4 gap-2">
          <p className="md:text-4xl text-2xl">{t("components.page.notFound.title")}</p>
          <p className="md:text-2xl text-lg">{t("components.page.notFound.message")}</p>
          <Link className="border-b border-foreground w-fit md:text-lg text-sm mt-4 hover:text-muted-foreground hover:border-muted-foreground transition-all" to="/">
            {t("components.page.notFound.goHome")}
          </Link>
        </div>
      </div>
      <FooterOrganismComponents />
    </RootTemplateComponents>
  )
}
