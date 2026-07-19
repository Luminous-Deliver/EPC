import { Phone, MessageCircle, Mail, CalendarCheck, ShieldCheck } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'
import { Button } from '@/components/ui/Button'
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
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          Book Your EPC Today
        </h2>
        <p className="mt-4 text-lg text-secondary-700 leading-relaxed">
          Ready to book? Get in touch and we’ll arrange your assessment at a time that suits you. We respond within 2 hours during business hours.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          {methods.map((m) => (
            <div key={m.title} className="rounded-2xl bg-canvas ring-1 ring-secondary-900/5 p-6 shadow-sm transition-all duration-200 hover:shadow-premium">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10 shrink-0">
                  <m.Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-secondary-900">{m.title}</h3>
                  <p className="mt-0.5 text-secondary-800">{m.value}</p>
                  <p className="text-sm text-secondary-500">{m.detail}</p>
                  <Button
                    href={m.cta.href}
                    variant="secondary"
                    size="md"
                    className="mt-3"
                    {...(m.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {m.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <p className="flex items-center gap-2 text-sm text-secondary-600">
            <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0" aria-hidden="true" />
            No call-out fees · Free quote · 2-hour response (8am–8pm)
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-secondary-900">Request your free quote</h3>
            <p className="mt-1 text-sm text-secondary-500">
              Tell us about your property and we’ll confirm an exact price. We never share your details.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
