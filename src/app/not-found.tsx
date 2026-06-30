import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5">
      <h1 className="text-6xl sm:text-8xl font-bold text-text-primary tracking-tight">404</h1>
      <p className="mt-4 text-lg text-text-secondary">页面未找到</p>
      <p className="mt-2 text-sm text-text-tertiary mb-8">你访问的页面不存在或已被移除</p>
      <Link href="/">
        <Button variant="primary" size="lg">
          <Home className="h-4 w-4 mr-1.5" />
          返回首页
        </Button>
      </Link>
    </div>
  )
}
