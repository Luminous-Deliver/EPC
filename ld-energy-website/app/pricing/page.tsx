import type { Metadata } from 'next'
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { Accordion } from '@/components/ui/Accordion'
import { pricing, site } from '@/lib/site'
import type { FaqItem } from '@/lib/faq'

export const metadata: Metadata = {
  title: 'EPC Prices London | From £49 | Transparent Guide Pricing',
  description:
    'Guide prices for EPC services in London — from £49 for studios. Final price depends on property floor area (m²) and condition. Request a personalised quote.',
  alternates: { canonical: `${site.url}/pricing` },
  openGraph: {
    title: 'EPC Prices London | From £49 | Transparent Guide Pricing | L&D Energy',
    description:
      'Guide prices for EPC services in London — from £49 for studios. Final price depends on floor area (m²) and condition. Request a personalised quote.',
    url: `${site.url}/pricing`,
  },
  twitter: {
    title: 'EPC Prices London | From £49 | Transparent Guide Pricing',
    description:
      'Guide prices from £49. Final price depends on floor area (m²) and condition. Request a personalised quote.',
  },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
]

const included = [
  'On-site assessment by an Elmhurst-accredited DEA',
  'Official lodgement on the UK Government EPC Register',
  'Certificate emailed in PDF format',
  'Energy improvement recommendations',
  'Full data report',
  'No travel surcharges within London',
]

const notIncluded = [
  'Re-visits due to access issues — charged at £25 per visit',
  'Properties outside our 1.5-hour service radius (contact for a quote)',
]

const pricingFaq: FaqItem[] = [
  {
    q: 'How much does an EPC cost in London?',
    a: 'Our guide prices start at £49 for studios, £60 for 1-bedroom, £65 for 2-bedroom, £67 for 3-bedroom, £69 for 4-bedroom, and £79 for 5+ bedroom homes. These are starting figures — the final price may vary depending on the property\'s floor area (m²) and condition. Travel is included for all properties in our service area.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. The price we quote is the price you pay. Quotes are personalised based on your property size and condition, so there are no surprise add-ons, call-out charges, or travel surcharges within our service area.',
  },
  {
    q: 'Do you charge for travel?',
    a: 'No. Travel is included in the standard price for all properties within our service area (all 32 London boroughs plus a 1.5-hour radius of Stratford, East London).',
  },
  {
    q: 'Can I get a discount for multiple properties?',
    a: 'Yes. We offer portfolio rates for landlords and letting agents with multiple properties. Contact us directly for a quote.',
  },
  {
    q: 'What is the next-day service?',
    a: 'For £12 extra per EPC, we guarantee your certificate within 24 hours of the assessment. This applies to assessments completed during our standard hours (Mon–Sun, 8am–8pm). Book before noon for the best chance of a same-day or next-morning appointment.',
  },
  {
    q: 'How much does a floor plan cost?',
    a: 'A standalone floor plan costs the same as your EPC for that property size — from £49. When you bundle an EPC and floor plan together, the floor plan is 50% off, saving you up to £39.50.',
  },
]

const maxSaving = Math.max(...pricing.map((p) => p.saving))

const offerCatalog = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'EPC and Floor Plan Pricing',
  itemListElement: pricing.map((row, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Offer',
      name: `${row.label} EPC`,
      price: row.epc,
      priceCurrency: 'GBP',
      seller: { '@id': `${site.url}/#business` },
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${site.url}/pricing` },
  ],
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([offerCatalog, breadcrumbSchema]) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="Pricing"
        heading="EPC and Floor Plan Pricing"
        subheading="Transparent guide prices based on property size. Final cost depends on floor area (m²) and property condition — request a personalised quote for an exact figure."
        primaryCta={{ label: 'Request a Quote', href: '/contact' }}
      />

      {/* Full pricing table */}
      <Section variant="default" id="pricing-table">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">The Numbers</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Guide Pricing Table
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            All prices include assessment, certificate lodgement, and email delivery. Add next-day service for £12.
          </p>
          <div className="mt-5 rounded-lg border border-accent-200 bg-accent-50 p-4 text-sm text-secondary-800">
            <strong className="font-semibold">Please note:</strong> The figures below are guide-only starting prices. The final cost may vary depending on the property&rsquo;s floor area (m²), layout, and condition. <a href="/contact" className="text-primary-700 underline font-medium">Request a personalised quote</a> for an exact figure.
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-lg border border-secondary-200">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="bg-secondary-50 border-b border-secondary-200">
                <th className="px-4 py-3 text-left font-semibold text-secondary-700">Property</th>
                <th className="px-4 py-3 text-right font-semibold text-secondary-700">EPC</th>
                <th className="px-4 py-3 text-right font-semibold text-secondary-700">EPC Next Day</th>
                <th className="px-4 py-3 text-right font-semibold text-secondary-700">Floor Plan</th>
                <th className="px-4 py-3 text-right font-semibold text-primary-800 bg-primary-50">Bundle</th>
                <th className="px-4 py-3 text-right font-semibold text-success">Saving</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-100">
              {pricing.map((row) => (
                <tr key={row.type} className="bg-white hover:bg-secondary-50">
                  <td className="px-4 py-3 font-medium text-secondary-900">{row.label}</td>
                  <td className="px-4 py-3 text-right text-secondary-700">£{row.epc}</td>
                  <td className="px-4 py-3 text-right text-secondary-600">£{row.nextDay}</td>
                  <td className="px-4 py-3 text-right text-secondary-700">£{row.floorPlan}</td>
                  <td className="px-4 py-3 text-right font-bold text-primary-800 bg-primary-50">
                    £{row.bundle.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-success">
                    £{row.saving.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl bg-primary-50 border border-primary-200 p-6 flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-primary-900 font-medium">
            Save up to £{maxSaving.toFixed(2)} when you book an EPC and Floor Plan together. Bundle price = EPC + 50% off floor plan.
          </p>
        </div>
      </Section>

      {/* What's included / not included */}
      <Section variant="muted" id="whats-included">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-secondary-900">What&rsquo;s included in every EPC</h2>
            <ul className="mt-5 space-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-secondary-900">What&rsquo;s not included</h2>
            <ul className="mt-5 space-y-2.5">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <XCircle className="w-5 h-5 text-secondary-400 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-secondary-600">
              For properties outside our service radius, contact us for a tailored quote.
            </p>
          </Card>
        </div>
      </Section>

      {/* Pricing FAQ */}
      <Section variant="default" id="pricing-faq">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">FAQ</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Pricing Questions
          </h2>
          <div className="mt-8">
            <Accordion items={pricingFaq} />
          </div>
        </div>
      </Section>

      <CtaStrip
        heading="Get a Personalised Quote"
        body="Tell us your property size and we'll confirm an exact price within 2 hours."
        primaryCta={{ label: 'Request a Quote', href: '/contact' }}
      />
    </>
  )
}
