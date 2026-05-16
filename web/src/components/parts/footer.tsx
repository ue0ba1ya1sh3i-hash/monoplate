import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/shadcn/utils"

// Icons
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"

export function FooterPartsComponents() {
  const shineClassName = "text-muted-foreground transition-all hover:text-foreground"

  return (
    <footer className="flex bg-background w-full px-4 py-6 border-t gap-4 items-center">
      <Link className={cn("text-xl", shineClassName)} to="/">
        Monoplate
      </Link>

      <div className="flex items-center gap-4 ml-auto">
        <a href="https://github.com/ue0ba1ya1sh3i-hash/monoplate" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub className={cn("size-7", shineClassName)} />
        </a>

        <a href="https://twitter.com/ue0ba1ya1sh3i" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className={cn("size-7", shineClassName)} />
        </a>

        <a href="https://instagram.com/ue0ba1ya1sh3i" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={cn("size-7", shineClassName)} />
        </a>
      </div>
    </footer>
  )
}
