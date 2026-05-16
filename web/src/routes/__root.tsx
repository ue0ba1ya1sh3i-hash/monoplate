import { Outlet, createRootRoute } from "@tanstack/react-router"
import { RootTemplateComponents } from "@/components/template/root"

export const Route = createRootRoute({
  component: App
})

function App() {
  return (
    <RootTemplateComponents>
      <Outlet />
    </RootTemplateComponents>
  )
}
