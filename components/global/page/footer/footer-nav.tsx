import Link from "next/link"

import { FooterMoreLinks, FooterNavLinks } from "@/config/site-config"

export const FooterNav = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-xl font-bold text-muted-foreground">Global</h1>
      <ul className="space-y-1">
        {FooterNavLinks.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="hover:text-spotify text-sm font-semibold"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const FooterNavMore = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-xl font-bold text-muted-foreground">More Links</h1>
      <ul className="space-y-1">
        {FooterMoreLinks.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="hover:text-spotify text-sm font-semibold"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
