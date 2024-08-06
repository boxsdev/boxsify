export const siteConfig = {
  name: "boxsify",
  subTitle: "Your Personalized Music Dashboard",
  slogan: "Discover Your Music Univers",
  description:
    "Explore your music habits effortlessly. See your top artists and tracks in a clean, easy-to-use interface.",
  spotifyMark:
    "Music data, artist images, album covers, and song previews are provided by Spotify. Spotify is a trademark of Spotify AB.",
  url: "/",
  author: "mrboxs",
  favicons: {
    light: "/svg/favicon-light.svg",
    dark: "/svg/favicon-dark.svg",
  },
  links: {
    github: "https://github.com/mrboxs",
    twitter: "https://twitter.com/isntboxs",
  },
}

export const FooterNavLinks = [
  {
    title: "Most Followed Artists",
    href: "/",
  },
  {
    title: "Most Popular Artists",
    href: "/",
  },
  {
    title: "Most Popular Tracks",
    href: "/",
  },
  {
    title: "Most Popular Albums",
    href: "/",
  },
]

export const FooterMoreLinks = [
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
  {
    title: "Terms of Service",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
  {
    title: "Permissions",
    href: "/",
  },
]

export type SiteConfig = typeof siteConfig

export type FooterNavLinks = typeof FooterNavLinks

export type FooterMoreLinks = typeof FooterMoreLinks
