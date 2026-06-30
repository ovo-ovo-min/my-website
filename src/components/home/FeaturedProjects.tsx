import Image from "next/image"
import { projects } from "@/data/projects"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <AnimatedSection className="py-16 px-5">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">精选项目</h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            查看全部 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((project) => (
            <Card key={project.title} hover className="group overflow-hidden">
              <div className="relative aspect-video bg-bg-secondary overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-text-primary mb-1.5">{project.title}</h3>
                <p className="text-sm text-text-secondary line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
