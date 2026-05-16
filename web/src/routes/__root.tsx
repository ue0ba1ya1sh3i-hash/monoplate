import { Outlet, createRootRoute } from "@tanstack/react-router"
import { RootPageComponents } from "@/components/page/root"

export const Route = createRootRoute({
  component: App
})

function App() {
  return (
    <RootPageComponents>
      <Outlet />
    </RootPageComponents>
  )
}
