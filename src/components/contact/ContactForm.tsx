"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Partial<FormData>>({})

  function validate(): boolean {
    const errs: Partial<FormData> = {}
    if (!form.name.trim()) errs.name = "请输入姓名"
    if (!form.email.trim()) errs.email = "请输入邮箱"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "邮箱格式不正确"
    if (!form.subject.trim()) errs.subject = "请输入主题"
    if (!form.message.trim()) errs.message = "请输入消息"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-bg-primary p-8 text-center">
        <CheckCircle className="h-10 w-10 text-accent mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-text-primary mb-1">消息已发送</h3>
        <p className="text-sm text-text-secondary mb-4">感谢你的来信，我会尽快回复！</p>
        <Button variant="outline" onClick={() => setStatus("idle")}>再发一条</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            id="name"
            label="姓名"
            placeholder="你的名字"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <Input
            id="email"
            label="邮箱"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>
      <Input
        id="subject"
        label="主题"
        placeholder="主题"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />
      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
      <div>
        <Textarea
          id="message"
          label="消息"
          placeholder="写下你想说的..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle className="h-4 w-4" />
          发送失败，请稍后再试
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            发送中...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            发送消息
          </span>
        )}
      </Button>
    </form>
  )
}
