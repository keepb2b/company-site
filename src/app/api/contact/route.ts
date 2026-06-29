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

type ValidMailConfig = {
  host: string
  port: number
  user: string
  pass: string
  to: string
  from: string
  secure: boolean
}

const SMTP_TIMEOUT_MS = 8000

function readText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function readEnv(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim()
    if (value) return value
  }

  return undefined
}

function readBooleanEnv(name: string, fallback: boolean) {
  const value = process.env[name]?.trim().toLowerCase()

  if (!value) return fallback
  return ['1', 'true', 'yes', 'on'].includes(value)
}

function getMailConfig() {
  const host = readEnv('SMTP_HOST', 'MAIL_HOST')
  const port = Number(readEnv('SMTP_PORT', 'MAIL_PORT') ?? 587)
  const user = readEnv('SMTP_USER', 'SMTP_USERNAME', 'MAIL_USER')
  const pass = readEnv('SMTP_PASS', 'SMTP_PASSWORD', 'MAIL_PASSWORD')
  const to = readEnv('CONTACT_TO_EMAIL', 'CONTACT_EMAIL_TO', 'MAIL_TO')
  const from = readEnv('CONTACT_FROM_EMAIL', 'SMTP_FROM', 'MAIL_FROM', 'SMTP_USER', 'SMTP_USERNAME', 'MAIL_USER')
  const secure = readBooleanEnv('SMTP_SECURE', port === 465)

  return { host, port, user, pass, to, from, secure }
}

function getMissingMailConfig(config: ReturnType<typeof getMailConfig>) {
  const missing: string[] = []

  if (!config.host) missing.push('SMTP_HOST')
  if (!Number.isFinite(config.port) || config.port <= 0) missing.push('SMTP_PORT')
  if (!config.user) missing.push('SMTP_USER')
  if (!config.pass) missing.push('SMTP_PASS')
  if (!config.to) missing.push('CONTACT_TO_EMAIL')
  if (!config.from) missing.push('CONTACT_FROM_EMAIL')

  return missing
}

function formatMailbox(address: string) {
  if (address.includes('<')) return address
  return `"NIPPON SYSTEM Contact" <${address}>`
}

function assertMailConfig(config: ReturnType<typeof getMailConfig>): ValidMailConfig {
  const missingConfig = getMissingMailConfig(config)

  if (missingConfig.length > 0) {
    throw new Error(`Missing mail config: ${missingConfig.join(', ')}`)
  }

  return config as ValidMailConfig
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

  const rawMailConfig = getMailConfig()
  const missingConfig = getMissingMailConfig(rawMailConfig)

  if (missingConfig.length > 0) {
    console.error('Contact mail is not configured', { missingConfig })
    return NextResponse.json(
      { error: 'Email service is not configured', missingConfig },
      { status: 500 },
    )
  }

  try {
    const mailConfig = assertMailConfig(rawMailConfig)
    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: { user: mailConfig.user, pass: mailConfig.pass },
      connectionTimeout: SMTP_TIMEOUT_MS,
      greetingTimeout: SMTP_TIMEOUT_MS,
      socketTimeout: SMTP_TIMEOUT_MS,
      tls: {
        servername: mailConfig.host,
      },
    })

    try {
      await transporter.sendMail({
        from: formatMailbox(mailConfig.from),
        to: mailConfig.to,
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
    } finally {
      transporter.close()
    }

    return NextResponse.json({ ok: true, delivery: 'mail' })
  } catch (error) {
    console.error('Contact submission failed', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
  }
}
