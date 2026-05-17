import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/shadcn/utils"
import { env } from "@/lib/env"

// Icons
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"

export function FooterOrganismComponents() {
  const shineClassName = "text-muted-foreground transition-all hover:text-foreground"

  return (
    <footer className="flex bg-background w-full px-4 py-6 border-t gap-4 items-center">
      <Link className="text-xl text-muted-foreground" to="/">
        {env.APP_NAME}
      </Link>

      <div className="flex items-center gap-4 ml-auto">
        <a href={env.GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <IoLogoGithub className={cn("size-7", shineClassName)} />
        </a>

        <a href={env.X_URL} target="_blank" rel="noopener noreferrer">
          <FaXTwitter className={cn("size-7", shineClassName)} />
        </a>

        <a href={env.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <FaInstagram className={cn("size-7", shineClassName)} />
        </a>
      </div>
    </footer>
  )
}
