import { experiences } from "@/data/experiences"
import { AnimatedSection } from "@/components/ui/AnimatedSection"

export function Timeline() {
  return (
    <AnimatedSection className="py-16 px-5">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-text-primary mb-6">经历</h2>
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute left-[9px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg-primary" />
                <div className="text-xs text-text-tertiary mb-0.5">
                  {exp.startDate} — {exp.endDate || "至今"}
                </div>
                <h3 className="font-semibold text-text-primary">{exp.title}</h3>
                <p className="text-sm text-text-secondary mb-1">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-sm text-text-tertiary">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
