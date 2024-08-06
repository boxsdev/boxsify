"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { AuthHeader } from "@/components/global/page/auth/auth-header"
import { BackButton } from "@/components/global/page/auth/back-button-auth"
import { WithSocials } from "@/components/global/page/auth/with-socials"

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocials?: boolean
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocials = true,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] bg-transparent backdrop-blur-sm supports-[backdrop-filter]:bg-transparent">
      <CardHeader>
        <AuthHeader label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <WithSocials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  )
}
