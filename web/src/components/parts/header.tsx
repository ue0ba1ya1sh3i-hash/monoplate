import { cn } from "@/lib/shadcn/utils"
import { Link } from "@tanstack/react-router"

export function HeaderPartsComponents({ fixed, flashy }: { fixed?: boolean, flashy?: boolean }) {
  return (
    <div className={cn(
      "w-full",
      flashy && "py-4 px-6",
      fixed ? "fixed" : "sticky"
    )}>
      <header className={cn(
        "w-full px-4 py-2 flex gap-4 items-center text-muted-foreground",
        flashy ? "rounded-full bg-muted border" : "bg-background border-b"
      )}>
        <Link to="/" className="flex items-center gap-2">
          <img src="/icon.svg" alt="Logo" className="size-10" />
          <p className="text-2xl">Monoplate</p>
        </Link>

        <div className="flex items-center gap-4 ml-auto text-xl">
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </div>
      </header>
    </div>
  )
}
