import type { Metadata } from 'next'
import { Phone, MessageCircle, Mail, MapPin, Clock, Timer } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Book Your London EPC',
  description:
    'Book your London EPC certificate. Call, WhatsApp, email or use our booking form. We respond within 2 hours during business hours (Mon–Sun, 8am–8pm).',
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: 'Contact L&D Energy | Book Your London EPC | 07492 575 396',
    description:
      'Book your London EPC certificate. Call, WhatsApp, email or use our booking form. We respond within 2 hours during business hours (Mon–Sun, 8am–8pm).',
    url: `${site.url}/contact`,
  },
  twitter: {
    title: 'Contact L&D Energy | Book Your London EPC',
    description:
      'Book your London EPC certificate. Call, WhatsApp, email or use our booking form. Fast response.',
  },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${site.url}/contact` },
  ],
}

const methods = [
  {
    Icon: Phone,
    title: 'Phone',
    value: site.phone,
    detail: 'Fastest response. Tap to dial.',
    href: site.phoneHref,
    cta: 'Call Now',
    external: true,
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp',
    value: site.phone,
    detail: 'Send a message, great for photos or property details.',
    href: site.whatsappHref,
    cta: 'Open WhatsApp',
    external: true,
  },
  {
    Icon: Mail,
    title: 'Email',
    value: site.email,
    detail: 'Reply within 2 hours during business hours.',
    href: site.emailHref,
    cta: 'Send Email',
    external: true,
  },
] as const

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="Contact Us"
        heading="Get in Touch"
        subheading="Ready to book? Get in touch and we'll arrange your assessment at a time that suits you. Standard 72-hour turnaround, or next day for £12 extra."
        primaryCta={{ label: 'Send Booking Request', href: '#booking-form' }}
      />

      {/* Contact methods + form */}
      <Section variant="default" id="contact-methods">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            {methods.map((m) => (
              <div key={m.title} className="rounded-lg bg-white border border-secondary-200 p-4 sm:p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary-100 text-primary-700 shrink-0">
                    <m.Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h2 className="text-base font-semibold text-secondary-900">{m.title}</h2>
                    <p className="mt-0.5 text-secondary-800">{m.value}</p>
                    <p className="text-sm text-secondary-500">{m.detail}</p>
                    <a
                      href={m.href}
                      {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="mt-3 inline-flex items-center gap-2 min-h-[44px] rounded-md border border-secondary-200 bg-white hover:bg-secondary-50 text-secondary-800 font-semibold px-4 text-sm"
                    >
                      {m.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <Card>
              <h3 className="text-base font-semibold text-secondary-900">Office hours</h3>
              <ul className="mt-3 space-y-2 text-sm text-secondary-700">
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-primary-600" aria-hidden="true" />
                  Monday–Sunday, 8am–8pm
                </li>
                <li className="flex items-center gap-2.5">
                  <Timer className="w-4 h-4 text-primary-600" aria-hidden="true" />
                  Response within 2 hours during hours
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary-600 mt-0.5" aria-hidden="true" />
                  Based in Stratford, East London E15. Covering all 32 London boroughs and the City of London.
                </li>
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <h2 id="booking-form" className="text-2xl md:text-3xl font-bold tracking-tight text-secondary-900">
              Booking request
            </h2>
            <p className="mt-2 text-secondary-700">
              Send the details below and we’ll come back to you with a time slot and confirmed price.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Service area */}
      <Section variant="muted" id="service-area">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Service Area</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Where we cover
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Based in Stratford (E15), we cover all 32 London boroughs and the City of London. We also serve areas within a 1.5-hour radius, including parts of Essex, Kent, Hertfordshire and Surrey. No travel surcharges within this area.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-secondary-200">
          <iframe
            title="L&D Energy service area map"
            aria-label="Map of L&D Energy service area centred on Stratford, East London"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.5%2C51.28%2C0.34%2C51.7&amp;layer=mapnik&amp;marker=51.543%2C-0.0005"
            className="w-full h-72 md:h-96 border-0"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  )
}
