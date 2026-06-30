import { siteConfig } from "@/data/site"
import { Mail, MapPin, GitBranch } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-text-primary">联系我</h2>
      <p className="text-text-secondary">
        如果你有任何问题、合作意向，或者只是想打个招呼，欢迎随时联系我！
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-text-secondary">
          <Mail className="h-4 w-4 text-accent" />
          <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-accent transition-colors">
            {siteConfig.email}
          </a>
        </div>
        <div className="flex items-center gap-3 text-text-secondary">
          <MapPin className="h-4 w-4 text-accent" />
          <span className="text-sm">{siteConfig.location}</span>
        </div>
      </div>

      <div className="flex gap-3">
        {siteConfig.social.github && (
          <Link href={siteConfig.social.github} target="_blank" rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
            <GitBranch className="h-4 w-4" />
          </Link>
        )}
        
      </div>
    </div>
  )
}
