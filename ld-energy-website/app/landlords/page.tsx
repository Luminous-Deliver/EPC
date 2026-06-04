import type { Metadata } from 'next'
import { AlertTriangle, CheckCircle2, Clock, ShieldCheck, FileText, CalendarRange } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { Pricing } from '@/components/sections/Pricing'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'EPC for Landlords London | MEES Compliance',
  description:
    'EPC certificates for London landlords. Stay MEES compliant and avoid fines up to £5,000 per property. Fast turnaround, guide prices from £49.',
  alternates: { canonical: `${site.url}/landlords` },
  openGraph: {
    title: 'EPC for Landlords London | MEES Compliance | L&D Energy',
    description:
      'EPC certificates for London landlords. Stay MEES compliant and avoid fines up to £5,000 per property. Fast turnaround, guide prices from £49. Portfolio discounts available.',
    url: `${site.url}/landlords`,
  },
  twitter: {
    title: 'EPC for Landlords London | MEES Compliance',
    description:
      'EPC certificates for London landlords. Stay MEES compliant and avoid fines up to £5,000 per property.',
  },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/landlords', label: 'For Landlords' },
]

const penalties = [
  { breach: 'False information on PRS Exemptions Register', fine: '£1,000' },
  { breach: 'Failing to comply with a compliance notice', fine: '£2,000' },
  { breach: 'Letting a non-compliant property under 3 months', fine: '£4,000' },
  { breach: 'Letting a non-compliant property 3+ months', fine: '£5,000' },
]

const landlordNeeds = [
  'Valid EPC rated E or above (legal minimum)',
  'EPC must be provided to tenants before signing',
  'Certificate must be lodged on the government register',
  'Valid for 10 years',
  'Must be replaced when expired before re-letting',
]

const ourService = [
  {
    Icon: FileText,
    title: 'Portfolio discounts',
    body: 'Multiple-property pricing for landlords and letting agents, contact us for a tailored quote.',
  },
  {
    Icon: ShieldCheck,
    title: 'Improvement advice',
    body: 'Every EPC includes specific recommendations to help you reach EPC C ahead of upcoming MEES changes.',
  },
  {
    Icon: Clock,
    title: 'Same-week appointments',
    body: 'Fast turnaround for urgent tenancies, including evening and weekend slots.',
  },
  {
    Icon: CalendarRange,
    title: 'Agent-friendly delivery',
    body: 'We can send certificates directly to letting agents (with your written permission) to save you forwarding paperwork.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'For Landlords', item: `${site.url}/landlords` },
  ],
}

const landlordFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an EPC to rent out my property?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Under MEES regulations, all rental properties in England and Wales must have a valid EPC rated E or above. You must provide this to tenants before they sign the tenancy agreement. Letting without a compliant EPC can result in fines up to £30,000 per property.' },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum EPC rating for a rental property in London?',
      acceptedAnswer: { '@type': 'Answer', text: 'The current legal minimum is band E. The UK government has proposed raising this to band C by 2028 for new tenancies and 2030 for all existing tenancies, though exact dates may shift. Landlords should plan improvements now to avoid the installer bottleneck.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a landlord EPC cost in London?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our guide prices for landlord EPCs in London start from £49 for studios. Final price depends on the property\'s floor area (m²), extensions, and condition. Portfolio discounts are available for multiple properties, contact us for a tailored quote.' },
    },
    {
      '@type': 'Question',
      name: 'How long is an EPC valid for rental properties?',
      acceptedAnswer: { '@type': 'Answer', text: 'An EPC is valid for 10 years. You can use the same certificate for multiple consecutive tenancies within that period as long as it remains on the government register. If it expires, you must commission a new one before re-letting.' },
    },
    {
      '@type': 'Question',
      name: 'Can I get an EPC quickly if a tenancy is urgent?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our next-day service guarantees your certificate within 24 hours of the assessment for an extra £12. We offer appointments 7 days a week including evenings. Book before noon for the best chance of a same-day slot.' },
    },
  ],
}

export default function LandlordsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, landlordFaqSchema]) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="For Landlords"
        heading="EPCs for London Landlords"
        subheading="Stay compliant with MEES regulations. Avoid fines of up to £5,000 per property. Get your rental property's EPC sorted in 72 hours, or next day if you need it urgently."
        primaryCta={{ label: 'Book Your Landlord EPC', href: '/contact' }}
      />

      {/* MEES Compliance */}
      <Section variant="default" id="mees">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">MEES Compliance</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Why You Need an EPC for Your Rental
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Under the Minimum Energy Efficiency Standards (MEES), landlords in England and Wales cannot legally let a residential property with an EPC rating below E unless they have a registered exemption. This applies to all new tenancies since 2018 and all existing tenancies since April 2020.
          </p>
        </div>
      </Section>

      {/* Penalties */}
      <Section variant="muted" id="penalties">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-accent-700">Don&rsquo;t Get Caught Out</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Penalties for Non-Compliance
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Local authorities can issue civil penalties for breaches of MEES. Maximum fines escalate with the length of the breach.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-lg border border-accent-200">
          <table className="w-full text-sm min-w-[520px]">
            <thead>
              <tr className="bg-accent-50 border-b border-accent-200">
                <th className="px-4 py-3 text-left font-semibold text-accent-700">Breach</th>
                <th className="px-4 py-3 text-right font-semibold text-accent-700">Maximum Fine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-100 bg-white">
              {penalties.map((row) => (
                <tr key={row.breach}>
                  <td className="px-4 py-3 text-secondary-800">{row.breach}</td>
                  <td className="px-4 py-3 text-right font-bold text-accent-700">{row.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-lg border border-accent-200 bg-accent-50 p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-accent-700 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-accent-800">
            <span className="font-semibold">Heads up:</span> Government consultations have proposed penalty increases to £30,000 per property when EPC C becomes the new minimum standard.
          </p>
        </div>
      </Section>

      {/* EPC C Roadmap */}
      <Section variant="default" id="epc-c-roadmap">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">What&rsquo;s Coming</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
              EPC C by 2030
            </h2>
            <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
              The UK government is moving towards requiring EPC C for rental properties. Exact dates may shift but the direction is set. Acting now gives you time to plan improvements.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                'Proposed: New tenancies must be EPC C by 2028',
                'Proposed: All tenancies must be EPC C by 2030',
                'Dates may shift but direction is set',
                'Acting now gives you time to plan improvements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Card>
            <h3 className="text-xl font-semibold text-secondary-900">What landlords need</h3>
            <ul className="mt-4 space-y-2.5">
              {landlordNeeds.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Our Landlord Service */}
      <Section variant="muted" id="our-service">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-400">
            <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
            For Portfolios &amp; Single Lets
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Our Landlord Service
          </h2>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ourService.map((s) => (
            <li key={s.title} className="flex sm:flex-col items-start gap-4 sm:gap-0 rounded-2xl bg-canvas ring-1 ring-secondary-900/5 p-5 md:p-6 shadow-sm">
              <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 ring-1 ring-primary-100 text-primary-700">
                <s.Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="sm:mt-4">
                <h3 className="text-base md:text-lg font-semibold text-secondary-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-secondary-700 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Pricing />

      <CtaStrip
        heading="Protect Your Rental Income"
        body="Book your EPC today and stay ahead of MEES. Portfolio enquiries welcome."
        primaryCta={{ label: 'Book Now', href: '/contact' }}
      />
    </>
  )
}
