import { ContactInfo } from "@/components/contact/ContactInfo"
import { ContactForm } from "@/components/contact/ContactForm"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "联系" }

export default function ContactPage() {
  return (
    <AnimatedSection className="pt-24 pb-16 px-5">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  )
}
