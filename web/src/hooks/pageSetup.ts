import { env } from "@/lib/env"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

export function usePageSetup(titleTranslationKey: string): void {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = `${t(titleTranslationKey)} - ${env.APP_NAME}`
  }, [t, titleTranslationKey])
}
