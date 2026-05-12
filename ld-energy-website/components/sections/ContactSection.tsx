import { Phone, MessageCircle, Mail } from 'lucide-react'
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
    detail: 'Quick responses — send a message',
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
    <Section variant="muted" id="contact">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Book Now</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
          Book Your EPC Today
        </h2>
        <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
          Ready to book? Get in touch and we’ll arrange your assessment at a time that suits you. We respond within 2 hours during business hours.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          {methods.map((m) => (
            <div key={m.title} className="rounded-lg bg-white border border-secondary-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary-100 text-primary-700 shrink-0">
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
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
