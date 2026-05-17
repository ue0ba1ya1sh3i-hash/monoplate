import { createFileRoute } from "@tanstack/react-router"
import { usePageSetup } from "@/hooks/pageSetup"
import { HeaderOrganismComponents } from "@/components/organism/header"

export const Route = createFileRoute("/document")({
  component: App
})

function App() {
  usePageSetup("routes.document.title")

  return (
    <>
      <HeaderOrganismComponents />
    </>
  )
}