import Link from "next/link"

import { siteConfig } from "@/config/site-config"
import BoxsLogo from "@/components/global/misc/boxs-logo"

export const SiteBrand = () => {
  return (
    <Link href={siteConfig.url}>
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded bg-foreground">
          <BoxsLogo className="h-4 w-5" />
        </div>
        <span className="text-2xl font-bold">{siteConfig.name}</span>
      </div>
    </Link>
  )
}
