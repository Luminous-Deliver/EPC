import { NextResponse } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

// Resend delivery events only — this endpoint gives epc visibility into
// bounces/complaints it currently has none of (unlike the digital site's
// webhook, which already subscribes to the same three). Configure the
// Resend dashboard webhook to send exactly these events here.
const RELEVANT_EVENTS = new Set(['email.delivered', 'email.bounced', 'email.complained'])

const MAX_BODY_BYTES = 50_000

/**
 * Verifies a Svix-format webhook signature (the scheme Resend uses).
 * Secret is "whsec_<base64>"; signed content is "<id>.<timestamp>.<body>";
 * svix-signature may carry multiple space-separated "v1,<base64-hmac>" values.
 */
async function verifySignature(
  body: string,
  svixId: string,
  svixTimestamp: string,
  svixSignature: string,
  secret: string,
): Promise<boolean> {
  const secretBytes = Uint8Array.from(atob(secret.replace(/^whsec_/, '')), (c) => c.charCodeAt(0))
  const key = await crypto.subtle.importKey(
    'raw',
    secretBytes,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signedContent = `${svixId}.${svixTimestamp}.${body}`
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signedContent))
  const expected = btoa(String.fromCharCode(...new Uint8Array(mac)))

  return svixSignature
    .split(' ')
    .map((part) => part.split(',')[1])
    .filter(Boolean)
    .some((candidate) => candidate === expected)
}

export async function POST(req: Request) {
  let cfEnv: Record<string, string> = {}
  try {
    cfEnv = getRequestContext().env as Record<string, string>
  } catch {
    // fallback to process.env when running locally
  }

  const secret = cfEnv.RESEND_WEBHOOK_SECRET || process.env.RESEND_WEBHOOK_SECRET
  if (!secret) {
    // Fail closed — without a secret we cannot tell a real Resend event
    // from anyone who POSTs to this URL, so we don't trust the body at all.
    console.error('[resend-webhook] RESEND_WEBHOOK_SECRET not set — rejecting.')
    return NextResponse.json({ error: 'Not configured' }, { status: 503 })
  }

  const svixId = req.headers.get('svix-id')
  const svixTimestamp = req.headers.get('svix-timestamp')
  const svixSignature = req.headers.get('svix-signature')
  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: 'Missing signature headers' }, { status: 400 })
  }

  const raw = await req.text()
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 })
  }

  const valid = await verifySignature(raw, svixId, svixTimestamp, svixSignature, secret)
  if (!valid) {
    console.error('[resend-webhook] signature verification failed')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  let event: { type?: string; data?: { email_id?: string; to?: string[] } }
  try {
    event = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (event.type && RELEVANT_EVENTS.has(event.type)) {
    // Log only, by design — no alert channel wired up yet. If bounce/complaint
    // volume becomes something worth acting on, promote this to a real alert.
    const level = event.type === 'email.delivered' ? 'log' : 'warn'
    console[level](
      `[resend-webhook] ${event.type} — email_id=${event.data?.email_id ?? 'unknown'} to=${event.data?.to?.join(',') ?? 'unknown'}`,
    )
  }

  return NextResponse.json({ ok: true })
}
