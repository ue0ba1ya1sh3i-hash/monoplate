import { cn } from "@/lib/shadcn/utils"

export function IconAtomComponents({ className, ...props }: { className?: string }) {
  return (
    <img src="/icon.svg" alt="Logo" className={cn("size-10", className)} {...props} />
  )
}
