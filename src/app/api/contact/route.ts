import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactPayload = {
  company?: unknown
  name?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
}

function readText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  const company = readText(payload.company)
  const name = readText(payload.name)
  const email = readText(payload.email)
  const phone = readText(payload.phone)
  const message = readText(payload.message)

  if (!company || !name || !email || !phone || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? user

  if (!host || !user || !pass || !to || !from) {
    return NextResponse.json({ error: 'Mail server is not configured' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: `Web問い合わせ: ${company} ${name}`,
    text: [
      'Webサイトからお問い合わせがありました。',
      '',
      `会社名: ${company}`,
      `担当者名: ${name}`,
      `メール: ${email}`,
      `電話番号: ${phone}`,
      '',
      'お問い合わせ内容:',
      message,
    ].join('\n'),
  })

  return NextResponse.json({ ok: true })
}
