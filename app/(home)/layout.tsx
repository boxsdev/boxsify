import { SiteFooter } from "@/components/global/page/footer/site-footer"
import { SiteHeader } from "@/components/global/page/header/site-header"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
