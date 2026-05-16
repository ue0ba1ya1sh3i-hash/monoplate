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

  const isShow = scrollY > 1

  if (isShow) {
    return (
      <button onClick={scrollToTop} className="rounded-full text-muted-foreground bg-muted fixed p-2 bottom-2 right-2">
        <ArrowBigUp className="size-6" />
      </button>
    )
  }
}
