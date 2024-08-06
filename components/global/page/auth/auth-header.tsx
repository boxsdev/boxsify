import { siteConfig } from "@/config/site-config"

import BoxsLogo from "../../misc/boxs-logo"

interface AuthHeaderProps {
  label: string
}

export const AuthHeader = ({ label }: AuthHeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-y-2 text-center">
      <h1 className="text-3xl font-bold">
        <BoxsLogo className="inline-block w-7 fill-current" />
        <span className="ml-2">{siteConfig.name}</span>
      </h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}
