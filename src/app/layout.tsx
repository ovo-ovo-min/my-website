import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Providers } from "@/providers"
import { PageTransition } from "@/components/ui/PageTransition"
import { siteConfig } from "@/data/site"

const siteName = siteConfig.name

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description: "全栈开发者的个人主页，分享技术、设计与思考。",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary antialiased">
        <Providers>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
