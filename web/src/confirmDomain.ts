import { env } from "@/lib/env"

if (!env.DEV && env.DEPLOY_URL != window.location.origin) {
  location.href = env.DEPLOY_URL
}
