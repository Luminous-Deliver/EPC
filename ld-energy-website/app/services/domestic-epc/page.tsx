import type { Metadata } from 'next'
import { CheckCircle2, User, Building2, Users } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { StepList } from '@/components/ui/StepList'
import { PageHero } from '@/components/sections/PageHero'
import { Pricing } from '@/components/sections/Pricing'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { Faq } from '@/components/sections/Faq'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Domestic EPC Certificate London | From £49 | Elmhurst Accredited',
  description:
    'Get your domestic EPC certificate in London from £49. Elmhurst accredited assessor, 72-hour standard delivery, next-day available. Required for selling or renting your home. Book online today.',
  alternates: { canonical: `${site.url}/services/domestic-epc` },
  openGraph: {
    title: 'Domestic EPC Certificate London | From £49 | L&D Energy',
    description:
      'Get your domestic EPC certificate in London from £49. Elmhurst accredited assessor, 72-hour standard delivery, next-day available. Required for selling or renting your home.',
    url: `${site.url}/services/domestic-epc`,
  },
  twitter: {
    title: 'Domestic EPC Certificate London | From £49',
    description:
      'Elmhurst accredited assessor, 72-hour standard delivery, next-day available. Required for selling or renting.',
  },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/services/domestic-epc', label: 'Domestic EPC' },
]

const epcContents = [
  'Current energy efficiency rating (A–G)',
  'Potential rating if recommended improvements are made',
  'Estimated annual energy costs',
  'CO₂ emissions estimate',
  'Specific recommendations to improve efficiency',
  'Estimated cost and savings for each recommendation',
]

const whenRequired = [
  'Selling a residential property',
  'Renting a property to a new tenant',
  'Marketing a property for sale or rent',
  'Completing major renovations that change energy performance',
]

const personas = [
  {
    Icon: User,
    title: 'Homeowners Selling',
    body: 'You need a valid EPC before marketing your property. Estate agents cannot legally list your home without one. We provide same-week service to avoid delaying your sale.',
  },
  {
    Icon: Building2,
    title: 'Landlords',
    body: 'MEES regulations require all rental properties to have an EPC rated E or above. Fines reach £5,000 per non-compliant property. We help landlords stay compliant with fast, transparent pricing.',
  },
  {
    Icon: Users,
    title: 'Letting Agents',
    body: 'Quick turnaround for new instructions. Portfolio rates available for multiple properties. We work with letting agents across London.',
  },
]

const process = [
  {
    title: 'Book your appointment',
    body: 'Online form, phone, WhatsApp, or email — whichever suits you.',
  },
  {
    title: 'We confirm details',
    body: 'We confirm time, address, and any access requirements within 2 hours during business hours.',
  },
  {
    title: 'On-site assessment',
    body: 'Our DEA measures and records all required data. Typically 45 minutes to 2 hours depending on property size.',
  },
  {
    title: 'Software processing',
    body: 'Data is processed through Elmhurst SAP (RdSAP 10) — the same software used by all registered UK assessors.',
  },
  {
    title: 'Certificate delivered',
    body: 'Lodged on the government EPC register and emailed to you within 72 hours (or next day if express).',
  },
]

const assessed = [
  'Property dimensions and total floor area',
  'Number of habitable rooms and storeys',
  'Wall construction type and insulation',
  'Roof type and insulation depth',
  'Floor construction and insulation',
  'Window glazing type, frame, and age',
  'External doors',
  'Main and secondary heating systems',
  'Heating controls and programmer',
  'Hot water system and cylinder insulation',
  'Ventilation systems',
  'Lighting (count of low-energy fittings)',
  'Renewable energy systems (solar PV, heat pumps, etc.)',
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Energy Performance Certificate Assessment',
  name: 'Domestic EPC Certificate',
  description:
    'Official Energy Performance Certificate for residential properties, required for selling or renting in England and Wales.',
  provider: { '@id': `${site.url}/#business` },
  areaServed: { '@type': 'City', name: 'London' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'EPC Pricing',
    itemListElement: [
      { '@type': 'Offer', name: 'Studio EPC', price: '49', priceCurrency: 'GBP' },
      { '@type': 'Offer', name: '1 Bedroom EPC', price: '60', priceCurrency: 'GBP' },
      { '@type': 'Offer', name: '2 Bedroom EPC', price: '65', priceCurrency: 'GBP' },
      { '@type': 'Offer', name: '3 Bedroom EPC', price: '67', priceCurrency: 'GBP' },
      { '@type': 'Offer', name: '4 Bedroom EPC', price: '69', priceCurrency: 'GBP' },
      { '@type': 'Offer', name: '5+ Bedroom EPC', price: '79', priceCurrency: 'GBP' },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Domestic EPC', item: `${site.url}/services/domestic-epc` },
  ],
}

export default function DomesticEpcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="Domestic EPC Certificates"
        heading="Domestic EPC Certificates in London"
        subheading="Official Energy Performance Certificates for selling or renting your home. Elmhurst accredited. Guide prices from £49. Lodged on the government register."
        primaryCta={{ label: 'Book Your EPC', href: '#contact' }}
      />

      {/* What is a Domestic EPC */}
      <Section variant="default" id="what-is-epc">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">What Is It?</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            What is a Domestic EPC?
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            A Domestic Energy Performance Certificate (EPC) is an official UK government document that rates a residential property&rsquo;s energy efficiency on a scale from A (most efficient) to G (least efficient). It shows the property&rsquo;s current and potential energy efficiency, estimated energy costs, and recommendations for improvement.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-secondary-900">Your EPC includes</h3>
            <ul className="mt-4 space-y-2.5">
              {epcContents.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-secondary-900">EPCs are legally required when</h3>
            <ul className="mt-4 space-y-2.5">
              {whenRequired.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Who Needs an EPC */}
      <Section variant="muted" id="who-needs-epc">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Who Is It For?</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Who Needs a Domestic EPC?
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {personas.map((p) => (
            <Card key={p.title} interactive>
              <p.Icon className="w-10 h-10 text-primary-600" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-secondary-900">{p.title}</h3>
              <p className="mt-3 text-secondary-700 leading-relaxed">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section variant="default" id="epc-process">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">The Process</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
              Our EPC Process
            </h2>
            <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
              From booking to certificate in your inbox — usually within 72 hours.
            </p>
            <StepList steps={process} className="mt-8" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">What We Record</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
              What We Assess
            </h2>
            <p className="mt-5 text-secondary-700 leading-relaxed">
              Our DEA records the following during the on-site visit. No preparation is needed — just normal access to all rooms.
            </p>
            <ul className="mt-6 space-y-2">
              {assessed.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Pricing />
      <Faq />

      <CtaStrip
        heading="Ready to Book Your EPC?"
        body="Fast, transparent-priced EPC certificates across London. We'll arrange your assessment at a time that suits you."
        primaryCta={{ label: 'Book Your EPC', href: '/contact' }}
      />
    </>
  )
}
