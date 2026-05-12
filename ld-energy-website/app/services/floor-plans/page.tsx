import type { Metadata } from 'next'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { StepList } from '@/components/ui/StepList'
import { PageHero } from '@/components/sections/PageHero'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { pricing } from '@/lib/site'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Property Floor Plans London | From £49 | L&D Energy',
  description:
    'Professional property floor plans across London. Accurately measured, high-resolution files for estate agents and property marketing. Half price when bundled with an EPC.',
  alternates: { canonical: `${site.url}/services/floor-plans` },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/services/floor-plans', label: 'Floor Plans' },
]

const included = [
  'Accurate measurements using laser distance tools',
  'Individual room dimensions',
  'Total floor area (gross internal area)',
  'Room labels and layout',
  'High-resolution image file',
  'Multiple format options (JPEG, PDF)',
  'Suitable for portals (Rightmove, Zoopla, OnTheMarket)',
  'Suitable for printed brochures',
]

const process = [
  {
    title: 'Book',
    body: 'Contact us by phone, WhatsApp, email, or use our online form. Tell us your property address and preferred time.',
  },
  {
    title: 'We visit and measure',
    body: 'Our assessor visits at your chosen time and measures every room using laser distance tools.',
  },
  {
    title: 'Floor plan drawn',
    body: 'Measurements are drafted into a clean, professional floor plan using specialist software.',
  },
  {
    title: 'Delivered to your inbox',
    body: 'High-resolution JPEG and PDF files emailed to you within 72 hours of the assessment.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Property Floor Plan',
  name: 'Professional Property Floor Plans',
  description:
    'Accurate, professionally measured floor plans for property marketing across London.',
  provider: { '@id': `${site.url}/#business` },
  areaServed: { '@type': 'City', name: 'London' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Floor Plans', item: `${site.url}/services/floor-plans` },
  ],
}

export default function FloorPlansPage() {
  const maxSaving = Math.max(...pricing.map((p) => p.saving))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="Floor Plans"
        heading="Professional Property Floor Plans"
        subheading="Accurate, professionally measured floor plans for property marketing. Same price as your EPC standalone — half price when you bundle them together."
        primaryCta={{ label: 'Get Your Floor Plan', href: '/contact' }}
      />

      {/* Why Floor Plans */}
      <Section variant="default" id="why-floor-plans">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Why They Matter</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Why Floor Plans?
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Floor plans help buyers and tenants visualise property layout before viewing. Properties marketed with floor plans receive significantly more enquiries than those without. Estate agents widely consider floor plans essential for serious listings. A professional floor plan shows room dimensions, layout flow, total floor area, and key features, helping potential buyers make faster decisions.
          </p>
        </div>
      </Section>

      {/* What's Included */}
      <Section variant="muted" id="included">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">The Deliverable</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
              What&rsquo;s Included
            </h2>
            <p className="mt-5 text-secondary-700 leading-relaxed">
              Every floor plan we produce is measured on-site with laser tools and drawn in professional software.
            </p>
            <ul className="mt-6 space-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">The Process</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
              How It Works
            </h2>
            <StepList steps={process} className="mt-8" />
          </div>
        </div>
      </Section>

      {/* Pricing Table */}
      <Section variant="default" id="pricing">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Pricing</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Floor Plan Pricing
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Standalone floor plans are the same price as your EPC. Bundle both services and the floor plan is half price — saving you up to £{maxSaving.toFixed(2)}.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-lg border border-secondary-200">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="bg-secondary-50 border-b border-secondary-200">
                <th className="px-4 py-3 text-left font-semibold text-secondary-700">Property</th>
                <th className="px-4 py-3 text-right font-semibold text-secondary-700">EPC Only</th>
                <th className="px-4 py-3 text-right font-semibold text-secondary-700">Floor Plan Only</th>
                <th className="px-4 py-3 text-right font-semibold text-primary-800 bg-primary-50">Bundle Total</th>
                <th className="px-4 py-3 text-right font-semibold text-success">You Save</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-100">
              {pricing.map((row) => (
                <tr key={row.type} className="bg-white hover:bg-secondary-50">
                  <td className="px-4 py-3 font-medium text-secondary-900">{row.label}</td>
                  <td className="px-4 py-3 text-right text-secondary-700">£{row.epc}</td>
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

        <div className="mt-8 rounded-xl bg-primary-50 border border-primary-200 p-6 flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-primary-900 font-medium">
            Save up to £{maxSaving.toFixed(2)} when you book an EPC and Floor Plan together.
          </p>
        </div>
      </Section>

      <CtaStrip
        heading="Ready to Order Your Floor Plan?"
        body="Book online or call us. We'll arrange a visit at a time that suits you."
        primaryCta={{ label: 'Get Your Floor Plan', href: '/contact' }}
      />
    </>
  )
}
