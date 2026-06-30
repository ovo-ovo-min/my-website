import Link from "next/link"
import { siteConfig } from "@/data/site"
import { GitBranch, Link as LinkIcon } from "lucide-react"

const socialIcons = {
  github: GitBranch,
  twitter: LinkIcon,
  linkedin: LinkIcon,
}

export function Footer() {
  const { social } = siteConfig
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-5xl px-5 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-tertiary">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {Object.entries(social).map(([key, url]) => {
              if (!url) return null
              const Icon = socialIcons[key as keyof typeof socialIcons]
              if (!Icon) return null
              return (
                <Link
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-text-primary transition-colors"
                  aria-label={key}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
