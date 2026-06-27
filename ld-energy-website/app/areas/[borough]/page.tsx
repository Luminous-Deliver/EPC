import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, MapPin } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { Pricing } from '@/components/sections/Pricing'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { Accordion } from '@/components/ui/Accordion'
import { ContactSection } from '@/components/sections/ContactSection'
import { boroughMeta } from '@/lib/boroughs'
import { site, pricing } from '@/lib/site'
import type { FaqItem } from '@/lib/faq'

interface PageProps {
  params: Promise<{ borough: string }>
}

export async function generateStaticParams() {
  return Object.keys(boroughMeta).map((slug) => ({ borough: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { borough: slug } = await params
  const data = boroughMeta[slug]
  if (!data) return {}

  return {
    title: { absolute: data.metaTitle },
    description: `Domestic EPC certificate in ${data.name} from £49. Elmhurst-accredited assessor, next-day available, no travel surcharges. Floor plans too. Book today.`,
    alternates: { canonical: `${site.url}/areas/${slug}` },
    openGraph: {
      title: `EPC in ${data.name} | From £49 | L&D Energy`,
      description: `Domestic EPC certificate in ${data.name} from £49. Next-day service available, no travel surcharges.`,
      url: `${site.url}/areas/${slug}`,
    },
    twitter: {
      title: `EPC in ${data.name} | From £49 | L&D Energy`,
      description: `Domestic EPC certificate in ${data.name} from £49. Next-day service available.`,
    },
  }
}

function boroughFaq(name: string, postcodeFaq: { q: string; a: string }): FaqItem[] {
  return [
    { q: postcodeFaq.q, a: postcodeFaq.a },
    {
      q: `How much does an EPC cost in ${name}?`,
      a: `Our guide EPC prices in ${name} start from £${pricing[0].epc} for studios, £${pricing[1].epc} for 1-bedroom, £${pricing[2].epc} for 2-bedroom, £${pricing[3].epc} for 3-bedroom, £${pricing[4].epc} for 4-bedroom, and £${pricing[5].epc}+ for 5+ bedroom homes. Final price depends on floor area (m²) and property condition. Next-day service is available for £12 extra. No travel surcharges.`,
    },
    {
      q: `How quickly can I get an EPC in ${name}?`,
      a: `Standard delivery is within 72 hours of the assessment. For urgent requirements, our next-day service guarantees your certificate within 24 hours for an additional £12. We offer appointments 7 days a week, including evenings.`,
    },
    {
      q: `Do I need an EPC to let my property in ${name}?`,
      a: `Yes. Under MEES regulations, all rental properties in England and Wales must have a valid EPC rated E or above. Landlords in ${name} who let without a compliant EPC can face fines of up to £5,000 per property.`,
    },
    {
      q: `Do I need an EPC to sell my home in ${name}?`,
      a: `Yes. You're legally required to have an EPC commissioned before marketing your property for sale. Estate agents cannot legally list your ${name} property without one.`,
    },
    {
      q: `Do you also provide floor plans in ${name}?`,
      a: `Yes. We produce professional, accurately measured floor plans for properties in ${name}, ideal for sales listings and lettings marketing. Floor plans start from £${pricing[0].floorPlan}, and are half price when booked together with an EPC in the same visit.`,
    },
  ]
}

const sellingPoints = [
  'Local assessor with rapid response times',
  'Appointments 7 days a week, including evenings',
  'Transparent pricing, no travel surcharges',
  'Certificate within 72 hours, or next day for £12 extra',
]

export default async function BoroughPage({ params }: PageProps) {
  const { borough: slug } = await params
  const data = boroughMeta[slug]

  if (!data) notFound()

  const neighbours = data.neighbours
    .map((s) => boroughMeta[s])
    .filter(Boolean)

  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/areas', label: 'Areas' },
    { href: `/areas/${slug}`, label: data.name },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: `${site.url}/areas` },
      { '@type': 'ListItem', position: 3, name: data.name, item: `${site.url}/areas/${slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: boroughFaq(data.name, data.postcodeFaq).map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const boroughBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/areas/${slug}#business`,
    name: `L&D Energy, EPC ${data.name}`,
    url: `${site.url}/areas/${slug}`,
    telephone: site.phoneIntl,
    email: site.email,
    parentOrganization: { '@id': `${site.url}/#business` },
    areaServed: { '@type': 'AdministrativeArea', name: data.name, containedInPlace: { '@type': 'City', name: 'London' } },
    priceRange: '£',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `EPC and floor plan services in ${data.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Domestic EPC in ${data.name}`,
            serviceType: 'Energy Performance Certificate',
            areaServed: { '@type': 'AdministrativeArea', name: data.name },
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: pricing[0].epc,
            priceCurrency: 'GBP',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Property floor plans in ${data.name}`,
            serviceType: 'Property Floor Plan',
            areaServed: { '@type': 'AdministrativeArea', name: data.name },
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: pricing[0].floorPlan,
            priceCurrency: 'GBP',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema, boroughBusinessSchema]),
        }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow={`EPC Certificates · ${data.name}`}
        heading={`EPC Certificates in ${data.name}`}
        subheading={`Local Elmhurst-accredited Domestic Energy Assessor covering ${data.name} and surrounding areas. Guide prices from £49. Certificate within 72 hours.`}
        primaryCta={{ label: `Book Your ${data.name} EPC`, href: '#contact' }}
        secondaryCta={{ label: `Call ${site.phone}`, href: site.phoneHref }}
      />

      {/* Local intro */}
      <Section variant="default" id="local-intro">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">{data.name}, London</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            EPC Service in {data.name}
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Need an EPC in {data.name}? L&amp;D Energy provides fast, affordable domestic Energy Performance Certificates across {data.name} and all surrounding London areas. As an Elmhurst-accredited Domestic Energy Assessor based in East London, we offer flexible appointment times and rapid turnaround for homeowners, landlords, and letting agents.
          </p>
          <p className="mt-4 text-secondary-700 leading-relaxed">{data.blurb}</p>

          <h3 className="mt-8 text-xl font-bold text-secondary-900">
            Property and housing stock in {data.name}
          </h3>
          <p className="mt-3 text-secondary-700 leading-relaxed">{data.housingStock}</p>

          <h3 className="mt-8 text-xl font-bold text-secondary-900">
            Typical EPC results in {data.name}
          </h3>
          <p className="mt-3 text-secondary-700 leading-relaxed">{data.epcIssues}</p>

          <h3 className="mt-8 text-xl font-bold text-secondary-900">
            Getting to your {data.name} property
          </h3>
          <p className="mt-3 text-secondary-700 leading-relaxed">{data.transport}</p>

          <p className="mt-8 text-secondary-700 leading-relaxed">
            Whether you&rsquo;re selling a property in {data.name}, preparing for a new tenancy, or staying compliant with MEES regulations as a landlord, we&rsquo;ll deliver your EPC within 72 hours, or next day if you need it urgently.
          </p>
        </div>
      </Section>

      {/* Why choose us locally */}
      <Section variant="muted" id="why-us">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Why Choose Us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Why Choose Us for Your {data.name} EPC
          </h2>
        </div>
        <ul className="mt-8 space-y-3 max-w-2xl">
          {sellingPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-secondary-700">
              <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{point.replace('no travel surcharges', `no travel surcharges for ${data.name}`)}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Pricing />

      {/* Floor plans cross-sell */}
      <Section variant="default" id="floor-plans">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Floor Plans</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Floor Plans in {data.name}
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Selling or letting in {data.name}? We also produce professional, accurately measured floor plans, the same high-resolution plans estate agents use in sales and lettings listings. Floor plans start from £{pricing[0].floorPlan}, and are <strong className="font-semibold text-secondary-900">half price when booked with an EPC</strong> in the same visit, since we measure your property anyway during the assessment.
          </p>
          <Link
            href="/services/floor-plans"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
          >
            Learn more about our floor plans
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      {/* Nearby areas */}
      <Section variant="default" id="nearby-areas">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Also Nearby</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Areas We Cover in {data.name}
          </h2>
          <p className="mt-5 text-secondary-700 leading-relaxed">{data.areasCovered}</p>
          <p className="mt-4 text-secondary-700 leading-relaxed">
            We cover {data.name} and all neighbouring boroughs with the same transparent pricing and rapid turnaround.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {neighbours.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/areas/${n.slug}`}
                className="group flex items-center gap-2 rounded-lg border border-secondary-200 bg-white px-4 py-3 text-sm font-medium text-secondary-800 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
              >
                <MapPin className="w-3.5 h-3.5 text-secondary-400 group-hover:text-primary-500" aria-hidden="true" />
                EPC in {n.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Local FAQ */}
      <Section variant="muted" id="faq">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Common Questions</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            EPC Questions for {data.name}
          </h2>
          <div className="mt-8">
            <Accordion items={boroughFaq(data.name, data.postcodeFaq)} />
          </div>
        </div>
      </Section>

      <ContactSection />

      <CtaStrip
        heading={`Book Your ${data.name} EPC`}
        body={`Fast, transparent-priced EPC certificates in ${data.name}. Appointments 7 days a week.`}
        primaryCta={{ label: 'Book Now', href: '/contact' }}
      />
    </>
  )
}
