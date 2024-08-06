import { FaSpotify } from "react-icons/fa"

import { Button } from "@/components/ui/button"

export const WithSocials = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button variant="outline" size="lg" className="w-full" onClick={() => {}}>
        <FaSpotify className="h-5 w-5" />
        <span className="ml-2 text-base font-semibold">Spotify</span>
      </Button>
    </div>
  )
}
