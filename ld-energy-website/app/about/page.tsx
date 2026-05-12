import type { Metadata } from 'next'
import { Award, MapPin, Clock, BadgeCheck, FileText, Users } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About L&D Energy | London EPC Assessor | Elmhurst Accredited',
  description:
    'L&D Energy — Elmhurst-accredited Domestic Energy Assessor based in Stratford, East London. Professional EPC certificates and floor plans across all London boroughs.',
  alternates: { canonical: `${site.url}/about` },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${site.url}/about` },
  ],
}

const credentials = [
  {
    Icon: BadgeCheck,
    title: 'Elmhurst Energy Accreditation',
    body: 'Accredited Domestic Energy Assessor (DEA) registered with Elmhurst Energy — the UK’s largest energy assessor accreditation scheme. Every certificate is lodged on the UK Government EPC Register.',
  },
  {
    Icon: FileText,
    title: 'Elmhurst SAP Software',
    body: 'We assess using Elmhurst SAP with the current RdSAP 10 methodology (October 2025+) — the same official software used by all government-approved UK assessors.',
  },
  {
    Icon: Award,
    title: 'Fully Insured',
    body: 'Professional Indemnity and Public Liability insurance held through Elmhurst membership. You’re protected on every job.',
  },
]

const commitments = [
  {
    Icon: Clock,
    title: 'We answer the phone',
    body: 'Sounds simple, but it’s the biggest complaint we hear about other assessors. We respond to phone, WhatsApp and email within 2 hours during business hours.',
  },
  {
    Icon: BadgeCheck,
    title: 'We turn up on time',
    body: 'Booked slots are kept. If anything changes, we tell you immediately. Your time matters.',
  },
  {
    Icon: FileText,
    title: 'We deliver on schedule',
    body: '72-hour standard delivery, or 24-hour express if you’ve chosen the next-day service. We lodge directly on the EPC Register and email your certificate.',
  },
  {
    Icon: Users,
    title: 'No hidden fees',
    body: 'Fixed prices by property type. No travel surcharges. No call-out charges. The price quoted is the price you pay.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="About Us"
        heading="About L&D Energy"
        subheading="Elmhurst-accredited Domestic Energy Assessor based in Stratford, East London. We deliver fast, fixed-price EPC certificates and floor plans across every London borough."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
      />

      {/* Who we are */}
      <Section variant="default" id="who-we-are">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Who We Are</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            A specialist EPC service for London
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            L&amp;D Energy is the domestic Energy Performance Certificate division of {site.legalName}. We provide official EPC certificates and professional floor plans for residential properties across all 32 London boroughs and the City of London.
          </p>
          <p className="mt-4 text-secondary-700 leading-relaxed">
            We focus on what landlords, homeowners and letting agents actually need: predictable pricing, fast turnaround, and a qualified assessor who answers their phone. That’s it. No upsells, no surprises, no chasing.
          </p>
        </div>
      </Section>

      {/* Our approach */}
      <Section variant="muted" id="approach">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Our Approach</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            How we work
          </h2>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <li key={c.title} className="rounded-lg bg-white border border-secondary-100 p-6 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                <c.Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-900">{c.title}</h3>
              <p className="mt-2 text-sm text-secondary-700 leading-relaxed">{c.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Credentials */}
      <Section variant="default" id="credentials">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Credentials</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Accreditation &amp; Credentials
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Only an accredited Domestic Energy Assessor (DEA) can produce a domestic EPC that’s recognised by the UK Government EPC Register.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {credentials.map((c) => (
            <Card key={c.title} interactive>
              <c.Icon className="w-10 h-10 text-primary-600" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-secondary-900">{c.title}</h3>
              <p className="mt-3 text-secondary-700 leading-relaxed">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Founder / Coverage / Parent company */}
      <Section variant="muted" id="founder-coverage">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">The Founder</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
              Meet Abdul
            </h2>
            <p className="mt-5 text-secondary-700 leading-relaxed">
              L&amp;D Energy is led by Abdul M Taher, an Elmhurst-accredited Domestic Energy Assessor based in Stratford, East London. Abdul personally carries out assessments — you’re not handed off to a stranger after booking.
            </p>
            <p className="mt-4 text-secondary-700 leading-relaxed">
              The service was set up because too many landlords and sellers told us the same story: unanswered phones, missed appointments, slow certificates, and surprise fees. We do the opposite — fixed pricing, clear timelines, and a real person who picks up.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Coverage &amp; Parent Company</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
              Where we work
            </h2>
            <p className="mt-5 text-secondary-700 leading-relaxed">
              Based in Stratford (E15), we cover all 32 London boroughs, the City of London, and surrounding areas within a 1.5-hour radius — parts of Essex, Kent, Hertfordshire and Surrey included.
            </p>
            <p className="mt-4 text-secondary-700 leading-relaxed">
              L&amp;D Energy is the EPC trading division of {site.legalName}, a UK-registered company.
            </p>
            <ul className="mt-6 space-y-2.5 text-secondary-700">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-primary-600" aria-hidden="true" />
                Stratford, East London E15
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-primary-600" aria-hidden="true" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaStrip
        heading="Ready to Work With Us?"
        body="Book your EPC online, or get in touch with any question. We respond within 2 hours."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
