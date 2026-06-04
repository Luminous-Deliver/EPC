import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { boroughList } from '@/lib/boroughs'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'EPC London — All Areas Covered',
  description:
    'Domestic EPC certificates across all 32 London boroughs and surrounding areas. Elmhurst accredited, guide prices from £49, 72-hour turnaround. Find your borough.',
  alternates: { canonical: `${site.url}/areas` },
  openGraph: {
    title: 'EPC London — All Areas Covered | L&D Energy',
    description:
      'Domestic EPC certificates across all London boroughs and surrounding areas. Elmhurst accredited, guide prices from £49, 72-hour turnaround.',
    url: `${site.url}/areas`,
  },
  twitter: {
    title: 'EPC London — All Areas Covered',
    description:
      'Domestic EPC certificates across all London boroughs. Elmhurst accredited, guide prices from £49.',
  },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/areas', label: 'Areas' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Areas', item: `${site.url}/areas` },
  ],
}

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="Coverage"
        heading="EPC Certificates Across London"
        subheading="Based in Stratford, East London — we cover all 32 London boroughs and the City of London. Transparent pricing, 7-day availability, no travel surcharges."
        primaryCta={{ label: 'Book Your EPC', href: '/contact' }}
      />

      <Section variant="default" id="all-areas">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-400">
            <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
            All Coverage Areas
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            All London Boroughs
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Select your borough to see local pricing, availability, and nearby areas we cover.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {boroughList.map((borough) => (
            <li key={borough.slug}>
              <Link
                href={`/areas/${borough.slug}`}
                className="group flex items-center justify-between gap-2 rounded-lg border border-secondary-200 bg-white px-4 py-3 text-sm font-medium text-secondary-800 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-secondary-400 group-hover:text-primary-500" aria-hidden="true" />
                  {borough.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-secondary-400 group-hover:text-primary-500" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="muted" id="coverage-info">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Our Coverage Area
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            We're based in Stratford, East London (E15), and cover all 32 London boroughs plus the City of London. We also serve surrounding areas within a 1.5-hour radius, including parts of Essex, Kent, Hertfordshire and Surrey.
          </p>
          <p className="mt-4 text-secondary-700 leading-relaxed">
            All prices are inclusive — there are no travel surcharges for any property within our service area. For properties outside this radius, contact us and we'll provide a tailored quote.
          </p>
        </div>
      </Section>

      <CtaStrip
        heading="Can't Find Your Area?"
        body="Contact us directly and we'll confirm coverage for your postcode, usually within the hour."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
