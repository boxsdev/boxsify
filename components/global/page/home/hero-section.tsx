import { Button } from "@/components/ui/button"

import { LoginButton } from "../auth/login-button"

const HeroSection = () => {
  return (
    <div className="h-[968px] w-full bg-foreground/5">
      <div className="container flex h-full max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="flex w-full items-center justify-center">
          <LoginButton mode="redirect">
            <Button
              variant="spotify"
              size="lg"
              className="rounded-full text-base"
            >
              Get Started
            </Button>
          </LoginButton>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
