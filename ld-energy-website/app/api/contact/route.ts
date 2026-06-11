import { NextResponse } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'
import { contactSchema } from '@/lib/validators'

export const runtime = 'edge'

const NOTIFY_TO = 'contact@luminousanddeliver.co.uk'
const FROM_DEFAULT = 'L&D Energy <bookings@epc.luminousanddeliver.co.uk>'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

interface ParsedInput {
  name: string
  phone: string
  email: string
  address: string
  postcode: string
  propertyType: string
  services: string[]
  speed: string
  preferredDate?: string
  notes?: string
}

function buildEmail(data: ParsedInput) {
  const rows: Array<[string, string]> = [
    ['Name', data.name],
    ['Phone', data.phone],
    ['Email', data.email],
    ['Property Address', data.address],
    ['Postcode', data.postcode],
    ['Property Type', data.propertyType],
    ['Service(s)', data.services.join(', ')],
    ['Speed', data.speed],
    ['Preferred Date', data.preferredDate || '—'],
    ['Notes', data.notes || '—'],
  ]

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')

  const html = `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;color:#1E293B;line-height:1.5">
<h2 style="margin:0 0 16px;font-family:'Plus Jakarta Sans',Inter,Arial,sans-serif;color:#0F172A">New EPC booking request</h2>
<table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;max-width:560px">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="background:#F8FAFC;border:1px solid #E2E8F0;font-weight:600;width:32%">${escapeHtml(k)}</td><td style="border:1px solid #E2E8F0">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`,
  )
  .join('')}
</table>
<p style="margin-top:16px;font-size:12px;color:#64748B">Submitted via epc.luminousanddeliver.co.uk</p>
</body></html>`

  return { text, html }
}

const MAX_BODY_BYTES = 10_000
const ALLOWED_ORIGINS = [
  'https://epc.luminousanddeliver.co.uk',
  'http://localhost:3000',
]

export async function POST(req: Request) {
  // Reject cross-site submissions; browsers always send Origin on POST.
  const origin = req.headers.get('origin')
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  let payload: unknown
  try {
    const raw = await req.text()
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Request too large' }, { status: 413 })
    }
    payload = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten() },
      { status: 400 },
    )
  }

  // Honeypot triggered — accept silently to avoid signalling bots.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const data: ParsedInput = {
    name: parsed.data.name,
    phone: parsed.data.phone,
    email: parsed.data.email,
    address: parsed.data.address,
    postcode: parsed.data.postcode,
    propertyType: parsed.data.propertyType,
    services: parsed.data.services,
    speed: parsed.data.speed,
    preferredDate: parsed.data.preferredDate || undefined,
    notes: parsed.data.notes || undefined,
  }

  const { text, html } = buildEmail(data)
  const subject = `EPC booking: ${data.name} — ${data.propertyType} (${data.postcode})`

  // On Cloudflare Pages, runtime secrets are in the Worker env bindings, not process.env
  let cfEnv: Record<string, string> = {}
  try {
    cfEnv = getRequestContext().env as Record<string, string>
  } catch {
    // fallback to process.env when running locally
  }
  const apiKey = cfEnv.RESEND_API_KEY || process.env.RESEND_API_KEY
  const from = cfEnv.RESEND_FROM || process.env.RESEND_FROM || FROM_DEFAULT
  const to = cfEnv.RESEND_TO || process.env.RESEND_TO || NOTIFY_TO

  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY not set — submission accepted but not delivered.')
    console.log('[contact] payload:', text)
    return NextResponse.json({ ok: true, delivered: false })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error('[contact] Resend error', res.status, body)
      return NextResponse.json(
        { error: 'We could not send your booking right now. Please call us on 07492 575 396.' },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error('[contact] Resend fetch failed', err)
    return NextResponse.json(
      { error: 'Network error — please try again or call us on 07492 575 396.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true, delivered: true })
}
