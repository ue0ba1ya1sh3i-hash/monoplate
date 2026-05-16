// React
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// Tanstack Router
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "@/routeTree.gen"

// Original
import { NotFoundPageComponents } from "@/components/page/notFound"
import "./index.css"

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPageComponents
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
