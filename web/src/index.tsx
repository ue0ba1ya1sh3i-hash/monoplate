// React
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// Tanstack Router
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "@/routeTree.gen"

// Original
import { NotFoundTemplateComponents } from "@/components/template/notFound"
import "@/index.css"
import "@/i18next"

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundTemplateComponents
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
