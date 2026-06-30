import { Profile } from "@/components/about/Profile"
import { Skills } from "@/components/about/Skills"
import { Timeline } from "@/components/about/Timeline"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "关于" }

export default function AboutPage() {
  return (
    <>
      <Profile />
      <Skills />
      <Timeline />
    </>
  )
}
