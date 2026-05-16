import { Link } from "@tanstack/react-router"

import { RootPageComponents } from "@/components/page/root"
import { FooterPartsComponents } from "@/components/parts/footer"

export function NotFoundPageComponents() {
  return (
    <RootPageComponents>
      <div className="px-4 h-svh w-full flex flex-col justify-center items-center">
        <div className="flex flex-col md:gap-4 gap-2">
          <p className="md:text-4xl text-2xl">404 | Page Not Found</p>
          <p className="md:text-2xl text-lg">Sorry. We couldn't find the page you are looking for.</p>
          <Link className="border-b border-foreground w-fit md:text-lg text-sm mt-4 hover:text-muted-foreground hover:border-muted-foreground transition-all" to="/">Go home</Link>
        </div>
      </div>
      <FooterPartsComponents />
    </RootPageComponents>
  )
}
