import { NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hello@example.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "请填写所有必填字段" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, message: "邮箱格式不正确" }, { status: 400 })
    }

    if (RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(RESEND_API_KEY)
      await resend.emails.send({
        from: `联系表单 <onboarding@resend.dev>`,
        to: CONTACT_EMAIL,
        subject: `[个人主页] ${subject}`,
        html: `<p><strong>姓名：</strong>${name}</p><p><strong>邮箱：</strong>${email}</p><p><strong>消息：</strong><br/>${message}</p>`,
      })
    } else {
      console.log("Contact form submission (no RESEND_API_KEY):", { name, email, subject, message })
    }

    return NextResponse.json({
      success: true,
      message: "消息已发送成功！",
    })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json({ success: false, message: "发送失败，请稍后再试" }, { status: 500 })
  }
}
