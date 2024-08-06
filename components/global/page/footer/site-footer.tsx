import { siteConfig } from "@/config/site-config"
import { SiteBrandFooter } from "@/components/global/misc/site-brand-footer"
import {
  FooterNav,
  FooterNavMore,
} from "@/components/global/page/footer/footer-nav"

export const SiteFooter = () => {
  return (
    <footer className="container flex max-w-2xl justify-center sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
      <div className="flex w-full flex-col py-8">
        <div className="space-y-12 xl:grid xl:grid-cols-2 xl:gap-8 xl:space-y-0">
          <div className="md:w-1/2">
            <div className="w-full space-y-6">
              <div className="space-y-3">
                <SiteBrandFooter />
                <p className="text-sm font-semibold">
                  {siteConfig.description}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {siteConfig.spotifyMark}
              </p>
            </div>
          </div>
          <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <FooterNav />
            <FooterNavMore />
          </div>
        </div>
        <hr className="my-8 border-t border-dashed border-border" />
        <div className="flex items-center justify-center text-xs">
          <p className="text-sm text-muted-foreground">
            made with 💀 © {new Date().getFullYear()} {siteConfig.name} by{" "}
            <span className="decoration-spotify text-xs font-medium text-foreground underline decoration-2 underline-offset-4">
              {siteConfig.author}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
