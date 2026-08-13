import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { WhatToHaveReady } from '@/components/sections/WhatToHaveReady'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Preparing for Your EPC Assessment | What to Have Ready',
  description:
    'What to have ready before your EPC assessment in London: rooms, loft hatch, boiler, radiators, lighting and meters. Takes 45–60 minutes when everything is accessible.',
  alternates: { canonical: `${site.url}/preparing-for-your-epc` },
  openGraph: {
    title: 'Preparing for Your EPC Assessment | L&D Energy',
    description:
      'A short checklist of what the assessor needs access to, so your EPC survey takes 45–60 minutes and does not need a second visit.',
    url: `${site.url}/preparing-for-your-epc`,
  },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/preparing-for-your-epc', label: 'Preparing for your EPC' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Preparing for your EPC',
      item: `${site.url}/preparing-for-your-epc`,
    },
  ],
}

export default function PreparingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BreadcrumbNav items={breadcrumbs} />
      <PageHero
        eyebrow="Before the visit"
        heading="Preparing for your EPC assessment"
        subheading="A short checklist so the survey takes 45–60 minutes and nothing needs a second visit. Nothing here is difficult — it is mostly about access."
        primaryCta={{ label: 'Book your EPC', href: '/contact' }}
      />
      <WhatToHaveReady heading={false} />
      <Section variant="muted" tier="secondary">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-secondary-900">
            What happens on the day
          </h2>
          <p className="mt-3 leading-relaxed text-secondary-700">
            Your assessor photographs and measures each room, records the heating system, insulation,
            glazing and lighting, and reads the meters. There is no testing, no mess and nothing
            invasive. Once the survey is done the certificate is lodged on the government register and
            lodged on the GOV.UK EPC register within 72 hours, or the next day if you chose express, and we send you the certificate link once it is live.
          </p>
        </div>
      </Section>
      <CtaStrip
        heading="Ready to book your assessment?"
        body="Send us the property details and we'll confirm your exact quote and a time slot."
        primaryCta={{ label: 'Get my exact quote', href: '/contact' }}
      />
    </>
  )
}
