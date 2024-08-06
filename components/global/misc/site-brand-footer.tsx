import Link from "next/link"

import { siteConfig } from "@/config/site-config"
import BoxsLogo from "@/components/global/misc/boxs-logo"

export const SiteBrandFooter = () => {
  return (
    <div className="flex">
      <Link href={siteConfig.url} className="flex items-center gap-1">
        <BoxsLogo className="h-5 w-6 fill-current" />
        <span className="text-xl font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
