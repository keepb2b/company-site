import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type ContactPayload = {
  company?: unknown
  name?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
}

type ContactSubmission = {
  company: string
  name: string
  email: string
  phone: string
  message: string
}

function readText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function hasMailConfig(config: {
  host?: string
  user?: string
  pass?: string
  to?: string
  from?: string
}) {
  return Boolean(config.host && config.user && config.pass && config.to && config.from)
}

async function canSendMailToday() {
  const limit = Number(process.env.DAILY_LIMIT ?? 0)

  if (!Number.isFinite(limit) || limit <= 0) {
    return true
  }

  const filePath = process.env.CONTACT_DAILY_LIMIT_FILE ?? join(process.cwd(), 'contact-daily-limit.json')
  const today = new Date().toISOString().slice(0, 10)

  try {
    const raw = await readFile(filePath, 'utf8')
    const record = JSON.parse(raw) as { date?: string; count?: number }

    if (record.date !== today) {
      return true
    }

    return (record.count ?? 0) < limit
  } catch {
    return true
  }
}

async function recordMailSent() {
  const limit = Number(process.env.DAILY_LIMIT ?? 0)

  if (!Number.isFinite(limit) || limit <= 0) {
    return
  }

  const filePath = process.env.CONTACT_DAILY_LIMIT_FILE ?? join(process.cwd(), 'contact-daily-limit.json')
  const today = new Date().toISOString().slice(0, 10)

  try {
    await mkdir(dirname(filePath), { recursive: true })

    let count = 0
    try {
      const raw = await readFile(filePath, 'utf8')
      const record = JSON.parse(raw) as { date?: string; count?: number }
      count = record.date === today ? record.count ?? 0 : 0
    } catch {
      count = 0
    }

    await writeFile(filePath, JSON.stringify({ date: today, count: count + 1 }), 'utf8')
  } catch (error) {
    console.error('Failed to update contact daily limit file', error)
  }
}

async function saveSubmission(submission: ContactSubmission) {
  const filePath = process.env.CONTACT_FALLBACK_FILE ?? join(process.cwd(), 'contact-submissions.jsonl')
  const record = {
    createdAt: new Date().toISOString(),
    ...submission,
  }

  try {
    await mkdir(dirname(filePath), { recursive: true })
    await appendFile(filePath, `${JSON.stringify(record)}\n`, 'utf8')
    return 'file'
  } catch (error) {
    console.error('Failed to write contact submission fallback file', error)
    console.info('Contact submission fallback', record)
    return 'console'
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  const submission: ContactSubmission = {
    company: readText(payload.company),
    name: readText(payload.name),
    email: readText(payload.email),
    phone: readText(payload.phone),
    message: readText(payload.message),
  }

  if (
    !submission.company ||
    !submission.name ||
    !submission.email ||
    !submission.phone ||
    !submission.message
  ) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS ?? process.env.SMTP_PASSWORD
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_EMAIL_TO
  const from = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_FROM ?? user

  try {
    if (!hasMailConfig({ host, user, pass, to, from })) {
      const delivery = await saveSubmission(submission)
      return NextResponse.json({ ok: true, delivery })
    }

    if (!(await canSendMailToday())) {
      const delivery = await saveSubmission(submission)
      return NextResponse.json({ ok: true, delivery, mailSkipped: 'daily-limit' })
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
      replyTo: submission.email,
      subject: `Web contact: ${submission.company} ${submission.name}`,
      text: [
        'A contact form submission was received.',
        '',
        `Company: ${submission.company}`,
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Phone: ${submission.phone}`,
        '',
        'Message:',
        submission.message,
      ].join('\n'),
    })

    await recordMailSent()

    return NextResponse.json({ ok: true, delivery: 'mail' })
  } catch (error) {
    console.error('Contact submission failed', error)
    const delivery = await saveSubmission(submission)
    return NextResponse.json({ ok: true, delivery, mailError: true })
  }
}
