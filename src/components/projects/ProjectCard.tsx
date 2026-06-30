import Image from "next/image"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ExternalLink, GitBranch } from "lucide-react"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="group flex flex-col overflow-hidden">
      <div className="relative aspect-video bg-bg-secondary overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-text-primary mb-1.5">{project.title}</h3>
        <p className="text-sm text-text-secondary line-clamp-3 mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm">
                <ExternalLink className="h-3.5 w-3.5 mr-1" />
                在线演示
              </Button>
            </a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <GitBranch className="h-3.5 w-3.5 mr-1" />
                源代码
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
