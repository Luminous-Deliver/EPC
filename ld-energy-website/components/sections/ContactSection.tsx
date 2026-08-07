import { Phone, MessageCircle, Mail, CalendarCheck, ShieldCheck } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'

import { site } from '@/lib/site'

const methods = [
  {
    Icon: Phone,
    title: 'Call Us',
    value: site.phone,
    detail: site.hours,
    cta: { label: 'Tap to Call', href: site.phoneHref, external: true },
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp',
    value: site.phone,
    detail: 'Quick responses, send a message',
    cta: { label: 'Open WhatsApp', href: site.whatsappHref, external: true },
  },
  {
    Icon: Mail,
    title: 'Email',
    value: site.email,
    detail: 'Reply within 2 hours',
    cta: { label: 'Send Email', href: site.emailHref, external: true },
  },
] as const

export function ContactSection() {
  return (
    <Section variant="muted" id="contact" pattern className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-400">
          <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
          Book Now
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-secondary-900">
          Book Your EPC Today
        </h2>
        <p className="mt-2 text-secondary-700 leading-relaxed">
          Tell us about your property and we’ll confirm an exact price and a time slot — usually within 2 hours.
        </p>
      </div>

      {/* Compact channel strip — one row, no oversized cards. */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {methods.map((m) => (
          <a
            key={m.title}
            href={m.cta.href}
            {...(m.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex items-center gap-3 rounded-xl bg-canvas ring-1 ring-secondary-900/5 px-4 py-3 shadow-sm transition-all duration-200 hover:shadow-premium hover:ring-primary-200"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10">
              <m.Icon className="w-4 h-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-secondary-900 group-hover:text-primary-700">
                {m.title}
              </span>
              <span className="block truncate text-xs text-secondary-500">{m.value}</span>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-3 flex items-center gap-2 text-sm text-secondary-600">
        <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0" aria-hidden="true" />
        No call-out fees · Free quote · 2-hour response (8am–8pm)
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </Section>
  )
}
