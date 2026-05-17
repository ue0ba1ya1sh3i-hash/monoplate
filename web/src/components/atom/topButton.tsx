import { useState } from "react"
import { useEventListener } from "usehooks-ts"
import { ArrowBigUp } from "lucide-react"

export function TopButtonAtomComponents() {
  const [scrollY, setScrollY] = useState(0);

  useEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isShow = scrollY > 100

  if (!isShow) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 rounded-full bg-muted p-2 text-muted-foreground animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-200 ease-out"
    >
      <ArrowBigUp className="size-6" />
    </button>
  )
}
