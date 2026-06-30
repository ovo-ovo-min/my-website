import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { Code2, Palette, Server, Database, Globe, Smartphone } from "lucide-react"

const skills = [
  { name: "React / Next.js", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "REST / GraphQL", icon: Globe },
  { name: "React Native", icon: Smartphone },
  { name: "Docker", icon: Server },
]

export function Skills() {
  return (
    <AnimatedSection className="py-16 px-5">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-text-primary mb-6">技能</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 rounded-xl border border-border bg-bg-primary p-4 transition-all duration-200 hover:bg-overlay"
            >
              <skill.icon className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-sm text-text-primary">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
