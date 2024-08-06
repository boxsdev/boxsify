"use client"

import { cn } from "@/lib/utils"
import { useScrollTop } from "@/hooks/scroll-hook"
import { SiteBrand } from "@/components/global/misc/site-brand"

export const SiteHeader = () => {
  const scrolled = useScrollTop(100)

  return (
    <header
      className={cn(
        "fixed top-0 w-full transition-all duration-300 ease-in-out",
        scrolled &&
          "z-[999px] border-b border-border bg-background/50 backdrop-blur"
      )}
    >
      <div className="container flex h-16 max-w-2xl items-center sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="flex flex-1 items-center justify-between">
          <SiteBrand />
        </div>
      </div>
    </header>
  )
}
