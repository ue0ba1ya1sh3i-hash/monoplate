import { createFileRoute } from "@tanstack/react-router"

// Parts
import { HeaderPartsComponents } from "@/components/parts/header"
import { FooterPartsComponents } from "@/components/parts/footer"

export const Route = createFileRoute("/")({
  component: App
})

function App() {
  return (
    <>
      <HeaderPartsComponents fixed flashy />

      <div className="min-h-svh w-full">

      </div>

      <FooterPartsComponents />
    </>
  )
}