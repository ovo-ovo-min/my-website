import Image from "next/image"
import { siteConfig } from "@/data/site"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { Button } from "@/components/ui/Button"
import { Download } from "lucide-react"

export function Profile() {
  return (
    <AnimatedSection className="py-16 px-5">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="h-32 w-32 rounded-full flex-shrink-0 overflow-hidden">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-2">{siteConfig.name}</h1>
            <p className="text-text-secondary mb-1">{siteConfig.subtitle}</p>
            <p className="text-sm text-text-tertiary mb-4">{siteConfig.location}</p>
            <p className="text-text-secondary max-w-xl mb-6 leading-relaxed">
              热爱技术和创造，热衷于构建优雅、高性能的 Web 应用。
              拥有丰富的全栈开发经验，擅长 React、TypeScript、Node.js 等技术栈。
              关注用户体验、代码质量和工程效率，追求简洁而强大的解决方案。
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button variant="outline" size="sm">
                <Download className="h-3.5 w-3.5 mr-1.5" />
                下载简历
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
